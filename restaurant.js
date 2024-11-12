const { mongerInventory } = require("./fishMonger");

const fishMenu = (chefBudget) => {
    // Get the fish that meets the chef's budget requirements
    const purchasedFish = mongerInventory(chefBudget);

    // Begin the HTML structure
    let htmlMenu = `<h1>Menu</h1>\n<article class="menu">\n`;

    // Loop through each fish and create menu items
    for (const fish of purchasedFish) {
        // Add the species name as a header for each fish
        htmlMenu += `<h2>${fish.species}</h2>\n`;
        htmlMenu += `    <section class="menu__item">${fish.species} Soup</section>\n`;
        htmlMenu += `    <section class="menu__item">${fish.species} Sandwich</section>\n`;
        htmlMenu += `    <section class="menu__item">Grilled ${fish.species}</section>\n`;
    }

    // Close the article tag
    htmlMenu += `</article>`;

    return htmlMenu;
};

module.exports = { fishMenu };

