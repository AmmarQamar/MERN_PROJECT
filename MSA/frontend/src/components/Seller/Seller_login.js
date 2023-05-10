import { Container, Box, TextField, Grid, Avatar, Typography, Checkbox, Button } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import KeyIcon from '@mui/icons-material/Key';
import bgimg from '../images/backimg.jpg';
import bg from '../images/signin.svg';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { green, red, white } from '@mui/material/colors';

import React from 'react';

const boxstyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "75%",
    height: "70%",
    bgcolor: "background.paper",
    boxShadow: 24,
};
const center = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",

    // position: "relative",
    // top: "50%",
    // left: "37%",
};

export const Seller_login = () => {


    return (
        <div style={{
            backgroundImage: `url(${bgimg})`,
            backgroundSize: "cover",
            height: "100vh",
            color: "#f5f5f5",

        }}>

            <Box sx={boxstyle}>
                <Grid container >
                    {/* For Image */}
                    <Grid item xs={12} lg={6}>
                        <Box
                            style={{
                                backgroundImage: `url(${bg})`,
                                backgroundSize: "cover",
                                marginTop: "40px",
                                marginLeft: "15px",
                                marginRight: "15px",
                                height: "63vh",
                                color: "#f5f5f5",
                            }}
                        ></Box>
                    </Grid>

                    {/* For Fields */}
                    <Grid item xs={12} lg={6}>
                        <Box
                            sx={{
                                backgroundColor: "#3b33d5",
                                height: "100%",
                                backgroundSize: "cover",
                                minHeight: "300px",
                                pl: 10,
                                pr: 10
                            }}>
                            <Container sx={center} >
                                <Avatar
                                    sx={{ p: 1, mt: 2, bgcolor: "#ffffff" }}>
                                    <LockOpenIcon sx={{ color: "black" }} />
                                </Avatar>
                                <Typography variant="h5">
                                    Sign In
                                </Typography>
                            </Container>

                            {/* User Inputs */}
                            <Box>
                                <Grid container>
                                    <Grid item xs={12} lg={12} sx={{ marginTop: 2 }}>
                                        <TextField
                                            label="Email"
                                            variant="outlined"
                                            size="small"
                                            required
                                            fullWidth
                                            InputProps={{ style: { fontSize: '13px', color: 'white' } }}
                                            InputLabelProps={{ style: { fontSize: '13px', color: 'white' } }}
                                        >
                                        </TextField>
                                    </Grid>
                                    <Grid item xs={12} lg={12} sx={{ marginTop: 2, marginBottom: 2 }}>
                                        <TextField
                                            label="Password"
                                            variant="outlined"
                                            size="small"
                                            required
                                            fullWidth
                                            InputProps={{ style: { fontSize: '13px', color: 'white' } }}
                                            InputLabelProps={{ style: { fontSize: '13px', color: 'white' } }}
                                        >
                                        </TextField>
                                    </Grid>
                                    <Grid container style={{ marginTop: 2 }}>
                                        <Grid item xs={8} lg={8}>
                                            <FormControlLabel

                                                label={
                                                    <Typography style={{ fontSize: 12 }}>
                                                        Remember Me
                                                    </Typography>
                                                }
                                                control={<Checkbox size='small' defaultChecked sx={{
                                                    color: "white",
                                                    '&.Mui-checked': {
                                                        color: `#ffff`
                                                    },

                                                }} />}
                                            />
                                        </Grid>
                                        <Grid item xs={8} lg={4}  >
                                            <Typography style={{
                                                marginTop: 10,
                                                fontSize: 12,
                                                cursor: "pointer",
                                                textAlign: "right",

                                            }}
                                                sx={{
                                                    '&:hover': {
                                                        color: "#FF9A01"
                                                    },
                                                }}
                                            >
                                                Forget Password
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Button variant='contained'
                                        sx={{
                                            color: "smokewhite",
                                            bgcolor: "#FF9A01",
                                            borderRadius: 20,
                                            width: "90%",
                                            mt: 2,
                                            ml: 2,
                                            mr: 2,
                                            '&:hover': {
                                                bgcolor: '#ffff',
                                                color: "#FF9A01",
                                                transition: 'all 1s ease-in-out',
                                            }
                                        }}>SIGN IN
                                    </Button>
                                    <Typography variant='span'
                                        sx={{
                                            fontSize: "12px",
                                            width: "100%",
                                            mt: 2,
                                            cursor: "pointer",
                                            textAlign: "center",
                                            '&:hover': {
                                                color: "#FF9A01",
                                            }
                                        }}>Not registered yet? Create an Account</Typography>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>


        </div >
    )
}