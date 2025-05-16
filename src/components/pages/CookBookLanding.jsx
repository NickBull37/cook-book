import React from 'react';
import { Link } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import { Box, Stack, Typography, Button, IconButton } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';

import { bullsKitchen } from '../../utils/constants';

const PageContainer = styled(Box)(() => ({
    height: '100vh',
    background: '#181918'
}));

const LandingStack = styled(Stack)(({ theme }) => ({
    height: 'inherit',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2.5rem',
    [theme.breakpoints.down('md')]: {
        gap: '4rem',
    },
}));

const DesktopImageBox = styled(Box)(({ theme }) => ({
    display: 'block',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}));

const MobileImageBox = styled(Box)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'block',
    },
}));

const CookBookLanding = () => {
    return (
        <PageContainer>
            <LandingStack>
                <DesktopImageBox>
                    <img src={bullsKitchen} height={350} />
                </DesktopImageBox>
                <MobileImageBox>
                    <img src={bullsKitchen} height={200} />
                </MobileImageBox>

                <Stack
                    gap={1.5}
                    sx={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <Typography
                        className='roboto'
                        sx={{
                            fontSize: '1.25rem',
                            color: '#e6e6e6',
                            letterSpacing: '0.2em'
                        }}
                    >
                        Menu
                    </Typography>
                    <Link to="/menu">
                        <IconButton
                            size="large"
                            sx={{
                                background: '#333333',
                                height: '70px',
                                width: '70px',
                                '&:hover': {
                                    background: 'rgba(255, 133, 51, 0.5)',
                                },
                            }}
                        >
                            <MenuBookIcon
                                sx={{
                                    fontSize: '2.75rem',
                                    color: '#dabd8b',
                                    mt: '-4px',
                                }}
                            />
                        </IconButton>
                    </Link>
                </Stack>
            </LandingStack>
        </PageContainer>
    );
}

export default CookBookLanding;