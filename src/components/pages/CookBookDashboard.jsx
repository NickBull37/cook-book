import React from 'react';

import { Box, Stack, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Navbar, RecipeMap } from '../../components';
import recipes from '../../data/recipes';

const SectionContainer = styled(Box)(() => ({
    marginBottom: '9rem',
}));

const SectionTitle = styled(Typography)(() => ({
    marginBottom: '2.25rem',
    paddingLeft: '2rem',
    cursor: 'default',
}));

const RecipeMapContainer = styled(Box)(() => ({
    width: '100%',
    padding: '0 8rem'
}));

const CookBookDashboard = () => {

    return (
        <Stack>
            <Navbar />

            {/* container for dashboard page */}
            <Box>

                {/* container for dinner section */}
                <SectionContainer>
                    <Stack>
                        <SectionTitle className='kepo-h1-orange'>Dinner Recipes</SectionTitle>

                        {/* container for dinner recipe map */}
                        <RecipeMapContainer>
                            <Grid
                                container
                                rowSpacing={12}
                                columnSpacing={20}
                            >
                                <RecipeMap recipes={recipes} recipeType={"dinner"} />
                            </Grid>
                        </RecipeMapContainer>
                    </Stack>
                </SectionContainer>

                {/* container for dessert section */}
                <SectionContainer>
                    <Stack>
                        <SectionTitle className='kepo-h1-orange'>Dessert Recipes</SectionTitle>

                        {/* container for dessert recipe map */}
                        <RecipeMapContainer>
                            <Grid
                                container
                                rowSpacing={6}
                                columnSpacing={16}
                            >
                                <RecipeMap recipes={recipes} recipeType={"dessert"} />
                            </Grid>
                        </RecipeMapContainer>
                    </Stack>
                </SectionContainer>

                {/* container for drinks section */}
                <SectionContainer>
                    <Stack>
                        <SectionTitle className='kepo-h1-orange'>Drink Recipes</SectionTitle>

                        {/* container for drink recipe map */}
                        <RecipeMapContainer>
                            <Grid
                                container
                                rowSpacing={6}
                                columnSpacing={16}
                            >
                                <RecipeMap recipes={recipes} recipeType={"drink"} />
                            </Grid>
                        </RecipeMapContainer>
                    </Stack>
                </SectionContainer>

                {/* container for extra section */}
                <SectionContainer>
                    <Stack>
                        <SectionTitle className='kepo-h1-orange'>Extra Recipes</SectionTitle>

                        {/* container for extra recipe map */}
                        <RecipeMapContainer>
                            <Grid
                                container
                                rowSpacing={6}
                                columnSpacing={16}
                            >
                                <RecipeMap recipes={recipes} recipeType={"extra"} />
                            </Grid>
                        </RecipeMapContainer>
                    </Stack>
                </SectionContainer>
            </Box>
        </Stack>
    );
}

export default CookBookDashboard;