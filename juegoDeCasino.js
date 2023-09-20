"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JuegoDeCasino = void 0;
// Defino la clase JuegoDeCasino
var JuegoDeCasino = /** @class */ (function () {
    function JuegoDeCasino(nombre) {
        this.nombre = nombre;
    }
    JuegoDeCasino.prototype.jugar = function () {
        console.log("Jugando ".concat(this.nombre));
    };
    return JuegoDeCasino;
}());
exports.JuegoDeCasino = JuegoDeCasino;
