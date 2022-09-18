export function loadHomePage() {
    console.log("Being called right now");
    const main = document.querySelector(".main");
    const h2 = document.createElement("h2");
    const h4 = document.createElement("h4");
    h2.textContent = "The Best Pizza in Town!";
    h4.textContent = "Tasty AND Affordable.";
    main.appendChild(h2);
    main.appendChild(h4);
}