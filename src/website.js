export function loadMainContent() {
    loadHeader();
    loadBody();
    loadFooter();
}

function loadHeader() {
    const content = document.querySelector("#content");
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const heading = document.createElement("h1");
    const navbar = document.createElement("ul");

    nav.appendChild(navbar);
    header.appendChild(heading);
    header.appendChild(nav);
    content.appendChild(header);

    heading.textContent = "Rossini";
    // Load up children in 
    createNavbarChild("home");
    createNavbarChild("menu");
    createNavbarChild("contact");
}

function createNavbarChild(name) {
    const navbar = document.querySelector("ul");
    console.log(navbar);
    const navbarElement = document.createElement("li");
    const navLink = document.createElement("a");
    navLink.textContent = name;
    navbarElement.appendChild(navLink);
    navbar.appendChild(navbarElement);
}

function loadBody() {

}

function loadFooter() {

}