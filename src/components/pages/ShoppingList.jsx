import React, { useState } from 'react';

import { styled } from '@mui/material/styles';
import { Box, Stack, Typography, Button, Checkbox, FormControlLabel } from '@mui/material';

import { Navbar } from '..';
import { boxCat } from '../../utils/constants';

const ClearShoppingListButton = styled(Button)(() => ({
    color: '#fff',
    backgroundColor: '#ff6600',
    padding: '6px 10px',
    boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
    '&:hover': {
        backgroundColor: '#cc5200',
        boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    }
}));

const ShoppingListCheckbox = styled(Checkbox)(() => ({
    padding: '0 0.75rem 0 0',
    color: '#e6e6e6',
    '&.Mui-checked': {
        color: '#ff8533',
    },
}));

const ShoppingList = ({ shoppingList, setShoppingList }) => {

    // Constants
    const isEmpty = !shoppingList || shoppingList.length === 0;

    // State variables
    const [checkboxStates, setCheckboxStates] = useState(
        shoppingList.map(() => false) || []
    );

    // Event handlers
    const handleClear = () => {
        setShoppingList([]);
    };

    const handleCheckboxChange = (index) => (event) => {
        const newStates = [...checkboxStates];
        newStates[index] = event.target.checked;
        setCheckboxStates(newStates);
    };

    return (
        <Stack>
            <Navbar showReturnLink={true} showShoppingListLink={false}/>
            <Stack
                spacing={1}
                sx={{
                    mt: '8rem',
                    mx: '3rem',
                    mb: '4rem'
                }}
            >
                {isEmpty ? (
                    <Stack
                        alignItems="center"
                        justifyContent="center"
                        spacing={2}
                        sx={{ minHeight: '70vh' }}
                    >
                        <Typography>
                            Shopping list is empty
                        </Typography>
                        <img src={boxCat} height={200}/>
                    </Stack>
                ) : (
                    <>
                        <Box
                            display="flex"
                            justifyContent="center"
                        >
                            <ClearShoppingListButton
                                onClick={handleClear}
                                sx={{
                                    marginBottom: '2.75rem'
                                }}
                            >
                                Clear Shopping List
                            </ClearShoppingListButton>
                        </Box>
                        <Stack>
                            {shoppingList.map((item, index) => (
                                <FormControlLabel
                                    key={index}
                                    control={
                                        <ShoppingListCheckbox
                                            checked={checkboxStates[index] || false}
                                            onChange={handleCheckboxChange(index)}
                                        />
                                    }
                                    label={item}
                                    sx={{
                                        margin: '0.5rem 0'
                                    }}
                                />
                            ))}
                        </Stack>
                    </>
                )}
            </Stack>
        </Stack>
    );
}

export default ShoppingList;