import React from 'react';

import { Box, Stack, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Navbar, RecipeMap } from '../../components';
import recipes from '../../data/recipes';

const DashboardContainer = styled(Box)(() => ({
    marginTop: '8rem',
}));

const SectionContainer = styled(Box)(() => ({
    marginBottom: '9rem',
}));

const SectionTitle = styled(Typography)(() => ({
    marginBottom: '1.75rem',
    paddingLeft: '4rem',
    cursor: 'default',
}));

const RecipeMapContainer = styled(Box)(() => ({
    width: '100%',
    padding: '0 9rem'
}));

const GridContainer = (props) => (
    <Grid
        container
        rowSpacing={12}
        columnSpacing={24}
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