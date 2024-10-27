//Programa una clase llamada Película

/*La clase recibirá un objeto al momento de instanciarse con los siguientes datos: 
    -ID de la película en IMDB
    -título
    -director
    -año de estreno
    -país de origen
    -géneros
    -clasificación en IMBD
    
1-Todos los datos del objeto son obligatorios.✅
2-Valida que el id IMBD tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.✅
3-Valida que el título no rebase los 100 caracteres.✅
4-Valida que el director no rebase los 50 carcateres.✅
5-Valida que el año de estreno sea un número entero de 4 dígitos.✅
6-Valida que el país o países sea introducidos en forma de arreglo.✅
7-Valida que los géneros sean introducidos en forma de arreglo.✅
8-Valida que los géneros introducidos estén dentro de los géneros aceptados.✅
9-Crea un método estático que devuelva los géneros aceptados.✅
10-Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.✅
11-Crea un método que devuelva toda la ficha técnica de la película.✅
12-A partir de un arreglo con la informacion de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película✅

Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.*/

class Pelicula {
  constructor({ id, titulo, director, anios, pais, generos, calificacion }) {
    this.id = this.validarID(id);
    this.titulo = this.validarTitulo(titulo);
    this.director = this.validarDireccion(director);
    this.anios = this.validarAnios(anios);
    this.pais = this.validarPais(pais);
    this.calificacion = this.validarCalificacion(calificacion);
    this.generosAceptados = [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
    this.generos = this.validarGenero(generos);
  }

  validarID(id) {
    if (!id || typeof id !== "string")
      return console.warn(
        "\nTienes que ingresar el valor de id en el objeto y tiene que ser una sring no vacía"
      );
    if (!/^[A-Za-z]{2}\d{7}$/.test(id))
      return console.warn(
        "\nEl id tiene que tener 9 caracteres, los primeros 2 letras y los otros 7 números"
      );

    return id;
  }

  validarTitulo(titulo) {
    if (!titulo || typeof titulo !== "string")
      return console.warn(
        "\nTienes que ingresar un titulo y no puede ser un string no vacío"
      );
    if (titulo.length > 100)
      return console.warn("\nEL título tine que ser menos de 100 caracteres");

    return titulo;
  }

  validarDireccion(director) {
    if (!director || typeof director !== "string")
      return console.warn(
        "\nTienes que ingresar un director y tiene que se un string no vacía"
      );
    if (director.length > 50)
      return console.warn("\nEl director no puede pasar de los 50 caracteres");

    return director;
  }

  validarAnios(anios) {
    if (!anios || typeof anios !== "number")
      return console.warn(
        "\nTienes que ingresar los anios de estreno y tiene que ser un número"
      );
    if (!Number.isInteger(anios) || !/^\d{4}$/.test(anios))
      return console.warn("\nTiene que ser un número entero de 4 dígitos");

    return anios;
  }

  validarPais(pais) {
    if (!pais || !Array.isArray(pais) || pais.length === 0)
      return console.warn(
        "\nTienes que ingresar el pais o paises y tiene que ser en forma de arreglo no vacío"
      );
    if (pais.some((element) => typeof element !== "string" || !element))
      return console.warn(
        "\nLos paises ingresados deven de ser cadenas de texto no vacias"
      );

    return pais;
  }

  validarGenero(generos) {
    if (!generos || !Array.isArray(generos) || generos.length === 0)
      return console.warn(
        "\nTienes que ingresar el género o géneros y tiene que ser en forma de arreglo no vacío"
      );
    if (generos.some((element) => typeof element !== "string" || !element))
      return console.warn(
        "\nLos géneros ingresados deben de ser cadenas de texto no vacias"
      );

    if (!generos.some((element) => this.generosAceptados.includes(element)))
      return console.warn(
        "\nLos géneros tienen que estar dentro de los géneros aceptados"
      );

    return generos;
  }

  validarCalificacion(calificacion) {
    if (!calificacion || typeof calificacion !== "number")
      return console.warn(
        "\nTienes que ingresar la calificación en forma de número"
      );
    if (calificacion < 0 || calificacion > 10)
      return console.warn("\nLa calificación tiene que ser de 0 al 10");
    if (!/^\d+(\.\d{1})?$/.test(calificacion))
      return console.warn("\nLa calificación solo puede ser de 1 decimal");

    return calificacion;
  }

  mostrarInfo() {
    console.log(
      `\nEL ID es ${this.id}, el título es ${this.titulo}, el director es ${this.director}, el año de estreno es ${this.anios}, lel país o países de procedencia es ${this.pais}, el género o géneros es ${this.generos}, la calificación es ${this.calificacion}`
    );
  }

  mostrarGenerosAceptados() {
    console.log("\nLos géneros aceptados son:");
    console.info(this.generosAceptados);
  }

  fichaTecnica() {
    console.log({
      id: this.id,
      titulo: this.titulo,
      director: this.director,
      anios: this.anios,
      pais: this.pais,
      generos: this.generos,
      calificacion: this.calificacion,
    });
  }
}

const peliculas = [
  {
    id: "ma1234567",
    titulo: "Matuzalen",
    director: "Daniel",
    anios: 2024,
    pais: ["cuba"],
    generos: ["Action"],
    calificacion: 10,
  },
  {
    id: "ma8245614",
    titulo: "Tu Mamá en Tanga",
    director: "Pedro",
    anios: 2015,
    pais: ["México"],
    generos: ["Drama"],
    calificacion: 3,
  },
  {
    id: "te8225514",
    titulo: "Yo te quería",
    director: "Leyla",
    anios: 2010,
    pais: ["Argentina"],
    generos: ["Romance"],
    calificacion: 9,
  },
];

console.log(peliculas.forEach(
  (element) => new Pelicula(element).fichaTecnica()
))