import LowUp from '../index';
import faker from 'faker';
let chai = require('chai');
chai.should();

describe('LowUp', () => {
  let result = null;
  const str = faker.random.word();
  console.log(`TESTEANDO: ${str}`);
  const strLOW = str.toLowerCase();
  const strUP = str.toUpperCase();

  const arr = [str, str, str, str];
  const arrLOW = [strLOW, strLOW, strLOW, strLOW];
  const arrUP = [strUP, strUP, strUP, strUP];

  const object = {
    string: str,
    array: arr,
    number: 0,
    boolean: true,
    null: null,
    undefined: undefined,
    object: {
      string: str,
      array: arr,
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
  const cloner = obj => JSON.parse(JSON.stringify(obj));
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
  describe('Testing Limits ', () => {
    it('Should return undefined', () => {
      should(LowUp.up(), undefined);
      should(LowUp.low(), undefined);
      should(LowUp.up(undefined), undefined);
      should(LowUp.low(undefined), undefined);
    });
    it('Should return null', () => {
      should(LowUp.up(null), null);
      should(LowUp.low(null), null);
    });
    it('Should return zero', () => {
      should(LowUp.up(0), 0);
      should(LowUp.low(0), 0);
    });
  });
  describe('Test UP', () => {
    afterEach(() => {
      console.log('OUT:');
      console.dir(result);
      result = null;
    });
    it('Number', () => {
      result = LowUp.up(5);
      result.should.be.equal(5);
    });
    it('String', () => {
      result = LowUp.up(str);
      result.should.be.equal(strUP);
    });
    it('Array', () => {
      result = LowUp.up(arr);
      result.toString().should.be.equal(arrUP.toString());
    });
    it('Object', () => {
      result = LowUp.up(object);
      result.toString().should.be.equal(objectUP.toString());
    });
    it('MegaStructure', () => {
      LowUp.up(megaObject)
        .toString()
        .should.be.equal(megaObjectUP.toString());
    });
    it('XtremeStructure', () => {
      LowUp.up(xtremeObject)
        .toString()
        .should.be.equal(xtremeObjectUP.toString());
    });
  });
  describe('Testing Filter limits', () => {
    afterEach(() => {
      console.log('OUT:');
      console.dir(result);
      result = null;
    });
    it('Null filter', () => {
      const filter = null;
      result = LowUp.up(str, filter);
      result.toString().should.be.equal(strUP);
    });
    it('Undefined filter', () => {
      let filter;
      result = LowUp.up(str, filter);
      result.toString().should.be.equal(strUP);
    });
    it('Empty String filter', () => {
      let filter = '';
      result = LowUp.up(str, filter);
      result.toString().should.be.equal(strUP);
    });
    it('Empty Array filter', () => {
      let filter = [];
      result = LowUp.up(str, filter);
      result.toString().should.be.equal(strUP);
    });
    it('Empty Object filter', () => {
      let filter = {};
      result = LowUp.up(str, filter);
      result.toString().should.be.equal(strUP);
    });
    it('Zero filter', () => {
      let filter = 0;
      result = LowUp.up(str, filter);
      result.toString().should.be.equal(strUP);
    });
    it('throw error', () => {
      let filter = () => {
        throw 'erroooor gravisimo';
      };
      result = LowUp.up(str, filter);
      result.toString().should.be.equal(str);
    });
  });
  describe('Testing Filter', () => {
    afterEach(() => {
      console.log('OUT:');
      console.dir(result);
      result = null;
    });
    it('Length example', () => {
      const expectedResult = str.length > 5 ? str : strUP;
      const filter = el => el.length > 5;
      result = LowUp.up(str, filter);
      result.toString().should.be.equal(expectedResult);
    });
  });
});
