import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import { Box, Stack, Typography, Checkbox, FormControlLabel, Button, Tooltip } from '@mui/material';
import { Card, CardActions, CardContent, CardMedia } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

import { Navbar, DetailChip } from '../../components';
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
    maxWidth: '550px',
    [theme.breakpoints.down('md')]: {
        margin: '7rem 2rem 4rem 2rem',
    },
}));

const SectionTitle = styled(Typography)(() => ({
    //fontSize: '1.25rem',
    fontWeight: '600',
    fontSize: '1rem',
    marginBottom: '12px',
    borderBottom: '1px solid #b3b3b3',
    color: '#e6e6e6',
}));

const IngredientsText = styled(Typography)(() => ({
    fontSize: '1rem',
    //fontSize: '0.875rem',
    lineHeight: '1.43',
    letterSpacing: '0.01071em',
    color: '#e6e6e6',
}));

const InstructionText = styled(Typography)(() => ({
    fontSize: '1rem',
    color: '#e6e6e6',
}));

const InstructionCheckbox = styled(Checkbox)(() => ({
    padding: '0 0.75rem 0 0',
    color: '#e6e6e6',
    '&.Mui-checked': {
        color: '#ff8533',
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
        <Stack
            display="flex"
            alignItems="center"
        >
            <Navbar showReturnLink={true} showShoppingListLink={true} />

            <RecipeContainer>
                <Card
                    elevation={12}
                    sx={{
                        position: 'relative',
                        borderRadius: '1rem',
                        overflow: 'hidden',
                        bgcolor: '#595959'
                    }}
                >
                    {/* Header Image with Overlay */}
                    <Box sx={{ position: 'relative' }}>

                        <CardMedia
                            component="img"
                            height="330"
                            image={recipe.photo}
                            alt={recipe.recipeName}
                        />

                        {/* Gradient overlay + Title + Details */}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.1) 50%, rgba(0,0,0,0))',
                                color: 'white',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                p: 3,
                            }}
                        >
                            <Typography variant="h4" fontWeight="bold">
                                {recipe.recipeName}
                            </Typography>

                            <Stack
                                direction="row"
                                alignItems="center"
                                justifyContent="space-between"
                            >
                                <Tooltip title="Cook time">
                                    <DetailChip icon={<AccessTimeIcon />} label={`${recipe.prepTime} min`} />
                                </Tooltip>
                                <DetailChip icon={<PersonIcon />} label={recipe.serves} />
                                <DetailChip icon={<SignalCellularAltIcon />} label={recipe.difficulty < 2 ? 'Easy' : recipe.difficulty < 4 ? 'Med' : 'Hard'} />
                            </Stack>
                        </Box>
                    </Box>

                    <CardContent>
                        <CardActions sx={{ p: '0', mt: '1.25rem' }}>
                            <AddToShoppingListButton
                                size="small"
                                onClick={handleAddToShoppingListClick(recipe.index)}
                            >
                                Add to Shopping List
                            </AddToShoppingListButton>
                        </CardActions>

                        {/* Ingredients */}
                        <Stack sx={{ mt: '1.85rem' }}>
                            <SectionTitle>Ingredients</SectionTitle>
                            <Typography>
                                {recipe.ingredientsList.map((ingredient, index) => (
                                    <IngredientsText key={index} sx={{ mb: '3px' }}>
                                        {ingredient}
                                    </IngredientsText>
                                ))}
                            </Typography>
                        </Stack>

                        {/* Instructions */}
                        <Stack sx={{ mt: '1.5rem' }}>
                            <SectionTitle>Instructions</SectionTitle>
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
                                        label={<InstructionText>{instruction}</InstructionText>}
                                        sx={{
                                            alignItems: 'flex-start',
                                            margin: '0.55rem 4px',
                                        }}
                                    />
                                ))}
                            </Typography>
                        </Stack>
                    </CardContent>
                </Card>
            </RecipeContainer>
        </Stack>
    );
};

export default Recipe;
