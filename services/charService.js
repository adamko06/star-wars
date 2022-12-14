export const loadChars = () => {
  const urls = [
    'https://swapi.dev/api/people/?page=1',
    'https://swapi.dev/api/people/?page=2',
    'https://swapi.dev/api/people/?page=3',
  ];
  return Promise.all(urls.map((url) => fetch(url)))
    .then((responses) => Promise.all(responses.map((res) => res.json())))
    .then((newContent) => {
      const allFetch = [];
      newContent.forEach((item) => {
        allFetch.push(...item.results);
      });
      return allFetch;
    })
    .catch((err) => console.log(err));
};

// Promise.all(urls.map(u=>fetch(u))).then(responses =>
//   Promise.all(responses.map(res => res.text()))
// ).then(texts => {
//   …
// })

// useEffect(() => {
//   setLoading(true);
//   const fetchReq1 = fetch(`https://swapi.dev/api/people/?page=1`).then((res) => res.json());
//   const fetchReq2 = fetch(`https://swapi.dev/api/people/?page=2`).then((res) => res.json());
//   const fetchReq3 = fetch(`https://swapi.dev/api/people/?page=3`).then((res) => res.json());

//   const allData = Promise.all([fetchReq1, fetchReq2, fetchReq3]);

//   allData.then((res) => {
//     const allFetch = [];
//     res.forEach((item) => {
//       allFetch.push(...item.results);
//     });
//     setContent(allFetch);
//     // setTimeout(() => {}, '6000');
//     setLoading(false);
//   });
// }, []);
