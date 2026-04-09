import { useState } from 'react';

function FilterList({ items, render }) {
  const [query, setQuery] = useState('');

  const filtered = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          background: '#222228',
          border: '1px solid #2e2e38',
          borderRadius: '8px',
          padding: '8px 12px',
          color: '#f0f0f5',
          fontSize: '14px',
          width: '100%',
          marginBottom: '12px',
          outline: 'none',
        }}
      />
      {render(filtered)}
    </div>
  );
}

export default FilterList;