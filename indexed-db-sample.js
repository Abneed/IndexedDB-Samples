// Así es como se ven los datos de nuestros clientes.
var customerData = [
  { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
  { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" }
];

var dbName = "database_test";

var request = indexedDB.open(dbName, 2);

request.onerror = function (event) {
  // Manejar errores.
  alert("¿Por qué no permitiste que mi aplicación web use IndexedDB? :((");
};

request.onupgradeneeded = function (event) {
  var db = event.target.result;

  // Cree un ObjectStore para contener información sobre nuestros clientes. 
  // Vamos a utilizar "ssn" como nuestro camino clave porque está garantizado que será único.
  var objectStore = db.createObjectStore("customers", { keyPath: "ssn" });

  // Crea un índice para buscar clientes por nombre. 
  // Es posible que tengamos duplicados, por lo que no podemos usar un índice único.
  objectStore.createIndex("name", "name", { unique: false });

  // Crea un índice para buscar clientes por correo electrónico. 
  // Queremos asegurarnos de que no haya dos clientes que tengan el mismo correo electrónico, 
  // así que use un índice único.
  objectStore.createIndex("email", "email", { unique: true });

  // Utilice la transacción oncompleta para asegurarse de que la creación de 
  // ObjectStore haya finalizado antes de agregar datos en ella.
  objectStore.transaction.oncomplete = function (event) {
    // Almacena los valores en el ObjectStore recién creado.
    var customerObjectStore = db.transaction("customers", "readwrite").objectStore("customers");
    customerData.forEach(function (customer) {
      customerObjectStore.add(customer);
    });
  };
};


request.onsuccess = function (event) {
  db = event.target.result;

  var objectStore = db.transaction("customers").objectStore("customers");

  objectStore.openCursor().onsuccess = function (event) {
    var cursor = event.target.result;
    if (cursor) {
      alert("Name for SSN " + cursor.key + " is " + cursor.value.name);
      cursor.continue();
    }
    else {
      alert("No more entries!");
    }
  };
};