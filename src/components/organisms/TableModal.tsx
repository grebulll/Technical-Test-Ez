import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTable, editTable } from '../../features/tables/tablesSlice';
import { Modal, Box, TextField, Button } from '@mui/material';
import { nanoid } from 'nanoid';
import { tableSchema } from '../../schemas/validationSchemas';

interface TableModalProps {
  open: boolean;
  onClose: () => void;
  existingTable?: { id: string; name: string } | null;
}

const TableModal: React.FC<TableModalProps> = ({
  open,
  onClose,
  existingTable,
}) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (existingTable) {
      setName(existingTable.name);
      setError('');
    } else {
      setName('');
      setError('');
    }
  }, [existingTable]);

  const handleSubmit = () => {
    const validationResult = tableSchema.safeParse({ name });

    if (!validationResult.success) {
      setError(validationResult.error.errors[0].message);
      return;
    }

    if (existingTable) {
      dispatch(editTable({ id: existingTable.id, name }));
    } else {
      dispatch(addTable({ id: nanoid(), name }));
    }
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          padding: 4,
          backgroundColor: 'white',
          width: 300,
          margin: '100px auto',
          borderRadius: 2,
        }}
      >
        <TextField
          fullWidth
          label="Table Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={!!error}
          helperText={error}
        />
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2 }}
          onClick={handleSubmit}
        >
          {existingTable ? 'Edit Table' : 'Add Table'}
        </Button>
      </Box>
    </Modal>
  );
};

export default TableModal;
