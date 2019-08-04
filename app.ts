function saludar(nombre: string) {
    console.log(nombre)
}

var wolverine = {
    nombre: "Wolverine"
};

//saludar(wolverine.nombre);

//------------------------------------------------
//Dato curioso: let solo sobrevive dentro del ámbito de la condicional.
//Mientras el var si lo hace, quizás mejora un poco más el tema de manejo en memoria.
function Saludar_1() {
    let op = 'Mi nombre es: ';
    if (true) {
        let op = 'Holi';
    }
    console.log(op);
}
//Saludar_1();

//--------------------Declarar variables en TS------------------------------
let nombre: string = "Peter"
let date: Date = new Date();
let cualquiera: any;
cualquiera = nombre;
cualquiera = date;

let spiderman = {
    nombre: "Peter",
    edad: "20"
}

//-------------------Template literales del ES6----------------------------------------
let nombre_1: string = "Juan";
let Apellido_1: string = "Perez";
let Edad_1: number = 24;
let texto = `Hola, ${nombre_1} ${Apellido_1} (${Edad_1})`
//console.log(texto);
//------------------Parámetros obligatorios, por defecto y opcionales------------------
function Activar(params: string, objeto: string = "Esto es un objeto", VariableOpcional?: string) {
    //Valida si tiene un valor el objeto null
    if (VariableOpcional) { }
}

//------------Funciones de flecha------------------------------------
//let mifuncion= function name(a) {
//return a;
//}

//let funcion2 = a => a;

let funcion2 = function (a: number, b: number) {
    return a + b;
}

let funcion3 = (a: number, b: number) => a + b;

let funcion4 = (nombre: string) => {
    nombre = "Fabian"
    return nombre + "Hola";
}

let hulk =
{
    nombre: "Hulk",
    Smash() {
        setTimeout(() => console.log(this.nombre, 1500))
    }
}
//console.log(funcion3(1 + 2));
//-------------Destructuración de objetos y arreglos ------------
let avenger =
{
    nombre1: "steve",
    clave: "Capitan américa",
    Poder: "Droga"
}

let { nombre1, clave, Poder } = avenger;

//console.log(nombre, clave, Poder    );

let avengers: string[] = ["Thor", "Capitán", "Tonny"]
let [thor, capi, ironman] = avengers;
//console.log(thor, capi, ironman);

//------------ PROMESAS----------------
let prom1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Promesa terminada")
        resolve();
        //Si Termina mal
        //reject();
    }, 1500)
});

prom1.then(function () {
    console.log("Ha terminado bien!");
},
    function () {
        console.error("Ha ocurrido un error");
    })

//----------Interterfaces-----------------

interface IXmen {
    nombre: string;
    poder: string;
}

function mission(XMEN: IXmen) {
    console.log("enviando a: " + XMEN.nombre)
}

let wolverine1: IXmen = {
    nombre: "Wolverine",
    poder: "regeneración"
}

//-----------------------Clases-----------------

class Avenger {
    Nombre: string;
    //Equipo: string;
    //NombreReal: string;

    constructor(nombre:string) {
        this.Nombre = nombre;
    }
}

let aven: Avenger = new Avenger("Wolverine");