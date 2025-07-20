import * as React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
import IconButton from '@mui/material/Typography';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

import recipes from '../../data/recipes';
import appetizers from '../../data/appetizers';
import entrees from '../../data/entrees';
import sides from '../../data/sides';
import desserts from '../../data/desserts';
import drinks from '../../data/drinks';
import extras from '../../data/extras';

const SectionTitle = styled(Typography)(({ theme }) => ({
    padding: '0.5rem 1rem',
    marginBottom: '0.5rem',
    borderBottom: '2px solid rgba(255, 102, 0, 0.5)',
    [theme.breakpoints.down('md')]: {
        padding: '0.5rem 1rem',
        marginBottom: '0.5rem',
        borderBottom: '2px solid rgba(255, 102, 0, 0.5)'
    },
}));

function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    return (
        <Dialog
            onClose={handleClose}
            open={open}
            PaperProps={{
                sx: {
                    backgroundColor: '#333333',
                    color: '#fff',
                },
            }}
        >
            <DialogTitle>Jump to Recipe:</DialogTitle>

            <Stack spacing={2}>
                <Box>
                    <SectionTitle>
                        Appetizers
                    </SectionTitle>
                    <List sx={{ pt: 0 }}>
                        {appetizers.map((recipe) => (
                            <ListItem disablePadding key={recipe}>
                                <Link to={`/recipe?index=${recipe.index}`}>
                                    <ListItemButton>
                                        <ListItemAvatar sx={{ minWidth: '50px' }}>
                                            <Avatar
                                                sx={{
                                                    bgcolor: 'rgba(255, 102, 0, 0.2)',
                                                    color: 'rgba(255, 102, 0, 0.9)',
                                                    height: '35px',
                                                    width: '35px',
                                                }}
                                            >
                                                <LocalDiningIcon fontSize='small' />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={recipe.recipeName} />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Box>

                <Box>
                    <SectionTitle>
                        Entrees
                    </SectionTitle>
                    <List sx={{ pt: 0 }}>
                        {entrees.map((recipe) => (
                            <ListItem disablePadding key={recipe}>
                                <Link to={`/recipe?index=${recipe.index}`}>
                                    <ListItemButton>
                                        <ListItemAvatar sx={{ minWidth: '50px' }}>
                                            <Avatar
                                                sx={{
                                                    bgcolor: 'rgba(255, 102, 0, 0.2)',
                                                    color: 'rgba(255, 102, 0, 0.9)',
                                                    height: '35px',
                                                    width: '35px',
                                                }}
                                            >
                                                <LocalDiningIcon fontSize='small' />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={recipe.recipeName} />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Box>

                <Box>
                    <SectionTitle>
                        Sides
                    </SectionTitle>
                    <List sx={{ pt: 0 }}>
                        {sides.map((recipe) => (
                            <ListItem disablePadding key={recipe}>
                                <Link to={`/recipe?index=${recipe.index}`}>
                                    <ListItemButton>
                                        <ListItemAvatar sx={{ minWidth: '50px' }}>
                                            <Avatar
                                                sx={{
                                                    bgcolor: 'rgba(255, 102, 0, 0.2)',
                                                    color: 'rgba(255, 102, 0, 0.9)',
                                                    height: '35px',
                                                    width: '35px',
                                                }}
                                            >
                                                <LocalDiningIcon fontSize='small' />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={recipe.recipeName} />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Box>

                <Box>
                    <SectionTitle>
                        Drinks
                    </SectionTitle>
                    <List sx={{ pt: 0 }}>
                        {drinks.map((recipe) => (
                            <ListItem disablePadding key={recipe}>
                                <Link to={`/recipe?index=${recipe.index}`}>
                                    <ListItemButton>
                                        <ListItemAvatar sx={{ minWidth: '50px' }}>
                                            <Avatar
                                                sx={{
                                                    bgcolor: 'rgba(255, 102, 0, 0.2)',
                                                    color: 'rgba(255, 102, 0, 0.9)',
                                                    height: '35px',
                                                    width: '35px',
                                                }}
                                            >
                                                <LocalDiningIcon fontSize='small' />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={recipe.recipeName} />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Box>

                <Box>
                    <SectionTitle>
                        Desserts
                    </SectionTitle>
                    <List sx={{ pt: 0 }}>
                        {desserts.map((recipe) => (
                            <ListItem disablePadding key={recipe}>
                                <Link to={`/recipe?index=${recipe.index}`}>
                                    <ListItemButton>
                                        <ListItemAvatar sx={{ minWidth: '50px' }}>
                                            <Avatar
                                                sx={{
                                                    bgcolor: 'rgba(255, 102, 0, 0.2)',
                                                    color: 'rgba(255, 102, 0, 0.9)',
                                                    height: '35px',
                                                    width: '35px',
                                                }}
                                            >
                                                <LocalDiningIcon fontSize='small' />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={recipe.recipeName} />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Box>

                <Box>
                    <SectionTitle>
                        Extras
                    </SectionTitle>
                    <List sx={{ pt: 0 }}>
                        {extras.map((recipe) => (
                            <ListItem disablePadding key={recipe}>
                                <Link to={`/recipe?index=${recipe.index}`}>
                                    <ListItemButton>
                                        <ListItemAvatar sx={{ minWidth: '50px' }}>
                                            <Avatar
                                                sx={{
                                                    bgcolor: 'rgba(255, 102, 0, 0.2)',
                                                    color: 'rgba(255, 102, 0, 0.9)',
                                                    height: '35px',
                                                    width: '35px',
                                                }}
                                            >
                                                <LocalDiningIcon fontSize='small' />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={recipe.recipeName} />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Stack>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

const QuickNavIconButton = styled(IconButton)(({ theme }) => ({
    maxWidth: '55px',
    maxHeight: '55px',
    backgroundColor: 'rgba(255, 102, 0, 0.3)',
    color: '#fff',
    transition: '0.3s ease',
    padding: '10px',
    borderRadius: '100px',
    '&:hover': {
        backgroundColor: 'rgba(255, 102, 0, 0.8)',
        cursor: 'pointer'
    },
}));

export default function SimpleDialogDemo() {

    const [open, setOpen] = React.useState(false);

    const handleToggleDialog = () => {
        setOpen((prev) => !prev);
    };

    const handleClose = (value) => {
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
                <QuickNavIconButton
                    onClick={handleToggleDialog}
                >
                    <MenuBookIcon
                        sx={{
                            fontSize: "30px"
                        }}
                    />
                </QuickNavIconButton>
            </Box>

            <SimpleDialog
                open={open}
                onClose={handleClose}
            />
        </>
    );
}