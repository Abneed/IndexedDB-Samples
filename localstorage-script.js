/** 
 * El método Storage.setItem() le permite guardar un elemento de datos en el almacenamiento: 
 * toma dos parámetros: el nombre del elemento y su valor.
 * Intente escribir esto en su consola de JavaScript (cambie el valor a su propio nombre, si lo desea):
*/
localStorage.setItem('name','Chris');

/** 
 * El método Storage.getItem() toma un parámetro, el nombre de un elemento de datos que desea recuperar,
 * y devuelve el valor del elemento.
 * Ahora escribe estas líneas en tu consola de JavaScript:
*/
var myName = localStorage.getItem('name');

/** 
 * El método Storage.removeItem() toma un parámetro, el nombre de un elemento de datos que desea eliminar,
 * y elimina ese elemento del almacenamiento web. Escriba las siguientes líneas en su consola de JavaScript:
*/
localStorage.removeItem('name');
var myName = localStorage.getItem('name'); // Devuelve nulo, ya que el valor 'string' fue eliminado en la linea anterior.
localStorage.clear();
// ¡Los datos persisten!

