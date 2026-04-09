# TP React — JSX, HOC, Render Props & Tests

Projet pédagogique React couvrant les fondamentaux de JSX, les patterns de composition et les tests unitaires/intégration.

---

## Concepts abordés

- **JSX** — syntaxe et transformation en `React.createElement()`
- **Higher-Order Component (HOC)** — enrichir un composant sans le modifier
- **Render Props** — déléguer l'affichage via une fonction prop
- **Tests unitaires** — avec Jest et React Testing Library
- **Tests d'intégration** — simulation d'interactions utilisateur

---
## demo






---
## Stack technique

- React 18
- Jest
- React Testing Library
- Create React App

---

## Installation

```bash
git clone https://github.com/ton-user/tp-jsx-tests.git
cd tp-jsx-tests
npm install
```

## Lancer l'application

```bash
npm start
```

L'application démarre sur [http://localhost:3000](http://localhost:3000)

## Lancer les tests

```bash
npm test -- --watchAll=false --forceExit
```

Résultat attendu :

```
Test Suites: 4 passed, 4 total
Tests:       8 passed, 8 total
```

---

## Structure du projet

```
src/
├── App.js                  # Composant principal
├── App.test.js             # Tests d'intégration App
├── JSXDemo.js              # Démo JSX vs React.createElement
├── Button.js               # Composant bouton simple
├── ButtonWithLogging.js    # Button enrichi par le HOC
├── withLogging.js          # HOC — log des props
├── withTimestamp.js        # HOC — affiche le timestamp
├── DataLoader.js           # Render Props — fournit des données
├── FilterList.js           # Render Props — liste filtrable
├── Greeting.js             # Composant simple
├── Greeting.test.js        # Test unitaire
├── Counter.js              # Composant avec état
├── Counter.test.js         # Test d'intégration avec fireEvent
├── LoginForm.js            # Formulaire avec validation
└── LoginForm.test.js       # Test validation formulaire
```

---

## Fichiers clés

### withLogging.js — HOC
Affiche les props reçues dans la console à chaque rendu.

### DataLoader.js — Render Props
Fournit une liste de données. Le composant parent décide comment les afficher via la prop `render`.

### FilterList.js — Render Props avec filtre
Liste interactive avec champ de recherche. Utilise le pattern Render Props pour déléguer l'affichage.

---

## Résultats des tests

| Suite | Tests | Statut |
|---|---|---|
| App.test.js | 4 | Pass |
| Greeting.test.js | 1 | Pass |
| Counter.test.js | 1 |  Pass |
| LoginForm.test.js | 2 | Pass |
![pass](https://github.com/user-attachments/assets/ad23bb16-fd86-418d-a6be-04633e060103)


---

--

## Auteur

Réalisé dans le cadre d'un TP React — Formation Développement Web.
