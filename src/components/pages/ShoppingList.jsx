import React from 'react';

import { Box, Stack, Typography, Button } from '@mui/material';

import { Navbar } from '..';
import { boxCat } from '../../utils/constants';

const ShoppingList = ({ shoppingList, setShoppingList }) => {

    // Constants
    const isEmpty = !shoppingList || shoppingList.length === 0;

    // Event handlers
    const handleClear = () => {
        setShoppingList([]);
    };

    return (
        <Stack>
            <Navbar showReturnLink={true} showShoppingListLink={false}/>
            <Stack
                spacing={1}
                sx={{
                    mt: '8rem',
                    mx: '3rem'
                }}
            >
                {isEmpty ? (
                    <Stack
                        alignItems="center"
                        spacing={2}
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
                            <Button
                                variant="contained"
                                onClick={handleClear}
                                sx={{
                                    marginBottom: '3rem'
                                }}
                            >
                                Clear Shopping List
                            </Button>
                        </Box>
                        {shoppingList.map((item, index) => (
                            <Typography key={index}>{item}</Typography>
                        ))}
                    </>
                )}
            </Stack>
        </Stack>
    );
}

export default ShoppingList;