
import React from 'react';
import Box from '@mui/material/Box';
import { FormControl, Input, InputLabel, FormHelperText } from '@mui/material';

export default function footer() {
    return (
        <>
            <Box>
                This is a div element created with the Box component in Material UI.
                <FormControl>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                </FormControl>

            </Box>
        </>
    );
}
