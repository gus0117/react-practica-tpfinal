
import Card from "./Card";

const Cards = ({ WeatherQuerys }) => {

  const listQuerys = [...WeatherQuerys];

  return (
    <div className="cards">
      {listQuerys.length === 0 ? (
        <span> No hay elementos</span>
      ) : (
        listQuerys.map( (weather) => (
          <Card key={weather.id} weather={weather} /> 
        ))
      )}
    </div>
  );
};

export default Cards;
