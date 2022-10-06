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

    menuSection.append(infoSection, foodItemSection);
    main.appendChild(menuSection);
}

function createInfoSection() {
    const infoSection = document.createElement("section");

    const heading = document.createElement("h1");
    heading.textContent = "SIGNATURE BURGERS";

    const info = document.createElement("p");
    info.textContent = "Our signaure burgers are always freshly made, hand-smashed to order with 100% Certified Angus Beef that is grass fed and supports local farms. Equipped with the freshest ingredients, no two burgers are alike - from sweet-seekers, smokehouse flavor fans, heat champions, and folks just looking for a tasty classic, we've got you covered.";

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
    const classicSmashBurger = createFoodCard("CLASSIC SMASH BURGER", "640 calories", "Certified Angus Beef, American cheese, lettuce, tomatoes, red onions, pickles, Smash Sauce®, ketchup, toasted bun.");

    foodItemSection.append(coloradoBurger, smokedBaconBrisketBurger, truffleMushroomBurger, barbequeBaconCheddarBurger, classicSmashBurger, baconSmashBurger);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUM4Qzs7QUFFdkM7QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdURBQUc7QUFDdkI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMzQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRDJDO0FBQ0Y7QUFDSjs7QUFFOUI7QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzREFBWTtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSx3REFBVztBQUNuQixLQUFLO0FBQ0w7QUFDQTtBQUNBLFFBQVEsc0RBQVk7QUFDcEIsS0FBSztBQUNMO0FBQ0E7QUFDQSxRQUFRLGtEQUFRO0FBQ2hCLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O1VDdEVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7QUNmK0M7O0FBRS9DLDREQUFlLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2Vic2l0ZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGNvbnN0IGNvbnRhY3RTZWNpb24gPSBjcmVhdGVDb250YWN0U2VjdGlvbigpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFjdFNlY2lvbik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RTZWN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRhY3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkNPTlRBQ1QgVVNcIjtcblxuICAgIGNvbnN0IGZpcnN0TG9jQ2FyZCA9IGNyZWF0ZUxvY2F0aW9uQ2FyZChcIkJMT09EQ09VUlRcIiwgXCI5NDAgQkxPT1IgU1QgV1wiLCBcIjQxNi05MDEtODE2NlwiKTtcbiAgICBjb25zdCBzZWNvbmRMb2NDYXJkID0gY3JlYXRlTG9jYXRpb25DYXJkKFwiS0VOU0lOR1RPTlwiLCBcIjMyNiBDT0xMRUdFIFNUXCIsIFwiNDE2LTkyMC0zNjQ3XCIpO1xuICAgIGNvbnN0IHRoaXJkTG9jQ2FyZCA9IGNyZWF0ZUxvY2F0aW9uQ2FyZChcIlFVRUVOIFdFU1RcIiwgXCI0NTMgUVVFRU4gU1QgV1wiLCBcIjY0Ny0zNDctMzY0N1wiKTtcbiAgICBjb25zdCBmb3J0aExvY0NhcmQgPSBjcmVhdGVMb2NhdGlvbkNhcmQoXCJBVkVOVUUgUk9BRFwiLCBcIjE1MDcgQVZFTlVFIFJEXCIsIFwiNDE2LTc4MS00NzQ3XCIpO1xuXG4gICAgY29uc3QgbG9jYXRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsb2NhdGlvbnMuYXBwZW5kKGZpcnN0TG9jQ2FyZCwgc2Vjb25kTG9jQ2FyZCwgdGhpcmRMb2NDYXJkLCBmb3J0aExvY0NhcmQpO1xuICAgIGxvY2F0aW9ucy5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuXG4gICAgY29udGFjdFNlY3Rpb24uYXBwZW5kKGhlYWRpbmcsIGxvY2F0aW9ucyk7XG4gICAgY29udGFjdFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XG4gICAgcmV0dXJuIGNvbnRhY3RTZWN0aW9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMb2NhdGlvbkNhcmQobmVpZ2hib3VyaG9vZCwgc3RyZWV0LCB0ZWxlcGhvbmVOdW1iZXIpIHtcbiAgICBjb25zdCBsb2NhdGlvbkNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGxvY05laWdoYm91cmhvb2QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgY29uc3QgbG9jU3RyZWV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGNvbnN0IGxvY1RlbGVwaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgbG9jTmVpZ2hib3VyaG9vZC50ZXh0Q29udGVudCA9IG5laWdoYm91cmhvb2Q7XG4gICAgbG9jU3RyZWV0LnRleHRDb250ZW50ID0gc3RyZWV0O1xuICAgIGxvY1RlbGVwaG9uZU51bWJlci50ZXh0Q29udGVudCA9IHRlbGVwaG9uZU51bWJlcjtcblxuICAgIGxvY2F0aW9uQ2FyZC5jbGFzc0xpc3QuYWRkKFwibG9jYXRpb25cIik7XG4gICAgbG9jTmVpZ2hib3VyaG9vZC5jbGFzc0xpc3QuYWRkKFwibmVpZ2hib3VyaG9vZFwiKTtcbiAgICBsb2NTdHJlZXQuY2xhc3NMaXN0LmFkZChcInN0cmVldFwiKTtcbiAgICBsb2NUZWxlcGhvbmVOdW1iZXIuY2xhc3NMaXN0LmFkZChcInBob25lXCIpO1xuXG4gICAgbG9jYXRpb25DYXJkLmFwcGVuZChsb2NOZWlnaGJvdXJob29kLCBsb2NTdHJlZXQsIGxvY1RlbGVwaG9uZU51bWJlcik7XG4gICAgcmV0dXJuIGxvY2F0aW9uQ2FyZDtcbn0iLCJpbXBvcnQgaW1nIGZyb20gXCIuL2ltYWdlcy9idXJnZXJ1bnNwbGFzaC5qcGdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRIb21lUGFnZSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlY3Rpb25cIik7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICBjb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgaGVyby5jbGFzc0xpc3QuYWRkKFwiaGVyb1wiKTtcblxuICAgIGNvbnN0IGhlcm9UZXh0U2VjdGlvbiA9IGNyZWF0ZWhlcm9UZXh0U2VjdGlvbigpO1xuXG4gICAgY29uc3QgaGVyb0ltYWdlID0gY3JlYXRlSGVyb0ltYWdlU2VjdGlvbigpO1xuICAgIGhlcm9JbWFnZS5jbGFzc0xpc3QuYWRkKFwiaW1hZ2VcIik7XG5cbiAgICBoZXJvLmFwcGVuZChoZXJvVGV4dFNlY3Rpb24sIGhlcm9JbWFnZSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChoZXJvKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlaGVyb1RleHRTZWN0aW9uKCkge1xuICAgIGNvbnN0IGhlcm9UZXh0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGhlcm9IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGNvbnN0IGhlcm9JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3Qgb3JkZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgaGVyb0hlYWRpbmcudGV4dENvbnRlbnQgPSBcIkV2ZW4gdGhlIHBpY2tpZXN0IGJ1cmdlciBsb3ZlcnMgZWF0IGhlcmUuXCI7XG4gICAgaGVyb0luZm8udGV4dENvbnRlbnQgPSBcIldlIGNyYWZ0IGZyZXNoLCB0YXN0eSBhbmQgbG9jYWxseSBzb3VyY2VkIGVhdHMgdGhhdCBubyBmb29kIGVudGh1c2lhc3QgY2FuIHJlc2lzdC5cIjtcbiAgICBvcmRlckJ1dHRvbi50ZXh0Q29udGVudCA9IFwiT1JERVIgTk9XXCI7XG5cbiAgICBoZXJvVGV4dFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInRleHRcIik7XG4gICAgdGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuXG4gICAgdGV4dENvbnRhaW5lci5hcHBlbmQoaGVyb0hlYWRpbmcsIGhlcm9JbmZvLCBvcmRlckJ1dHRvbik7XG4gICAgaGVyb1RleHRTZWN0aW9uLmFwcGVuZENoaWxkKHRleHRDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIGhlcm9UZXh0U2VjdGlvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVyb0ltYWdlU2VjdGlvbigpIHtcbiAgICBjb25zdCBoZXJvSW1hZ2VTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgY29uc3QgaGVyb0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBoZXJvSW1hZ2Uuc3JjID0gaW1nO1xuICAgIHJldHVybiBoZXJvSW1hZ2U7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VjdGlvblwiKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIGNvbnN0IG1lbnVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgY29uc3QgaW5mb1NlY3Rpb24gPSBjcmVhdGVJbmZvU2VjdGlvbigpO1xuICAgIGNvbnN0IGZvb2RJdGVtU2VjdGlvbiA9IGNyZWF0ZUZvb2RJdGVtU2VjdGlvbigpO1xuXG4gICAgbWVudVNlY3Rpb24uYXBwZW5kKGluZm9TZWN0aW9uLCBmb29kSXRlbVNlY3Rpb24pO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudVNlY3Rpb24pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbmZvU2VjdGlvbigpIHtcbiAgICBjb25zdCBpbmZvU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJTSUdOQVRVUkUgQlVSR0VSU1wiO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGluZm8udGV4dENvbnRlbnQgPSBcIk91ciBzaWduYXVyZSBidXJnZXJzIGFyZSBhbHdheXMgZnJlc2hseSBtYWRlLCBoYW5kLXNtYXNoZWQgdG8gb3JkZXIgd2l0aCAxMDAlIENlcnRpZmllZCBBbmd1cyBCZWVmIHRoYXQgaXMgZ3Jhc3MgZmVkIGFuZCBzdXBwb3J0cyBsb2NhbCBmYXJtcy4gRXF1aXBwZWQgd2l0aCB0aGUgZnJlc2hlc3QgaW5ncmVkaWVudHMsIG5vIHR3byBidXJnZXJzIGFyZSBhbGlrZSAtIGZyb20gc3dlZXQtc2Vla2Vycywgc21va2Vob3VzZSBmbGF2b3IgZmFucywgaGVhdCBjaGFtcGlvbnMsIGFuZCBmb2xrcyBqdXN0IGxvb2tpbmcgZm9yIGEgdGFzdHkgY2xhc3NpYywgd2UndmUgZ290IHlvdSBjb3ZlcmVkLlwiO1xuXG4gICAgaW5mb1NlY3Rpb24uYXBwZW5kKGhlYWRpbmcsIGluZm8pO1xuICAgIHJldHVybiBpbmZvU2VjdGlvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vZEl0ZW1TZWN0aW9uKCkge1xuICAgIGNvbnN0IGZvb2RJdGVtU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXG4gICAgY29uc3QgY29sb3JhZG9CdXJnZXIgPSBjcmVhdGVGb29kQ2FyZChcIkNPTE9SQURPIEJVUkdFUlwiLCBcIjc3MCBjYWxvcmllc1wiLCBcIkNlcnRpZmllZCBBbmd1cyBCZWVmLCBwZXBwZXIgamFjayBjaGVlc2UsIG1lbHRlZCBjaGVkZGFyIGNoZWVzZSwgZ3JpbGxlZCBBbmFoZWltIGNoaWxlcywgbGV0dHVjZSwgdG9tYXRvZXMsIG1heW8sIHRvYXN0ZWQgc3BpY3kgY2hpcG90bGUgYnVuLlwiKTtcbiAgICBjb25zdCBzbW9rZWRCYWNvbkJyaXNrZXRCdXJnZXIgPSBjcmVhdGVGb29kQ2FyZChcIlNNT0tFRCBCQUNPTiBCUklTS0VUIEJVUkdFUlwiLCBcIjk1MCBjYWxvcmllc1wiLCBcIkNlcnRpZmllZCBBbmd1cyBCZWVmLCBzbW9rZWQgYWdlZCBjaGVkZGFyIGNoZWVzZSwgYnJpc2tldCwgYXBwbGV3b29kIHNtb2tlZCBiYWNvbiwgcGlja2xlcywgYmJxIHNhdWNlLCB0b2FzdGVkIGJyaW9jaGUgYnVuLlwiKTtcbiAgICBjb25zdCB0cnVmZmxlTXVzaHJvb21CdXJnZXIgPSBjcmVhdGVGb29kQ2FyZChcIlRSVUZGTEUgTVVTSFJPT00gU1dJU1MgQlVSR0VSXCIsIFwiNjUwIGNhbG9yaWVzXCIsIFwiQ2VydGlmaWVkIEFuZ3VzIEJlZWYsIGFnZWQgU3dpc3MgY2hlZXNlLCBzYXV0w6llZCBjcmltaW5pIG11c2hyb29tcywgdHJ1ZmZsZSBtYXlvLCB0b2FzdGVkIGJ1bi5cIik7XG4gICAgY29uc3QgYmFyYmVxdWVCYWNvbkNoZWRkYXJCdXJnZXIgPSBjcmVhdGVGb29kQ2FyZChcIkJCUSBCQUNPTiBDSEVEREFSIEJVUkdFUlwiLCBcIjc1MCBjYWxvcmllc1wiLCBcIkNlcnRpZmllZCBBbmd1cyBCZWVmLCBhZ2VkIGNoZWRkYXIgY2hlZXNlLCBhcHBsZXdvb2Qgc21va2VkIGJhY29uLCBoYXlzdGFjayBvbmlvbnMsIGJicSBzYXVjZSwgdG9hc3RlZCBidW4uXCIpO1xuICAgIGNvbnN0IGJhY29uU21hc2hCdXJnZXIgPSBjcmVhdGVGb29kQ2FyZChcIkJBQ09OIFNNQVNIIEJVUkdFUlwiLCBcIjY5MCBjYWxvcmllc1wiLCBcIkNlcnRpZmllZCBBbmd1cyBCZWVmLCBBbWVyaWNhbiBjaGVlc2UsIGFwcGxld29vZCBzbW9rZWQgYmFjb24sIGxldHR1Y2UsIHRvbWF0b2VzLCBtYXlvLCB0b2FzdGVkIGJ1bi4gXCIpO1xuICAgIGNvbnN0IGNsYXNzaWNTbWFzaEJ1cmdlciA9IGNyZWF0ZUZvb2RDYXJkKFwiQ0xBU1NJQyBTTUFTSCBCVVJHRVJcIiwgXCI2NDAgY2Fsb3JpZXNcIiwgXCJDZXJ0aWZpZWQgQW5ndXMgQmVlZiwgQW1lcmljYW4gY2hlZXNlLCBsZXR0dWNlLCB0b21hdG9lcywgcmVkIG9uaW9ucywgcGlja2xlcywgU21hc2ggU2F1Y2XCriwga2V0Y2h1cCwgdG9hc3RlZCBidW4uXCIpO1xuXG4gICAgZm9vZEl0ZW1TZWN0aW9uLmFwcGVuZChjb2xvcmFkb0J1cmdlciwgc21va2VkQmFjb25Ccmlza2V0QnVyZ2VyLCB0cnVmZmxlTXVzaHJvb21CdXJnZXIsIGJhcmJlcXVlQmFjb25DaGVkZGFyQnVyZ2VyLCBjbGFzc2ljU21hc2hCdXJnZXIsIGJhY29uU21hc2hCdXJnZXIpO1xuICAgIHJldHVybiBmb29kSXRlbVNlY3Rpb247XG59XG5mdW5jdGlvbiBjcmVhdGVGb29kQ2FyZChuYW1lLCBjYWxvcmllcywgZGVzY3JpcHRpb24pIHtcbiAgICBjb25zdCBmb29kTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBmb29kTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgICBjb25zdCBjYWxJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY2FsSW5mby50ZXh0Q29udGVudCA9IGNhbG9yaWVzO1xuXG4gICAgY29uc3QgZm9vZERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZm9vZERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG5cbiAgICBjb25zdCBmb29kQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9vZENhcmQuYXBwZW5kKGZvb2ROYW1lLCBjYWxJbmZvLCBmb29kRGVzY3JpcHRpb24pO1xuICAgIFxuICAgIHJldHVybiBmb29kQ2FyZDtcbn0iLCJpbXBvcnQgeyBsb2FkQ29udGFjdCB9IGZyb20gXCIuL2NvbnRhY3QuanNcIjtcbmltcG9ydCB7IGxvYWRIb21lUGFnZSB9IGZyb20gXCIuL2hvbWUuanNcIjtcbmltcG9ydCB7IGxvYWRNZW51IH0gZnJvbSBcIi4vbWVudS5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZE1haW5Db250ZW50KCkge1xuICAgIGxvYWRIZWFkZXIoKTtcbiAgICBsb2FkQm9keSgpO1xufVxuXG5mdW5jdGlvbiBsb2FkSGVhZGVyKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXG4gICAgbmF2LmFwcGVuZENoaWxkKG5hdmJhcik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlJvc3NpbmlcIjtcbiAgICAvLyBMb2FkIHVwIGNoaWxkcmVuIGluIFxuICAgIGNyZWF0ZU5hdmJhckNoaWxkKFwiSG9tZVwiKTtcbiAgICBjcmVhdGVOYXZiYXJDaGlsZChcIk1lbnVcIik7XG4gICAgY3JlYXRlTmF2YmFyQ2hpbGQoXCJDb250YWN0XCIpO1xuICAgIHNldExpbmtzKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdmJhckNoaWxkKG5hbWUpIHtcbiAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidWxcIik7XG4gICAgY29uc3QgbmF2YmFyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBuYXZMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBuYXZMaW5rLmNsYXNzTGlzdC5hZGQobmFtZSk7XG4gICAgbmF2TGluay50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgbmF2YmFyRWxlbWVudC5hcHBlbmRDaGlsZChuYXZMaW5rKTtcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQobmF2YmFyRWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRCb2R5KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBsb2FkSG9tZVBhZ2UoKTtcbn1cblxuZnVuY3Rpb24gc2V0TGlua3MoKSB7XG4gICAgY29uc3QgaG9tZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLkhvbWVcIik7XG4gICAgY29uc3QgbWVudUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLk1lbnVcIik7XG4gICAgY29uc3QgY29udGFjdExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLkNvbnRhY3RcIik7XG5cbiAgICBjb250YWN0TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc2V0QWN0aXZlKGNvbnRhY3RMaW5rKTtcbiAgICAgICAgbG9hZENvbnRhY3QoKTtcbiAgICB9KTtcbiAgICBob21lTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc2V0QWN0aXZlKGhvbWVMaW5rKTtcbiAgICAgICAgbG9hZEhvbWVQYWdlKCk7XG4gICAgfSk7XG4gICAgbWVudUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHNldEFjdGl2ZShtZW51TGluayk7XG4gICAgICAgIGxvYWRNZW51KCk7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHdvcmtpbmchXCIpO1xufVxuXG5mdW5jdGlvbiBzZXRBY3RpdmUoYnV0dG9uKSB7XG4gICAgY29uc3QgbmF2TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXYgdWxcIik7XG4gICAgY29uc29sZS5sb2cobmF2TGluayk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHsgbG9hZE1haW5Db250ZW50IH0gZnJvbSBcIi4vd2Vic2l0ZS5qc1wiO1xuXG5sb2FkTWFpbkNvbnRlbnQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=