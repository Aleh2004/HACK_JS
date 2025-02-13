/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

// 1. Add the items ["bar", "baz", "qux"] to the result array
result.push("bar", "baz", "qux");

// 2. Replace the character "a" with "@" in the first two items
result[0] = result[0].replace("a", "@");
result[1] = result[1].replace("a", "@");

// 3. Convert the last item "qux" to uppercase
result[2] = result[2].toUpperCase();

//export result
module.exports = result;