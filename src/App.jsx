import "./App.css";
import CharacterDetails from "./components/CharacterDetails";
import CharacterList from "./components/CharacterList";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      setCharacters(data.results.slice(0, 5));
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <>
      <div>
        <Navbar numOfResults={characters.length} />
        <main className="app-layout">
          {isLoading ? (
            "Data is loading..."
          ) : (
            <CharacterList characters={characters} />
          )}{" "}
          <CharacterDetails />
        </main>
      </div>
    </>
  );
}

export default App;
