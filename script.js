let coons = 0; // Total number of coons
let cursors = 0; // Number of cursors
let baseCoonsPerSecond = 0.1; // Base coons generated per second by each cursor
let coonsPerSecond = baseCoonsPerSecond; // Coons generated per second by each cursor
let cursorPrice = 10; // Initial price for the first cursor
let clickPower = 1; // Amount of coons per click
let upgradePurchased = false; // Track if upgrade has been purchased

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

// Update the displayed upgrade status
function updateUpgradeStatus() {
    if (upgradePurchased) {
        document.getElementById("upgrade-status").innerText = "Upgrade status: Purchased!";
        document.getElementById("buy-upgrade-btn").disabled = true; // Disable button once bought
    } else {
        document.getElementById("upgrade-status").innerText = "Upgrade status: Not purchased";
    }
}

// Function for clicking the Skibidi Coon image
function clickCoon() {
    coons += clickPower;
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

// Function to buy the upgrade
function buyUpgrade() {
    if (coons >= 100) {
        coons -= 100;
        upgradePurchased = true;
        coonsPerSecond = baseCoonsPerSecond * 2; // Double cursor efficiency
        clickPower = 2; // Double the click power
        updateCoonCount();
        updateCursorCount();
        updateUpgradeStatus();
    } else {
        alert("Not enough coons to buy the upgrade!");
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
updateUpgradeStatus();

