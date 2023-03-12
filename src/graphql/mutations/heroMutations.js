import { gql } from '@apollo/client';

const ADD_HERO = gql`
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
      _id
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

const ADD_FAVORITE = gql`
  mutation addFavorite($_id: ID!) {
    addFavorite(_id: $_id) {
      _id
      name
    }
  }
`;

const REMOVE_FAVORITE = gql`
  mutation removeFavorite($_id: ID!) {
    removeFavorite(_id: $_id) {
      _id
    }
  }
`;

const RESET_FAVORITES = gql`
  mutation resetFavorites {
    resetFavorites {
      name
    }
  }
`;


const CHOOSE_FAVORITE_SIDE = gql`
  mutation chooseFavoriteSide($_id: ID!, $side: UpdateHeroSide) {
    chooseFavoriteSide(_id: $_id, side: $side) {
      _id
      side
    }
  }
`;

export { ADD_HERO, ADD_FAVORITE, REMOVE_FAVORITE, RESET_FAVORITES, CHOOSE_FAVORITE_SIDE };
