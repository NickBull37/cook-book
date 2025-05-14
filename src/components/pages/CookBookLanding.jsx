import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Stack, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import { bullsMenu } from '../../utils/constants';

const PageContainer = styled(Box)(() => ({
    height: '100vh',
    background: '#181918'
}));

const LandingStack = styled(Stack)(() => ({
    height: 'inherit',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '4rem',
}));

const GradientButton = styled(Button)(() => ({
    height: '50px',
    width: '120px',
    color: '#fff',
    background: 'linear-gradient(to right, #993d00, #ff6600)',
    boxShadow: '0px 2px 10px 1px #0d0d0d',
    '&:hover': {
        boxShadow: '0px 2px 15px 2px #0d0d0d',
        background: 'linear-gradient(to right, #662900, #cc5200)',
    },
}));

const EnterBtnText = styled(Typography)(() => ({
    color: '#fff'
}));

const CookBookLanding = () => {
    return (
        <PageContainer>
            <LandingStack>
                <Box>
                    <img src={bullsMenu} height={350} />
                </Box>
                <Link to="/dashboard">
                    <GradientButton
                        variant="contained"
                        size='large'
                    >
                            <EnterBtnText>
                                Enter
                            </EnterBtnText>
                    </GradientButton>
                </Link>
            </LandingStack>
        </PageContainer>
    );
}

export default CookBookLanding;