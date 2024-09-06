let coons = 0; // Total number of coons
let plungers = 0; // Number of plungers
let baseCoonsPerSecond = 0.1; // Base coons generated per second by each plunger
let coonsPerSecond = baseCoonsPerSecond; // Coons generated per second by each plunger
let plungerPrice = 10; // Initial price for the first plunger
let clickPower = 1; // Amount of coons per click
let upgradePurchased = false; // Track if upgrade has been purchased

// Update the displayed coon count
function updateCoonCount() {
    document.getElementById("coon-count").innerText = `Coons: ${coons.toFixed(1)}`;
}

// Update the displayed plunger count and price
function updatePlungerCount() {
    document.getElementById("plunger-count").innerText = `Plungers: ${plungers}`;
    document.getElementById("plunger-price").innerText = plungerPrice.toFixed(1);
    document.getElementById("sell-price").innerText = (plungerPrice / 2).toFixed(1); // Selling for half the price
    updatePlungerBox();
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

// Function to buy a plunger
function buyPlunger() {
    if (coons >= plungerPrice) {
        coons -= plungerPrice;
        plungers += 1;
        plungerPrice = 10 * Math.pow(1.15, plungers); // Increase plunger price by 1.15 times per plunger
        updateCoonCount();
        updatePlungerCount();
    } else {
        alert("Not enough coons to buy a plunger!");
    }
}

// Function to sell a plunger
function sellPlunger() {
    if (plungers > 0) {
        plungers -= 1;
        coons += plungerPrice / 2; // Gain half the current plunger price
        plungerPrice = 10 * Math.pow(1.15, plungers); // Recalculate the price of a plunger after selling
        updateCoonCount();
        updatePlungerCount();
    } else {
        alert("No plungers to sell!");
    }
}

// Function to buy the upgrade
function buyUpgrade() {
    if (coons >= 100) {
        coons -= 100;
        upgradePurchased = true;
        coonsPerSecond = baseCoonsPerSecond * 2; // Double plunger efficiency
        clickPower = 2; // Double the click power
        updateCoonCount();
        updatePlungerCount();
        updateUpgradeStatus();
    } else {
        alert("Not enough coons to buy the upgrade!");
    }
}

// Function to automatically add coons based on the number of plungers
function generateCoons() {
    coons += plungers * coonsPerSecond;
    updateCoonCount();
}

// Function to update the plunger box visual
function updatePlungerBox() {
    const container = document.getElementById("plunger-container");
    container.innerHTML = ''; // Clear the current plungers
    for (let i = 0; i < plungers; i++) {
        const img = document.createElement("img");
        img.src = "plunger.png";
        img.alt = "Plunger";
        container.appendChild(img);
    }
}

// Start generating coons every second
setInterval(generateCoons, 1000);

// Initialize the counts on page load
updateCoonCount();
updatePlungerCount();
updateUpgradeStatus();
