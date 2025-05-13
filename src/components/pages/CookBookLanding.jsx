import React from 'react';

import { Box, Stack, Typography, Grid, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Navbar, RecipeMap } from '../../components';

const PageContainer = styled(Box)(() => ({
    marginTop: '8rem',
}));

const CookBookLanding = () => {
    return (
        <Stack>
            <Navbar showReturnLink={false} />
            <PageContainer>
                <Button>
                    Enter
                </Button>
            </PageContainer>
        </Stack>
    );
}

export default CookBookLanding;