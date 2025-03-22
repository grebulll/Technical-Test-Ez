import React from "react";
import DashboardTemplate from "../components/templates/DahboardTemplate";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import handleLogout from "../utils/handleLogout";

const Tables = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    return (
        <DashboardTemplate onLogout={() => handleLogout(dispatch, navigate)}>
        <h2>Casino Tables Management</h2>
        <p>Here you can list, create, edit, and delete tables.</p>
        </DashboardTemplate>
    );
};

export default Tables;
