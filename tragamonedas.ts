import { JuegoDeCasino } from "./juegoDeCasino";


// Defino la clase Tragamonedas que hereda de Juego De Casino
export class Tragamonedas extends JuegoDeCasino {
    private rueda: string[][];

    public constructor(nombre: string, rueda: string[][]) {
        super("Tragamonedas");
        // Defino el valor de la rueda que contiene los distintos simbolos.
        this.rueda = [
            ['Fresa', 'Limon', 'Naranja'],
            ['Fresa', 'Limon', 'Naranja'],
            ['Fresa', 'Limon', 'Naranja'],
        ];
    }

    // Defino el método tirar palanca, el cual "girará" la rueda y me dará un resultado al azar
    public tirarPalanca(): string[] {
        const resultado: string[] = [];
        for (let i = 0; i < this.rueda.length; i++) {
            const randomIndex = Math.floor(Math.random() * this.rueda[i].length);
            resultado.push(this.rueda[i][randomIndex]);
        }
        return resultado;
    }
}