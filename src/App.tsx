import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import GamePresenters from "./pages/GamePresenters";
import Tables from "./pages/Tables";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/game-presenters" element={<GamePresenters />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    </Provider>
    
  );
}

export default App;
