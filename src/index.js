'use strict';
/**
 * Set to lowercase all the values from data.
 * @param  data - The data to lowercase.
 * @param {Function} filter - Filter what values don´t want to lowercase.
 */
const low = (data, filter) => _handler(data, 'toLowerCase', filter);
/**
 * Set to uppercase all the values from data.
 * @param  data - The data to uppercase.
 * @param {Function} filter - Filter what values don´t want to uppercase.
 */
const up = (data, filter) => _handler(data, 'toUpperCase', filter);
/**
 * Function to handler errors.
 * @param  data - The data to upper/lower-case.
 * @param {*} method method to execute (toUpperCase | toLowerCase)
 * @param {Function} filter - Filter what values don´t want to upper/lower-case.
 */
const _handler = (data, method, filter) => {
  let dataUpper;
  try {
    dataUpper = _lowerUpper(data, method, filter);
  } catch (error) {
    console.error(error);
    dataUpper = data;
  }
  return dataUpper;
};
/**
 * Determine the type of data and execute the function oportune.
 * @param  data - The data to upper/lower case.
 * @param {*} method method to execute (toUpperCase | toLowerCase)
 * @param {Function} filter - Filter what values don´t want to upper/lower-case.
 */
const _lowerUpper = (data, method, filter) => {
  let dataUpper;
  if (
    data &&
    ((filter && typeof filter === 'function' && !filter(data)) || !filter || typeof filter !== 'function')
  ) {
    if (typeof data === 'string') dataUpper = _lowUp(data, method);
    else if (Array.isArray(data)) dataUpper = _lowUpArray(data, method);
    else if (typeof data === 'object') dataUpper = _lowUpObject(data, method);
    else dataUpper = data;
  } else {
    dataUpper = data;
  }
  return dataUpper;
};
/**
 * At this point data is a string yes or yes.
 * @param  data - The data to upper/lower case.
 * @param {*} method method to execute (toUpperCase | toLowerCase)
 */
const _lowUp = (value, method) => value[method]();
/**
 * Iterates over the array and upper/lower case the data
 * @param {*} array
 * @param {*} method method to execute (toUpperCase | toLowerCase)
 */
const _lowUpArray = (array, method) =>
  array.map(el => (typeof el === 'string' ? _lowUp(el, method) : _lowerUpper(el, method)));
/**
 * Iterates over the object and upper/lower case the values of all properties
 * @param {*} object
 * @param {*} method method to execute (toUpperCase | toLowerCase)
 */
const _lowUpObject = (object, method) => {
  let objectUpper = {};
  Object.keys(object).forEach(key => {
    objectUpper[key] = _lowerUpper(object[key], method);
  });
  return objectUpper;
};
const LowUp = { low, up };
export default LowUp;
