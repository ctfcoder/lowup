import LowUp from '../lib/index';
import DataTest from './data';
let chai = require('chai');
const { should } = chai;
global.should = should;
chai.should();

describe('LowUp', () => {
  const {
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
  } = DataTest;
  let result = null;
  console.log(`TESTEANDO: ${str}`);

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
