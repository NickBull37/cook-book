import React from 'react';
import { Link } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import { Box, Stack, Typography, Button } from '@mui/material';

import { bullsKitchenLanding } from '../../utils/constants';

const PageContainer = styled(Box)(() => ({
    height: '100vh',
    background: '#0d0d0d',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5rem',
}));

const ContentStack = styled(Stack)(({ theme }) => ({
    maxWidth: 420,
    width: '100%',
    alignItems: 'center',
    gap: theme.spacing(11),
    textAlign: 'center',
}));

const LogoWrapper = styled(Box)(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&::before': {
        content: '""',
        position: 'absolute',
        width: '280px',
        height: '280px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(230,81,0,0.4) 0%, transparent 70%)',
        zIndex: 0,
        filter: 'blur(40px)',
    },
}));

const LogoImage = styled('img')(({ theme }) => ({
    width: '100%',
    maxWidth: 280,
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
        maxWidth: 220,
    },
}));

const CTAButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#e65100',
    color: '#fff',
    padding: '0.5rem 1.5rem',
    borderRadius: '50px',
    fontWeight: 600,
    textTransform: 'uppercase',
    fontSize: '0.875rem',
    boxShadow: '0 4px 12px rgba(230,81,0,0.4)',
    '&:hover': {
        backgroundColor: '#bf360c',
    },
}));

const CookBookLanding = () => {
    return (
        <PageContainer>
            <ContentStack>
                <LogoWrapper>
                    <LogoImage
                        src={bullsKitchenLanding}
                        alt="Bull's Kitchen Logo"
                        sx={{
                            border: '1px solid rgba(255, 102, 0, 0.5)'
                        }}
                    />
                </LogoWrapper>

                {/* <Typography
                    variant="h4"
                    sx={{
                        color: '#fff',
                        fontWeight: 700,
                        letterSpacing: 0.5,
                    }}
                >
                    Welcome to<br />Bull’s Kitchen
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        color: '#bbb',
                        maxWidth: 300,
                        fontSize: '1rem',
                    }}
                >
                    Premium cuts. Bold flavors. Crafted with fire.
                </Typography> */}

                <Link to="/menu" style={{ textDecoration: 'none' }}>
                    <CTAButton>View Menu</CTAButton>
                </Link>
            </ContentStack>
        </PageContainer>
    );
};

export default CookBookLanding;
