let total = 0;
let coin = 0;

function addToCart(name, description, image, price) {
    const cartTable = document.getElementById('cartTable');
  
    // Create a new table row
    const row = document.createElement('tr');
  
    // Set the row's inner HTML
    row.innerHTML = `
      <td><img src="${image}" alt="${name}"></td>
      <td>${name}</td>
      <td>${description}</td>
      <td>$${price.toFixed(2)}</td>
      <td><button onclick="removeFromCart(this, ${price})">Remove</button></td>
    `;
  
    // Append the row to the cart table
    cartTable.appendChild(row);
    updateTotal(price); // Update the total price
    updatecoin(5); // Add 5 coins when an item is added
}

function removeFromCart(button, price) {
    // Remove the row containing the clicked button
    const row = button.parentElement.parentElement;
    row.remove();
    updateTotal(-price); // Subtract the price of the removed item
    updatecoin(-5); // Subtract 5 coins when an item is removed
}

function updateTotal(amount) {
    total += amount; // Add or subtract the amount
    if (total < 0) total = 0; // Ensure total doesn't go negative
    const totalPriceElement = document.getElementById('totalPrice');
    totalPriceElement.innerText = `Total: $${total.toFixed(2)}`; // Update the total price display
}

function updatecoin(coins) {
    coin += coins; // Add or subtract the coins
    if (coin < 0) coin = 0; // Ensure coin count doesn't go negative
    const coinElement = document.getElementById('coin-counter');
    coinElement.innerText = `${coin}`; // Update the coin display
}