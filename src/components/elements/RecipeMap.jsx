import { Link } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import { Stack, Typography, Grid, Button, IconButton } from '@mui/material';
import { Card, CardActions, CardContent, CardMedia } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

import { DetailChip } from '../../components';

const AddToGroceryListIconButton = styled(IconButton)(({ theme }) => ({
    backgroundColor: '#404040',
    color: '#fff',
    transition: '0.3s ease',
    '&:hover': {
        backgroundColor: 'rgba(255, 102, 0, 0.3);',
    },
}));

const FullRecipeButton = styled(Button)(() => ({
    color: '#fff',
    backgroundColor: '#ff6600',
    padding: '3px 8px',
    boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
    '&:hover': {
        backgroundColor: '#cc5200',
        boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    }
}));

const RecipeMap = ({ recipes, recipeType, setShoppingList }) => {

    // Event handlers
    const handleAddToShoppingListClick = (index) => () => {

        let recipe = recipes.find(r => r.index === index);
        if (!recipe) return;

        setShoppingList(prevList => {
            // avoids duplicates
            const newItems = recipe.ingredientsList.filter(item => !prevList.includes(item));
            return [...prevList, ...newItems];
        });
    };

    return (
        <>
            {recipes.map((recipe, index) => (
                <>
                    { recipe.type === recipeType
                        ?
                            <Grid size={{ xs: 12, md: 6 }} key={index}>

                                <Card
                                    elevation={8}
                                    sx={{
                                        maxWidth: 340,
                                        bgcolor: '#595959',
                                        color: '#fff',
                                        borderRadius: '10px',
                                    }}
                                >
                                    <CardMedia
                                        sx={{ height: 230 }}
                                        image={recipe.photo}
                                        title={recipe.recipeName}
                                    />
                                    <CardContent
                                        sx={{ p: '1rem 1rem 0.75rem 1rem' }}
                                    >
                                        <Typography variant="h5" component="div" sx={{ mb: '1rem' }}>
                                            {recipe.recipeName}
                                        </Typography>
                                        <Stack
                                            direction="row"
                                            alignItems="center"
                                            justifyContent="space-between"
                                        >
                                            <DetailChip icon={<AccessTimeIcon />} label={`${recipe.prepTime} min`} />
                                            <DetailChip icon={<PersonIcon />} label={recipe.serves} />
                                            <DetailChip icon={<SignalCellularAltIcon />} label={recipe.difficulty < 2 ? 'Easy' : recipe.difficulty < 4 ? 'Med' : 'Hard'} />
                                        </Stack>
                                    </CardContent>
                                    <CardActions
                                        sx={{
                                            px: '1rem',
                                            pb: '0.75rem',
                                            justifyContent: 'space-between'
                                        }}
                                    >
                                        <Link to={`/recipe?index=${recipe.index}`}>
                                            <FullRecipeButton>Full Recipe</FullRecipeButton>
                                        </Link>
                                        <AddToGroceryListIconButton aria-label="add to grocery list">
                                            <AddShoppingCartIcon
                                                onClick={handleAddToShoppingListClick(recipe.index)}
                                            />
                                        </AddToGroceryListIconButton>
                                    </CardActions>
                                </Card>
                                
                            </Grid>
                        :
                            <></>
                    }
                </>
            ))}
        </>
    );
}

export default RecipeMap;