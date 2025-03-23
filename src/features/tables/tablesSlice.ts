import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IdName } from '../../types/models/IdName';

interface TablesState {
  tables: IdName[];
}

const initialState: TablesState = {
  tables: [
    { id: '1', name: 'Table 1' },
    { id: '2', name: 'Table 2' },
    { id: '3', name: 'Table 3' },
  ],
};

const tablesSlice = createSlice({
  name: 'tables',
  initialState,
  reducers: {
    addTable: (state, action: PayloadAction<IdName>) => {
      state.tables.push(action.payload);
    },
    editTable: (state, action: PayloadAction<IdName>) => {
      const index = state.tables.findIndex(
        (table) => table.id === action.payload.id
      );
      if (index !== -1) {
        state.tables[index] = action.payload;
      }
    },
    deleteTable: (state, action: PayloadAction<string>) => {
      state.tables = state.tables.filter(
        (table) => table.id !== action.payload
      );
    },
  },
});

export const { addTable, editTable, deleteTable } = tablesSlice.actions;
export default tablesSlice.reducer;
