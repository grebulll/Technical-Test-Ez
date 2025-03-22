import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DashboardTemplate from "../components/templates/DashboardTemplate";
import handleLogout from "../utils/handleLogout";
import RotationSchedule from "../components/organisms/RotationSchedule";
import React from "react";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <DashboardTemplate onLogout={() => handleLogout(dispatch, navigate)}>
      <h2>Welcome to the Dashboard</h2>
      <p>Use the sidebar to navigate.</p>
      <RotationSchedule />
    </DashboardTemplate>
  );
};

export default Dashboard;
