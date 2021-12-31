import React from "react";
import "./App.css";


import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

import Header from "./Components/Header/Header";
import AdminRoutes from "./admin/admin_routes";


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <AdminRoutes />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
