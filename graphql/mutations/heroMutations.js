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

const ADD_FAVORITE = gql`
  mutation addFavorite($id: ID!) {
    addFavorite(id: $id) {
      id
      name
    }
  }
`;

const REMOVE_FAVORITE = gql`
  mutation removeFavorite($id: ID!) {
    removeFavorite(id: $id) {
      id
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
  mutation chooseFavoriteSide($id: ID!, $side: UpdateHeroSide) {
    chooseFavoriteSide(id: $id, side: $side) {
      id
      side
    }
  }
`;

export { ADD_HERO, ADD_FAVORITE, REMOVE_FAVORITE, RESET_FAVORITES, CHOOSE_FAVORITE_SIDE };
