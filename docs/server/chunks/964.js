"use strict";
exports.id = 964;
exports.ids = [964];
exports.modules = {

/***/ 4067:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    "Luke Skywalker": "/heroes/Luke_Skywalker.jpg",
    "C-3PO": "/heroes/C-3PO.png",
    "R2-D2": "/heroes/R2-D2.png",
    "Darth Vader": "/heroes/Darth_Vader.jpg",
    "Leia Organa": "/heroes/Leia_Organa.jpg",
    "Owen Lars": "/heroes/Owen_Lars.jpg",
    "Beru Whitesun lars": "/heroes/Beru_Whitesun_lars.jpg",
    "R5-D4": "/heroes/R5-D4.png",
    "Biggs Darklighter": "/heroes/Biggs_Darklighter.jpg",
    "Obi-Wan Kenobi": "/heroes/Obi-Wan_Kenobi.jpg",
    "Anakin Skywalker": "/heroes/Anakin_Skywalker.jpg",
    "Wilhuff Tarkin": "/heroes/Wilhuff_Tarkin.jpg",
    Chewbacca: "/heroes/Chewbacca.jpg",
    "Han Solo": "/heroes/Han_Solo.png",
    Greedo: "/heroes/Greedo.jpg",
    "Jabba Desilijic Tiure": "/heroes/Jabba_Desilijic_Tiure.jpg",
    "Wedge Antilles": "/heroes/Wedge_Antilles.png",
    "Jek Tono Porkins": "/heroes/Jek_Tono_Porkins.jpg",
    Yoda: "/heroes/Yoda.jpg",
    Palpatine: "/heroes/Palpatine.jpg",
    "Boba Fett": "/heroes/Boba_Fett.jpg",
    "IG-88": "/heroes/IG-88.png",
    Bossk: "/heroes/Bossk.jpg",
    "Lando Calrissian": "/heroes/Lando_Calrissian.jpg",
    Lobot: "/heroes/Lobot.png",
    Ackbar: "/heroes/Ackbar.jpg",
    "Mon Mothma": "/heroes/Mon_Mothma.jpg",
    "Arvel Crynyd": "/heroes/Arvel_Crynyd.jpg",
    "Wicket Systri Warrick": "/heroes/Wicket_Systri_Warrick.jpg",
    "Nien Nunb": "/heroes/Nien_Nunb.png",
    "Qui-Gon Jinn": "/heroes/Qui-Gon_Jinn.jpg",
    "Nute Gunray": "/heroes/Nute_Gunray.jpg",
    "Finis Valorum": "/heroes/Finis_Valorum.jpg",
    "Padm\xe9 Amidala": "/heroes/Padme_Amidala.jpg",
    "Jar Jar Binks": "/heroes/Jar_Jar_Binks.jpg",
    "Roos Tarpals": "/heroes/Roos_Tarpals.jpg",
    "Rugor Nass": "/heroes/Rugor_Nass.jpg",
    "Ric Oli\xe9": "/heroes/Ric_Olié.jpg",
    Watto: "/heroes/Watto.jpg",
    Sebulba: "/heroes/Sebulba.jpg",
    "Shmi Skywalker": "/heroes/Shmi_Skywalker.jpg",
    "Dud Bolt": "/heroes/Luke_Skywalker.jpg",
    "Quarsh Panaka": "/heroes/Quarsh_Panaka.jpg",
    Gasgano: "/heroes/Gasgano.jpg",
    "Ben Quadinaros": "/heroes/Ben_Quadinaros.jpg",
    "Ayla Secura": "/heroes/Ayla_Secura.jpg",
    "Mace Windu": "/heroes/Mace_Windu.jpg",
    "Ratts Tyerel": "/heroes/Ratts_Tyerel.jpg",
    "Darth Maul": "/heroes/Darth_Maul.jpg",
    "Bib Fortuna": "/heroes/Bib_Fortuna.jpg"
});


/***/ }),

/***/ 9143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hM": () => (/* binding */ REMOVE_FAVORITE),
/* harmony export */   "is": () => (/* binding */ RESET_FAVORITES),
/* harmony export */   "m2": () => (/* binding */ CHOOSE_FAVORITE_SIDE),
/* harmony export */   "q8": () => (/* binding */ ADD_FAVORITE)
/* harmony export */ });
/* unused harmony export ADD_HERO */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const ADD_HERO = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation addHero(
    $side: HeroSide
    $name: String!
    $height: String!
    $mass: String!
    $hair_color: String!
    $skin_color: String!
    $gender: String!
    $films: [String!]!
    $isFavorite: Boolean!
  ) {
    addHero(
      side: $side
      name: $name
      height: $height
      mass: $mass
      hair_color: $hair_color
      skin_color: $skin_color
      gender: $gender
      films: $films
      isFavorite: $isFavorite
    ) {
      id
      side
      name
      height
      mass
      hair_color
      skin_color
      gender
      films
      isFavorite
    }
  }
`;
const ADD_FAVORITE = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation addFavorite($id: ID!) {
    addFavorite(id: $id) {
      id
      name
    }
  }
`;
const REMOVE_FAVORITE = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation removeFavorite($id: ID!) {
    removeFavorite(id: $id) {
      id
    }
  }
`;
const RESET_FAVORITES = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation resetFavorites {
    resetFavorites {
      name
    }
  }
`;
const CHOOSE_FAVORITE_SIDE = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation chooseFavoriteSide($id: ID!, $side: UpdateHeroSide) {
    chooseFavoriteSide(id: $id, side: $side) {
      id
      side
    }
  }
`;



/***/ })

};
;