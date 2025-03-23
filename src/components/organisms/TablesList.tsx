import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { deleteTable } from '../../features/tables/tablesSlice';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TableModal from '../organisms/TableModal';

const TablesList = () => {
  const tables = useSelector((state: RootState) => state.tables.tables);
  const dispatch = useDispatch();

  const [selectedTable, setSelectedTable] = useState<any | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleEdit = (table: any) => {
    setSelectedTable(table);
    setModalOpen(true);
  };

  return (
    <div>
      <List>
        {tables.map((table) => (
          <ListItem
            key={table.id}
            secondaryAction={
              <>
                <IconButton edge="end" onClick={() => handleEdit(table)}>
                  <EditIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  onClick={() => dispatch(deleteTable(table.id))}
                >
                  <DeleteIcon />
                </IconButton>
              </>
            }
          >
            <ListItemText primary={table.name} />
          </ListItem>
        ))}
      </List>
      <TableModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setSelectedTable(null);
        }}
        existingTable={selectedTable}
      />
    </div>
  );
};

export default TablesList;
