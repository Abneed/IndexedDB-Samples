if (!window.indexedDB)
  window.alert("Su navegador no admite una versión estable de IndexedDB. Tal y tal característica no estará disponible.");

// Permítanos abrir nuestra base de datos
var request = window.indexedDB.open("MyTestDatabase");

request.onerror = function (event) {
  alert("¿Por qué no permitiste que mi aplicación web use IndexedDB? :((");
};

request.onsuccess = function (event) {
  db = event.target.result;
  
};