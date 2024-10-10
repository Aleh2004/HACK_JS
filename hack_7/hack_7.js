/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

for (let i = 0; i < arr.length; i++) {
  let str = arr[i];
  let capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1);
  result.push(capitalizedStr);
}

//export result
module.exports = result;