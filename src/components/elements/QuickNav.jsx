import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Stack, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

import recipes from '../../data/recipes';

const SectionTitle = styled(Typography)(({ theme }) => ({
    padding: '0.5rem 1rem',
    marginBottom: '0.5rem',
    borderBottom: '2px solid rgba(255, 102, 0, 0.5)',
    fontSize: '1rem',
    [theme.breakpoints.down('md')]: {
        padding: '0.5rem 1rem',
        marginBottom: '0.5rem',
        borderBottom: '2px solid rgba(255, 102, 0, 0.5)',
        fontSize: '1.125rem',
    },
}));

const RecipeLink = styled(Link)(() => ({
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
    width: '100%',
}));

const QuickNavIconButton = styled(IconButton)(() => ({
    backgroundColor: 'rgba(255, 102, 0, 0.3)',
    color: '#fff',
    '&:hover': {
        backgroundColor: 'rgba(255, 102, 0, 0.8)',
        cursor: 'pointer',
    },
}));

const sectionConfig = [
    { title: 'Appetizers', type: 'appetizer' },
    { title: 'Entrees', type: 'entree' },
    { title: 'Sides', type: 'side' },
    { title: 'Drinks', type: 'drink' },
    { title: 'Desserts', type: 'dessert' },
    { title: 'Extras', type: 'extra' },
    { title: 'Sauces', type: 'sauce' },
];

function RecipeSection({ title, recipes }) {

    if (!recipes.length) {
        return null;
    }

    return (
        <Box>
            <SectionTitle>
                {title}
            </SectionTitle>

            <List sx={{ pt: 0 }}>
                {recipes.map((recipe) => (
                    <ListItem disablePadding key={recipe.index}>
                        <RecipeLink to={`/recipe?index=${recipe.index}`}>
                            <ListItemButton>
                                <ListItemAvatar sx={{ minWidth: '50px' }}>
                                    <Avatar
                                        sx={{
                                            bgcolor: 'rgba(255, 102, 0, 0.15)',
                                            color: 'rgba(255, 102, 0, 0.7)',
                                            height: '30px',
                                            width: '30px',
                                        }}
                                    >
                                        <LocalDiningIcon fontSize='small' />
                                    </Avatar>
                                </ListItemAvatar>

                                <ListItemText primary={recipe.recipeName} />
                            </ListItemButton>
                        </RecipeLink>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

RecipeSection.propTypes = {
    title: PropTypes.string.isRequired,
    recipes: PropTypes.array.isRequired,
};

function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const getSortedRecipesByType = (type) =>
        recipes
            .filter((recipe) => recipe.type === type)
            .sort((a, b) =>
                a.recipeName.localeCompare(b.recipeName, undefined, {
                    sensitivity: 'base',
                })
            );

    const sections = sectionConfig.map((section) => ({
        title: section.title,
        recipes: getSortedRecipesByType(section.type),
    }));

    return (
        <Dialog
            onClose={handleClose}
            open={open}
            slotProps={{
                paper: {
                    sx: {
                        backgroundColor: '#333333',
                        color: '#fff',
                    },
                },
            }}
        >
            <DialogTitle
                sx={{
                    fontSize: '16px',
                    px: '1rem'
                }}
            >
                JUMP TO RECIPE:
            </DialogTitle>

            <Stack spacing={2}>
                {sections.map((section) => (
                    <RecipeSection
                        key={section.title}
                        title={section.title}
                        recipes={section.recipes}
                    />
                ))}
            </Stack>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string,
};

export default function SimpleDialogDemo() {
    
    const [open, setOpen] = React.useState(false);

    const handleToggleDialog = () => {
        setOpen((prev) => !prev);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Box
                sx={{
                    position: 'fixed',
                    top: '6rem',
                    right: '1.5rem',
                    zIndex: 11,
                }}
            >
                <QuickNavIconButton onClick={handleToggleDialog}>
                    <MenuBookIcon />
                </QuickNavIconButton>
            </Box>

            <SimpleDialog
                open={open}
                onClose={handleClose}
            />
        </>
    );
}