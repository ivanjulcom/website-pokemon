import React from "react";
import ReactDOM from "react-dom";
//import BrowserRouter from "react-router-dom/BrowserRouter"
import { createRoot } from 'react-dom/client';
import App from "./App";
import reportWebVitals from "./reportWebVitals"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

// ReactDOM.render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>,
//     document.getElementById("root")
// );

reportWebVitals();