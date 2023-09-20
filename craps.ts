import { JuegoDeCasino } from "./juegoDeCasino";

// Defino la clase Craps que hereda de Juego De Casino
export class Craps extends JuegoDeCasino {

    public constructor() {
        super("Craps");
    }

    // Defino el método tirar Primer Dado
    public tirarPrimerDado(): number {
        // Operación random para obtener un numero al azar
        return Math.floor(Math.random() * 6) + 1;
    }

    // Defino el método tirar Segundo Dado
    public tirarSegundoDado(): number {
        // Operación random para obtener un numero al azar
        return this.tirarPrimerDado() + this.tirarPrimerDado();
    }
}