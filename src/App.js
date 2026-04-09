import { useState } from 'react';
import ButtonWithLogging from './ButtonWithLogging';
import DataLoader from './DataLoader';
import './App.css';
import CardWithTimestamp from './CardWithTimestamp';
import FilterList from './FilterList';

function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="app">

      <header className="hero">
        <div className="hero-tag">React TP</div>
        <h1 className="hero-title">JSX & Composition</h1>
        <p className="hero-sub">HOC · Render Props · Tests unitaires</p>
        <CardWithTimestamp title="Composant avec timestamp" />
        <FilterList
  items={['Alice', 'Salma', 'ASMA', 'Fati', 'Hiba']}
  render={(filtered) => (
    <ul className="name-list">
      {filtered.length > 0 ? (
        filtered.map((name) => (
          <li key={name} className="name-item">
            <span className="avatar">{name[0]}</span>
            {name}
          </li>
        ))
      ) : (
        <li style={{ color: '#888', fontSize: '13px' }}>Aucun résultat</li>
      )}
    </ul>
  )}
/>
      </header>

      <main className="main">

        <section className="card">
          <div className="card-label">Étape 5 — Higher-Order Component</div>
          <h2 className="card-title">withLogging HOC</h2>
          <p className="card-desc">
            Le composant <code>Button</code> est enrichi par <code>withLogging</code>.
            Chaque clic affiche les props dans la console.
          </p>
          <ButtonWithLogging
            label="Cliquer ici"
            onClick={() => setClicked(true)}
          />
          <div className={`feedback ${clicked ? 'visible' : ''}`}>
            ✓ Bouton cliqué — vérifie la console DevTools
          </div>
        </section>

        <section className="card">
          <div className="card-label">Étape 6 — Render Props</div>
          <h2 className="card-title">DataLoader</h2>
          <p className="card-desc">
            <code>DataLoader</code> fournit les données.
            Le parent décide comment les afficher.
          </p>
          <DataLoader
            render={(data) => (
              <ul className="name-list">
                {data.map((name) => (
                  <li key={name} className="name-item">
                    <span className="avatar">{name[0]}</span>
                    {name}
                  </li>
                ))}
              </ul>
            )}
          />
        </section>

      </main>

      <footer className="footer">
        TP React — JSX, HOC, Render Props & Tests
      </footer>
    </div>
  );
}

export default App;