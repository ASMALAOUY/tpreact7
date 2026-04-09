import React from 'react';

function JSXDemo() {
  const elementJSX = <h1 className="titre">Bonjour JSX</h1>;

  const elementJS = React.createElement(
    'h1',
    { className: 'titre' },
    'Bonjour JavaScript pur'
  );

  return (
    <div>
      {elementJSX}
      {elementJS}
    </div>
  );
}

export default JSXDemo;