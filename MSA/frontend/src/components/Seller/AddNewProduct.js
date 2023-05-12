import React from 'react';
import { Container, Box, TextField, Grid, Avatar, Typography, Checkbox, Button, Stack, Input } from '@mui/material';
import { centerBox, fieldBox, fieldLabel } from '../css/Main';
import { styled } from "@mui/system";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
// import { createTheme, ThemeProvider } from '@mui/material';
const CustomTextField = styled(TextField, {
    name: "StyledTextField",
})({
    // ---------------Input---------------
    "& .MuiInputBase-root": {
        width: "auto",
        padding: 1,
        fontSize: 12,
        color: "red",
        // color: "#7C7C7C",
    },
    //----- LABEL --------
    "& .MuiInputLabel-root": {
        fontSize: 12,
        color: 'orange', // label color
        // height: 30,
        // display: 'flex',
        // alignItems: 'center'

    },
    // ---------------OUTLINE BORDER---------------
    // outline textfield
    "& .MuiOutlinedInput-root": {
        "& > fieldset": {
            borderColor: "orange",
            color: "orange",
        },
    },
    //styles the outline hover
    "& .MuiOutlinedInput-root:hover": {
        "& > fieldset": {
            borderColor: "orange"
        }
    },
    // outline focus border
    "& .MuiOutlinedInput-root.Mui-focused": {
        "& > fieldset": {
            borderColor: "orange"
        },
        "& > label": {
            color: "orange",
        },


    },
});


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

const MultiTextField = styled(TextField, {
    name: "MultiTextField",
})({
    "& .MuiInputBase-root": {
        height: 80,
        fontSize: 12,
        color: "black",
        // color: "#7C7C7C",
    },
});
const AddNewProduct = () => {
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
                                <Grid item xs={12} lg={12} sx={{ marginBottom: 5 }}>
                                    <Typography variant="h6" sx={{ textAlign: "center", fontWeight: "bold" }}>Add New item</Typography>
                                </Grid>
                                {/* Name */}
                                <Grid item xs={12} lg={5} sx={fieldLabel}>
                                    <Typography>Name:</Typography>
                                </Grid>
                                <Grid item xs={12} lg={7}>
                                    <TextField fullWidth size="small" ></TextField>
                                </Grid>
                                {/* Description */}

                                <Grid item xs={12} lg={5} sx={fieldLabel}>
                                    <Typography>Description:</Typography>
                                </Grid>
                                <Grid item xs={12} lg={7}>
                                    <TextField fullWidth multiline row={6}></TextField>
                                </Grid>
                                {/* Price */}
                                <Grid item xs={12} lg={5} sx={fieldLabel}>
                                    <Typography>Price:</Typography>
                                </Grid>
                                <Grid item xs={12} lg={7} >
                                    <TextField fullWidth size="small" ></TextField>
                                </Grid>
                                {/* Quantity */}
                                <Grid item xs={12} lg={5} sx={fieldLabel}>
                                    <Typography>Quantity:</Typography>
                                </Grid>
                                <Grid item xs={12} lg={7}>
                                    <TextField fullWidth size="small" ></TextField>
                                </Grid>
                                {/* Insert Image */}
                                <Grid item xs={12} lg={5} sx={fieldLabel}>
                                    <Typography>Add Image:</Typography>
                                </Grid>
                                <Grid item xs={12} lg={7}>
                                    <Avatar
                                        sx={{ backgroundColor: "transparent", p: 2, margin: "auto" }}>
                                        <AddPhotoAlternateIcon onClick={() => document.getElementById('image-input').click()} sx={{ color: "black", fontSize: 40 }} >
                                        </AddPhotoAlternateIcon>
                                        <Input id="image-input"
                                            type="file" style={{ display: 'none' }}></Input>
                                    </Avatar>
                                    {/* <AddPhotoAlternateIcon sx={{ fontSize: 30,, margin: "auto" }} /> */}
                                </Grid>

                                {/* 

                                <Stack sx={fieldLabel} direction="row" spacing={8}>
                                    <Typography>Name2:</Typography>
                                    <TextField size="small" label="Name"></TextField>
                                </Stack>
                                <Stack sx={productDescrition} direction="row" spacing={8}>
                                    <MultiTextField
                                    ></MultiTextField>
                                </Stack> */}

                            </Grid>

                        </Stack>

                    </Box>
                </Box>
            </Box>
            {/* </ThemeProvider> */}
        </body >)
}

export default AddNewProduct