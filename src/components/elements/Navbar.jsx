import { Link } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import { Box, Typography, Tooltip, Divider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

import { bullLogo } from '../../utils/constants';

const HeaderBox = styled(Box)(({ theme }) => ({
    height: '14vh',
    maxHeight: '60px',
    width: '100%',
    position: 'fixed',
    display: "flex",
    alignItems: 'center',
    padding: '0 28px',
    backgroundColor: '#1a1a1a',
    boxShadow: '0px 0px 15px 2px #0d0d0d',
    zIndex: '100',
    [theme.breakpoints.down('md')]: {
        padding: '0 16px',
    },
}));

const NavItemsContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'center',
    width: 'inherit',
    marginRight: '1rem',
    marginLeft: '0.5rem',
    [theme.breakpoints.down('md')]: {
        gap: '1rem',
    },
}));

const NavLink = styled(Typography)(() => ({
    color: 'rgba(255, 102, 0, 0.7)',
    '&:hover': {
        color: 'rgba(255, 102, 0, 0.95)',
    },
}));

const Navbar = ({ showReturnLink, showShoppingListLink }) => {
    return (
        <HeaderBox>
            <NavItemsContainer>
                <Box
                    flexGrow={1}
                    sx={{ mt: '2px' }}
                >
                    <Link to="/">
                        <Box sx={{ mb: '-2px' }}>
                            <img src={bullLogo} height={42}/>
                        </Box>
                    </Link>
                </Box>
                { showReturnLink
                    ?
                        <Link to="/menu">
                            <NavLink>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                >
                                    <ArrowBackIcon fontSize='small' />&nbsp;
                                    <Typography variant='button'>MENU</Typography>
                                </Box>
                            </NavLink>
                        </Link>
                    :
                        <></>
                }

                { showReturnLink && showShoppingListLink
                    ?
                        <Divider
                            orientation="vertical"
                            variant="middle"
                            flexItem
                            sx={{
                                borderColor: '#808080'
                            }}
                        />
                    :
                        <></>
                }

                { showShoppingListLink
                    ?
                        <Box
                            sx={{ mt: '2px' }}
                        >
                            <Link to="/shopping-list">
                                <NavLink>
                                    <Box>
                                        <Tooltip title="Shopping List">
                                            <ReceiptLongIcon
                                                sx={{
                                                    fontSize: '24px'
                                                }}
                                            />
                                        </Tooltip>
                                    </Box>  
                                </NavLink>
                            </Link>
                        </Box>
                    :
                        <></>
                }
            </NavItemsContainer>
        </HeaderBox>
    );
}

export default Navbar;