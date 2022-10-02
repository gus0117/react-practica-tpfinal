import './Card.css';

const Card = ({ weather }) => {
  const { id, name, lat, lon, temperature, windspeed } = weather;
  return (
    <div className="card">
      <h1>{name}</h1>
      <span className="location-info">Latitude: {lat}</span>
      <span className="location-info">Longitude: {lon}</span>
      <span className="location-info">Temp: {temperature}</span>
      <span className="location-info">Windspeed: {windspeed}</span>
    </div>
  );
};

export default Card;
