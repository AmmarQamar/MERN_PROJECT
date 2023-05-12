import React from 'react';
import { Container, Box, TextField, Grid, Avatar, Typography, Checkbox, Button, Stack } from '@mui/material';
import { centerBox, fieldBox, fieldLabel, inputField, productDescrition } from '../css/Main';
import { styled } from "@mui/system";
import { createTheme, ThemeProvider } from '@mui/material';
// const StyledTextField = styled(TextField, {
//     name: "StyledTextField",
// })({
//     // width: 300,
//     // height: 30,
//     "& .MuiInputBase-root": {
//         height: 30,
//         fontSize: 12,
//         color: "black",
//         // color: "#7C7C7C",
//     },
//     "& .MuiOutlinedInput-root":
//     {
//         "& > fieldset": { border: '1px solid green' },
//     },
//     //styles the label
//     "& .MuiInputLabel-root": {
//         fontSize: 12,
//         color: 'orange', // label color

//     },
//     //styles the outline hover
//     "& .MuiOutlinedInput-root:hover": {
//         "& > fieldset": {
//             borderColor: "orange"
//         }
//     },
//     // Above for focus border
//     "& .MuiOutlinedInput-root.Mui-focused": {
//         "& > fieldset": {
//             borderColor: "orange"
//         }
//     }
// });
// const theme = createTheme({
//     components: {
//         MuiTextField: {
//             styleOverrides: {
//                 root: ({
//                     // ---------------Input---------------
//                     "& .MuiInputBase-root": {
//                         height: 48,
//                         width: "auto",
//                         // size: "small",
//                         padding: 1,
//                         fontSize: 12,
//                         color: "red",
//                         // color: "#7C7C7C",
//                     },
//                     //----- LABEL --------
//                     "& .MuiInputLabel-root": {
//                         fontSize: 12,
//                         color: 'orange', // label color
//                         // height: 30,
//                         // display: 'flex',
//                         // alignItems: 'center'

//                     },
//                     // ---------------OUTLINE BORDER---------------
//                     // outline textfield
//                     "& .MuiOutlinedInput-root": {
//                         "& > fieldset": {
//                             borderColor: "orange",
//                             color: "orange",
//                         },
//                     },
//                     //styles the outline hover
//                     "& .MuiOutlinedInput-root:hover": {
//                         "& > fieldset": {
//                             borderColor: "orange"
//                         }
//                     },
//                     // outline focus border
//                     "& .MuiOutlinedInput-root.Mui-focused": {
//                         "& > fieldset": {
//                             borderColor: "orange"
//                         },
//                         "& > label": {
//                             color: "orange",
//                         }

//                     },
//                 }),
//             },
//         },
//     },
// });

const StyledTextField = styled(TextField, {
    name: "StyledTextField",
})({
    "& .MuiInputBase-root": {
        height: 80,
        fontSize: 12,
        color: "black",
        // color: "#7C7C7C",
    },
});
const AddNewProduct2 = () => {
    const height = 20;
    return (
        <body style={{ backgroundColor: "#E3EBFB", height: "100vh" }}>
            {/* <ThemeProvider theme={theme}> */}

            <Box>
                <Box sx={centerBox}>
                    {/* <Box sx={fieldBox}> */}
                    <Box sx={fieldBox}>
                        <Stack spacing={2}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} lg={5}>
                                    <Typography>Name:</Typography>
                                </Grid>
                                <Grid item xs={12} lg={7}>
                                    <TextField ></TextField>
                                </Grid>




                                <Stack sx={fieldLabel} direction="row" spacing={8}>
                                    <Typography>Description:</Typography>
                                    <TextField size="small" label="Name"></TextField>
                                </Stack>
                                <Stack sx={productDescrition} direction="row" spacing={8}>
                                    <Typography>Description:</Typography>
                                    <StyledTextField
                                    ></StyledTextField>
                                </Stack>
                                {/* <Stack sx={fieldLabel} direction="row" spacing={8}>
                                    <Typography>Name:</Typography>
                                    <TextField label="Name"></TextField>
                                </Stack>
                                <Stack sx={fieldLabel} direction="row" spacing={8}>
                                    <Typography>Name:</Typography>
                                    <TextField label="Name"></TextField>
                                </Stack>

                                <Stack sx={fieldLabel} direction="row" spacing={8}>
                                    <Typography>Name:</Typography>
                                    <TextField label="Name"></TextField>
                                </Stack> */}

                            </Grid>

                        </Stack>

                    </Box>
                </Box>
            </Box>
            {/* </ThemeProvider> */}
        </body>)
}

export default AddNewProduct