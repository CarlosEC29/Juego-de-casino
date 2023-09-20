// Defino la clase JuegoDeCasino
export class JuegoDeCasino {
    public nombre: string;

    public constructor(nombre: string) {
        this.nombre = nombre;
    }

    public jugar(): void {
        console.log(`Jugando ${this.nombre}`);
    }
}