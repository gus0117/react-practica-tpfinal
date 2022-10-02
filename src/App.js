import { useContext, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { WeatherContext } from './context/WeatherContext';
import Home from "./routes/Home/Home";
import CreateLocation from './routes/Location/CreateLocation';
import Navigation from './routes/Navigation/Navigation';

export default function App() {
  const { setListWeathers } = useContext(WeatherContext);
  const list = [
    {
      id: 0,
      name: "S. S. de Jujuy, FI Unju",
      lat: -24.1895811,
      lon: -65.2982537,
      windspeed: 2,
      temperature: 17
    },
    {
      id: 1,
      name: "S. S. de Jujuy, FH Unju",
      lat: -24.1877411,
      lon: -65.3048197,
      windspeed: 2,
      temperature: 17
    }
  ];

  useEffect(()=>{
    setListWeathers(list);
  },[])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='location/create' element={<CreateLocation />} />
        </Route>
      </Routes>
    </div>
  );
}
