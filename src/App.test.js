import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('affiche le titre hero', () => {
  render(<App />);
  expect(screen.getByText(/JSX & Composition/i)).toBeInTheDocument();
});

test('affiche le bouton HOC', () => {
  render(<App />);
  expect(screen.getByText(/Cliquer ici/i)).toBeInTheDocument();
});

test('affiche la liste des noms dans DataLoader', () => {
  render(<App />);
  const items = screen.getAllByText('Salma');
  expect(items.length).toBeGreaterThanOrEqual(1);
  const asmaItems = screen.getAllByText('ASMA');
  expect(asmaItems.length).toBeGreaterThanOrEqual(1);
});

test('affiche le footer', () => {
  render(<App />);
  expect(
    screen.getByText(/TP React — JSX, HOC, Render Props & Tests/i)
  ).toBeInTheDocument();
});