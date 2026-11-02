import axios from "axios";
import { ArrowUpCircleIcon, Heart } from "lucide-react";
import Loader from "./Loader";
import { useEffect, useState } from "react";
import { toast } from "sonner";

function CharacterDetails({ selectedId, onAddFavorites, isAddToFavorite }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    if (!selectedId) return;

    async function fetchData() {
      try {
        setIsLoading(true);

        const { data: charData } = await axios.get(
          `https://rickandmortyapi.com/api/character/${selectedId}`,
        );
        setCharacter(charData);

        const episodeIds = charData.episode
          .map((e) => e.split("/").at(-1))
          .slice(0, 5);
        const { data: epData } = await axios.get(
          `https://rickandmortyapi.com/api/episode/${episodeIds.join(",")}`,
        );

        setEpisodes(Array.isArray(epData) ? epData : [epData]);
      } catch (error) {
        toast.error(
          error.response?.data?.error || "Failed to fetch character details",
        );
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [selectedId]);

  if (isLoading)
    return (
      <div style={{ flex: 1 }}>
        <Loader />
      </div>
    );

  if (!character)
    return (
      <div style={{ flex: 1, color: "var(--slate-300)" }}>
        Please select a character.
      </div>
    );

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
              <div>
                {isAddToFavorite ? (
                  <p>Already Added To Favorites ✅</p>
                ) : (
                  <button
                    className="profile-favorites-button"
                    onClick={() => onAddFavorites(character)}
                  >
                    Add to Favorite
                    <Heart size={18} />
                  </button>
                )}
              </div>
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
