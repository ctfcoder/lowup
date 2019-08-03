'use strict';
// Set BABEL_ENV to use proper env config
process.env.BABEL_ENV = 'test';
// Enable use of ES6+ on required files
require('babel-register')({ ignore: /node_modules/ });
require('babel-polyfill');
// Chai
const chai = require('chai');
// Chai as promised
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
// Attach Chai APIs to global scope
const { expect, should, assert } = chai;
global.expect = expect;
global.should = should;
global.assert = assert;
// Require all JS files in `./` for Mocha to consume
require('require-dir')('./');
