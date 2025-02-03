// Save to localStorage
function updateTotal(amount) {
    total += amount;
    if (total < 0) total = 0;
    localStorage.setItem('total', total); // Save total to localStorage
    document.getElementById('totalPrice').innerText = `Total: $${total.toFixed(2)}`;
}

function updatecoin(coins) {
    coin += coins;
    if (coin < 0) coin = 0;
    localStorage.setItem('coin', coin); // Save coin to localStorage
    document.getElementById('coin-counter').innerText = coin;
}

// Retrieve from localStorage when the page loads
window.onload = function () {
    total = parseFloat(localStorage.getItem('total')) || 0;
    coin = parseInt(localStorage.getItem('coin')) || 0;

    document.getElementById('totalPrice').innerText = `Total: $${total.toFixed(2)}`;
    document.getElementById('coin-counter').innerText = coin;
};