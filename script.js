document.getElementById('calculateButton').addEventListener('click', function () {
  const distance = parseFloat(document.getElementById('distance').value);
  const mileage = parseFloat(document.getElementById('mileage').value);
  const fuelRate = parseFloat(document.getElementById('fuelRate').value);

  const message = document.getElementById('validationMessage');
  const fuelOutput = document.getElementById('fuelRequired');
  const costOutput = document.getElementById('totalCost');

  if (isNaN(distance) || distance <= 0 || isNaN(mileage) || mileage <= 0 || isNaN(fuelRate) || fuelRate <= 0) {
    message.textContent = "❗ Please enter valid positive numbers in all fields.";
    fuelOutput.textContent = "";
    costOutput.textContent = "";
    return;
  }

  message.textContent = "";
  const fuelNeeded = distance / mileage;
  const totalCost = fuelNeeded * fuelRate;

  fuelOutput.textContent = `🛢️ Fuel Required: ${fuelNeeded.toFixed(2)} litres`;
  costOutput.textContent = `💰 Total Cost: ₹${totalCost.toFixed(2)}`;
});
