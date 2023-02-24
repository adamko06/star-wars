exports.id = 554;
exports.ids = [554];
exports.modules = {

/***/ 3179:
/***/ ((module) => {

// Exports
module.exports = {
	"box": "Box_box__J4jOY",
	"box_item": "Box_box_item__ujKiZ",
	"box_item_overlay": "Box_box_item_overlay__1_UCM",
	"box_item_text": "Box_box_item_text__8p47p",
	"box_item_light": "Box_box_item_light__nhFzT",
	"box_item_dark": "Box_box_item_dark__PSp3N"
};


/***/ }),

/***/ 8554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_imgs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4067);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3179);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_3__);




const Box = ({ heroes , hero , keyIndex  })=>{
    const actualHeroSide = heroes === null || heroes === void 0 ? void 0 : heroes.map((hero)=>{
        if (hero.isFavorite === true) {
            if (hero.side === "light") {
                return (_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().box_item_light);
            }
            if (hero.side === "dark") {
                return (_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().box_item_dark);
            } else {
                return "";
            }
        }
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().box_item),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: `hero/${hero.id}`,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: actualHeroSide === null || actualHeroSide === void 0 ? void 0 : actualHeroSide[keyIndex],
                        src: _config_imgs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z[hero.name] || "https://www.edna.cz/runtime/userfiles/series/star-wars/Yoda-a2-b2b1b0b6e777597f84876486a22de50a.jpg"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().box_item_overlay),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().box_item_text),
                            children: hero.name
                        })
                    })
                ]
            })
        })
    }, hero.id);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Box);


/***/ })

};
;