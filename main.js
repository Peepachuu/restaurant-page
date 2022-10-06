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

    const infoSection = createInfoSection();
    main.appendChild(infoSection);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUM4Qzs7QUFFdkM7QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdURBQUc7QUFDdkI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMzQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25CMkM7QUFDRjtBQUNKOztBQUU5QjtBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFZO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLHdEQUFXO0FBQ25CLEtBQUs7QUFDTDtBQUNBO0FBQ0EsUUFBUSxzREFBWTtBQUNwQixLQUFLO0FBQ0w7QUFDQTtBQUNBLFFBQVEsa0RBQVE7QUFDaEIsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7OztBQ2YrQzs7QUFFL0MsNERBQWUsRyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lLmpzIiwid2VicGFjazovLy8uL3NyYy9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy93ZWJzaXRlLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgY29uc3QgY29udGFjdFNlY2lvbiA9IGNyZWF0ZUNvbnRhY3RTZWN0aW9uKCk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjb250YWN0U2VjaW9uKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdFNlY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGFjdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiQ09OVEFDVCBVU1wiO1xuXG4gICAgY29uc3QgZmlyc3RMb2NDYXJkID0gY3JlYXRlTG9jYXRpb25DYXJkKFwiQkxPT0RDT1VSVFwiLCBcIjk0MCBCTE9PUiBTVCBXXCIsIFwiNDE2LTkwMS04MTY2XCIpO1xuICAgIGNvbnN0IHNlY29uZExvY0NhcmQgPSBjcmVhdGVMb2NhdGlvbkNhcmQoXCJLRU5TSU5HVE9OXCIsIFwiMzI2IENPTExFR0UgU1RcIiwgXCI0MTYtOTIwLTM2NDdcIik7XG4gICAgY29uc3QgdGhpcmRMb2NDYXJkID0gY3JlYXRlTG9jYXRpb25DYXJkKFwiUVVFRU4gV0VTVFwiLCBcIjQ1MyBRVUVFTiBTVCBXXCIsIFwiNjQ3LTM0Ny0zNjQ3XCIpO1xuICAgIGNvbnN0IGZvcnRoTG9jQ2FyZCA9IGNyZWF0ZUxvY2F0aW9uQ2FyZChcIkFWRU5VRSBST0FEXCIsIFwiMTUwNyBBVkVOVUUgUkRcIiwgXCI0MTYtNzgxLTQ3NDdcIik7XG5cbiAgICBjb25zdCBsb2NhdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxvY2F0aW9ucy5hcHBlbmQoZmlyc3RMb2NDYXJkLCBzZWNvbmRMb2NDYXJkLCB0aGlyZExvY0NhcmQsIGZvcnRoTG9jQ2FyZCk7XG4gICAgbG9jYXRpb25zLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG5cbiAgICBjb250YWN0U2VjdGlvbi5hcHBlbmQoaGVhZGluZywgbG9jYXRpb25zKTtcbiAgICBjb250YWN0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcbiAgICByZXR1cm4gY29udGFjdFNlY3Rpb247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uQ2FyZChuZWlnaGJvdXJob29kLCBzdHJlZXQsIHRlbGVwaG9uZU51bWJlcikge1xuICAgIGNvbnN0IGxvY2F0aW9uQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbG9jTmVpZ2hib3VyaG9vZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBjb25zdCBsb2NTdHJlZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgY29uc3QgbG9jVGVsZXBob25lTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBsb2NOZWlnaGJvdXJob29kLnRleHRDb250ZW50ID0gbmVpZ2hib3VyaG9vZDtcbiAgICBsb2NTdHJlZXQudGV4dENvbnRlbnQgPSBzdHJlZXQ7XG4gICAgbG9jVGVsZXBob25lTnVtYmVyLnRleHRDb250ZW50ID0gdGVsZXBob25lTnVtYmVyO1xuXG4gICAgbG9jYXRpb25DYXJkLmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvblwiKTtcbiAgICBsb2NOZWlnaGJvdXJob29kLmNsYXNzTGlzdC5hZGQoXCJuZWlnaGJvdXJob29kXCIpO1xuICAgIGxvY1N0cmVldC5jbGFzc0xpc3QuYWRkKFwic3RyZWV0XCIpO1xuICAgIGxvY1RlbGVwaG9uZU51bWJlci5jbGFzc0xpc3QuYWRkKFwicGhvbmVcIik7XG5cbiAgICBsb2NhdGlvbkNhcmQuYXBwZW5kKGxvY05laWdoYm91cmhvb2QsIGxvY1N0cmVldCwgbG9jVGVsZXBob25lTnVtYmVyKTtcbiAgICByZXR1cm4gbG9jYXRpb25DYXJkO1xufSIsImltcG9ydCBpbWcgZnJvbSBcIi4vaW1hZ2VzL2J1cmdlcnVuc3BsYXNoLmpwZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEhvbWVQYWdlKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VjdGlvblwiKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBoZXJvLmNsYXNzTGlzdC5hZGQoXCJoZXJvXCIpO1xuXG4gICAgY29uc3QgaGVyb1RleHRTZWN0aW9uID0gY3JlYXRlaGVyb1RleHRTZWN0aW9uKCk7XG5cbiAgICBjb25zdCBoZXJvSW1hZ2UgPSBjcmVhdGVIZXJvSW1hZ2VTZWN0aW9uKCk7XG4gICAgaGVyb0ltYWdlLmNsYXNzTGlzdC5hZGQoXCJpbWFnZVwiKTtcblxuICAgIGhlcm8uYXBwZW5kKGhlcm9UZXh0U2VjdGlvbiwgaGVyb0ltYWdlKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGhlcm8pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVoZXJvVGV4dFNlY3Rpb24oKSB7XG4gICAgY29uc3QgaGVyb1RleHRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgY29uc3QgdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaGVyb0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgY29uc3QgaGVyb0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBvcmRlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBoZXJvSGVhZGluZy50ZXh0Q29udGVudCA9IFwiRXZlbiB0aGUgcGlja2llc3QgYnVyZ2VyIGxvdmVycyBlYXQgaGVyZS5cIjtcbiAgICBoZXJvSW5mby50ZXh0Q29udGVudCA9IFwiV2UgY3JhZnQgZnJlc2gsIHRhc3R5IGFuZCBsb2NhbGx5IHNvdXJjZWQgZWF0cyB0aGF0IG5vIGZvb2QgZW50aHVzaWFzdCBjYW4gcmVzaXN0LlwiO1xuICAgIG9yZGVyQnV0dG9uLnRleHRDb250ZW50ID0gXCJPUkRFUiBOT1dcIjtcblxuICAgIGhlcm9UZXh0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKTtcbiAgICB0ZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG5cbiAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZChoZXJvSGVhZGluZywgaGVyb0luZm8sIG9yZGVyQnV0dG9uKTtcbiAgICBoZXJvVGV4dFNlY3Rpb24uYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gaGVyb1RleHRTZWN0aW9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZXJvSW1hZ2VTZWN0aW9uKCkge1xuICAgIGNvbnN0IGhlcm9JbWFnZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBjb25zdCBoZXJvSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGhlcm9JbWFnZS5zcmMgPSBpbWc7XG4gICAgcmV0dXJuIGhlcm9JbWFnZTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWN0aW9uXCIpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgY29uc3QgaW5mb1NlY3Rpb24gPSBjcmVhdGVJbmZvU2VjdGlvbigpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoaW5mb1NlY3Rpb24pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbmZvU2VjdGlvbigpIHtcbiAgICBjb25zdCBpbmZvU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJTSUdOQVRVUkUgQlVSR0VSU1wiO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGluZm8udGV4dENvbnRlbnQgPSBcIk91ciBzaWduYXVyZSBidXJnZXJzIGFyZSBhbHdheXMgZnJlc2hseSBtYWRlLCBoYW5kLXNtYXNoZWQgdG8gb3JkZXIgd2l0aCAxMDAlIENlcnRpZmllZCBBbmd1cyBCZWVmIHRoYXQgaXMgZ3Jhc3MgZmVkIGFuZCBzdXBwb3J0cyBsb2NhbCBmYXJtcy4gRXF1aXBwZWQgd2l0aCB0aGUgZnJlc2hlc3QgaW5ncmVkaWVudHMsIG5vIHR3byBidXJnZXJzIGFyZSBhbGlrZSAtIGZyb20gc3dlZXQtc2Vla2Vycywgc21va2Vob3VzZSBmbGF2b3IgZmFucywgaGVhdCBjaGFtcGlvbnMsIGFuZCBmb2xrcyBqdXN0IGxvb2tpbmcgZm9yIGEgdGFzdHkgY2xhc3NpYywgd2UndmUgZ290IHlvdSBjb3ZlcmVkLlwiO1xuICAgIFxuICAgIGluZm9TZWN0aW9uLmFwcGVuZChoZWFkaW5nLCBpbmZvKTtcbiAgICByZXR1cm4gaW5mb1NlY3Rpb247XG59IiwiaW1wb3J0IHsgbG9hZENvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0LmpzXCI7XG5pbXBvcnQgeyBsb2FkSG9tZVBhZ2UgfSBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgeyBsb2FkTWVudSB9IGZyb20gXCIuL21lbnUuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRNYWluQ29udGVudCgpIHtcbiAgICBsb2FkSGVhZGVyKCk7XG4gICAgbG9hZEJvZHkoKTtcbn1cblxuZnVuY3Rpb24gbG9hZEhlYWRlcigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuICAgIG5hdi5hcHBlbmRDaGlsZChuYXZiYXIpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJSb3NzaW5pXCI7XG4gICAgLy8gTG9hZCB1cCBjaGlsZHJlbiBpbiBcbiAgICBjcmVhdGVOYXZiYXJDaGlsZChcIkhvbWVcIik7XG4gICAgY3JlYXRlTmF2YmFyQ2hpbGQoXCJNZW51XCIpO1xuICAgIGNyZWF0ZU5hdmJhckNoaWxkKFwiQ29udGFjdFwiKTtcbiAgICBzZXRMaW5rcygpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXZiYXJDaGlsZChuYW1lKSB7XG4gICAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsXCIpO1xuICAgIGNvbnN0IG5hdmJhckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgbmF2TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbmF2TGluay5jbGFzc0xpc3QuYWRkKG5hbWUpO1xuICAgIG5hdkxpbmsudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIG5hdmJhckVsZW1lbnQuYXBwZW5kQ2hpbGQobmF2TGluayk7XG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKG5hdmJhckVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBsb2FkQm9keSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgbG9hZEhvbWVQYWdlKCk7XG59XG5cbmZ1bmN0aW9uIHNldExpbmtzKCkge1xuICAgIGNvbnN0IGhvbWVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5Ib21lXCIpO1xuICAgIGNvbnN0IG1lbnVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5NZW51XCIpO1xuICAgIGNvbnN0IGNvbnRhY3RMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5Db250YWN0XCIpO1xuXG4gICAgY29udGFjdExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHNldEFjdGl2ZShjb250YWN0TGluayk7XG4gICAgICAgIGxvYWRDb250YWN0KCk7XG4gICAgfSk7XG4gICAgaG9tZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHNldEFjdGl2ZShob21lTGluayk7XG4gICAgICAgIGxvYWRIb21lUGFnZSgpO1xuICAgIH0pO1xuICAgIG1lbnVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzZXRBY3RpdmUobWVudUxpbmspO1xuICAgICAgICBsb2FkTWVudSgpO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyB3b3JraW5nIVwiKTtcbn1cblxuZnVuY3Rpb24gc2V0QWN0aXZlKGJ1dHRvbikge1xuICAgIGNvbnN0IG5hdkxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2IHVsXCIpO1xuICAgIGNvbnNvbGUubG9nKG5hdkxpbmspO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7IGxvYWRNYWluQ29udGVudCB9IGZyb20gXCIuL3dlYnNpdGUuanNcIjtcblxubG9hZE1haW5Db250ZW50KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9