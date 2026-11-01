import "./App.css";
import CharacterDetails from "./components/CharacterDetails";
import CharacterList from "./components/CharacterList";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          "https://rickandmortyapi.com/api/character",
        );
        setCharacters(data.results.slice(0, 5));
      } catch (err) {
        toast.error(
          err.response?.data?.error ||
            err.message ||
            "Failed to fetch characters",
        );
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Toaster position="top-center" richColors closeButton />
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
