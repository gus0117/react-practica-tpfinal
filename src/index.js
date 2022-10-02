import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import App from "./App";
import { WeatherProvider } from "./context/WeatherContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <HashRouter>
      <WeatherProvider>
        <App />
      </WeatherProvider>
    </HashRouter>
  </StrictMode>
);
