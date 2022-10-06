/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadContact": () => (/* binding */ loadContact)
/* harmony export */ });
function loadContact() {
    const main = document.querySelector(".main");
    main.textContent = "";
    const contactSecion = createContactSection();
    main.appendChild(contactSecion);
}

function createContactSection() {
    const contactSection = document.createElement("section");

    const heading = document.createElement("h1");
    heading.textContent = "CONTACT US";

    const firstLocCard = createLocationCard("BLOODCOURT", "940 BLOOR ST W", "416-901-8166");
    const secondLocCard = createLocationCard("KENSINGTON", "326 COLLEGE ST", "416-920-3647");
    const thirdLocCard = createLocationCard("QUEEN WEST", "453 QUEEN ST W", "647-347-3647");
    const forthLocCard = createLocationCard("AVENUE ROAD", "1507 AVENUE RD", "416-781-4747");

    const locations = document.createElement("div");
    locations.append(firstLocCard, secondLocCard, thirdLocCard, forthLocCard);
    locations.classList.add("container");

    contactSection.append(heading, locations);
    contactSection.classList.add("contact");
    return contactSection;
}

function createLocationCard(neighbourhood, street, telephoneNumber) {
    const locationCard = document.createElement("div");
    const locNeighbourhood = document.createElement("h3");
    const locStreet = document.createElement("h3");
    const locTelephoneNumber = document.createElement("p");

    locNeighbourhood.textContent = neighbourhood;
    locStreet.textContent = street;
    locTelephoneNumber.textContent = telephoneNumber;

    locationCard.classList.add("location");
    locNeighbourhood.classList.add("neighbourhood");
    locStreet.classList.add("street");
    locTelephoneNumber.classList.add("phone");

    locationCard.append(locNeighbourhood, locStreet, locTelephoneNumber);
    return locationCard;
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHomePage": () => (/* binding */ loadHomePage)
/* harmony export */ });
/* harmony import */ var _images_burgerunsplash_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/burgerunsplash.jpg */ "./src/images/burgerunsplash.jpg");


function loadHomePage() {
    const main = document.querySelector("section");
    main.textContent = "";

    const hero = document.createElement("section");
    hero.classList.add("hero");

    const heroTextSection = createheroTextSection();

    const heroImage = createHeroImageSection();
    heroImage.classList.add("image");

    hero.append(heroTextSection, heroImage);
    main.appendChild(hero);
}

function createheroTextSection() {
    const heroTextSection = document.createElement("section");
    const textContainer = document.createElement("div");
    const heroHeading = document.createElement("h1");
    const heroInfo = document.createElement("p");
    const orderButton = document.createElement("button");

    heroHeading.textContent = "Even the pickiest burger lovers eat here.";
    heroInfo.textContent = "We craft fresh, tasty and locally sourced eats that no food enthusiast can resist.";
    orderButton.textContent = "ORDER NOW";

    heroTextSection.classList.add("text");
    textContainer.classList.add("container");

    textContainer.append(heroHeading, heroInfo, orderButton);
    heroTextSection.appendChild(textContainer);

    return heroTextSection;
}

function createHeroImageSection() {
    const heroImageSection = document.createElement("section");
    const heroImage = document.createElement("img");
    heroImage.src = _images_burgerunsplash_jpg__WEBPACK_IMPORTED_MODULE_0__;
    return heroImage;
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMenu": () => (/* binding */ loadMenu)
/* harmony export */ });
function loadMenu() {
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

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMainContent": () => (/* binding */ loadMainContent)
/* harmony export */ });
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");




function loadMainContent() {
    loadHeader();
    loadBody();
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
    createNavbarChild("Home");
    createNavbarChild("Menu");
    createNavbarChild("Contact");
    setLinks();
}

function createNavbarChild(name) {
    const navbar = document.querySelector("ul");
    const navbarElement = document.createElement("li");
    const navLink = document.createElement("button");
    navLink.classList.add(name);
    navLink.textContent = name;
    navbarElement.appendChild(navLink);
    navbar.appendChild(navbarElement);
}

function loadBody() {
    const content = document.querySelector("#content");
    const main = document.createElement("section");
    main.classList.add("main");
    content.appendChild(main);
    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.loadHomePage)();
}

function setLinks() {
    const homeLink = document.querySelector(".Home");
    const menuLink = document.querySelector(".Menu");
    const contactLink = document.querySelector(".Contact");

    contactLink.addEventListener('click', () => {
        setActive(contactLink);
        (0,_contact_js__WEBPACK_IMPORTED_MODULE_0__.loadContact)();
    });
    homeLink.addEventListener('click', () => {
        setActive(homeLink);
        (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.loadHomePage)();
    });
    menuLink.addEventListener('click', () => {
        setActive(menuLink);
        (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.loadMenu)();
    });
    console.log("this is working!");
}

function setActive(button) {
    const navLink = document.querySelector("nav ul");
    console.log(navLink);
}

/***/ }),

/***/ "./src/images/burgerunsplash.jpg":
/*!***************************************!*\
  !*** ./src/images/burgerunsplash.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "95b17281f9a35b04fe5e.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _website_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website.js */ "./src/website.js");


(0,_website_js__WEBPACK_IMPORTED_MODULE_0__.loadMainContent)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUM4Qzs7QUFFdkM7QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdURBQUc7QUFDdkI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMzQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUQyQztBQUNGO0FBQ0o7O0FBRTlCO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQVk7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsd0RBQVc7QUFDbkIsS0FBSztBQUNMO0FBQ0E7QUFDQSxRQUFRLHNEQUFZO0FBQ3BCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsUUFBUSxrREFBUTtBQUNoQixLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztVQ3RFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7O0FDZitDOztBQUUvQyw0REFBZSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBjb25zdCBjb250YWN0U2VjaW9uID0gY3JlYXRlQ29udGFjdFNlY3Rpb24oKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRhY3RTZWNpb24pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0U2VjdGlvbigpIHtcbiAgICBjb25zdCBjb250YWN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJDT05UQUNUIFVTXCI7XG5cbiAgICBjb25zdCBmaXJzdExvY0NhcmQgPSBjcmVhdGVMb2NhdGlvbkNhcmQoXCJCTE9PRENPVVJUXCIsIFwiOTQwIEJMT09SIFNUIFdcIiwgXCI0MTYtOTAxLTgxNjZcIik7XG4gICAgY29uc3Qgc2Vjb25kTG9jQ2FyZCA9IGNyZWF0ZUxvY2F0aW9uQ2FyZChcIktFTlNJTkdUT05cIiwgXCIzMjYgQ09MTEVHRSBTVFwiLCBcIjQxNi05MjAtMzY0N1wiKTtcbiAgICBjb25zdCB0aGlyZExvY0NhcmQgPSBjcmVhdGVMb2NhdGlvbkNhcmQoXCJRVUVFTiBXRVNUXCIsIFwiNDUzIFFVRUVOIFNUIFdcIiwgXCI2NDctMzQ3LTM2NDdcIik7XG4gICAgY29uc3QgZm9ydGhMb2NDYXJkID0gY3JlYXRlTG9jYXRpb25DYXJkKFwiQVZFTlVFIFJPQURcIiwgXCIxNTA3IEFWRU5VRSBSRFwiLCBcIjQxNi03ODEtNDc0N1wiKTtcblxuICAgIGNvbnN0IGxvY2F0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9jYXRpb25zLmFwcGVuZChmaXJzdExvY0NhcmQsIHNlY29uZExvY0NhcmQsIHRoaXJkTG9jQ2FyZCwgZm9ydGhMb2NDYXJkKTtcbiAgICBsb2NhdGlvbnMuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcblxuICAgIGNvbnRhY3RTZWN0aW9uLmFwcGVuZChoZWFkaW5nLCBsb2NhdGlvbnMpO1xuICAgIGNvbnRhY3RTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xuICAgIHJldHVybiBjb250YWN0U2VjdGlvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTG9jYXRpb25DYXJkKG5laWdoYm91cmhvb2QsIHN0cmVldCwgdGVsZXBob25lTnVtYmVyKSB7XG4gICAgY29uc3QgbG9jYXRpb25DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBsb2NOZWlnaGJvdXJob29kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGNvbnN0IGxvY1N0cmVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBjb25zdCBsb2NUZWxlcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIGxvY05laWdoYm91cmhvb2QudGV4dENvbnRlbnQgPSBuZWlnaGJvdXJob29kO1xuICAgIGxvY1N0cmVldC50ZXh0Q29udGVudCA9IHN0cmVldDtcbiAgICBsb2NUZWxlcGhvbmVOdW1iZXIudGV4dENvbnRlbnQgPSB0ZWxlcGhvbmVOdW1iZXI7XG5cbiAgICBsb2NhdGlvbkNhcmQuY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uXCIpO1xuICAgIGxvY05laWdoYm91cmhvb2QuY2xhc3NMaXN0LmFkZChcIm5laWdoYm91cmhvb2RcIik7XG4gICAgbG9jU3RyZWV0LmNsYXNzTGlzdC5hZGQoXCJzdHJlZXRcIik7XG4gICAgbG9jVGVsZXBob25lTnVtYmVyLmNsYXNzTGlzdC5hZGQoXCJwaG9uZVwiKTtcblxuICAgIGxvY2F0aW9uQ2FyZC5hcHBlbmQobG9jTmVpZ2hib3VyaG9vZCwgbG9jU3RyZWV0LCBsb2NUZWxlcGhvbmVOdW1iZXIpO1xuICAgIHJldHVybiBsb2NhdGlvbkNhcmQ7XG59IiwiaW1wb3J0IGltZyBmcm9tIFwiLi9pbWFnZXMvYnVyZ2VydW5zcGxhc2guanBnXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkSG9tZVBhZ2UoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWN0aW9uXCIpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIGhlcm8uY2xhc3NMaXN0LmFkZChcImhlcm9cIik7XG5cbiAgICBjb25zdCBoZXJvVGV4dFNlY3Rpb24gPSBjcmVhdGVoZXJvVGV4dFNlY3Rpb24oKTtcblxuICAgIGNvbnN0IGhlcm9JbWFnZSA9IGNyZWF0ZUhlcm9JbWFnZVNlY3Rpb24oKTtcbiAgICBoZXJvSW1hZ2UuY2xhc3NMaXN0LmFkZChcImltYWdlXCIpO1xuXG4gICAgaGVyby5hcHBlbmQoaGVyb1RleHRTZWN0aW9uLCBoZXJvSW1hZ2UpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoaGVybyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZWhlcm9UZXh0U2VjdGlvbigpIHtcbiAgICBjb25zdCBoZXJvVGV4dFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBoZXJvSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBjb25zdCBoZXJvSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IG9yZGVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIGhlcm9IZWFkaW5nLnRleHRDb250ZW50ID0gXCJFdmVuIHRoZSBwaWNraWVzdCBidXJnZXIgbG92ZXJzIGVhdCBoZXJlLlwiO1xuICAgIGhlcm9JbmZvLnRleHRDb250ZW50ID0gXCJXZSBjcmFmdCBmcmVzaCwgdGFzdHkgYW5kIGxvY2FsbHkgc291cmNlZCBlYXRzIHRoYXQgbm8gZm9vZCBlbnRodXNpYXN0IGNhbiByZXNpc3QuXCI7XG4gICAgb3JkZXJCdXR0b24udGV4dENvbnRlbnQgPSBcIk9SREVSIE5PV1wiO1xuXG4gICAgaGVyb1RleHRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0XCIpO1xuICAgIHRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcblxuICAgIHRleHRDb250YWluZXIuYXBwZW5kKGhlcm9IZWFkaW5nLCBoZXJvSW5mbywgb3JkZXJCdXR0b24pO1xuICAgIGhlcm9UZXh0U2VjdGlvbi5hcHBlbmRDaGlsZCh0ZXh0Q29udGFpbmVyKTtcblxuICAgIHJldHVybiBoZXJvVGV4dFNlY3Rpb247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlcm9JbWFnZVNlY3Rpb24oKSB7XG4gICAgY29uc3QgaGVyb0ltYWdlU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIGNvbnN0IGhlcm9JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaGVyb0ltYWdlLnNyYyA9IGltZztcbiAgICByZXR1cm4gaGVyb0ltYWdlO1xufSIsImV4cG9ydCBmdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlY3Rpb25cIik7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICBjb25zdCBtZW51U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIGNvbnN0IGluZm9TZWN0aW9uID0gY3JlYXRlSW5mb1NlY3Rpb24oKTtcbiAgICBjb25zdCBmb29kSXRlbVNlY3Rpb24gPSBjcmVhdGVGb29kSXRlbVNlY3Rpb24oKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZChpbmZvU2VjdGlvbiwgZm9vZEl0ZW1TZWN0aW9uKTtcbiAgICBtZW51U2VjdGlvbi5hcHBlbmQoY29udGFpbmVyKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcbiAgICBtZW51U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1lbnVTZWN0aW9uKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5mb1NlY3Rpb24oKSB7XG4gICAgY29uc3QgaW5mb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiU0lHTkFUVVJFIEJVUkdFUlNcIjtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBpbmZvLnRleHRDb250ZW50ID0gXCJPdXIgc2lnbmF1cmUgYnVyZ2VycyBhcmUgYWx3YXlzIGZyZXNobHkgbWFkZSwgaGFuZC1zbWFzaGVkIHRvIG9yZGVyIHdpdGggMTAwJSBDZXJ0aWZpZWQgQW5ndXMgQmVlZiB0aGF0IGlzIGdyYXNzIGZlZCBhbmQgc3VwcG9ydHMgbG9jYWwgZmFybXMuIEVxdWlwcGVkIHdpdGggdGhlIGZyZXNoZXN0IGluZ3JlZGllbnRzLCBubyB0d28gYnVyZ2VycyBhcmUgYWxpa2UgLSBmcm9tIHN3ZWV0LXNlZWtlcnMsIHNtb2tlaG91c2UgZmxhdm9yIGZhbnMsIGhlYXQgY2hhbXBpb25zLCBhbmQgZm9sa3MganVzdCBsb29raW5nIGZvciBhIHRhc3R5IGNsYXNzaWMsIHdlJ3ZlIGdvdCB5b3UgY292ZXJlZC5cIjtcblxuICAgIGluZm9TZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICAgIGluZm9TZWN0aW9uLmFwcGVuZChoZWFkaW5nLCBpbmZvKTtcbiAgICByZXR1cm4gaW5mb1NlY3Rpb247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb2RJdGVtU2VjdGlvbigpIHtcbiAgICBjb25zdCBmb29kSXRlbVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBcbiAgICBjb25zdCBjb2xvcmFkb0J1cmdlciA9IGNyZWF0ZUZvb2RDYXJkKFwiQ09MT1JBRE8gQlVSR0VSXCIsIFwiNzcwIGNhbG9yaWVzXCIsIFwiQ2VydGlmaWVkIEFuZ3VzIEJlZWYsIHBlcHBlciBqYWNrIGNoZWVzZSwgbWVsdGVkIGNoZWRkYXIgY2hlZXNlLCBncmlsbGVkIEFuYWhlaW0gY2hpbGVzLCBsZXR0dWNlLCB0b21hdG9lcywgbWF5bywgdG9hc3RlZCBzcGljeSBjaGlwb3RsZSBidW4uXCIpO1xuICAgIGNvbnN0IHNtb2tlZEJhY29uQnJpc2tldEJ1cmdlciA9IGNyZWF0ZUZvb2RDYXJkKFwiU01PS0VEIEJBQ09OIEJSSVNLRVQgQlVSR0VSXCIsIFwiOTUwIGNhbG9yaWVzXCIsIFwiQ2VydGlmaWVkIEFuZ3VzIEJlZWYsIHNtb2tlZCBhZ2VkIGNoZWRkYXIgY2hlZXNlLCBicmlza2V0LCBhcHBsZXdvb2Qgc21va2VkIGJhY29uLCBwaWNrbGVzLCBiYnEgc2F1Y2UsIHRvYXN0ZWQgYnJpb2NoZSBidW4uXCIpO1xuICAgIGNvbnN0IHRydWZmbGVNdXNocm9vbUJ1cmdlciA9IGNyZWF0ZUZvb2RDYXJkKFwiVFJVRkZMRSBNVVNIUk9PTSBTV0lTUyBCVVJHRVJcIiwgXCI2NTAgY2Fsb3JpZXNcIiwgXCJDZXJ0aWZpZWQgQW5ndXMgQmVlZiwgYWdlZCBTd2lzcyBjaGVlc2UsIHNhdXTDqWVkIGNyaW1pbmkgbXVzaHJvb21zLCB0cnVmZmxlIG1heW8sIHRvYXN0ZWQgYnVuLlwiKTtcbiAgICBjb25zdCBiYXJiZXF1ZUJhY29uQ2hlZGRhckJ1cmdlciA9IGNyZWF0ZUZvb2RDYXJkKFwiQkJRIEJBQ09OIENIRUREQVIgQlVSR0VSXCIsIFwiNzUwIGNhbG9yaWVzXCIsIFwiQ2VydGlmaWVkIEFuZ3VzIEJlZWYsIGFnZWQgY2hlZGRhciBjaGVlc2UsIGFwcGxld29vZCBzbW9rZWQgYmFjb24sIGhheXN0YWNrIG9uaW9ucywgYmJxIHNhdWNlLCB0b2FzdGVkIGJ1bi5cIik7XG4gICAgY29uc3QgYmFjb25TbWFzaEJ1cmdlciA9IGNyZWF0ZUZvb2RDYXJkKFwiQkFDT04gU01BU0ggQlVSR0VSXCIsIFwiNjkwIGNhbG9yaWVzXCIsIFwiQ2VydGlmaWVkIEFuZ3VzIEJlZWYsIEFtZXJpY2FuIGNoZWVzZSwgYXBwbGV3b29kIHNtb2tlZCBiYWNvbiwgbGV0dHVjZSwgdG9tYXRvZXMsIG1heW8sIHRvYXN0ZWQgYnVuLiBcIik7XG4gICAgY29uc3QgY2xhc3NpY1NtYXNoQnVyZ2VyID0gY3JlYXRlRm9vZENhcmQoXCJDTEFTU0lDIFNNQVNIIEJVUkdFUlwiLCBcIjY0MCBjYWxvcmllc1wiLCBcIkNlcnRpZmllZCBBbmd1cyBCZWVmLCBBbWVyaWNhbiBjaGVlc2UsIGxldHR1Y2UsIHRvbWF0b2VzLCByZWQgb25pb25zLCBwaWNrbGVzLCBTbWFzaCBTYXVjZSwga2V0Y2h1cCwgdG9hc3RlZCBidW4uXCIpO1xuXG4gICAgZm9vZEl0ZW1TZWN0aW9uLmFwcGVuZChjb2xvcmFkb0J1cmdlciwgc21va2VkQmFjb25Ccmlza2V0QnVyZ2VyLCB0cnVmZmxlTXVzaHJvb21CdXJnZXIsIGJhcmJlcXVlQmFjb25DaGVkZGFyQnVyZ2VyLCBjbGFzc2ljU21hc2hCdXJnZXIsIGJhY29uU21hc2hCdXJnZXIpO1xuICAgIGZvb2RJdGVtU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiaXRlbXNcIik7XG4gICAgcmV0dXJuIGZvb2RJdGVtU2VjdGlvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vZENhcmQobmFtZSwgY2Fsb3JpZXMsIGRlc2NyaXB0aW9uKSB7XG4gICAgY29uc3QgZm9vZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgZm9vZE5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gICAgY29uc3QgY2FsSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNhbEluZm8udGV4dENvbnRlbnQgPSBjYWxvcmllcztcblxuICAgIGNvbnN0IGZvb2REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGZvb2REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuXG4gICAgY29uc3QgZm9vZENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvb2RDYXJkLmNsYXNzTGlzdC5hZGQoXCJmb29kXCIpO1xuICAgIGZvb2RDYXJkLmFwcGVuZChmb29kTmFtZSwgY2FsSW5mbywgZm9vZERlc2NyaXB0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gZm9vZENhcmQ7XG59IiwiaW1wb3J0IHsgbG9hZENvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0LmpzXCI7XG5pbXBvcnQgeyBsb2FkSG9tZVBhZ2UgfSBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgeyBsb2FkTWVudSB9IGZyb20gXCIuL21lbnUuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRNYWluQ29udGVudCgpIHtcbiAgICBsb2FkSGVhZGVyKCk7XG4gICAgbG9hZEJvZHkoKTtcbn1cblxuZnVuY3Rpb24gbG9hZEhlYWRlcigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuICAgIG5hdi5hcHBlbmRDaGlsZChuYXZiYXIpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJSb3NzaW5pXCI7XG4gICAgLy8gTG9hZCB1cCBjaGlsZHJlbiBpbiBcbiAgICBjcmVhdGVOYXZiYXJDaGlsZChcIkhvbWVcIik7XG4gICAgY3JlYXRlTmF2YmFyQ2hpbGQoXCJNZW51XCIpO1xuICAgIGNyZWF0ZU5hdmJhckNoaWxkKFwiQ29udGFjdFwiKTtcbiAgICBzZXRMaW5rcygpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXZiYXJDaGlsZChuYW1lKSB7XG4gICAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsXCIpO1xuICAgIGNvbnN0IG5hdmJhckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgbmF2TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbmF2TGluay5jbGFzc0xpc3QuYWRkKG5hbWUpO1xuICAgIG5hdkxpbmsudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIG5hdmJhckVsZW1lbnQuYXBwZW5kQ2hpbGQobmF2TGluayk7XG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKG5hdmJhckVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBsb2FkQm9keSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgbG9hZEhvbWVQYWdlKCk7XG59XG5cbmZ1bmN0aW9uIHNldExpbmtzKCkge1xuICAgIGNvbnN0IGhvbWVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5Ib21lXCIpO1xuICAgIGNvbnN0IG1lbnVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5NZW51XCIpO1xuICAgIGNvbnN0IGNvbnRhY3RMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5Db250YWN0XCIpO1xuXG4gICAgY29udGFjdExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHNldEFjdGl2ZShjb250YWN0TGluayk7XG4gICAgICAgIGxvYWRDb250YWN0KCk7XG4gICAgfSk7XG4gICAgaG9tZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHNldEFjdGl2ZShob21lTGluayk7XG4gICAgICAgIGxvYWRIb21lUGFnZSgpO1xuICAgIH0pO1xuICAgIG1lbnVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzZXRBY3RpdmUobWVudUxpbmspO1xuICAgICAgICBsb2FkTWVudSgpO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyB3b3JraW5nIVwiKTtcbn1cblxuZnVuY3Rpb24gc2V0QWN0aXZlKGJ1dHRvbikge1xuICAgIGNvbnN0IG5hdkxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2IHVsXCIpO1xuICAgIGNvbnNvbGUubG9nKG5hdkxpbmspO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7IGxvYWRNYWluQ29udGVudCB9IGZyb20gXCIuL3dlYnNpdGUuanNcIjtcblxubG9hZE1haW5Db250ZW50KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9