import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import { Box, Stack, Typography, Paper, Rating, Checkbox } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';

import { Navbar } from '../../components';
import recipes from '../../data/recipes';

const RecipeContainer = styled(Box)(({ theme }) => ({
    margin: '8rem 26rem 6rem 26rem',
    [theme.breakpoints.down('md')]: {
        margin: '7rem 2rem 6rem 2rem',
    },
}));

const RecipePaper = styled(Paper)(() => ({
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
    },
}));

const SectionStack = styled(Stack)(() => ({
    display: 'flex',
    gap: '2.5rem'
}));

const SectionTitle = styled(Typography)(() => ({
    fontSize: '1.5rem',
    marginBottom: '12px',
    borderBottom: '1px solid #b3b3b3',
    color: '#e6e6e6',
}));

const IngredientsText = styled(Typography)(() => ({
    margin: '6px 4px',
    color: '#e6e6e6',
}));

const InstructionBox = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'flex-start',
    margin: '1.25rem 4px',
}));

const InstructionText = styled(Typography)(() => ({
    color: '#e6e6e6',
}));

const InstructionCheckbox = styled(Checkbox)(() => ({
    padding: '0 0.75rem 0 0',
    color: '#e6e6e6',
    '&.Mui-checked': {
        color: '#ff8533',
    },
}));

const DetailBox = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    gap: 4
}));

const RecipeNameText = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    width: '100%',
    marginBottom: '4px',
    [theme.breakpoints.down('sm')]: {
        marginBottom: '16px',
    },
}));

const CardText = styled(Typography)(() => ({
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
    borderRadius: '12px',
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
                                        <RecipeNameText className='kepo-h3-orange'>
                                            {recipe.recipeName}
                                        </RecipeNameText>
                                        <DetailBox>
                                            <LocalDiningIcon fontSize='' sx={{ color: '#fff' }} />
                                            <CardText>
                                                Prep time <span className='subtext'>(min)</span>&nbsp;&nbsp;&nbsp;<span className='value-highlight'>{recipe.prepTime}</span>
                                            </CardText>
                                        </DetailBox>
                                        <DetailBox>
                                            <AccessTimeIcon fontSize='' sx={{ color: '#fff' }} />
                                            <CardText>
                                                Cook time <span className='subtext'>(min)</span>&nbsp;&nbsp;&nbsp;<span className='value-highlight'>{recipe.cookTime}</span>
                                            </CardText>
                                        </DetailBox>
                                        <DetailBox>
                                            <PersonIcon fontSize='' sx={{ color: '#fff' }} />
                                            <CardText>
                                                Serves&nbsp;&nbsp;&nbsp;<span className='value-highlight'>{recipe.serves}</span>
                                            </CardText>
                                        </DetailBox>
                                        <DetailBox>
                                            <SignalCellularAltIcon fontSize='' sx={{ color: '#fff' }} />
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
                                    {recipe.ingredientsList.map((ingredient, index) => (
                                        <IngredientsText key={index}>{ingredient}</IngredientsText>
                                    ))}
                                </Box>
                                <Box>
                                    <SectionTitle>
                                        Steps
                                    </SectionTitle>
                                    {recipe.instructionsList.map((instruction, index) => (
                                        <InstructionBox>
                                            <InstructionCheckbox />
                                            <InstructionText key={index}>
                                                {instruction}
                                            </InstructionText>
                                        </InstructionBox>
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
