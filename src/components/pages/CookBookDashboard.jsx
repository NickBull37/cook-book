import React from 'react';

import { Box, Stack, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Navbar, RecipeMap } from '../../components';
import recipes from '../../data/recipes';

const DashboardContainer = styled(Box)(() => ({
    marginTop: '8rem',
}));

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
        //rowSpacing={12}
        columnSpacing={{ xs: 0, sm: 24 }}
        {...props}
    />
);

const CookBookDashboard = () => {

    return (
        <Stack>
            <Navbar showReturnLink={false} />
            <DashboardContainer>

                {/* container for dinner section */}
                <SectionContainer>
                    <Stack>
                        <SectionTitle
                            className='kepo-h1-orange'
                        >
                            Dinners / Sides
                        </SectionTitle>
                        <RecipeMapContainer>
                            <GridContainer>
                                <RecipeMap recipes={recipes} recipeType={"dinner"} />
                            </GridContainer>
                        </RecipeMapContainer>
                    </Stack>
                </SectionContainer>

                {/* container for dessert section */}
                <SectionContainer>
                    <Stack>
                        <SectionTitle
                            className='kepo-h1-orange'
                        >
                            Desserts
                        </SectionTitle>
                        <RecipeMapContainer>
                            <GridContainer>
                                <RecipeMap recipes={recipes} recipeType={"dessert"} />
                            </GridContainer>
                        </RecipeMapContainer>
                    </Stack>
                </SectionContainer>

                {/* container for drinks section */}
                <SectionContainer>
                    <Stack>
                        <SectionTitle
                            className='kepo-h1-orange'
                        >
                            Drinks
                        </SectionTitle>
                        <RecipeMapContainer>
                            <GridContainer>
                                <RecipeMap recipes={recipes} recipeType={"drink"} />
                            </GridContainer>
                        </RecipeMapContainer>
                    </Stack>
                </SectionContainer>

                {/* container for extra section */}
                <SectionContainer>
                    <Stack>
                        <SectionTitle
                            className='kepo-h1-orange'
                        >
                            Extras
                        </SectionTitle>
                        <RecipeMapContainer>
                            <GridContainer>
                                <RecipeMap recipes={recipes} recipeType={"extra"} />
                            </GridContainer>
                        </RecipeMapContainer>
                    </Stack>
                </SectionContainer>
            </DashboardContainer>
        </Stack>
    );
}

export default CookBookDashboard;