import React from 'react';
import { Link } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { bullLogo } from '../../utils/constants';

const HeaderBox = styled(Box)(() => ({
    height: '14vh',
    maxHeight: '70px',
    width: '100%',
    position: 'fixed',
    display: "flex",
    alignItems: 'center',
    padding: '0 28px',
    backgroundColor: '#1a1a1a', // 10%
    boxShadow: '0px 0px 15px 2px #0d0d0d',
    zIndex: '100',
}));

const NavItemsContainer = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 'inherit',
    marginRight: '1rem',
    marginLeft: '0.5rem',
}));

const ReturnLink = styled(Typography)(() => ({
    color: 'rgba(255, 102, 0, 0.6)',
    '&:hover': {
        color: 'rgba(255, 102, 0, 0.9)',
    },
}));

const Navbar = ({ showReturnLink }) => {
    return (
        <HeaderBox>
            <NavItemsContainer>
                <Link to="/">
                    <img src={bullLogo} height={58}/>
                </Link>
                { showReturnLink
                    ?
                        <Link to="/dashboard">
                            <ReturnLink>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                >
                                    <ArrowBackIcon fontSize='small' />&nbsp;
                                    Return to Dashboard
                                </Box>
                            </ReturnLink>
                        </Link>
                    :
                        <></>
                }
            </NavItemsContainer>
        </HeaderBox>
    );
}

export default Navbar;