import { calculate, calculateTAC } from "./calculate";

const x = 2, y = 3, z = 4;

const resultOriginal = calculate(x, y, z);
const resultTAC      = calculateTAC(x, y, z);

console.log("Resultado original:", resultOriginal);
console.log("Resultado (TAC):  ", resultTAC);
console.log("¿Son iguales?", resultOriginal === resultTAC);
