import "./App.css";
import CharacterDetails from "./components/CharacterDetails";
import CharacterList from "./components/CharacterList";
import { Navbar, Search, NumOfSearch, Favorite } from "./components/Navbar";
import { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character?name=${query}`,
        );
        setCharacters(data.results.slice(0, 5));
      } catch (err) {
        setCharacters([]);
        toast.error(
          err.response?.data?.error ||
            err.message ||
            "Failed to fetch characters",
        );
      } finally {
        setIsLoading(false);
      }
    }
    if (query.length < 2) {
      return;
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, [query]);

  const handleSelectCharacter = (id) => {
    setSelectedId(id);
  };

  const handleAddFavourite = (char) => {
    setFavorites((preFav) => [...preFav, char]);
  };

  const isAddToFavorite = favorites.map((fav) => fav.id).includes(selectedId);

  return (
    <>
      <Toaster position="top-center" richColors closeButton />
      <div>
        <Navbar>
          <Search query={query} setQuery={setQuery} />
          <NumOfSearch numOfResults={characters.length} />
          <Favorite favorites={favorites} />
        </Navbar>
        <main className="app-layout">
          {isLoading ? (
            "Data is loading..."
          ) : (
            <CharacterList
              characters={characters}
              onSelectCharacter={handleSelectCharacter}
              selectedId={selectedId}
            />
          )}
          <CharacterDetails
            selectedId={selectedId}
            onAddFavorites={handleAddFavourite}
            isAddToFavorite={isAddToFavorite}
          />
        </main>
      </div>
    </>
  );
}

export default App;
