// Agrego un objeto vacio
const object = {}

// Le asigno algunas key y value de la siguiente manera
object['key1'] = 'value1'
object['key2'] = 'value2'
object['key3'] = 'value3'
object['key4'] = 'value4'

// saco por consola el objeto con su contenido
console.log(JSON.stringify(object, null, 2));