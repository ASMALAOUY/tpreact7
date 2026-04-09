import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

test('affiche une erreur si le champ email est vide', () => {
  render(<LoginForm />);
  fireEvent.click(screen.getByText('Envoyer'));
  expect(
    screen.getByText('Le champ email est obligatoire.')
  ).toBeInTheDocument();
});

test('n\'affiche pas d\'erreur si l\'email est rempli', () => {
  render(<LoginForm />);
  fireEvent.change(screen.getByLabelText('Email'), {
    target: { value: 'test@example.com' },
  });
  fireEvent.click(screen.getByText('Envoyer'));
  expect(
    screen.queryByText('Le champ email est obligatoire.')
  ).not.toBeInTheDocument();
});