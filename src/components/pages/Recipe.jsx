import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import { Box, Stack, Typography, Paper } from '@mui/material';

import { Navbar } from '../../components';
import recipes from '../../data/recipes';

const RecipePaper = styled(Paper)(() => ({
    backgroundColor: '#595959',
    padding: '1.25rem',
}));

const SectionStack = styled(Stack)(() => ({
    display: 'flex',
    gap: '2rem'
}));

const SectionTitle = styled(Typography)(() => ({
    fontSize: '1.5rem',
    margin: '0 4px 12px 4px',
    borderBottom: '1px solid #fff',
    color: '#fff',
}));

const SectionElement = styled(Typography)(() => ({
    margin: '4px',
    color: '#fff',
}));

const Recipe = () => {

    // Constants
    const [searchParams] = useSearchParams();
    const index = parseInt(searchParams.get('index'), 10);
    const recipe = recipes.find(r => r.index === index);

    return (
        <>
            <Navbar />
            <Box sx={{ mx: '24rem', mb: '6rem' }}>
                <RecipePaper elevation={12}>
                    <SectionStack>
                        {recipe ? (
                            <>
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                >
                                    <Typography className='kepo-h3-orange'>
                                        {recipe.recipeName}
                                    </Typography>
                                    <img className="" src={recipe.photo} height={200}/>
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
            </Box>
        </>
    );
};

export default Recipe;
