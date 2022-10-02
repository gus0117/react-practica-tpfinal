import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import Cards from "../../components/Cards/Cards";

const Home = () => {
  const { listWeathers } = useContext(WeatherContext);

  //Aqui se puede filtrar la lista para busquedas y actualizar el componente cards
  
  return (
    <div className="container">
      <Cards WeatherQuerys={listWeathers} />
    </div>
  );
};

export default Home;
