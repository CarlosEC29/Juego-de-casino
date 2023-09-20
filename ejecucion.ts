import { Tragamonedas } from "./tragamonedas";
import { Craps } from "./craps";

const craps = new Craps();
const tirada1 = craps.tirarPrimerDado();
const tirada2 = craps.tirarSegundoDado();
console.log(tirada1);
console.log(tirada2);

const tragamonedas = new Tragamonedas("Limon", []);
const resultado = tragamonedas.tirarPalanca();
console.log('Resultado:', resultado);