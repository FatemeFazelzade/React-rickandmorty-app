import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function useCharacters(query) {
  const [data, setData] = useState({ query: "", characters: [] });

  const isQueryValid = query.length >= 2;
  const isLoading = isQueryValid && data.query !== query;

  useEffect(() => {
    if (!isQueryValid) return;

    const controller = new AbortController();

    axios
      .get(`https://rickandmortyapi.com/api/character?name=${query}`, {
        signal: controller.signal,
      })
      .then((res) => {
        setData({
          query,
          characters: res.data.results.slice(0, 5),
        });
      })
      .catch((err) => {
        if (axios.isCancel(err) || err.code === "ERR_CANCELED") return;

        setData({ query, characters: [] });
        toast.error(
          err.response?.data?.error ||
            err.message ||
            "Failed to fetch characters",
        );
      });

    return () => {
      controller.abort();
    };
  }, [query, isQueryValid]);

  return {
    characters: isQueryValid ? data.characters : [],
    isLoading,
  };
}
