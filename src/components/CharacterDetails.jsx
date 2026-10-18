function CharacterDetails() {
  return (
    <section className="character-content">
      <article className="details-card">
        <div className="profile-header">
          <div className="profile-info">
            <h1>Rick Sanchez</h1>

            <div className="profile-meta">
              <div>
                <span>Gender</span>
                <p>Male</p>
              </div>

              <div>
                <span>Origin</span>
                <p>Earth (C-137)</p>
              </div>

              <div>
                <span>Last known location</span>
                <p>Citadel of Ricks</p>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-footer">
          <span>Episodes featured in</span>
          <strong>3</strong>
        </div>
      </article>

      <section className="episodes-section">
        <div className="episodes-heading">
          <h2>Episodes</h2>
          <span>3 episodes</span>
        </div>

        <div className="episodes-grid">
          <article className="episode-card">
            <span className="episode-code">S01E01</span>
            <h3>Pilot</h3>

            <div className="episode-date">
              <span>Air date</span>
              <p>December 2, 2013</p>
            </div>
          </article>

          <article className="episode-card">
            <span className="episode-code">S01E02</span>
            <h3>Lawnmower Dog</h3>

            <div className="episode-date">
              <span>Air date</span>
              <p>December 9, 2013</p>
            </div>
          </article>

          <article className="episode-card">
            <span className="episode-code">S01E03</span>
            <h3>Anatomy Park</h3>

            <div className="episode-date">
              <span>Air date</span>
              <p>December 16, 2013</p>
            </div>
          </article>
        </div>
      </section>
    </section>
  );
}

export default CharacterDetails;
