import { Search, Heart } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <a className="navbar-logo" href="/">
        Rick <span>&</span> Morty
      </a>
      <form className="navbar-search">
        <input
          type="search"
          placeholder="Search characters..."
          aria-label="Search characters"
        />
        <button type="submit" aria-label="Search">
          <Search size={20} />
        </button>
      </form>
      <button className="favorites-button" type="button">
        <Heart size={20} />
        <span>Favorites</span>
        <span className="favorites-count">5</span>
      </button>
    </nav>
  );
}

export default Navbar;
