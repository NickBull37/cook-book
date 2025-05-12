import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Stack, Typography, Paper, Grid, Rating } from '@mui/material';
import { styled } from '@mui/material/styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';

import { Navbar } from '../../components';
import { boxCat } from '../../utils/constants';

const SectionContainer = styled(Box)(() => ({
    marginBottom: '8rem',
}));

const SectionTitle = styled(Typography)(() => ({
    marginBottom: '1.5rem',
    paddingLeft: '2rem',
}));

const RecipeMapContainer = styled(Box)(() => ({
    width: '100%',
    padding: '0 8rem'
}));

const RecipeStack = styled(Stack)(({ theme }) => ({
    display: 'flex',
    backgroundColor: '#404040',
    ...theme.typography.body2,
    borderLeft: '1px solid #fff',
    paddingBottom: '4px',
    //borderRadius: '10px',
    '&:hover': {
        cursor: 'pointer',
        backgroundColor: 'rgba(255, 102, 0, 0.1)',
        borderLeft: 'none',
        borderRadius: '6px',
        boxShadow: '0px 2px 15px 2px #000',
    },
}));

const RecipeTitle = styled(Typography)(() => ({
    fontSize: '1.75rem',
    marginBottom: '1rem',
    paddingLeft: '0.75rem',
    borderBottom: '1px solid #fff',
    color: '#fff',
}));

const CardDetails = styled(Box)(() => ({
    display: 'flex',
    paddingLeft: '1rem',
    paddingRight: '0.25rem',
    justifyContent: 'space-between'
}));

const DetailBox = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px',
    gap: 5
}));

const CardText = styled(Typography)(() => ({
    color: '#fff',
}));

const CookBookDashboard = () => {

    // Constants
    const dinnerRecipes = [
        {
            index: 1,
            type: 'dinner',
            recipeName: 'Tenderloin Steak',
            // photo: '',
            prepTime: '25',
            cookTime: '10',
            serves: '1-2',
            rating: 4.5,
            difficulty: 3
        },
        {
            index: 2,
            type: 'dinner',
            recipeName: 'Chicken Picatta',
            // photo: '',
            prepTime: '15',
            cookTime: '30',
            serves: '6-12',
            rating: 4.5,
            difficulty: 3
        },
    ];

    const dessertRecipes = [
        {
            index: 1,
            type: 'dessert',
            recipeName: 'Chocolate Cheese Cake',
            // photo: '',
            prepTime: '< 5',
            cookTime: '30',
            serves: '6-12',
            rating: 4.5,
            difficulty: 3
        }
    ];

    const drinkRecipes = [
        {
            index: 1,
            type: 'drink',
            recipeName: 'Watermelon Margarita',
            // photo: '',
            prepTime: '10',
            cookTime: '0',
            serves: '1',
            rating: 4.5,
            difficulty: 3
        }
    ];

    const extraRecipes = [
        {
            index: 1,
            type: 'extra',
            recipeName: 'Burger Sauce',
            // photo: '',
            prepTime: '0',
            cookTime: '10',
            serves: '4-6',
            rating: 4,
            difficulty: 5
        }
    ];

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
                                rowSpacing={6}
                                columnSpacing={16}
                            >
                                {dinnerRecipes.map((recipe, index) => (
                                    <Grid size={6} key={index}>
                                        <RecipeStack>
                                            <RecipeTitle>
                                                {recipe.recipeName}
                                            </RecipeTitle>
                                            <CardDetails>
                                                <Stack>
                                                    <DetailBox>
                                                        <AccessTimeIcon fontSize='' sx={{ color: '#fff' }} />
                                                        <CardText>
                                                            Prep time <span className='recipe-det'>(min)</span>&nbsp;&nbsp;&nbsp;<span className='recipe-detail'>{recipe.prepTime}</span>
                                                        </CardText>
                                                    </DetailBox>
                                                    <DetailBox>
                                                        <AccessTimeIcon fontSize='' sx={{ color: '#fff' }} />
                                                        <CardText>
                                                            Cook time <span className='recipe-det'>(min)</span>&nbsp;&nbsp;&nbsp;<span className='recipe-detail'>{recipe.cookTime}</span>
                                                        </CardText>
                                                    </DetailBox>
                                                    <DetailBox>
                                                        <PersonIcon fontSize='' sx={{ color: '#fff' }} />
                                                        <CardText>
                                                            Serves&nbsp;&nbsp;&nbsp;<span className='recipe-detail'>{recipe.serves}</span>
                                                        </CardText>
                                                    </DetailBox>
                                                </Stack>
                                                <img className="" src={boxCat} height={200}/>
                                            </CardDetails>
                                        </RecipeStack>
                                    </Grid>
                                ))}
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
                                {dessertRecipes.map((recipe, index) => (
                                    <Grid size={6} key={index}>
                                        <RecipeStack>
                                            <RecipeTitle>
                                                {recipe.recipeName}
                                            </RecipeTitle>
                                            <CardDetails>
                                                <Stack>
                                                    <DetailBox>
                                                        <AccessTimeIcon fontSize='' sx={{ color: '#fff' }} />
                                                        <CardText>
                                                            Prep time <span className='recipe-det'>(min)</span>&nbsp;&nbsp;&nbsp;<span className='recipe-detail'>{recipe.prepTime}</span>
                                                        </CardText>
                                                    </DetailBox>
                                                    <DetailBox>
                                                        <AccessTimeIcon fontSize='' sx={{ color: '#fff' }} />
                                                        <CardText>
                                                            Cook time <span className='recipe-det'>(min)</span>&nbsp;&nbsp;&nbsp;<span className='recipe-detail'>{recipe.cookTime}</span>
                                                        </CardText>
                                                    </DetailBox>
                                                    <DetailBox>
                                                        <PersonIcon fontSize='' sx={{ color: '#fff' }} />
                                                        <CardText>
                                                            Serves&nbsp;&nbsp;&nbsp;<span className='recipe-detail'>{recipe.serves}</span>
                                                        </CardText>
                                                    </DetailBox>
                                                </Stack>
                                                <img className="" src={boxCat} height={200}/>
                                            </CardDetails>
                                        </RecipeStack>
                                    </Grid>
                                ))}
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
                                {drinkRecipes.map((recipe, index) => (
                                    <Grid size={6} key={index}>
                                        <RecipeStack>
                                            <RecipeTitle>
                                                {recipe.recipeName}
                                            </RecipeTitle>
                                            <CardDetails>
                                                <Stack>
                                                    <DetailBox>
                                                        <AccessTimeIcon fontSize='' sx={{ color: '#fff' }} />
                                                        <CardText>
                                                            Prep time <span className='recipe-det'>(min)</span>&nbsp;&nbsp;&nbsp;<span className='recipe-detail'>{recipe.prepTime}</span>
                                                        </CardText>
                                                    </DetailBox>
                                                    <DetailBox>
                                                        <AccessTimeIcon fontSize='' sx={{ color: '#fff' }} />
                                                        <CardText>
                                                            Cook time <span className='recipe-det'>(min)</span>&nbsp;&nbsp;&nbsp;<span className='recipe-detail'>{recipe.cookTime}</span>
                                                        </CardText>
                                                    </DetailBox>
                                                    <DetailBox>
                                                        <PersonIcon fontSize='' sx={{ color: '#fff' }} />
                                                        <CardText>
                                                            Serves&nbsp;&nbsp;&nbsp;<span className='recipe-detail'>{recipe.serves}</span>
                                                        </CardText>
                                                    </DetailBox>
                                                </Stack>
                                                <img className="" src={boxCat} height={200}/>
                                            </CardDetails>
                                        </RecipeStack>
                                    </Grid>
                                ))}
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
                                {extraRecipes.map((recipe, index) => (
                                    <Grid size={6} key={index}>
                                        <RecipeStack>
                                            <RecipeTitle>
                                                {recipe.recipeName}
                                            </RecipeTitle>
                                            <CardDetails>
                                                <Stack>
                                                    <DetailBox>
                                                        <AccessTimeIcon fontSize='' sx={{ color: '#fff' }} />
                                                        <CardText>
                                                            Prep time <span className='recipe-det'>(min)</span>&nbsp;&nbsp;&nbsp;<span className='recipe-detail'>{recipe.prepTime}</span>
                                                        </CardText>
                                                    </DetailBox>
                                                    <DetailBox>
                                                        <AccessTimeIcon fontSize='' sx={{ color: '#fff' }} />
                                                        <CardText>
                                                            Cook time <span className='recipe-det'>(min)</span>&nbsp;&nbsp;&nbsp;<span className='recipe-detail'>{recipe.cookTime}</span>
                                                        </CardText>
                                                    </DetailBox>
                                                    <DetailBox>
                                                        <PersonIcon fontSize='' sx={{ color: '#fff' }} />
                                                        <CardText>
                                                            Serves&nbsp;&nbsp;&nbsp;<span className='recipe-detail'>{recipe.serves}</span>
                                                        </CardText>
                                                    </DetailBox>
                                                </Stack>
                                                <img className="" src={boxCat} height={200}/>
                                            </CardDetails>
                                        </RecipeStack>
                                    </Grid>
                                ))}
                            </Grid>
                        </RecipeMapContainer>
                    </Stack>
                </SectionContainer>
            </Box>
        </Stack>
    );
}

export default CookBookDashboard;