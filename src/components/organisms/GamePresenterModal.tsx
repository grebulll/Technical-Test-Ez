import React from "react";
import { Modal, Box } from "@mui/material";
import GamePresenterForm from "./GamePresenterForm";

interface GamePresenterModalProps {
  open: boolean;
  onClose: () => void;
  existingPresenter?: { id: string; name: string; shift: "morning" | "afternoon" | "night" };
}

const GamePresenterModal: React.FC<GamePresenterModalProps> = ({ open, onClose, existingPresenter }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ padding: 4, backgroundColor: "white", margin: "auto", width: "300px", marginTop: "20vh" }}>
        <GamePresenterForm existingPresenter={existingPresenter} onClose={onClose} />
      </Box>
    </Modal>
  );
};

export default GamePresenterModal;
