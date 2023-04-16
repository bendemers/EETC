import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

interface Row {
  name: string;
  profit: number;
  score: number;
}

const rows: Row[] = [
  { name: 'John', profit: 600, score: 96 },
  { name: 'Jane', profit: 450, score: 73 },
  { name: 'Bob', profit: 50, score: 20 },
  { name: 'Mary', profit: -100, score: 5 },
];

const columns = [
  { id: 'rank', label: 'Rank', align: 'left' },
  { id: 'name', label: 'Name', align: 'left' },
  { id: 'profit', label: 'Profit', align: 'left' },
  { id: 'score', label: 'Score', align: 'left' },
];

export default function MaterialUITable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id}>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.name}>
              <TableCell align="left">{index + 1}</TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.profit}</TableCell>
              <TableCell align="left">{row.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
