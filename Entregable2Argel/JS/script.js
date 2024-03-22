document.addEventListener("DOMContentLoaded", function() {
    // Función para realizar la conversión de moneda
    function convertCurrency() {
        const amount = parseFloat(document.getElementById("amount").value);
        const fromCurrency = document.getElementById("fromCurrency").value;
        const toCurrency = document.getElementById("toCurrency").value;
        let result;

        // Convertir la cantidad según la moneda de origen
        switch (fromCurrency) {
            case "ARS":
                result = amount / 1000; // 1 USD = 1000 ARS
                break;
            case "USD":
                result = amount;
                break;
            case "EUR":
                result = amount * 0.85; // Ejemplo de tasa de conversión, ajustable según la tasa de cambio actual
                break;
            case "GBP":
                result = amount * 0.73; // Ejemplo de tasa de conversión, ajustable según la tasa de cambio actual
                break;
            case "RUB":
                result = amount * 73.16; // Ejemplo de tasa de conversión, ajustable según la tasa de cambio actual
                break;
            case "JPY":
                result = amount * 110.79; // Ejemplo de tasa de conversión, ajustable según la tasa de cambio actual
                break;
        }

        // Convertir el resultado a la moneda de destino
        switch (toCurrency) {
            case "ARS":
                result *= 1000; // 1 USD = 1000 ARS
                break;
            case "USD":
                // La cantidad ya está en USD, no es necesario hacer nada
                break;
            case "EUR":
                result /= 0.85; // Ejemplo de tasa de conversión, ajustable según la tasa de cambio actual
                break;
            case "GBP":
                result /= 0.73; // Ejemplo de tasa de conversión, ajustable según la tasa de cambio actual
                break;
            case "RUB":
                result = amount * 73.16; // 1 USD = 73.16 RUB
                break;
            case "JPY":
                result = amount * 110.79; // 1 USD = 110.79 JPY


        }

        // Mostrar el resultado en el DOM
        document.getElementById("output").innerText = "Resultado: " + result.toFixed(2) + " " + toCurrency;
    }

    // Manejo del evento de clic en el botón "Convertir"
    document.getElementById("convertButton").addEventListener("click", convertCurrency);
});
