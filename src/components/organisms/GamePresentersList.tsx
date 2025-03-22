import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

interface GamePresentersListProps {
  preview?: boolean;
}

const GamePresentersList: React.FC<GamePresentersListProps> = ({ preview = false }) => {
  const gamePresenters = useSelector((state: RootState) => state.gamePresenters.presenters);

  const displayedPresenters = preview ? gamePresenters.slice(0, 3) : gamePresenters;

  return (
    <div>
      <Typography variant="h6">Game Presenters</Typography>
      <List>
        {displayedPresenters.map((presenter) => (
          <ListItem key={presenter.id}>
            <ListItemText primary={presenter.name} secondary={`Shift: ${presenter.shift}`} />
          </ListItem>
        ))}
      </List>
      {preview && gamePresenters.length > 3 && <Typography variant="body2">...and more</Typography>}
    </div>
  );
};

export default GamePresentersList;
