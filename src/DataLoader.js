function DataLoader({ render }) {
  const data = ['Alice', 'Salma', 'ASMA'];

  return <div>{render(data)}</div>;
}

export default DataLoader;