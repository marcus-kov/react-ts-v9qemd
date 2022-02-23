const API_URL = 'https://cdn.utopiamusic.com/code-test/frontend/countries.json';

export const getData = async () => {
  return await fetch(API_URL).then((response) => response.json());
};
