import axios from 'axios';

export const loadChars = async () => {
  const urls = [
    // 'https://swapi.dev/api/people/?page=1',
    // 'https://swapi.dev/api/people/?page=2',
    // 'https://swapi.dev/api/people/?page=3',
    // 'https://swapi.dev/api/people/?page=4',
    // 'https://swapi.dev/api/people/?page=5',
    'https://swapi.dev/api/people/?page=6',
  ];
  try {
    const responses = await axios.all(urls.map((url) => axios.get(url)));
    return responses.flatMap((res) => res.data.results);
  } catch (error) {
    console.error(`Fetch error: ${error}`);
    return [];
  }
};
