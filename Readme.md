&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;![alt text](img/lowup.png 'image title')

The simple module to UPPER / LOWER case everything except what you want...

Install it like always:

**npm i lowup --save** | **npm install lowup --save**

**yarn add lowup**

And enjoy it... _:D_

## **HOW TO USE IT . . .**

<script src = "lowup.js" type = "text/javascript"></script>
<script>
  const list = ['TesTiNg', 'sOmE', 'WorDs', null, undefined];
  
  console.log(LowUp.up(list));
  /* 
  OUT:
  
  */
  console.log(LowUp.up(list));
  /* 
  OUT:
  
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
  
  */
  console.log(LowUp.up(object));
  /* 
  OUT:
  
  */
</script>
