//Declaramos la constante de los elementos
const imagenes = [
    {
        src: "depa1.jpg",
        nombre: "TALE CONSTRUCTORA SAC",
        precio:  "$78,850",
        area: "57.4  m²",
    },
    {
        src: "depa2.jpg",
        nombre: "ARCO CONSTRUCTORA SAC",
        precio: "$75,840",
        area: "27.8  m²"
    },
    {
        src: "depa3.jpg",
        nombre: "CONSTRUCTORA ABRIL",
        precio: "$65,134",
        area: "83.1  m²"
    },
    {
        src: "depa4.jpg",
        nombre: "JULIOS CONTRUCTORES SAC",
        precio: "$98,517",
        area: "59.1  m²"
    },
    {
        src: "depa5.jpg",
        nombre: "REQUEJO TRABAJADORES SAC",
        precio: "$120,134",
        area: "140.3  m²"
    },
    {
        src: "depa6.png",
        nombre: "JUNIOR CONSTRUYE SAC",
        precio: "$95,361",
        area: "81.2  m²"
    },
    {
        src: "depa7.jpg",
        nombre: "HERMANOS CONSTRUCTORES SAC",
        precio: "$100,610",
        area: "110.3  m²"
    },
    {
        src: "depa8.png",
        nombre: "CIVA CONSTRUCTORA SAC",
        precio: "$61,167",
        area: "18.4  m²"
    },
    {
        src: "depa9.png",
        nombre: "MOVIL CONSTRUYE SAC",
        precio: "$53,951",
        area: "57.2  m²"
    },
    {
        src: "depa10.jpg",
        nombre: "SEVILLANO CONSTRUCTORA SAC",
        precio: "$160,250",
        area: "140.9  m²",
    }
];

//Establecemos los elementos
const imgElemento = document.getElementById("departamentoimg");
const nombreElemento = document.getElementById("nombre");
const precioElemento = document.getElementById("precio");
const areaElemento = document.getElementById("area");
const btnAtras = document.getElementById("atras");
const btnSiguiente = document.getElementById("siguiente");
const mensaje = document.getElementById("mensaje");

let indiceImagen = 0;

//Le damos una orden a los elementos
function mostrarImagen(indice) {
    imgElemento.src = imagenes[indice].src;
    nombreElemento.textContent = imagenes[indice].nombre;
    precioElemento.textContent = imagenes[indice].precio;
    areaElemento.textContent = imagenes[indice].area;
    mensaje.textContent = imagenes[indice].mensaje;
}

//Definimos las acciones de los botones
btnAtras.addEventListener("click", () => {
    indiceImagen--;
    if (indiceImagen < 0) {
        indiceImagen = imagenes.length - 1;
        window.alert("Inicio de la galería");
    }
    mostrarImagen(indiceImagen);
});

btnSiguiente.addEventListener("click", () => {
    indiceImagen++;
    if (indiceImagen >= imagenes.length) {
        indiceImagen = 0;
        window.alert("Final de la galería");
    }
    mostrarImagen(indiceImagen);
});


mostrarImagen(indiceImagen);