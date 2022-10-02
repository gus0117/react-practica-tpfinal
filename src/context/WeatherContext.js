import { createContext, useState } from "react";

export const WeatherContext = createContext({
  weatherQuerys: [],
  setWatherQuerys: () => {}
});

export const WeatherProvider = ({ children }) => {
  const [listWeathers, setListWeathers] = useState([]);
  const value = { listWeathers, setListWeathers };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};
