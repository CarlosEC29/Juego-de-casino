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
exports.Craps = void 0;
var juegoDeCasino_1 = require("./juegoDeCasino");
// Defino la clase Craps que hereda de Juego De Casino
var Craps = /** @class */ (function (_super) {
    __extends(Craps, _super);
    function Craps() {
        return _super.call(this, "Craps") || this;
    }
    // Defino el método tirar Primer Dado
    Craps.prototype.tirarPrimerDado = function () {
        // Operación random para obtener un numero al azar
        return Math.floor(Math.random() * 6) + 1;
    };
    // Defino el método tirar Segundo Dado
    Craps.prototype.tirarSegundoDado = function () {
        // Operación random para obtener un numero al azar
        return this.tirarPrimerDado() + this.tirarPrimerDado();
    };
    return Craps;
}(juegoDeCasino_1.JuegoDeCasino));
exports.Craps = Craps;
