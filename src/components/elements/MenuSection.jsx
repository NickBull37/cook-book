import React from 'react';

import { Box, Stack, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import { RecipeMap } from '../../components';
import recipes from '../../data/recipes';

const SectionContainer = styled(Box)(({ theme }) => ({
    marginBottom: '9rem',
    [theme.breakpoints.down('md')]: {
        marginBottom: '6rem',
    },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
    marginBottom: '1.75rem',
    paddingLeft: '4rem',
    cursor: 'default',
    [theme.breakpoints.down('md')]: {
        paddingLeft: '1.25rem',
    },
}));

const RecipeMapContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    padding: '0 9rem',
    [theme.breakpoints.down('md')]: {
        padding: '0 2.5rem',
    },
}));

const GridContainer = (props) => (
    <Grid
        container
        flexDirection={{ xs: 'column', sm: 'row' }}
        rowSpacing={{ xs: 10, sm: 12 }}
        columnSpacing={{ xs: 0, sm: 24 }}
        {...props}
    />
);

const MenuSection = ({ sectionTitle, recipeType }) => {
    return (
        <SectionContainer>
            <Stack>
                <SectionTitle
                    className='kepo-h1-orange'
                >
                    {sectionTitle}
                </SectionTitle>
                <RecipeMapContainer>
                    <GridContainer>
                        <RecipeMap recipes={recipes} recipeType={recipeType} />
                    </GridContainer>
                </RecipeMapContainer>
            </Stack>
        </SectionContainer>
    );
}

export default MenuSection;