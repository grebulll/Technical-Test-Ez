import React, { useState } from "react";
import DashboardTemplate from "../components/templates/DashboardTemplate";
import TablesList from "../components/organisms/TablesList";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import handleLogout from "../utils/handleLogout";
import TableModal from "../components/organisms/TableModal";

const Tables = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <DashboardTemplate onLogout={() => handleLogout(dispatch, navigate)}>
      <h2>Tables Management</h2>
      <Button variant="contained" onClick={() => setModalOpen(true)} sx={{ mb: 2 }}>
        Add New Table
      </Button>
      <TablesList />
      <TableModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </DashboardTemplate>
  );
};

export default Tables;
