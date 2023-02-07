/* without local storage */
export const loadChars = async () => {
  const urls = [
    'https://swapi.dev/api/people/?page=1',
    'https://swapi.dev/api/people/?page=2',
    'https://swapi.dev/api/people/?page=3',
    'https://swapi.dev/api/people/?page=4',
  ];
  try {
    const responses = await Promise.all(urls.map((url) => fetch(url)));
    const newContent = await Promise.all(responses.map((res) => res.json()));
    const data = [];
    newContent.forEach((item) => {
      data.push(...item.results);
    });
    return data;
  } catch (err) {
    return console.error(`Fetch error${err}`);
  }
};

/* with local storage 
import { loadFromLocalStorage } from '../redux/store';

export const loadChars = async () => {
  const persistedState = loadFromLocalStorage();
  if (persistedState) {
    return persistedState;
  }

  const urls = [
    'https://swapi.dev/api/people/?page=1',
    'https://swapi.dev/api/people/?page=2',
    'https://swapi.dev/api/people/?page=3',
    'https://swapi.dev/api/people/?page=4',
  ];
  try {
    const responses = await Promise.all(urls.map((url) => fetch(url)));
    const newContent = await Promise.all(responses.map((res) => res.json()));
    const data = [];
    newContent.forEach((item) => {
      data.push(...item.results);
    });
    localStorage.setItem('characters', JSON.stringify(data));
    return data;
  } catch (err) {
    return console.error(`Fetch error${err}`);
  }
};
*/
