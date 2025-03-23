import { useState } from 'react';
import DashboardTemplate from '../components/templates/DashboardTemplate';

import { Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../store/store';
import handleLogout from '../utils/handleLogout';
import GamePresentersList from '../components/organisms/GamePresentersList';
import GamePresenterModal from '../components/organisms/GamePresenterModal';

const GamePresenters = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const onLogout = () => handleLogout(dispatch, navigate);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <DashboardTemplate onLogout={onLogout}>
      <Button variant="contained" onClick={() => setModalOpen(true)}>
        Add Game Presenter
      </Button>
      <GamePresentersList />
      <GamePresenterModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </DashboardTemplate>
  );
};

export default GamePresenters;
