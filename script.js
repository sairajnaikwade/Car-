document.getElementById('calculateButton').addEventListener('click', function () {
  // Get input values
  const distance = parseFloat(document.getElementById('distance').value);
  const mileage = parseFloat(document.getElementById('mileage').value);
  const fuelRate = parseFloat(document.getElementById('fuelRate').value);

  // Validate inputs
  if (isNaN(distance) || distance <= 0 || isNaN(mileage) || mileage <= 0 || isNaN(fuelRate) || fuelRate <= 0) {
      document.getElementById('validationMessage').textContent = 'Please enter valid positive numbers for all fields.';
      document.getElementById('results').style.display = 'none';
      return;
  }

  // Clear validation message
  document.getElementById('validationMessage').textContent = '';
  document.getElementById('results').style.display = 'block';

  // Calculate fuel required and total cost
  const fuelRequired = distance / mileage;
  const totalCost = fuelRequired * fuelRate;

  // Display results
  document.getElementById('fuelRequired').textContent = `Fuel Required: ${fuelRequired.toFixed(2)} litres`;
  document.getElementById('totalCost').textContent = `Total Cost: ₹${totalCost.toFixed(2)}`;
});
