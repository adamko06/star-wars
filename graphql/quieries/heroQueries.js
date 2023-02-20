import { gql } from '@apollo/client';

const GET_HEROES = gql`
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

const GET_HERO = gql`
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

export { GET_HEROES, GET_HERO };
