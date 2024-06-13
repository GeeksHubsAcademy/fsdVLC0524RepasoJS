//ARRAYS

//Los Arrays SI son iterables por naturaleza.
//Los Objetos NO son iterables por naturaleza.

// let array = [1,2,3,4,5];

//Con los bucles WHILE, DO WHILE, FOR, FOR OF, FOR IN Y FOR EACH
//ADEMÁS DE MAP, puedo recorrer los array

//Los Objectos sólo puedo recorrerlos con FOR IN
//o transformando el Objecto a Array con Object.entries()

// for(let indice in array){
//     console.log(indice)
// }

// for(let x of array){
//     console.log(x)
// }

//FOR OF EQUIVALE EXACTAMENTE A UN FOR NORMAL O A UN FOR EACH Y A UN MAPEO

// for(let i = 0; i < array.length; i++){
//     console.log(array[i])
// }

//ESTE FOR DE ARRIBA ES EXACTAMENTE IGUAL QUE EL FOR OF QUE HAY MÁS ARRIBA.

// let producto = ["cámara", "tablet", "teléfono"]

// let productos = producto.map(
//     x => x + 's'
// )

// console.log(producto)
// console.log(productos)

// productos.forEach(
//     y => console.log(y + "os")
// )

// console.log(productos)

//LA DIFERENCIA ENTRE FOR EACH Y MAP ES QUE FOR EACH NO SE PUEDE INTERRUMPIR
//Y ADEMÁS FOR EACH NO GENERA UN NUEVO ARRAY NI MODIFICA EL ORIGINAL.

////////////////////////////////////////////////////////////
//LOS OBJETOS NO SE PUEDEN RECORRER A NO SER QUE SE USE FOR IN O OBJECT.ENTRIES
////////////////////////////////////////////////////////////

// let alumnos = {
//     alumno1 : "Guillermo",
//     alumno2 : "Esperanza",
//     alumno3 : "Angie",
//     alumno4 : "Abraham"
// }

// for(let indice in alumnos){
//     console.log(indice, alumnos[indice])
//     //Esto mostraría...

//     // alumno1 Guillermo
//     // alumno2 Esperanza
//     // alumno3 Angie
//     // alumno4 Abraham
// }

//Esto transforma alumnos en un array...
// Object.entries(alumnos)

// let alumnos = {
//     alumno1 : "Guillermo",
//     alumno2 : "Esperanza",
//     alumno3 : "Angie",
//     alumno4 : "Abraham"
// }

//Object entries, por cada entrada del objeto de tipo alumno1: "Guillermo", hace..
// ["alumno1", "Guillermo"]

// Object.entries(alumnos).map(
//     ([key, value],index) => {
//         console.log(key, value, index)
//     }
// )

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

//Arrays y métodos...

// let comida = ["flan queso", "fruta", "pizza", "red bull", "verdura", "mountain dew"];

// comida.pop()          //elimina un elemento al final
// comida.shift()        //elimina un elemento al principio
// comida.unshift("petit suise") //añade un elemento al principio
// comida.push("pescado")  //añade un elemento al final

// console.log(comida)

// comida.reverse().slice(0,3).map(
//     alimento => console.log(alimento)
// )

// /////////////////////////////////////////////////////////

// //LA TERNARIA ES UNA ALTERNATIVA AL IF ELSE

// let nombre = "David"
// let edad = 38

// //IF ELSE
// if(nombre === "David"){
//     console.log("Hola David")
// }else{
//     console.log("Adios")
// }

// //TERNARIA
// nombre === "David"
//     ? console.log("Hola David")
//     : console.log("Adios")

// let vacaciones = undefined;

// vacaciones
//     ? console.log("Sofia")
//     : console.log("Slack")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

///SPREAD Y REST...

//1- Se escriben igual, ... antes del elemento al que queremos aplicarlo.

//El REST se ejecuta en la declaración, no en la ejecución.
// const funcionQueHaceRest = (...musica) => {
//   for (let elemento of musica) {
//     console.log(elemento);
//   }
// };

// //Esto es la ejecución
// funcionQueHaceRest("rock", "pop", "indie", "heavy", "regueton");
// funcionQueHaceRest("wow", "bioshock", "god of war", "forza");
// funcionQueHaceRest("la momia", "matrix", "la momia 2");

// //REST CON OBJETOS......

// let portatil = {
//   sistema: "Windows",
//   cpu: "rayzen7",
//   marca: "hp",
//   color: "aluminio",
// }[
//   (["sistema", "windows"],
//   ["cpu", "rayzen7"],
//   ["marca", "hp"],
//   ["color", "aluminio"])
// ];

// const inputHandler = (marca, valor) => {
//   setPortatil((prevState) => ({
//     ...prevState,
//     [marca]: valor,
//   }));
// };

//El uso de SPREAD REST nos facilitará mutar objetos

// 4. Dada una string, crea una función que cambie todas sus mayúsculas a minúsculas y
// todas sus minúsculas a mayúsculas y devuelva una nueva string.(“Hola” devolvería
// “hOLA”)

//Alternativas sencillas...

// .toLowerCase() ---- nos transforma todo a minúsculas
// .toUpperCase() ---- nos transforma todo a mayúsculas

const transform = (string) => {

    //1er paso, separarmos el string a algo iterable (array) con distintas posiciones.

    let troceado = Array.from(string)

    //2do paso, recorremos el array y comprobamos si se trata de mayúsculas o minúsculas.

    let transformado = troceado.map(
        letra => letra.charCodeAt() < 97 
            ? letra.toLowerCase()
            : letra.toUpperCase()
    )
    console.log(string)
    console.log(transformado.join(""))
}

transform("quE PasA koLEGa")