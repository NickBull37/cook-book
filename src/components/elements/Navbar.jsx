import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Paper, Typography } from '@mui/material';
import { boxCat, bullLogo } from '../../utils/constants';

const HeaderBox = styled(Box)(() => ({
    height: '14vh',
    maxHeight: '70px',
    width: '100%',
    //position: 'fixed',
    display: "flex",
    alignItems: 'center',
    padding: '0 28px',
    backgroundColor: '#1a1a1a', // 10%
    boxShadow: '0px 0px 15px 2px #0d0d0d',
    zIndex: '100',
    marginBottom: '4rem',
}));

const Navbar = () => {
    return (
        <HeaderBox>
            <Box
                display="flex"
            >
                <Link to="/dashboard">
                    <img src={bullLogo} height={58}/>
                </Link>
            </Box>
        </HeaderBox>
    );
}

export default Navbar;