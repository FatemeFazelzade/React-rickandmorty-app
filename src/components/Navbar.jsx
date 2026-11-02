import { Heart, Search as SearchIcon, TrashIcon } from "lucide-react";
import Modal from "./Modal";
import { useState } from "react";
import { Character } from "./CharacterList";

export function Navbar({ children }) {
  return (
    <nav className="navbar">
      <a className="navbar-logo" href="/">
        Rick <span>&</span> Morty
      </a>
      {children}
    </nav>
  );
}

export function Search({ query, setQuery }) {
  return (
    <form className="navbar-search">
      <input
        value={query}
        type="search"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search characters..."
        aria-label="Search characters"
      />
      <button type="submit" aria-label="Search">
        <SearchIcon size={20} />
      </button>
    </form>
  );
}

export function NumOfSearch({ numOfResults }) {
  return <div>Found {numOfResults} characters!</div>;
}

export function Favorite({ favorites, onDeleteFavourite }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Modal onOpen={setIsOpen} open={isOpen} title="List of Favourites">
        {favorites.map((item) => (
          <Character key={item.id} item={item}>
            <button
              className="trash-icon"
              onClick={() => onDeleteFavourite(item.id)}
            >
              <TrashIcon />
            </button>
          </Character>
        ))}
      </Modal>
      <button
        className={`favorites-button ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen((is) => !is)}
      >
        <Heart />
        <span className="favorites-count">{favorites.length}</span>
      </button>
    </>
  );
}
