import { Eye } from "lucide-react";

function CharacterList({ characters, onSelectCharacter, selectedId }) {
  return (
    <aside className="character-sidebar">
      <h2>Characters</h2>

      <div className="character-list">
        {characters.map((item) => (
          <Character
            key={item.id}
            item={item}
            onSelectCharacter={onSelectCharacter}
            isSelected={selectedId === item.id}
          />
        ))}
      </div>
    </aside>
  );
}

export default CharacterList;

function Character({ item, onSelectCharacter, isSelected }) {
  return (
    <div className={`character-card ${isSelected ? "selected" : ""}`}>
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
        aria-label="View details"
        onClick={() => onSelectCharacter(item.id)}
      >
        <Eye size={18} />
      </button>
    </div>
  );
}
