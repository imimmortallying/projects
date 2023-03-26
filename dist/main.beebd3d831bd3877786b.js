/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./css/main.css */ "./src/css/main.css?b1b3"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Document</title>\n    <link rel=\"stylesheet\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\n    \n</head>\n<body>\n\n    <div id=\"prepared-password-block\">\n        <span id=\"generated-password\">psfSFDF23fSc23</span>\n        <svg id=\"Layer_1\"  width='30' height='30' data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\"><defs></defs><title>Copy</title><path class=\"cls-1\" d=\"M75,80H29.31a5,5,0,0,1-3.53-8.54L71.46,25.78A5,5,0,0,1,80,29.31V75A5,5,0,0,1,75,80ZM41.38,70H70V41.38Z\"/><path class=\"cls-1\" d=\"M105.85,155H29.31a5,5,0,0,1-5-5V75a5,5,0,0,1,10,0v70h71.54A14.17,14.17,0,0,0,120,130.85V34.31H75a5,5,0,1,1,0-10h50a5,5,0,0,1,5,5V130.85A24.17,24.17,0,0,1,105.85,155Z\"/><path class=\"cls-1\" d=\"M151.54,175.69H75a5,5,0,0,1-5-5V150a5,5,0,0,1,10,0v15.69h71.54a14.17,14.17,0,0,0,14.15-14.15V54.81H125a5,5,0,0,1,0-10h45.69a5,5,0,0,1,5,5V151.54A24.17,24.17,0,0,1,151.54,175.69Z\"/><path class=\"cls-1\" d=\"M100,105H50a5,5,0,0,1,0-10h50a5,5,0,0,1,0,10Z\"/><path class=\"cls-1\" d=\"M100,129.91H50a5,5,0,0,1,0-10h50a5,5,0,0,1,0,10Z\"/><path class=\"cls-1\" d=\"M150,129.91H125a5,5,0,0,1,0-10h25a5,5,0,0,1,0,10Z\"/><path class=\"cls-1\" d=\"M150,105H125a5,5,0,0,1,0-10h25a5,5,0,0,1,0,10Z\"/></svg>\n    </div>\n\n    <div id=\"generate-password-block\">\n\n        <div id=\"password-length-block\">\n            <div id=\"password-length-text\">\n                Character Length\n                <span id=\"length-number\">10</span>\n            </div>\n            \n            <div id=\"slider-block\">\n\n                <input type=\"range\" min=\"8\" max=\"20\" value=\"10\" id=\"slider\">\n                <div id=\"progress-line\" ></div>\n                \n            </div>\n            \n        </div>\n\n        <div id=\"password-strength-block\">\n            <form id=\"checkboxes\">\n                <label class=\"checkbox\">\n                    <input type=\"checkbox\" class ='checkbox_input' value=\"uppercase\" checked = 'true'>\n                    <span class=\"new_checkbox\"></span>\n                    Include Uppercase Letters\n                </label>\n                <label class=\"checkbox\">\n                    <input type=\"checkbox\" class ='checkbox_input' value=\"lowercase\" checked = 'true'>\n                    <span class=\"new_checkbox\"></span>\n                    Include Lowercase Letters\n                </label>\n                <label class=\"checkbox\">\n                    <input type=\"checkbox\" class ='checkbox_input' value=\"numbers\" checked = 'true'>\n                    <span class=\"new_checkbox\"></span>\n                    Include Numbers\n                </label>\n                <label class=\"checkbox\">\n                    <input type=\"checkbox\" class ='checkbox_input' value=\"symbols\" >\n                    <span class=\"new_checkbox\"></span>\n                    Include Symblos\n                </label>\n            </form>\n\n        </div>\n        <div id=\"show-strength-block\">\n\n            <span>STRENGTH</span>\n\n            <div id=\"show-strength-bar\">\n                <span id=\"password-strength-name\">STRONG</span>\n                <div class=\"strength-bar\"></div>\n                <div class=\"strength-bar\"></div>\n                <div class=\"strength-bar\"></div>\n                <div class=\"strength-bar\"></div>\n            </div>\n\n        </div>\n\n        <button id=\"generate-button\">\n            <span id=\"generate-text\">GENERATE</span>\n        </button>\n\n    </div>\n    <!-- <" + "script src=\"./main.js\"><" + "/script> -->\n</body>\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/css/main.css?c48f":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/normalize.css":
/*!*******************************!*\
  !*** ./src/css/normalize.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/main.css?b1b3":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b88d04fba731603756b1.css";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 				scriptUrl = document.currentScript.src;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.css */ "./src/css/main.css?c48f");
/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/reset.css */ "./src/css/reset.css");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/normalize.css */ "./src/css/normalize.css");
// для автоматического обновления html и css







let progressline = document.querySelector('#progress-line');
const slider = document.querySelector('#slider');
let button = document.querySelector('#generate-button');
let buttonText = document.querySelector('#generate-text');
const generatedPassword = document.querySelector('#generated-password');


const lengthNumber = document.querySelector('#length-number');

const checkboxes = document.querySelectorAll('.checkbox_input');
const strengthBars = document.querySelectorAll('.strength-bar');

const passwordStrengthName = document.querySelector('#password-strength-name');

const passStrength = ['NONE','MEDIUM', 'GOOD', 'STRONG', 'VERY STRONG'];

// CSS part......................................

//
// change length of the div before the slider, show password length
//
slider.addEventListener('input', function(){
    let length = ((12 - (20 - this.value))*(460/12));
    progressline.style.width = `${length}px`;
    lengthNumber.innerHTML = this.value;
});

//
// paint the strength bars in according with checked checkboxes and password's length
//

// first painting from html
let counter = 3;
for (let i = 0; i < 3; i++){
    strengthBars[i].classList.add('active');
};

//painting loop cooperated with functions below and counting strength points (COUNTER) from checkboxes
for (let check of checkboxes){
   
    check.addEventListener('click', function(e){

        if (check.checked) {
            counter++;
            calculateStrengthPoints();
            paintStrengthBar();
            disableLastCheckbox();
            generatePool(e);
            
        } 
        
        else {
            counter--;
            calculateStrengthPoints();
            paintStrengthBar();
            disableLastCheckbox();
            generatePool(e);
            
        }
    })
    
}

// disable / enable last checked checkbox TO MANY IFS! how to rewrite the function
function disableLastCheckbox(){
    for (let check of checkboxes){
      if (counter === 1){
          if (check.checked === true){
              check.checked = false;
              check.disabled = true;  
          }
        
      } else if (counter > 1){
          if (check.disabled === true){
              check.checked = true;
              check.disabled = false;  
          }
      }
      
  }  
  }

// count strength POINTS of passwords's length
let points = 1; // value from starting HTML
slider.addEventListener('input', function(){
    passwordLength = +lengthNumber.textContent;
    points = Math.floor((this.value - 8)/3);
    calculateStrengthPoints();
    paintStrengthBar();
})

// count TOTAL strength points (POINTS from slider + COUNTER from checkboxes)  to calculate strength of the password
let strPoints = 3; // value from starting HTML
function calculateStrengthPoints(){
    strPoints = counter + points;
}

// function paintStrengthBars and change password's strength name
let toWhichBarPaint;
function paintStrengthBar(){

    toWhichBarPaint = Math.ceil(strPoints/2);

    for (let i = toWhichBarPaint; i < strengthBars.length; i++){
        strengthBars[i].classList.remove('active');
    }

    for (let i = 0; i < toWhichBarPaint; i++){
        strengthBars[i].classList.add('active');
    }
// change strength name
    passwordStrengthName.textContent = passStrength[toWhichBarPaint]
}

//
// button animation
//
// function hoverOnButton(){
//     buttonText.classList.add('active');
// }

// function hoverOffButton(){
//     buttonText.classList.remove('active');
// }

// functional part....................................



//
// generate password
//

// lengthNumber
let passwordLength = +lengthNumber.textContent;

// function creates an array on NUM elements by dividing LENGTH to NUM random nums that summs into LENGTH
let numArr = [];
function rndQuantityOfCharactersNewArray (){
    numArr = [];
    rndQuantityOfCharacters(passwordLength, counter);
    return numArr}

// change NUM TO QUANTITY OF CHECKED CHECKBOXES and LENGTH TO PASSWORD LENGTH
function rndQuantityOfCharacters (length, num) {

    let newNum, restNum, maxNum, maxIndex;
    
    if (numArr.length == 0){

        maxNum = passwordLength;
        numArr.push(maxNum);

        rndQuantityOfCharacters (length, num);
    } else if (numArr.length < num) {

        maxNum = Math.max(...numArr);
        maxIndex = numArr.indexOf(maxNum);

        // delete max number using it's index maxIndex
        numArr.splice(maxIndex,1); 
        newNum = Math.ceil(Math.random() * (maxNum - 1));
        restNum = maxNum - newNum;

        numArr.unshift(newNum);
        numArr.push(restNum);

        rndQuantityOfCharacters (passwordLength, counter);

    }
}


// generate symbols pool of chosen checkboxes
let pool = ['uppercase', 'lowercase', 'numbers'] // starting pool from HTML
function generatePool(e){
    let currentCheckbox =  e.target.closest('input');
    if (currentCheckbox .checked){
        pool.push(e.target.closest('input').value);
  
    } 
    else {
        let indexOfPool = pool.indexOf(e.target.closest('input').value)
        pool.splice(indexOfPool, 1);
    }
    
}

// button
button.addEventListener('click', function(){
    rndQuantityOfCharactersNewArray ();
    generateObj();
    generateAndShowPassword();
})

// object generation
let obj = {};
function generateObj(){
    obj = {};
    let keys = [];
    for (let i = 0; i<pool.length; i++){
        keys[i] = `pool${i+1}`;
    }

    for (let i = 0; i<keys.length; i++){
        obj[keys[i]] = {name: pool[i], quantity: numArr[i]};
    }

    // console.log(obj)
}

// characters pool
let checkboxesValues = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!()-.?[]_`~;:@#$%^&*+=',

}

function generateAndShowPassword(){
    let compiledPool ='';
    let finalPassword = ''
    let keys = Object.keys(obj);
    for (let key of keys){
        for (let i = 0; i<obj[key].quantity; i++){
            compiledPool += checkboxesValues[obj[key].name].charAt(Math.floor(Math.random() * checkboxesValues[obj[key].name].length));
        }
    }
    finalPassword = compiledPool.split("").sort(function(){return 0.5-Math.random()}).join("");
    generatedPassword.textContent = finalPassword;
    return finalPassword;

}

//
// copy generated password
//
let copyText = document.querySelector('#Layer_1')

copyText.addEventListener('click', ()=>{
    navigator.clipboard.writeText(generatedPassword.textContent)
})
})();

/******/ })()
;
//# sourceMappingURL=main.beebd3d831bd3877786b.js.map