export function loadHomePage() {
    const main = document.querySelector("section");
    main.textContent = "";

    const hero = document.createElement("section");
    hero.classList.add("hero");

    const heroMainHeading = document.createElement("h1");
    heroMainHeading.textContent = "Even the pickiest burger lovers eat here.";
    const heroMainInfo = document.createElement("p");
    heroMainInfo.textContent = "We craft fresh, tasty and locaclly sourced eats that no food enthusiast can resist.";
    const heroText = document.createElement("section");
    const heroImage = document.createElement("img");

    heroText.appendChild(heroMainHeading);
    heroText.appendChild(heroMainInfo);
    hero.appendChild(heroText);
    hero.appendChild(heroImage);
    main.appendChild(hero);
}