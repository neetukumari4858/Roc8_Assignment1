import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { FilterProvider } from "./Context.jsx/filterContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <FilterProvider>
      <App />
    </FilterProvider>
  </StrictMode>
);
