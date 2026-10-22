import { Heart } from "lucide-react";
import { allCharacters } from "../../date/data";

function CharacterList() {
  return (
    <aside className="character-sidebar">
      <h2>Characters</h2>

      <div className="character-list">
        {allCharacters.map((item) => (
          <Character key={item.id} item={item} />
        ))}
      </div>
    </aside>
  );
}

export default CharacterList;

function Character({ item }) {
  return (
    <div className="character-card">
      <img src={item.image} alt={item.name} />
      <div className="character-card-info">
        <h3>
          <span>{item.gender === "Male" ? "👨🏻‍🦰" : "👩🏻‍🦰"}</span>
          <span>{item.name}</span>
        </h3>
        <p className="character-status">
          <span
            className={`status-dot ${item.status === "Dead" ? "dead" : "alive"}`}
          ></span>
          <span>{item.status}</span>
          <span>- {item.species}</span>
        </p>
      </div>
      <button
        className="favorite-icon"
        aria-label="Add Morty Smith to favorites"
      >
        <Heart size={18} />
      </button>
    </div>
  );
}
