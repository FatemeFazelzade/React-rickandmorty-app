import { ArrowUpCircleIcon, Heart } from "lucide-react";
import { character, episodes } from "../../data/data";
import { useState } from "react";

function CharacterDetails() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="character-content">
      <article className="details-card">
        <div className="profile-header">
          <img src={character.image} alt={character.name} />

          <div className="profile-info">
            <h1>{character.name}</h1>

            <div className="profile-meta">
              <div>
                <span>Gender</span>
                <p>{character.gender}</p>
              </div>

              <div>
                <span>Origin</span>
                <p>{character.origin.name}</p>
              </div>

              <div>
                <span>Last known location</span>
                <p>{character.location.name}</p>
              </div>
              <button className="profile-favorites-button">
                Add to favorites <Heart size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="profile-footer">
          <span>Episodes featured in</span>
          <strong>{episodes.length}</strong>
        </div>
      </article>

      <section className="episodes-section">
        <button
          className="episodes-heading"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
        >
          <h2>List of Episodes</h2>
          <ArrowUpCircleIcon
            size={16}
            className={isExpanded ? "arrow-rotated" : ""}
          />
        </button>
        {isExpanded && (
          <ul className="episodes-grid">
            {episodes.map((item, index) => (
              <li className="episode-card" key={item.id}>
                <span className="episode-code">
                  {String(index + 1).padStart(2, "0")}. {item.episode}
                </span>
                <h3>{item.name}</h3>

                <div className="episode-date">
                  <span>Air date</span>
                  <p>{item.air_date}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </section>
  );
}

export default CharacterDetails;
