function withTimestamp(WrappedComponent) {
  return function EnhancedComponent(props) {
    const now = new Date().toLocaleTimeString();
    return (
      <div>
        <WrappedComponent {...props} />
        <small style={{ color: '#888' }}>Rendu à : {now}</small>
      </div>
    );
  };
}

export default withTimestamp;