import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/Search';

import Grid from '@mui/material/Grid';


const Navbar = () => {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: 'white', // Set background color to white
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
            borderRadius:"10px",
        },
    }));






    return (
        <Grid>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar style={{background:'black'}}>
                    <Toolbar>


                        <Search style={{marginLeft:'25%'}}>
                            <SearchIconWrapper style={{color:'black',backgroundColor:'white',borderRadius:'8px'}}>
                                <SearchIcon style={{color:'black'}} />
                            </SearchIconWrapper>
                            <StyledInputBase style={{}} />
                        </Search>
                        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                            <Box sx={{ flex: 1 }} />
                            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '30px',marginRight:'30%' }}>
                                <Typography sx={{ marginRight: '20px' }}>Categories</Typography>
                                <Typography sx={{ marginRight: '20px' }}>Website Builders</Typography>
                                <Typography>Today's Builds</Typography>
                            </Box>
                        </Box>

                    </Toolbar>
                </AppBar>

            </Box>

        </Grid>
    )
}

export default Navbar