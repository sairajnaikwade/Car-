document.getElementById('calculateButton').addEventListener('click', function() {
    // Get input values
    const distance = parseFloat(document.getElementById('distance').value);
    const mileage = parseFloat(document.getElementById('mileage').value);
    const dieselRate = parseFloat(document.getElementById('dieselRate').value);

    // Validate inputs
    if (isNaN(distance) || distance <= 0 || isNaN(mileage) || mileage <= 0 || isNaN(dieselRate) || dieselRate <= 0) {
        alert('Please enter valid positive numbers for all fields.');
        return;
    }

    // Calculate diesel required and total cost
    const dieselRequired = distance / mileage;
    const totalCost = dieselRequired * dieselRate;

    // Display results
    document.getElementById('dieselRequired').textContent = `Diesel Required: ${dieselRequired.toFixed(2)} litres`;
    document.getElementById('totalCost').textContent = `Total Cost: ₹${totalCost.toFixed(2)}`;
});
