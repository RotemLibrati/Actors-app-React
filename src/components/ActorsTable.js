import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ActorItem from './ActorItem';

const ActorsTable = ({ actors }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {actors.map((actor) => (
            <ActorItem key={actor.id} actor={actor} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
};

export default ActorsTable;