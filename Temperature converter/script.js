// JavaScript for temperature conversion
document.addEventListener("DOMContentLoaded", function() {
    const convertButton = document.getElementById("convert");
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unit");
    const resultDiv = document.getElementById("result");

    convertButton.addEventListener("click", function() {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelect.value;
        let convertedTemperature;

        if (isNaN(temperature)) {
            resultDiv.textContent = "Please enter a valid number.";
        } else {
            if (unit === "celsius") {
                convertedTemperature = (temperature * 9/5) + 32;
                resultDiv.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} °F`;
            } else {
                convertedTemperature = (temperature - 32) * 5/9;
                resultDiv.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} °C`;
            }
        }
    });
});
