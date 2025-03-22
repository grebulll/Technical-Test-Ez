import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import GamePresenterModal from "../organisms/GamePresenterModal";
import { useDispatch } from "react-redux";
import { deleteGamePresenter } from "../../features/gamePresenters/gamePresentersSlice";

const GamePresentersList = () => {
  const gamePresenters = useSelector((state: RootState) => state.gamePresenters.presenters);
  const dispatch = useDispatch();
  const [selectedPresenter, setSelectedPresenter] = useState<any | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleDelete = (id: string) => {
    dispatch(deleteGamePresenter(id));
  };

  const handleEdit = (presenter: any) => {
    setSelectedPresenter(presenter);
    setModalOpen(true);
  };

  return (
    <div>
      <List>
        {gamePresenters.map((presenter) => (
          <ListItem key={presenter.id} secondaryAction={
            <>
              <IconButton edge="end" onClick={() => handleEdit(presenter)}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" onClick={() => handleDelete(presenter.id)}>
                <DeleteIcon />
              </IconButton>
            </>
          }>
            <ListItemText primary={presenter.name} secondary={`Shift: ${presenter.shift}`} />
          </ListItem>
        ))}
      </List>
      <GamePresenterModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setSelectedPresenter(null);
        }}
        existingPresenter={selectedPresenter}
      />
    </div>
  );
};

export default GamePresentersList;
