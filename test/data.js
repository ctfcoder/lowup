import faker from 'faker';

const cloner = obj => JSON.parse(JSON.stringify(obj));
const str = faker.random.word();
const strLOW = str.toLowerCase();
const strUP = str.toUpperCase();

const arr = [str, str, str, str];
const arrLOW = [strLOW, strLOW, strLOW, strLOW];
const arrUP = [strUP, strUP, strUP, strUP];

const object = {
  string: str,
  array: cloner(arr),
  number: 0,
  boolean: true,
  null: null,
  undefined: undefined,
  object: {
    string: str,
    array: cloner(arr),
    number: 0,
    boolean: true,
    null: null,
    undefined: undefined,
  },
};
const objectLOW = {
  string: strLOW,
  array: [strLOW, strLOW, strLOW],
  number: 0,
  boolean: true,
  null: null,
  undefined: undefined,
  object: {
    string: strLOW,
    array: [strLOW, strLOW, strLOW],
    number: 0,
    boolean: true,
    null: null,
    undefined: undefined,
  },
};
const objectUP = {
  string: strUP,
  array: [strUP, strUP, strUP],
  number: 0,
  boolean: true,
  null: null,
  undefined: undefined,
  object: {
    string: strUP,
    array: [strUP, strUP, strUP],
    number: 0,
    boolean: true,
    null: null,
    undefined: undefined,
  },
};
const bigObject = {
  arrayOfObjectcts: [cloner(object), cloner(object), cloner(object), cloner(object), cloner(object)],
};
const bigObjectUP = {
  arrayOfObjectcts: [
    cloner(objectUP),
    cloner(objectUP),
    cloner(objectUP),
    cloner(objectUP),
    cloner(objectUP),
  ],
};
const megaObject = {
  arrayOfBigObjects: [cloner(bigObject), cloner(bigObject), cloner(bigObject), cloner(bigObject)],
};
const megaObjectUP = {
  arrayOfBigObjects: [cloner(bigObjectUP), cloner(bigObjectUP), cloner(bigObjectUP), cloner(bigObjectUP)],
};
const xtremeObject = {
  arrayOfBigObjects: [
    cloner(megaObject),
    cloner(megaObject),
    cloner(megaObject),
    cloner(megaObject),
    cloner(megaObject),
    cloner(megaObject),
    cloner(megaObject),
    cloner(megaObject),
    cloner(megaObject),
    cloner(megaObject),
    cloner(megaObject),
    cloner(megaObject),
    cloner(megaObject),
    cloner(megaObject),
    cloner(megaObject),
    cloner(megaObject),
    cloner(megaObject),
    cloner(megaObject),
    cloner(megaObject),
    cloner(megaObject),
    cloner(megaObject),
    cloner(megaObject),
    cloner(megaObject),
    cloner(megaObject),
  ],
};
const xtremeObjectUP = {
  arrayOfBigObjects: [
    cloner(megaObjectUP),
    cloner(megaObjectUP),
    cloner(megaObjectUP),
    cloner(megaObjectUP),
    cloner(megaObjectUP),
    cloner(megaObjectUP),
    cloner(megaObjectUP),
    cloner(megaObjectUP),
    cloner(megaObjectUP),
    cloner(megaObjectUP),
    cloner(megaObjectUP),
    cloner(megaObjectUP),
    cloner(megaObjectUP),
    cloner(megaObjectUP),
    cloner(megaObjectUP),
    cloner(megaObjectUP),
    cloner(megaObjectUP),
    cloner(megaObjectUP),
    cloner(megaObjectUP),
    cloner(megaObjectUP),
    cloner(megaObjectUP),
    cloner(megaObjectUP),
    cloner(megaObjectUP),
    cloner(megaObjectUP),
  ],
};

const DataTest = {
  str,
  strLOW,
  strUP,
  arr,
  arrLOW,
  arrUP,
  object,
  objectLOW,
  objectUP,
  bigObject,
  bigObjectUP,
  megaObject,
  megaObjectUP,
  xtremeObject,
  xtremeObjectUP,
};
export default DataTest;
