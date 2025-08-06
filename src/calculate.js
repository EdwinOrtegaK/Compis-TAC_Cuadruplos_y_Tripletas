// Función original
function calculate(x, y, z) {
    return x * z + y * z - (z + y);
}
// Función equivalente usando TAC (Código de Tres Direcciones)
function calculateTAC(x, y, z) {
    var t1 = x * z;
    var t2 = y * z;
    var t3 = t1 + t2;
    var t4 = z + y;
    var t5 = t3 - t4;
    return t5;
}
// Validación con valores de prueba
var x = 2, y = 3, z = 4;
var resultTAC = calculateTAC(x, y, z);
console.log("Resultado (TAC):     ", resultTAC);
