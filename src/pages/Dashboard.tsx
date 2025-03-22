import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../store/store";
import handleLogout from "../utils/handleLogout";
import GamePresentersList from "../components/organisms/GamePresentersList";
import { Button } from "@mui/material";
import React from "react";
import DashboardTemplate from "../components/templates/DashboardTemplate";

const Dashboard = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const onLogout = () => handleLogout(dispatch, navigate);

  return (
    <DashboardTemplate onLogout={onLogout}>
      <h2>Welcome to the Dashboard</h2>
      <p>Manage game presenters and tables here.</p>
      <GamePresentersList preview={true} /> 
      <Button variant="contained" onClick={() => navigate("/game-presenters")}>
        View All Game Presenters
      </Button>
    </DashboardTemplate>
  );
};

export default Dashboard;
