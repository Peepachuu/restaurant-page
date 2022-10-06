export function loadMenu() {
    const main = document.querySelector("section");
    main.textContent = "";

    const menuSection = document.createElement("section");
    const infoSection = createInfoSection();
    const foodItemSection = createFoodItemSection();
    const container = document.createElement("div");

    container.append(infoSection, foodItemSection);
    menuSection.append(container);
    container.classList.add("container");
    menuSection.classList.add("menu");
    main.appendChild(menuSection);
}

function createInfoSection() {
    const infoSection = document.createElement("section");

    const heading = document.createElement("h1");
    heading.textContent = "SIGNATURE BURGERS";

    const info = document.createElement("p");
    info.textContent = "Our signaure burgers are always freshly made, hand-smashed to order with 100% Certified Angus Beef that is grass fed and supports local farms. Equipped with the freshest ingredients, no two burgers are alike - from sweet-seekers, smokehouse flavor fans, heat champions, and folks just looking for a tasty classic, we've got you covered.";

    infoSection.classList.add("info");
    infoSection.append(heading, info);
    return infoSection;
}

function createFoodItemSection() {
    const foodItemSection = document.createElement("section");
    
    const coloradoBurger = createFoodCard("COLORADO BURGER", "770 calories", "Certified Angus Beef, pepper jack cheese, melted cheddar cheese, grilled Anaheim chiles, lettuce, tomatoes, mayo, toasted spicy chipotle bun.");
    const smokedBaconBrisketBurger = createFoodCard("SMOKED BACON BRISKET BURGER", "950 calories", "Certified Angus Beef, smoked aged cheddar cheese, brisket, applewood smoked bacon, pickles, bbq sauce, toasted brioche bun.");
    const truffleMushroomBurger = createFoodCard("TRUFFLE MUSHROOM SWISS BURGER", "650 calories", "Certified Angus Beef, aged Swiss cheese, sautéed crimini mushrooms, truffle mayo, toasted bun.");
    const barbequeBaconCheddarBurger = createFoodCard("BBQ BACON CHEDDAR BURGER", "750 calories", "Certified Angus Beef, aged cheddar cheese, applewood smoked bacon, haystack onions, bbq sauce, toasted bun.");
    const baconSmashBurger = createFoodCard("BACON SMASH BURGER", "690 calories", "Certified Angus Beef, American cheese, applewood smoked bacon, lettuce, tomatoes, mayo, toasted bun. ");
    const classicSmashBurger = createFoodCard("CLASSIC SMASH BURGER", "640 calories", "Certified Angus Beef, American cheese, lettuce, tomatoes, red onions, pickles, Smash Sauce, ketchup, toasted bun.");

    foodItemSection.append(coloradoBurger, smokedBaconBrisketBurger, truffleMushroomBurger, barbequeBaconCheddarBurger, classicSmashBurger, baconSmashBurger);
    foodItemSection.classList.add("items");
    return foodItemSection;
}

function createFoodCard(name, calories, description) {
    const foodName = document.createElement("h3");
    foodName.textContent = name;

    const calInfo = document.createElement("p");
    calInfo.textContent = calories;

    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;

    const foodCard = document.createElement("div");
    foodCard.classList.add("food");
    foodCard.append(foodName, calInfo, foodDescription);
    
    return foodCard;
}