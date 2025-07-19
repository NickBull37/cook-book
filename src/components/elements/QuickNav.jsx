import * as React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
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
const emails = ['username@gmail.com', 'user02@gmail.com'];

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
            <List sx={{ pt: 0 }}>
                {recipes.map((recipe) => (
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
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

const QuickNavIconButton = styled(IconButton)(({ theme }) => ({
    backgroundColor: 'rgba(255, 102, 0, 0.3)',
    color: '#fff',
    transition: '0.3s ease',
    padding: '8px',
    borderRadius: '50px',
    '&:hover': {
        backgroundColor: 'rgba(255, 102, 0, 0.8)',
    },
}));

export default function SimpleDialogDemo() {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleToggleDialog = () => {
        setOpen((prev) => !prev);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <>
            <Box
                sx={{
                    position: 'fixed',
                    top: '6rem',
                    right: '1.5rem',
                    zIndex: 1500,
                }}
            >
                <QuickNavIconButton
                    onClick={handleToggleDialog}
                >
                    <MenuBookIcon
                        fontSize="large"
                    />
                </QuickNavIconButton>
            </Box>

            <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            />
        </>
    );
}