import { Heart } from "lucide-react";

function CharacterList() {
  return (
    <aside className="character-sidebar">
      <h2>Characters</h2>

      <div className="character-list">
        <article className="character-card selected">
          <button className="character-select">
            <img
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
              alt="Rick Sanchez"
            />

            <div className="character-card-info">
              <h3>Rick Sanchez</h3>
              <p className="character-status">
                <span className="status-dot alive"></span>
                Alive — Human
              </p>
            </div>
          </button>

          <button
            className="favorite-icon favorited"
            aria-label="Add Rick Sanchez to favorites"
          >
            <Heart size={18} fill="currentColor" />
          </button>
        </article>

        <article className="character-card">
          <button className="character-select">
            <img
              src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
              alt="Morty Smith"
            />

            <div className="character-card-info">
              <h3>Morty Smith</h3>
              <p className="character-status">
                <span className="status-dot alive"></span>
                Alive — Human
              </p>
            </div>
          </button>

          <button
            className="favorite-icon"
            aria-label="Add Morty Smith to favorites"
          >
            <Heart size={18} />
          </button>
        </article>

        <article className="character-card">
          <button className="character-select">
            <img
              src="https://rickandmortyapi.com/api/character/avatar/3.jpeg"
              alt="Summer Smith"
            />

            <div className="character-card-info">
              <h3>Summer Smith</h3>
              <p className="character-status">
                <span className="status-dot alive"></span>
                Alive — Human
              </p>
            </div>
          </button>

          <button
            className="favorite-icon"
            aria-label="Add Summer Smith to favorites"
          >
            <Heart size={18} />
          </button>
        </article>

        <article className="character-card">
          <button className="character-select">
            <img
              src="https://rickandmortyapi.com/api/character/avatar/4.jpeg"
              alt="Beth Smith"
            />

            <div className="character-card-info">
              <h3>Beth Smith</h3>
              <p className="character-status">
                <span className="status-dot alive"></span>
                Alive — Human
              </p>
            </div>
          </button>

          <button
            className="favorite-icon"
            aria-label="Add Beth Smith to favorites"
          >
            <Heart size={18} />
          </button>
        </article>

        <article className="character-card">
          <button className="character-select">
            <img
              src="https://rickandmortyapi.com/api/character/avatar/5.jpeg"
              alt="Jerry Smith"
            />

            <div className="character-card-info">
              <h3>Jerry Smith</h3>
              <p className="character-status">
                <span className="status-dot alive"></span>
                Alive — Human
              </p>
            </div>
          </button>

          <button
            className="favorite-icon"
            aria-label="Add Jerry Smith to favorites"
          >
            <Heart size={18} />
          </button>
        </article>
      </div>
    </aside>
  );
}

export default CharacterList;
