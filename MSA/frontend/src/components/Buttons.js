import { Box, Button, Divider, Grid } from '@mui/material'
import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import NavigationIcon from '@mui/icons-material/Navigation';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

export const Buttons = () => {
    return (
        <>
            {/* <Button>Simple</Button>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="contained" color='secondary'>Color Secondary</Button>
            <br></br>
            <Button variant="contained" color='secondary'>Color Secondary</Button>
            <br></br>
            <h3>Button Sizes</h3>
            <Button variant="contained" size='small'>Small</Button>
            <Button variant="contained" size='medium'>Medium</Button>
            <Button variant="contained" size='large'>Large</Button>
            <br></br>
            <h3> Button Icon</h3>
            <Button variant='contained' startIcon={<DeleteOutlineIcon />}>Start Delete</Button>
            <Button variant='contained' endIcon={<DeleteIcon />}>End Delete</Button>
            <br></br>
            <h3>Floating Button Fav</h3>
            <Fab> A</Fab>
            <Fab color="primary" size="small" aria-label="add">
                <AddIcon />
            </Fab>
            <Fab color="secondary" size="small" aria-label="edit">
                <EditIcon />
            </Fab>
            <Fab variant="extended">
                <NavigationIcon size="small" sx={{ mr: 1 }} />
                Navigate
            </Fab>
            <br></br>
            <h3>CheckBox</h3>
            <Checkbox />
            <Checkbox defaultChecked />
            <Checkbox checked />
            <br></br>

            <h3>CheckBox with label</h3>
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                <FormControlLabel required control={<Checkbox />} label="Required" />
                <FormControlLabel
                    value="start"
                    control={<Checkbox />}
                    label="Start"
                    labelPlacement="end"
                />
            </FormGroup> */}
            <Divider><h1>Grid</h1></Divider>
            <Grid container>
                <Grid item lg={3} md={4}>
                    <Box bgcolor='yellow' p={5} textAlign="center">1</Box>
                </Grid>
                <Grid item lg={2} md={4}>
                    <Box bgcolor='green' p={5} textAlign="center">2</Box>
                </Grid>
                <Grid item lg={4} md={4}>
                    <Box bgcolor='red' p={5} textAlign="center">3</Box>
                </Grid>
                <Grid item lg={3} md={4}>
                    <Box bgcolor='black' p={5} textAlign="center">4</Box>
                </Grid>
            </Grid>

        </>
    )
}
