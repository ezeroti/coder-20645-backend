class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
        this.nombre = nombre ;
        this.apellido = apellido ;
        this.libros = libros ;
        this.mascotas = mascotas ;
    }

    getFullName (){
        return console.log(`${this.nombre} ${this.apellido}`) 
    }

    countMascotas (){
        return console.log(Number(this.mascotas.length));
    }

    getBookNames (){
        return console.log(this.libros.map(books => books.nombre));
    }

    addMascota (name){
        this.mascotas.push(name);
    }

    addBook (name, author) {
        this.libros.push({"nombre":name, "autor":author});
    }
}

const usuario = new Usuario("Ezequiel", "Rotiroti", [{nombre: "Rebelion en la granja", autor: "George Orwell"},{nombre: "El arte de la guerra", autor: "Sun Tzu"}], ["Lola","Rocco","Jake"]);

usuario.addMascota("Tarzan");
usuario.addBook("Cronicas marcianas","Ray Bradbury");

usuario.getFullName();
usuario.countMascotas();
usuario.getBookNames();