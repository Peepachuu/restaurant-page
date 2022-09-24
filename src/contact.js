import {phoneIcon} from "./phone.svg";
import {default as locationIcon} from "./map-marker.svg";
import {emailIcon} from "./email.svg";

export function loadContact() {
    const main = document.querySelector(".main");
    main.textContent = "";
    const h2 = document.createElement("h2");
    h2.textContent = "Contact Us";
    
    const info = createInfo("This is the info");

    main.appendChild(h2);
    main.appendChild(info);
}

function createInfo(info) {
    const container = document.createElement("div");
    const p = document.createElement("p");
    const iconImg = document.createElement("img");

    iconImg.src = locationIcon;
    iconImg.style.height = "24px";
    iconImg.style.width = "24px";
    p.textContent = info;

    container.appendChild(iconImg);
    container.appendChild(p);

    return container;
}