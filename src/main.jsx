import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import "./index.css"; // Ensure this imports your CSS file

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <SimpleBar style={{ maxHeight: '100vh' }}>
        <App />
      </SimpleBar>
    </Router>
  </React.StrictMode>
);