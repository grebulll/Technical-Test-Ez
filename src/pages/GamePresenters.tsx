import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../store/store";
import handleLogout from "../utils/handleLogout";
import GamePresentersList from "../components/organisms/GamePresentersList";
import { Button } from "@mui/material";
import React from "react";
import DashboardTemplate from "../components/templates/DashboardTemplate";

const GamePresenters = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const onLogout = () => handleLogout(dispatch, navigate);

  return (
    <DashboardTemplate onLogout={onLogout}>
      <h2>Game Presenters Management</h2>
      <GamePresentersList preview={false} />
      <Button variant="contained" onClick={() => navigate("/dashboard")}>
        Back to Dashboard
      </Button>
    </DashboardTemplate>
  );
};

export default GamePresenters;
