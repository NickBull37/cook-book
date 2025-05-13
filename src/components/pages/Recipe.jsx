import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import { Box, Stack, Typography, Paper, Rating } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';

import { Navbar } from '../../components';
import recipes from '../../data/recipes';

const RecipeContainer = styled(Box)(() => ({
    margin: '8rem 24rem 6rem 24rem',
}));

const RecipePaper = styled(Paper)(() => ({
    backgroundColor: '#595959',
    padding: '1.25rem',
}));

const SectionStack = styled(Stack)(() => ({
    display: 'flex',
    gap: '2.5rem'
}));

const SectionTitle = styled(Typography)(() => ({
    fontSize: '1.5rem',
    margin: '0 4px 12px 4px',
    borderBottom: '1px solid #b3b3b3',
    color: '#e6e6e6',
}));

const SectionElement = styled(Typography)(() => ({
    margin: '4px',
    color: '#e6e6e6',
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

const Recipe = () => {

    // Constants
    const [searchParams] = useSearchParams();
    const index = parseInt(searchParams.get('index'), 10);
    const recipe = recipes.find(r => r.index === index);

    return (
        <Stack>
            <Navbar showReturnLink={true} />
            <RecipeContainer>
                <RecipePaper elevation={12}>
                    <SectionStack>
                        {recipe ? (
                            <>
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                >
                                    <Stack
                                        display="flex"
                                        gap={1.5}
                                    >
                                        <Typography
                                            className='kepo-h3-orange'
                                            sx={{
                                                width: '100%',
                                                mb: 0.5,
                                            }}
                                        >
                                            {recipe.recipeName}
                                        </Typography>
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
                                    <img className="recipe-photo" src={recipe.photo}/>
                                </Box>
                                <Box>
                                    <SectionTitle>Ingredients</SectionTitle>
                                    {recipe.ingredientsList.map((ingredient, idx) => (
                                        <SectionElement key={idx}>{ingredient}</SectionElement>
                                    ))}
                                </Box>
                                <Box>
                                    <SectionTitle>Steps</SectionTitle>
                                    {recipe.instructionsList.map((step, idx) => (
                                        <SectionElement key={idx}>{step}</SectionElement>
                                    ))}
                                </Box>
                            </>
                        ) : (
                            <Typography variant="h6" color="error">
                                Recipe not found.
                            </Typography>
                        )}
                    </SectionStack>
                </RecipePaper>
            </RecipeContainer>
        </Stack>
    );
};

export default Recipe;
