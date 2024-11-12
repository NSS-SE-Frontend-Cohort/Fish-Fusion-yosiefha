// Import the boatInventory function from fishingBoat.js
const { boatInventory } = require("./fishingBoat.js");

const mongerInventory = (chefBudget) => {
    // Get today's fish inventory from the fishing boat
    const fishInverntory = boatInventory();

    // Filter the fish based on the fishmonger's constraints, then set amount to 5
    const mongerFish = fishInverntory
        .filter(fish => fish.price <= 7.50 && fish.amount >= 10)
        .map(fish => ({ ...fish, amount: 5 }));


    // Filter mongerFish based on the chef's budget constraint
    const chefsFish = mongerFish.filter(fish => fish.price <= chefBudget);

    // Return the array of fish ordered by the chef
    return chefsFish;
};

// Export the mongerInventory function
module.exports = { mongerInventory };


