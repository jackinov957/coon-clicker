let coons = 0; // Total number of coons
let cursors = 0; // Number of cursors
let coonsPerSecond = 0.1; // Coons generated per second by each cursor
let cursorPrice = 10; // Initial price for the first cursor

// Update the displayed coon count
function updateCoonCount() {
    document.getElementById("coon-count").innerText = `Coons: ${coons.toFixed(1)}`;
}

// Update the displayed cursor count and price
function updateCursorCount() {
    document.getElementById("cursor-count").innerText = `Cursors: ${cursors} (${(cursors * coonsPerSecond).toFixed(1)} coons per second)`;
    document.getElementById("cursor-price").innerText = cursorPrice.toFixed(1);
    document.getElementById("sell-price").innerText = (cursorPrice / 2).toFixed(1); // Selling for half the price
}

// Function for clicking the Skibidi Coon image
function clickCoon() {
    coons += 1;
    updateCoonCount();
}

// Function to buy a cursor
function buyCursor() {
    if (coons >= cursorPrice) {
        coons -= cursorPrice;
        cursors += 1;
        cursorPrice = 10 * Math.pow(1.15, cursors); // Increase cursor price by 1.15 times per cursor
        updateCoonCount();
        updateCursorCount();
    } else {
        alert("Not enough coons to buy a cursor!");
    }
}

// Function to sell a cursor
function sellCursor() {
    if (cursors > 0) {
        cursors -= 1;
        coons += cursorPrice / 2; // Gain half the current cursor price
        cursorPrice = 10 * Math.pow(1.15, cursors); // Recalculate the price of a cursor after selling
        updateCoonCount();
        updateCursorCount();
    } else {
        alert("No cursors to sell!");
    }
}

// Function to automatically add coons based on the number of cursors
function generateCoons() {
    coons += cursors * coonsPerSecond;
    updateCoonCount();
}

// Start generating coons every second
setInterval(generateCoons, 1000);

// Initialize the counts on page load
updateCoonCount();
updateCursorCount();

