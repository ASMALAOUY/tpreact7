import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  function handleSubmit() {
    if (!email.trim()) {
      setError('Le champ email est obligatoire.');
    } else {
      setError('');
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-label="Email"
      />
      <button onClick={handleSubmit}>Envoyer</button>
      {error && <p role="alert">{error}</p>}
    </div>
  );
}

export default LoginForm;