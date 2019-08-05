'use strict';
/**
 * Set to lowercase all the values from data.
 * @param  data - The data to lowercase.
 * @param {Function} filter - Filter what values don´t want to lowercase.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var low = function low(data, filter) {
  return _handler(data, 'toLowerCase', filter);
};
/**
 * Set to uppercase all the values from data.
 * @param  data - The data to uppercase.
 * @param {Function} filter - Filter what values don´t want to uppercase.
 */
var up = function up(data, filter) {
  return _handler(data, 'toUpperCase', filter);
};
/**
 * Function to handler errors.
 * @param  data - The data to upper/lower-case.
 * @param {*} method method to execute (toUpperCase | toLowerCase)
 * @param {Function} filter - Filter what values don´t want to upper/lower-case.
 */
var _handler = function _handler(data, method, filter) {
  var dataUpper = void 0;
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
var _lowerUpper = function _lowerUpper(data, method, filter) {
  var dataUpper = void 0;
  if (data && (filter && typeof filter === 'function' && !filter(data) || !filter || typeof filter !== 'function')) {
    if (typeof data === 'string') dataUpper = _lowUp(data, method);else if (Array.isArray(data)) dataUpper = _lowUpArray(data, method);else if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') dataUpper = _lowUpObject(data, method);else dataUpper = data;
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
var _lowUp = function _lowUp(value, method) {
  return value[method]();
};
/**
 * Iterates over the array and upper/lower case the data
 * @param {*} array
 * @param {*} method method to execute (toUpperCase | toLowerCase)
 */
var _lowUpArray = function _lowUpArray(array, method) {
  return array.map(function (el) {
    return typeof el === 'string' ? _lowUp(el, method) : _lowerUpper(el, method);
  });
};
/**
 * Iterates over the object and upper/lower case the values of all properties
 * @param {*} object
 * @param {*} method method to execute (toUpperCase | toLowerCase)
 */
var _lowUpObject = function _lowUpObject(object, method) {
  var objectUpper = {};
  Object.keys(object).forEach(function (key) {
    objectUpper[key] = _lowerUpper(object[key], method);
  });
  return objectUpper;
};
var LowUp = exports.LowUp = { low: low, up: up };