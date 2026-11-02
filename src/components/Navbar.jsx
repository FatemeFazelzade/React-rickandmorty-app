import { Heart, Search as SearchIcon } from "lucide-react";

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

export function Favorite({ favorites }) {
  return (
    <button className="favorites-button" type="button">
      <Heart size={20} />
      <span>Favorites</span>
      <span className="favorites-count">{favorites?.length ?? 0}</span>
    </button>
  );
}
