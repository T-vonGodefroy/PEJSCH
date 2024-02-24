// Definir las tasas de conversión en un array de objetos
const tasasDeCambio = [
    { divisa: "USD", tasa: 1 },       // Dólar estadounidense
    { divisa: "EUR", tasa: 0.83 },    // Euro
    { divisa: "GBP", tasa: 0.72 },    // Libra esterlina
    { divisa: "JPY", tasa: 109.81 },  // Yen japonés
    { divisa: "ARS", tasa: 1085 }     // Peso argentino
];

// Función para obtener la tasa de cambio de una divisa
function obtenerTasaDeCambio(divisa) {
    const tasa = tasasDeCambio.find(item => item.divisa === divisa.toUpperCase());
    if (!tasa) {
        alert("La divisa ingresada no es válida.");
        return obtenerTasaDeCambio();
    }
    return tasa.tasa;
}

// Función para solicitar y validar la cantidad y las divisas
function obtenerDatosEntrada() {
    let cantidad = parseFloat(prompt("Ingrese la cantidad a convertir:"));
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("La cantidad ingresada no es válida.");
        return obtenerDatosEntrada();
    }

    let monedaOrigen = prompt("Ingrese la divisa de origen (USD, EUR, GBP, JPY, ARS):");
    let monedaDestino = prompt("Ingrese la divisa de destino (USD, EUR, GBP, JPY, ARS):");

    return { cantidad, monedaOrigen, monedaDestino };
}

// Función para realizar la conversión de divisas
function convertirDivisas(cantidad, monedaOrigen, monedaDestino) {
    const tasaOrigen = obtenerTasaDeCambio(monedaOrigen);
    const tasaDestino = obtenerTasaDeCambio(monedaDestino);

    const cantidadConvertida = cantidad * (tasaDestino / tasaOrigen);
    return cantidadConvertida.toFixed(2);
}

// Función para mostrar el resultado de la conversión
function mostrarResultado(resultado) {
    alert("La cantidad convertida es: " + resultado);
}

// Llamada a las funciones
const { cantidad, monedaOrigen, monedaDestino } = obtenerDatosEntrada();
const resultado = convertirDivisas(cantidad, monedaOrigen, monedaDestino);
mostrarResultado(resultado);
