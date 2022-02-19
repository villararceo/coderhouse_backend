class Usuario{
	constructor(nombre, apellido, libros, mascotas){
		this.nombre = nombre;
		this.apellido = apellido;
		this.libros = libros;
		this.mascotas = mascotas;
	};

	// Métodos de mi clase
	getFullName(nombre, apellido) {
		//retornar nombre completo del usuario usando template string
		return `nombre: ${nombre} - apellido: ${apellido}`;
	};

	countMascotas() {
                //retornar la cantidad de mascotas que tiene el usuario: number
		return this.mascotas.length;
        }; 

	addMascotas(nombreMascota){
                //añade una mascota al array mascotas
		this.mascotas.push(nombreMascota);
        }; 

	addBook(nombre, autor){
                //añadir nombre y autor de libro al aaarray libros
		// objeto literal: { clave: valor }
		this.libros.push({ nombreLibro: nombre, nombreAutor: autor });
        };

	getBookNames(){
                //retornar solamente los nombres de los libros que se encuentran en el array libros
		// vamos a recorrer  el arreglo libros, acceder a las claves nombreLibro y 
		// retornar un nuevo arreglo que contiene solo los nombres de los libros. De todos
		// los elementos encontrados. En este caso existen solo 2

		/* bucle for
		const listaNombres = [];
		const longitudLibros = this.libros.length;
		const listaLibros = this.libros;
		for(let n = 0; n < longitudLibros; n++) { 
			listaNombres.push(listaLibros[n].nombreLibro);
		};
		return listaNombres; */

		/* bucle for...in
		const listaNombres = [];
		const listaLibros = this.libros;
		for(const x in listaLibros){
			listaNombres.push(listaLibros[x].nombreLibro);
		};
		return listaNombres; */

		// Estoy mapeando el arreglo this.libros
		return this.libros.map(libro => libro.nombreLibro);

	};
};

// creación de objeto
console.log("instancia de objeto");
const usuario = new Usuario("Adrian", "Villar", [], []);
usuario.addMascotas("Aguacate");
usuario.addMascotas("Chapata");
console.log(usuario.countMascotas());
usuario.addBook("1984", "George Orwell");
usuario.addBook("El Señor de las Moscas", "William Golding");
usuario.addBook("El Señor de las Moscas", "William Golding");
console.log(usuario.getBookNames());
console.log(usuario.getFullName("Adrian", "Villar"));
