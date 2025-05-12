import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Stack, Typography, Paper, Grid, Rating } from '@mui/material';
import { styled } from '@mui/material/styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';

import { Navbar } from '../../components';
import { boxCat } from '../../utils/constants';

const SectionContainer = styled(Box)(() => ({
    marginBottom: '8rem',
}));

const SectionTitle = styled(Typography)(() => ({
    marginBottom: '2rem',
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
        backgroundColor: 'rgba(255, 102, 0, 0.05)',
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '1rem',
    paddingRight: '0.25rem',
}));

const DetailBox = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    gap: 4
}));

const CardText = styled(Typography)(() => ({
    color: '#d9d9d9',
}));

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff8533',
    },
});

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
        {
            index: 3,
            type: 'dinner',
            recipeName: 'Potato Mochi',
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
            difficulty: 2
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
            difficulty: 2.5
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
            difficulty: 1
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
                                rowSpacing={12}
                                columnSpacing={16}
                            >
                                {dinnerRecipes.map((recipe, index) => (
                                    <Grid size={6} key={index}>
                                        <RecipeStack>
                                            <RecipeTitle>
                                                {recipe.recipeName}
                                            </RecipeTitle>
                                            <CardDetails>
                                                <Stack
                                                    gap={2.5}
                                                >
                                                    <DetailBox>
                                                        <AccessTimeIcon fontSize='' sx={{ color: '#fff' }} />
                                                        <CardText>
                                                            Prep time <span className='recipe-det'>(min)</span>&nbsp;&nbsp;&nbsp;<span className='recipe-detail-value'>{recipe.prepTime}</span>
                                                        </CardText>
                                                    </DetailBox>
                                                    <DetailBox>
                                                        <AccessTimeIcon fontSize='' sx={{ color: '#fff' }} />
                                                        <CardText>
                                                            Cook time <span className='recipe-det'>(min)</span>&nbsp;&nbsp;&nbsp;<span className='recipe-detail-value'>{recipe.cookTime}</span>
                                                        </CardText>
                                                    </DetailBox>
                                                    <DetailBox>
                                                        <PersonIcon fontSize='' sx={{ color: '#fff' }} />
                                                        <CardText>
                                                            Serves&nbsp;&nbsp;&nbsp;<span className='recipe-detail-value'>{recipe.serves}</span>
                                                        </CardText>
                                                    </DetailBox>
                                                    <DetailBox>
                                                        <LocalDiningIcon fontSize='' sx={{ color: '#fff' }} />
                                                        <CardText>
                                                            Difficulty&nbsp;&nbsp;
                                                        </CardText>
                                                        <StyledRating
                                                            readonly
                                                            size="small"
                                                            value={recipe.difficulty}
                                                            precision={0.5}
                                                            icon={<LunchDiningIcon fontSize="inherit" />}
                                                            emptyIcon={<LunchDiningOutlinedIcon fontSize="inherit" />}
                                                        />
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
                                                <Stack
                                                    gap={2.5}
                                                >
                                                    <DetailBox>
                                                        <AccessTimeIcon fontSize='' sx={{ color: '#fff' }} />
                                                        <CardText>
                                                            Prep time <span className='recipe-det'>(min)</span>&nbsp;&nbsp;&nbsp;<span className='recipe-detail-value'>{recipe.prepTime}</span>
                                                        </CardText>
                                                    </DetailBox>
                                                    <DetailBox>
                                                        <AccessTimeIcon fontSize='' sx={{ color: '#fff' }} />
                                                        <CardText>
                                                            Cook time <span className='recipe-det'>(min)</span>&nbsp;&nbsp;&nbsp;<span className='recipe-detail-value'>{recipe.cookTime}</span>
                                                        </CardText>
                                                    </DetailBox>
                                                    <DetailBox>
                                                        <PersonIcon fontSize='' sx={{ color: '#fff' }} />
                                                        <CardText>
                                                            Serves&nbsp;&nbsp;&nbsp;<span className='recipe-detail-value'>{recipe.serves}</span>
                                                        </CardText>
                                                    </DetailBox>
                                                    <DetailBox>
                                                        <LocalDiningIcon fontSize='' sx={{ color: '#fff' }} />
                                                        <CardText>
                                                            Difficulty&nbsp;&nbsp;
                                                        </CardText>
                                                        <StyledRating
                                                            readonly
                                                            size="small"
                                                            value={recipe.difficulty}
                                                            precision={0.5}
                                                            icon={<LunchDiningIcon fontSize="inherit" />}
                                                            emptyIcon={<LunchDiningOutlinedIcon fontSize="inherit" />}
                                                        />
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
                                                <Stack
                                                    gap={2.5}
                                                >
                                                    <DetailBox>
                                                        <AccessTimeIcon fontSize='' sx={{ color: '#fff' }} />
                                                        <CardText>
                                                            Prep time <span className='recipe-det'>(min)</span>&nbsp;&nbsp;&nbsp;<span className='recipe-detail-value'>{recipe.prepTime}</span>
                                                        </CardText>
                                                    </DetailBox>
                                                    <DetailBox>
                                                        <AccessTimeIcon fontSize='' sx={{ color: '#fff' }} />
                                                        <CardText>
                                                            Cook time <span className='recipe-det'>(min)</span>&nbsp;&nbsp;&nbsp;<span className='recipe-detail-value'>{recipe.cookTime}</span>
                                                        </CardText>
                                                    </DetailBox>
                                                    <DetailBox>
                                                        <PersonIcon fontSize='' sx={{ color: '#fff' }} />
                                                        <CardText>
                                                            Serves&nbsp;&nbsp;&nbsp;<span className='recipe-detail-value'>{recipe.serves}</span>
                                                        </CardText>
                                                    </DetailBox>
                                                    <DetailBox>
                                                        <LocalDiningIcon fontSize='' sx={{ color: '#fff' }} />
                                                        <CardText>
                                                            Difficulty&nbsp;&nbsp;
                                                        </CardText>
                                                        <StyledRating
                                                            readonly
                                                            size="small"
                                                            value={recipe.difficulty}
                                                            precision={0.5}
                                                            icon={<LunchDiningIcon fontSize="inherit" />}
                                                            emptyIcon={<LunchDiningOutlinedIcon fontSize="inherit" />}
                                                        />
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
                                                <Stack
                                                    gap={2.5}
                                                >
                                                    <DetailBox>
                                                        <AccessTimeIcon fontSize='' sx={{ color: '#fff' }} />
                                                        <CardText>
                                                            Prep time <span className='recipe-det'>(min)</span>&nbsp;&nbsp;&nbsp;<span className='recipe-detail-value'>{recipe.prepTime}</span>
                                                        </CardText>
                                                    </DetailBox>
                                                    <DetailBox>
                                                        <AccessTimeIcon fontSize='' sx={{ color: '#fff' }} />
                                                        <CardText>
                                                            Cook time <span className='recipe-det'>(min)</span>&nbsp;&nbsp;&nbsp;<span className='recipe-detail-value'>{recipe.cookTime}</span>
                                                        </CardText>
                                                    </DetailBox>
                                                    <DetailBox>
                                                        <PersonIcon fontSize='' sx={{ color: '#fff' }} />
                                                        <CardText>
                                                            Serves&nbsp;&nbsp;&nbsp;<span className='recipe-detail-value'>{recipe.serves}</span>
                                                        </CardText>
                                                    </DetailBox>
                                                    <DetailBox>
                                                        <LocalDiningIcon fontSize='' sx={{ color: '#fff' }} />
                                                        <CardText>
                                                            Difficulty&nbsp;&nbsp;
                                                        </CardText>
                                                        <StyledRating
                                                            readonly
                                                            size="small"
                                                            value={recipe.difficulty}
                                                            precision={0.5}
                                                            icon={<LunchDiningIcon fontSize="inherit" />}
                                                            emptyIcon={<LunchDiningOutlinedIcon fontSize="inherit" />}
                                                        />
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