import "./App.css";
import CharacterDetails from "./components/CharacterDetails";
import CharacterList from "./components/CharacterList";
import { Navbar, Search, NumOfSearch, Favorite } from "./components/Navbar";
import { useState } from "react";
import { Toaster } from "sonner";
import useLocalStorage from "./hooks/useLocalStorage";
import useCharacters from "./hooks/useCharacter";

const defaultCharacters = [
  {
    id: 1,
    name: "Rick Sanchez",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    species: "Human",
    status: "Alive",
    gender: "Male",
  },
  {
    id: 2,
    name: "Morty Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    species: "Human",
    status: "Alive",
    gender: "Male",
  },
  {
    id: 3,
    name: "Summer Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    species: "Human",
    status: "Alive",
    gender: "Female",
  },
  {
    id: 4,
    name: "Beth Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    species: "Human",
    status: "Alive",
    gender: "Female",
  },
  {
    id: 5,
    name: "Jerry Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
    species: "Human",
    status: "Alive",
    gender: "Male",
  },
];

function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [favorites, setFavorites] = useLocalStorage("FAVORITES", []);

  const { characters, isLoading } = useCharacters(query);

  const handleSelectCharacter = (id) => {
    setSelectedId(id);
  };

  const handleAddFavourite = (char) => {
    setFavorites((preFav) => [...preFav, char]);
  };

  const handleRemoveFavourite = (id) => {
    setFavorites((preFav) => preFav.filter((fav) => fav.id !== id));
  };

  const isAddToFavorite = favorites.map((fav) => fav.id).includes(selectedId);

  const displayedCharacters = query.length < 2 ? defaultCharacters : characters;

  return (
    <>
      <Toaster position="top-center" richColors closeButton />
      <div>
        <Navbar>
          <Search query={query} setQuery={setQuery} />
          <NumOfSearch numOfResults={displayedCharacters.length} />
          <Favorite
            favorites={favorites}
            onDeleteFavourite={handleRemoveFavourite}
          />
        </Navbar>
        <main className="app-layout">
          {isLoading ? (
            "Data is loading..."
          ) : (
            <CharacterList
              characters={displayedCharacters}
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
