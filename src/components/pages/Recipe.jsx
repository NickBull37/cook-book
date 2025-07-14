import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import { Box, Stack, Typography, Paper, Rating, Checkbox, FormControlLabel, Button } from '@mui/material';
import { Card, CardActions, CardContent, CardMedia } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';

import { Navbar } from '../../components';
import recipes from '../../data/recipes';

const AddToShoppingListButton = styled(Button)(() => ({
    color: '#fff',
    backgroundColor: '#ff6600',
    padding: '4px 8px',
    boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
    '&:hover': {
        backgroundColor: '#cc5200',
        boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    }
}));

const RecipeContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    marginTop: '8rem',
    marginBottom: '6rem',
    [theme.breakpoints.down('md')]: {
        margin: '7rem 2rem 4rem 2rem',
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
    fontSize: '1.25rem',
    marginBottom: '12px',
    borderBottom: '1px solid #b3b3b3',
    color: '#e6e6e6',
}));

const IngredientsText = styled(Typography)(() => ({
    fontSize: '0.875rem',
    lineHeight: '1.43',
    letterSpacing: '0.01071em',
    color: '#e6e6e6',
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

const Recipe = ({ setShoppingList }) => {

    // Constants
    const [searchParams] = useSearchParams();
    const index = parseInt(searchParams.get('index'), 10);
    const recipe = recipes.find(r => r.index === index);

    // State variables
    const [checkboxStates, setCheckboxStates] = useState(
        recipe?.instructionsList.map(() => false) || []
    );

    // Event handlers
    const handleCheckboxChange = (index) => (event) => {
        const newStates = [...checkboxStates];
        newStates[index] = event.target.checked;
        setCheckboxStates(newStates);
    };

    const handleAddToShoppingListClick = () => () => {
        setShoppingList(prevList => {
            // avoids duplicates
            const newItems = recipe.ingredientsList.filter(item => !prevList.includes(item));
            return [...prevList, ...newItems];
        });
    };

    return (
        <Stack>
            <Navbar showReturnLink={true} showShoppingListLink={true} />

            <RecipeContainer>
                <Card
                    elevation={8}
                    sx={{
                        maxWidth: 500,
                        bgcolor: '#595959',
                        color: '#fff',
                    }}
                >
                    <CardMedia
                        sx={{
                            height: 225,
                        }}
                        image={recipe.photo}
                        title={recipe.recipeName}
                    />

                    <CardContent>
                        
                        <Typography className='kepo-h3-orange'>
                            {recipe.recipeName}
                        </Typography>

                        <Stack
                            spacing={0.5}
                            sx={{
                                mt: '0.75rem'
                            }}
                        >
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

                        <CardActions sx={{ p: '0', mt: '1.75rem' }}>
                            <AddToShoppingListButton
                                size="small"
                                onClick={handleAddToShoppingListClick(recipe.index)}
                            >
                                Add to Shopping List
                            </AddToShoppingListButton>
                        </CardActions>

                        <Stack sx={{ mt: '1.75rem' }}>
                            <SectionTitle>
                                Ingredients
                            </SectionTitle>
                            <Typography>
                                {recipe.ingredientsList.map((ingredient, index) => (
                                    <IngredientsText
                                        key={index}
                                        sx={{
                                            mb: '3px'
                                        }}
                                    >
                                        {ingredient}
                                    </IngredientsText>
                                ))}
                            </Typography>
                        </Stack>

                        <Stack sx={{ mt: '1.75rem' }}>
                            <SectionTitle>
                                Instructions
                            </SectionTitle>
                            <Typography>
                                {recipe.instructionsList.map((instruction, index) => (
                                    <FormControlLabel
                                        key={index}
                                        control={
                                            <InstructionCheckbox
                                                checked={checkboxStates[index] || false}
                                                onChange={handleCheckboxChange(index)}
                                            />
                                        }
                                        label={
                                            <InstructionText>{instruction}</InstructionText>
                                        }
                                        sx={{
                                            alignItems: 'flex-start',
                                            margin: '0.55rem 4px'
                                        }}
                                    />
                                ))}
                            </Typography>
                        </Stack>
                    </CardContent>
                    {/* <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions> */}
                </Card>
            </RecipeContainer>

            {/* <RecipeContainer>
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
                                    <SectionTitle>
                                        Ingredients
                                    </SectionTitle>
                                    {recipe.ingredientsList.map((ingredient, index) => (
                                        <IngredientsText key={index}>{ingredient}</IngredientsText>
                                    ))}
                                </Box>
                                <Box>
                                    <SectionTitle>
                                        Steps
                                    </SectionTitle>
                                    {recipe.instructionsList.map((instruction, index) => (
                                        <FormControlLabel
                                            key={index}
                                            control={
                                                <InstructionCheckbox
                                                    checked={checkboxStates[index] || false}
                                                    onChange={handleCheckboxChange(index)}
                                                />
                                            }
                                            label={
                                                <InstructionText>{instruction}</InstructionText>
                                            }
                                            sx={{
                                                alignItems: 'flex-start',
                                                margin: '0.675rem 4px'
                                            }}
                                        />
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
            </RecipeContainer> */}
        </Stack>
    );
};

export default Recipe;
