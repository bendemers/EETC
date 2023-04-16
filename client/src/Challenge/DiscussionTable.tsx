import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import Forum from './Forum';

interface Row {
  name: string;
  content: string;
  id: number;
}

const rows: Row[] = [
  {
    name: 'John',
    content:
      'The goal of these algorithms is to generate profitable trading strategies based on statistical analysis and mathematical models. At its core, quantitative trading involves using data-driven analysis to identify patterns and trends in financial markets that can be exploited for profit. This process requires sophisticated tools and techniques, including machine learning algorithms, statistical models, and mathematical optimization techniques. The ultimate goal is to create algorithms that can make intelligent trading decisions based on historical data and real-time market conditions.',
    id: 96,
  },
  {
    name: 'Jane',
    content:
      'These algorithms use mathematical models and statistical analysis to identify patterns and trends in financial markets that can be exploited for profit. The development of these algorithms requires a deep understanding of financial markets, as well as a strong grasp of mathematics and computer science. Traders who develop successful quant trading algorithms are able to make profitable trades with a high degree of accuracy and consistency. However, the development process is complex and requires significant investment in both time and resources.',
    id: 73,
  },
  {
    name: 'Bob',
    content:
      'Im getting an error that says "IndexError: list index out of range". What could be causing this error, and how can I fix it to get my code working properly?',
    id: 20,
  },
];

const columns = [
  { id: 'author', label: 'Author', align: 'left' },
  { id: 'content', label: 'Content', align: 'left' },
  { id: 'view', label: 'View', align: 'center' },
];

export default function DiscussionTable() {
  const [open, setOpen] = React.useState(false);
  const [post, setPost] = React.useState(0);
  const [newPost, setNewPost] = React.useState(false);

  const openNewPost = () => {
    setNewPost(true);
  };

  const closeNewPost = () => {
    setNewPost(false);
  };

  const openPost = (id: number) => {
    setPost(id);
    setOpen(true);
  };
  const closePost = () => {
    setOpen(false);
    setPost(0);
  };
  return (
    <Box>
      <Dialog open={open} onClose={closePost}>
        <DialogContent>
          <DialogTitle>{rows[post].name}</DialogTitle>
          <DialogContentText>{rows[post].content}</DialogContentText>
        </DialogContent>
      </Dialog>
      <Dialog open={newPost} onClose={closeNewPost}>
        <DialogContent>
          <Forum />
        </DialogContent>
      </Dialog>
      <Button sx={{ m: 1 }} variant="contained" onClick={openNewPost}>
        + New Post
      </Button>
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
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">
                  {row.content.slice(0, 200)}...
                </TableCell>
                <TableCell align="right">
                  <Button variant="contained" onClick={() => openPost(index)}>
                    View Post
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
