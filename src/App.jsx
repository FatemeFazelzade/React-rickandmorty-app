import "./App.css";
import CharacterDetails from "./components/CharacterDetails";
import CharacterList from "./components/CharacterList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <main className="app-layout">
          <CharacterList />
          <CharacterDetails />
        </main>
      </div>
    </>
  );
}

export default App;
