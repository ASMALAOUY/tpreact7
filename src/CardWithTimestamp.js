import withTimestamp from './withTimestamp';

function Card({ title }) {
  return <div className="card-title">{title}</div>;
}

const CardWithTimestamp = withTimestamp(Card);
export default CardWithTimestamp;