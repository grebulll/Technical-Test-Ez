import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addGamePresenter, editGamePresenter } from "../../features/gamePresenters/gamePresentersSlice";
import { TextField, Button, MenuItem } from "@mui/material";
import { nanoid } from "nanoid";

interface GamePresenterFormProps {
  existingPresenter?: { id: string; name: string; shift: "morning" | "afternoon" | "night" };
  onClose: () => void;
}

const GamePresenterForm: React.FC<GamePresenterFormProps> = ({ existingPresenter, onClose }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(existingPresenter?.name || "");
  const [shift, setShift] = useState(existingPresenter?.shift || "morning");

  const handleSubmit = () => {
    if (existingPresenter) {
      dispatch(editGamePresenter({ id: existingPresenter.id, name, shift }));
    } else {
      dispatch(addGamePresenter({ id: nanoid(), name, shift }));
    }
    onClose();
  };  

  return (
    <div>
      <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
      <TextField
        select
        label="Shift"
        value={shift}
        onChange={(e) => setShift(e.target.value as "morning" | "afternoon" | "night")}
        fullWidth
      >
        <MenuItem value="morning">Morning</MenuItem>
        <MenuItem value="afternoon">Afternoon</MenuItem>
        <MenuItem value="night">Night</MenuItem>
      </TextField>
      <Button variant="contained" onClick={handleSubmit}>
        {existingPresenter ? "Edit" : "Add"} Presenter
      </Button>
    </div>
  );
};

export default GamePresenterForm;
