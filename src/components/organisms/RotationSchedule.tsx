import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { computeRotationSchedule } from '../../utils/computeSchedule';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';

const RotationSchedule = () => {
  const presenters = useSelector((state: RootState) =>
    state.gamePresenters.presenters.map((p) => p.name)
  );
  const tables = useSelector((state: RootState) =>
    state.tables.tables.map((t) => t.name)
  );
  const schedule = computeRotationSchedule(presenters, tables);

  return (
    <Paper sx={{ padding: 2, marginTop: 3 }}>
      <Typography variant="h5" gutterBottom>
        Game Presenters' Rotation Schedule
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            {tables.map((table) => (
              <TableCell key={table}>{table}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {schedule.map((slot, index) => (
            <TableRow key={index}>
              <TableCell>{slot.time}</TableCell>
              {slot.assignments.map((assignment, idx) => (
                <TableCell
                  key={idx}
                  sx={{
                    color: assignment.presenter === 'Break' ? 'red' : 'black',
                  }}
                >
                  {assignment.presenter}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default RotationSchedule;
