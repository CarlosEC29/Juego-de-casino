"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tragamonedas = void 0;
var juegoDeCasino_1 = require("./juegoDeCasino");
// Defino la clase Tragamonedas que hereda de Juego De Casino
var Tragamonedas = /** @class */ (function (_super) {
    __extends(Tragamonedas, _super);
    function Tragamonedas(nombre, rueda) {
        var _this = _super.call(this, "Tragamonedas") || this;
        // Defino el valor de la rueda que contiene los distintos simbolos.
        _this.rueda = [
            ['Fresa', 'Limon', 'Naranja'],
            ['Fresa', 'Limon', 'Naranja'],
            ['Fresa', 'Limon', 'Naranja'],
        ];
        return _this;
    }
    // Defino el método tirar palanca, el cual "girará" la rueda y me dará un resultado al azar
    Tragamonedas.prototype.tirarPalanca = function () {
        var resultado = [];
        for (var i = 0; i < this.rueda.length; i++) {
            var randomIndex = Math.floor(Math.random() * this.rueda[i].length);
            resultado.push(this.rueda[i][randomIndex]);
        }
        return resultado;
    };
    return Tragamonedas;
}(juegoDeCasino_1.JuegoDeCasino));
exports.Tragamonedas = Tragamonedas;
