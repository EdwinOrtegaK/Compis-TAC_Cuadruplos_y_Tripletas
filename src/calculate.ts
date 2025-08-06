// Función original
function calculate(x: number, y: number, z: number): number {
  return x * z + y * z - (z + y);
}

// Función equivalente usando TAC (Código de Tres Direcciones)
function calculateTAC(x: number, y: number, z: number): number {
  const t1 = x * z;
  const t2 = y * z;
  const t3 = t1 + t2;
  const t4 = z + y;
  const t5 = t3 - t4;
  return t5;
}

// Validación con valores de prueba
const x = 2, y = 3, z = 4;

const resultTAC = calculateTAC(x, y, z);

console.log("Resultado (TAC):     ", resultTAC);
