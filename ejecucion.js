"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tragamonedas_1 = require("./tragamonedas");
var craps_1 = require("./craps");
var craps = new craps_1.Craps();
var tirada1 = craps.tirarPrimerDado();
var tirada2 = craps.tirarSegundoDado();
console.log(tirada1);
console.log(tirada2);
var tragamonedas = new tragamonedas_1.Tragamonedas("Limon", []);
var resultado = tragamonedas.tirarPalanca();
console.log('Resultado:', resultado);
