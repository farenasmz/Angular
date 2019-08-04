function saludar(nombre) {
    console.log(nombre);
}
var wolverine = {
    nombre: "Wolverine"
};
//saludar(wolverine.nombre);
//------------------------------------------------
//Dato curioso: let solo sobrevive dentro del ámbito de la condicional.
//Mientras el var si lo hace, quizás mejora un poco más el tema de manejo en memoria.
function Saludar_1() {
    var op = 'Mi nombre es: ';
    if (true) {
        var op_1 = 'Holi';
    }
    console.log(op);
}
//Saludar_1();
//--------------------Declarar variables en TS------------------------------
var nombre = "Peter";
var date = new Date();
var cualquiera;
cualquiera = nombre;
cualquiera = date;
var spiderman = {
    nombre: "Peter",
    edad: "20"
};
//-------------------Template literales del ES6----------------------------------------
var nombre_1 = "Juan";
var Apellido_1 = "Perez";
var Edad_1 = 24;
var texto = "Hola, " + nombre_1 + " " + Apellido_1 + " (" + Edad_1 + ")";
//console.log(texto);
//------------------Parámetros obligatorios, por defecto y opcionales------------------
function Activar(params, objeto, VariableOpcional) {
    if (objeto === void 0) { objeto = "Esto es un objeto"; }
    //Valida si tiene un valor el objeto null
    if (VariableOpcional) { }
}
//------------Funciones de flecha------------------------------------
//let mifuncion= function name(a) {
//return a;
//}
//let funcion2 = a => a;
var funcion2 = function (a, b) {
    return a + b;
};
var funcion3 = function (a, b) { return a + b; };
var funcion4 = function (nombre) {
    nombre = "Fabian";
    return nombre + "Hola";
};
var hulk = {
    nombre: "Hulk",
    Smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre, 1500); });
    }
};
//console.log(funcion3(1 + 2));
//-------------Destructuración de objetos y arreglos ------------
var avenger = {
    nombre1: "steve",
    clave: "Capitan américa",
    Poder: "Droga"
};
var nombre1 = avenger.nombre1, clave = avenger.clave, Poder = avenger.Poder;
//console.log(nombre, clave, Poder    );
var avengers = ["Thor", "Capitán", "Tonny"];
var thor = avengers[0], capi = avengers[1], ironman = avengers[2];
//console.log(thor, capi, ironman);
//------------ PROMESAS----------------
var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // console.log("Promesa terminada")
        resolve();
        //Si Termina mal
        //reject();
    }, 1500);
});
prom1.then(function () {
    //console.log("Ha terminado bien!");
}, function () {
    //console.error("Ha ocurrido un error");
});
function mission(XMEN) {
    console.log("enviando a: " + XMEN.nombre);
}
var wolverine1 = {
    nombre: "Wolverine",
    poder: "regeneración"
};
//-----------------------Clases-----------------
var Avenger = /** @class */ (function () {
    //Equipo: string;
    //NombreReal: string;
    function Avenger(nombre) {
        this.Nombre = nombre;
    }
    return Avenger;
}());
var aven = new Avenger("Wolverine");
//------Clases públicas, export -----------------------
//El export equivale al  public.
//import{xmen} from "./clases/xmen.class" con esto ya puedo instanciar un nuevo objeto.
//Esto es mucho mejor que agregar <script src"...."
//Si yo necesito exportar todas las clases d euna carpeta y no tener que agregar uno por uno.
//se procede a hacer un archivo ts y ahí hacer un export de todas las clases  export{xmen} from "./clases/xmen.class" 
//Ahora en el archivo que quiero importar, usar o instanciar la clase puedo agregar: import{xmen, villano, otroHeroe} from "./clases/xmen.class" 
//-----------Decoradores de clases-----------------
/* normalmente aparece una advertencia en el decorador @consola, así que se debe ejecutar
el siguiente comando para que no dé mas ese error: tsc --experimentalDecorators, luego agregar en el tsconfig.json
"experimentalDecorators" : true */
function consola(constructor) {
    console.log("constructor");
}
;
var villano = /** @class */ (function () {
    //public nombre:string;
    function villano(nombre) {
        this.nombre = nombre;
    }
    return villano;
}());
