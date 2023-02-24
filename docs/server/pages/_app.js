(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3835:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__g5y_B",
	"footer_lyrics": "Footer_footer_lyrics__cCNW_",
	"lightAnimation": "Footer_lightAnimation__cSEam",
	"darkAnimation": "Footer_darkAnimation__hAqJ0"
};


/***/ }),

/***/ 3829:
/***/ ((module) => {

// Exports
module.exports = {
	"header_nav": "Header_header_nav__WcVZ4",
	"header_logo": "Header_header_logo___Vg8q",
	"header_badge": "Header_header_badge__XmT2Z"
};


/***/ }),

/***/ 2911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ GET_HEROES),
/* harmony export */   "k": () => (/* binding */ GET_HERO)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const GET_HEROES = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query getHeroes {
    heroes {
      id
      name
      side
      gender
      height
      mass
      hair_color
      skin_color
      films
      isFavorite
    }
  }
`;
const GET_HERO = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query getHero($id: ID!) {
    hero(id: $id) {
      id
      name
      side
      gender
      height
      mass
      hair_color
      skin_color
      films
      isFavorite
    }
  }
`;



/***/ }),

/***/ 3405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: external "@reduxjs/toolkit"
const toolkit_namespaceObject = require("@reduxjs/toolkit");
;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: ./redux/reducers/filterByMovieReducer.js
const filterByMovieReducer = (state = 0, action)=>{
    switch(action.type){
        case "CURRENTEPISODE":
            return state = action;
        default:
            return state;
    }
};
/* harmony default export */ const reducers_filterByMovieReducer = (filterByMovieReducer);

;// CONCATENATED MODULE: ./redux/reducers/pageReducer.js
const pageReducer = (state = 1, action)=>{
    switch(action.type){
        case "NEXTPAGE":
            return state + 1;
        case "PREVIOUSPAGE":
            return state - 1;
        case "DEFAULTPAGE":
            return 1;
        default:
            return state;
    }
};
/* harmony default export */ const reducers_pageReducer = (pageReducer);

;// CONCATENATED MODULE: external "sweetalert2"
const external_sweetalert2_namespaceObject = require("sweetalert2");
var external_sweetalert2_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_namespaceObject);
;// CONCATENATED MODULE: ./helpers/mainHelper.js

const isMobile = ()=>window.innerWidth <= 480;
const swalWrapper = (icon, title)=>{
    external_sweetalert2_default().fire({
        position: isMobile() ? "bottom" : "bottom-end",
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 1500,
        background: icon == "success" ? "#002600" : "#29181a"
    });
};

;// CONCATENATED MODULE: ./redux/reducers/heroesReducer.js

const initialState = [];
let favObtained;
const heroesReducer = (state = initialState, action)=>{
    switch(action.type){
        case "ADDHERO":
            const addedHeroes = state.map((hero)=>{
                if (hero.id === action.hero.id && hero.isFavorite === false) {
                    swalWrapper("success", "Hero Successfully Added");
                    return {
                        ...hero,
                        isFavorite: true
                    };
                }
                if (hero.id === action.hero.id && hero.isFavorite === true) {
                    swalWrapper("error", "This Hero Is Already Added");
                    return {
                        ...hero
                    };
                } else {
                    return {
                        ...hero
                    };
                }
            });
            return addedHeroes;
        case "REMOVEHERO":
            const removedHeroes = state.map((hero)=>{
                if (hero.id === action.hero.id && hero.isFavorite === true) {
                    swalWrapper("success", "Hero Successfully Removed");
                    return {
                        ...hero,
                        isFavorite: false,
                        side: "noSide"
                    };
                }
                if (hero.id === action.hero.id && hero.isFavorite === false) {
                    swalWrapper("error", "This Hero Is Already Removed");
                    return {
                        ...hero
                    };
                } else {
                    return {
                        ...hero
                    };
                }
            });
            return removedHeroes;
        case "RESETHEROES":
            const resetHeroes = state.map((hero)=>{
                return {
                    ...hero,
                    isFavorite: false,
                    side: "noSide"
                };
            });
            swalWrapper("success", "Favorites Successfully Reseted");
            return resetHeroes;
        case "ADDHEROSIDE":
            const updatedFavorites = state.map((hero)=>{
                return hero.id === action.hero.id ? {
                    ...hero,
                    side: action.hero.side
                } : {
                    ...hero
                };
            });
            return updatedFavorites;
        case "SETHEROES":
            var ref;
            const reducedFavorites = (ref = action.heroes) === null || ref === void 0 ? void 0 : ref.map(({ id , name , isFavorite , side , films  })=>({
                    id,
                    name,
                    isFavorite,
                    side,
                    films
                }));
            return reducedFavorites;
        default:
            return state;
    }
};
/* harmony default export */ const reducers_heroesReducer = (heroesReducer);

;// CONCATENATED MODULE: ./redux/reducers.js




// COMBINED REDUCERS
const reducers = (0,external_redux_namespaceObject.combineReducers)({
    heroes: reducers_heroesReducer,
    filterByMovie: reducers_filterByMovieReducer,
    pagination: reducers_pageReducer
});
/* harmony default export */ const redux_reducers = (reducers);

// EXTERNAL MODULE: ./graphql/quieries/heroQueries.js
var heroQueries = __webpack_require__(2911);
;// CONCATENATED MODULE: ./redux/store.js






const middleware = [
    (external_redux_thunk_default())
];
const client = new client_.ApolloClient({
    // link: new HttpLink({ uri: 'http://localhost:5002/graphql' }),
    link: new client_.HttpLink({
        uri: "http://starwarsapi-env-1.eba-8cvjpnzu.eu-central-1.elasticbeanstalk.com/graphql"
    }),
    cache: new client_.InMemoryCache()
});
const fetchInitialData = async ()=>{
    const { data  } = await client.query({
        query: heroQueries/* GET_HEROES */.S
    });
    return data;
};
const store = (0,toolkit_namespaceObject.configureStore)({
    reducer: redux_reducers,
    middleware: [
        ...middleware
    ],
    devTools: "production" !== "production"
});
store.dispatch(async ()=>{
    const data = await fetchInitialData();
    store.dispatch({
        type: "SETHEROES",
        heroes: data.heroes
    });
});
const makeStore = ()=>store;
const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makeStore);


;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./redux/actions/pageAction.js
var pageAction = __webpack_require__(838);
// EXTERNAL MODULE: ./redux/actions/filterByMovieAction.js
var filterByMovieAction = __webpack_require__(6941);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/Header/index.module.scss
var index_module = __webpack_require__(3829);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
;// CONCATENATED MODULE: ./components/Header/index.js








const Header = /*#__PURE__*/ external_react_default().forwardRef(({ _  }, ref)=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    const favorites = (0,external_react_redux_.useSelector)((state)=>state.heroes);
    const { 0: numberOfHereos , 1: setNumberOfHereos  } = (0,external_react_.useState)();
    (0,external_react_.useEffect)(()=>{
        setNumberOfHereos(favorites.filter((hero)=>hero.isFavorite === true).length);
    }, [
        favorites
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        ref: ref,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (index_module_default()).header_nav,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: (index_module_default()).header_logo,
                            onClick: ()=>{
                                dispatch((0,pageAction/* defaultPage */.Hf)());
                                dispatch((0,filterByMovieAction/* currentFilterByMovie */.K)());
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                alt: "starwars",
                                src: "/logo.svg"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: numberOfHereos > 0 && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/favorites",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                children: [
                                    "Favorites",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (index_module_default()).header_badge,
                                        children: numberOfHereos
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    });
});
/* harmony default export */ const components_Header = (Header);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/Footer/index.module.scss
var Footer_index_module = __webpack_require__(3835);
var Footer_index_module_default = /*#__PURE__*/__webpack_require__.n(Footer_index_module);
;// CONCATENATED MODULE: ./components/Footer/index.js





const Footer = ()=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: router.pathname !== "/lyrics" && /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (Footer_index_module_default()).footer,
            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/lyrics",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    className: (Footer_index_module_default()).footer_lyrics,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                        "Lyrics",
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: external "@react-aria/ssr"
const ssr_namespaceObject = require("@react-aria/ssr");
;// CONCATENATED MODULE: ./pages/_app.js


// redux











const _app_client = new client_.ApolloClient({
    // uri: 'http://localhost:5002/graphql',
    uri: "http://starwarsapi-env-1.eba-8cvjpnzu.eu-central-1.elasticbeanstalk.com/graphql",
    cache: new client_.InMemoryCache()
});
const MyApp = ({ Component , pageProps  })=>{
    const router = (0,router_.useRouter)();
    if (false) {}
    // mainStyle
    const headerRef = (0,external_react_.useRef)(null);
    const { 0: headerHeight , 1: setHeaderHeight  } = (0,external_react_.useState)(0);
    (0,external_react_.useEffect)(()=>{
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight);
        }
    }, [
        headerRef
    ]);
    const mainStyle = {
        minHeight: `calc(100svh - ${headerHeight}px)`,
        paddingTop: `${router.pathname !== "/lyrics" ? "50px" : "0px"}`
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(ssr_namespaceObject.SSRProvider, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
            store: store,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(client_.ApolloProvider, {
                client: _app_client,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: "Star Wars"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {
                        ref: headerRef
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        style: mainStyle,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
                ]
            })
        })
    });
};
/* harmony default export */ const _app = (wrapper.withRedux(MyApp));


/***/ }),

/***/ 6941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ currentFilterByMovie)
/* harmony export */ });
const currentFilterByMovie = (episode)=>{
    return {
        type: "CURRENTEPISODE",
        episode: episode
    };
};


/***/ }),

/***/ 838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hf": () => (/* binding */ defaultPage),
/* harmony export */   "IT": () => (/* binding */ previousPage),
/* harmony export */   "fz": () => (/* binding */ nextPage)
/* harmony export */ });
const previousPage = ()=>{
    return {
        type: "PREVIOUSPAGE"
    };
};
const nextPage = ()=>{
    return {
        type: "NEXTPAGE"
    };
};
const defaultPage = ()=>{
    return {
        type: "DEFAULTPAGE"
    };
};


/***/ }),

/***/ 9114:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664], () => (__webpack_exec__(3405)));
module.exports = __webpack_exports__;

})();