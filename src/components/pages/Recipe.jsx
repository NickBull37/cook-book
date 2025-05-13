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

const RecipeContainer = styled(Box)(({ theme }) => ({
    margin: '8rem 26rem 6rem 26rem',
    [theme.breakpoints.down('md')]: {
        margin: '8rem 2rem 6rem 2rem',
    },
}));

const RecipePaper = styled(Paper)(({ theme }) => ({
    backgroundColor: '#595959',
    padding: '1.25rem',
}));

const RecipeHeaderBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
        display: 'flex',
        flexDirection: 'column-reverse',
        //justifyContent: 'space-between',
    },
}));

const SectionStack = styled(Stack)(({ theme }) => ({
    display: 'flex',
    gap: '2.5rem'
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
    fontSize: '1.5rem',
    margin: '0 4px 12px 4px',
    borderBottom: '1px solid #b3b3b3',
    color: '#e6e6e6',
}));

const SectionElement = styled(Typography)(({ theme }) => ({
    margin: '4px',
    color: '#e6e6e6',
}));

const InstructionText = styled(Typography)(({ theme }) => ({
    margin: '1rem 4px',
    color: '#e6e6e6',
}));

const DetailBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: 4
}));

const CardText = styled(Typography)(({ theme }) => ({
    color: '#d9d9d9',
}));

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff8533',
    },
});

const RecipeImageBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
        margin: '1rem 0 2.25rem 0',
    },
}));

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
                                <RecipeHeaderBox>
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
                                    <RecipeImageBox>
                                        <img className="recipe-photo" src={recipe.photo}/>
                                    </RecipeImageBox>
                                </RecipeHeaderBox>
                                <Box>
                                    <SectionTitle>Ingredients</SectionTitle>
                                    {recipe.ingredientsList.map((ingredient, idx) => (
                                        <SectionElement key={idx}>{ingredient}</SectionElement>
                                    ))}
                                </Box>
                                <Box>
                                    <SectionTitle>Steps</SectionTitle>
                                    {recipe.instructionsList.map((step, idx) => (
                                        <InstructionText key={idx}>{step}</InstructionText>
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
