import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TextField from '@mui/material/TextField';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import './ActorItem.css';

//Http requests
import { setComment, deleteActor } from '../service/service';

const ActorItem = ({ actor: { id, name, birthday, gender } }) => {
    const [open, setOpen] = useState(false); // 
    const [comments, setComments] = useState([]);
    const [formData, setFormData] = useState({
        id: id,
        comment: '',
        display: true //variable for display or not the detailts about actor(delete button)
    });
    const { comment } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onsubmit = () => {
        setComments([formData, ...comments]); // Added comments of user
        setComment({
            id,
            name,
            birthday,
            gender,
            comment
        }); 
    };
    const onDelete = () => {
        deleteActor(id); //Function fot delete the actor from redis(cache)
        setFormData({ ...formData, display: false }) // Change the variable's actor to false
    }
    return (
        formData.display &&
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} className="row-table">
                <TableCell style={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton
                        style={{ float: 'left' }}
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                    {id + " - " + name}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Details about {name.split(' ')[0]}
                            </Typography>
                            <Table aria-label="purchases">
                                <TableHead>
                                    <TableRow className='row-details'>
                                        <TableCell className='cell-table'>Name</TableCell>
                                        <TableCell className='cell-table'>Birthday</TableCell>
                                        <TableCell className='cell-table'>Gender</TableCell>
                                        <TableCell className='cell-table'>Comment</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow key={id} className='row-details'>
                                        <TableCell className='cell-table' component="th" scope="row">
                                            {name}
                                        </TableCell>
                                        <TableCell className='cell-table'>{birthday}</TableCell>
                                        <TableCell className='cell-table'>{gender}</TableCell>
                                        <TableCell className='cell-table'>
                                            {comments[0]?.id === id ? <div> {comments[0].comment}</div> :
                                                <div className='input-field'>
                                                    <TextField
                                                        name="comment"
                                                        label="Add Comment"
                                                        onChange={e => onChange(e)}
                                                        value={comment}
                                                        fullWidth={true}
                                                    />
                                                    <MapsUgcIcon onClick={() => onsubmit()} style={{ cursor: 'pointer' }} />
                                                </div>
                                            }
                                        </TableCell>
                                        <TableCell className='cell-table'>
                                            <Button
                                                onClick={() => onDelete()}
                                                variant="outlined"
                                                startIcon={<DeleteIcon />}
                                                style={{ float: 'right' }}>
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
};

export default ActorItem;