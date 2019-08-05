&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;![alt text](img/lowup.png 'image title')

The simple module to UPPER / LOWER case everything except what you want...

Install it like always:

**npm i lowup --save** | **npm install lowup --save**

And enjoy it... _:D_

## **HOW TO USE IT . . .**

```javascript
const { LowUp } = require('lowup');
// OR...
// import { LowUp } from '../lib/index';

const list = ['TesTiNg', 'sOmE', 'WorDs', null, undefined];

console.log(LowUp.up(list));
/*
OUT:
  [ 'TESTING', 'SOME', 'WORDS', null, undefined ]
*/
console.log(LowUp.low(list));
/*
OUT:
  [ 'testing', 'some', 'words', null, undefined ]
*/
const object = {
  string: 'StrInG',
  array: ['TesTiNg', 'sOmE', 'WorDs', null, undefined],
  number: 0,
  boolean: true,
  null: null,
  undefined: undefined,
  object: {
    string: 'StrInG',
    array: ['TesTiNg', 'sOmE', 'WorDs', null, undefined],
    number: 0,
    boolean: true,
    null: null,
    undefined: undefined,
  },
};
console.log(LowUp.up(object));
/*
OUT:
  { string: 'STRING',
    array: [ 'TESTING', 'SOME', 'WORDS', null, undefined ],
    number: 0,
    boolean: true,
    null: null,
    undefined: undefined,
    object:
    { string: 'STRING',
      array: [ 'TESTING', 'SOME', 'WORDS', null, undefined ],
      number: 0,
      boolean: true,
      null: null,
      undefined: undefined } }
*/
console.log(LowUp.low(object));
/*
OUT:
  { string: 'string',
    array: [ 'testing', 'some', 'words', null, undefined ],
    number: 0,
    boolean: true,
    null: null,
    undefined: undefined,
    object:
    { string: 'string',
      array: [ 'testing', 'some', 'words', null, undefined ],
      number: 0,
      boolean: true,
      null: null,
      undefined: undefined } }
*/
```
