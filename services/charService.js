export const loadChars = () => {
  return fetch('https://swapi.dev/api/people')
    .then((res) => res.json())
    .then((newContent) => {
      return newContent.results;
    })
    .catch((err) => console.log(err));
};
