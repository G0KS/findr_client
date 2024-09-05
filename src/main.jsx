import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ContextShare from "./context/ContextShare.jsx";
import FooterComponent from "./components/FooterComponent/FooterComponent.jsx";

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <BrowserRouter>
         <ContextShare>
            <App />
            <FooterComponent />
         </ContextShare>
      </BrowserRouter>
   </StrictMode>
);
