import { useState, useEffect } from 'react';

const fetchAnimes = async (url) => {
  const response = await globalThis.fetch(url);
  const json = await response.json();
  return json ? json.data : [];
};

export const useAnimeSeason = () => {
  const [animes, setAnimes] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnimes(`https://api.jikan.moe/v4/seasons/now`).then((response) => {
      setLoading(false);
      setAnimes(response);
    });
  }, []);

  return { animes, loading };
};

export const useAnimeSearch = (animeName) => {
  const [animes, setAnimes] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnimes(`https://api.jikan.moe/v4/anime?q=${animeName}&limit=100`).then(
      (response) => {
        setLoading(false);
        setAnimes(response);
      }
    );
  }, [animeName]);

  return { animes, loading };
};
