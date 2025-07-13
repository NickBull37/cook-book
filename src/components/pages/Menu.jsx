import React, { useState } from 'react';

import { Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Navbar, MenuSection } from '..';

const DashboardContainer = styled(Box)(() => ({
    marginTop: '8rem',
}));

const Menu = ({ setShoppingList }) => {

    // Constants
    const sections = [
        {
            title: 'Appetizers',
            recipeType: 'appetizer'
        },
        {
            title: 'Entrees',
            recipeType: 'dinner'
        },
        {
            title: 'Sides',
            recipeType: 'side'
        },
        {
            title: 'Drinks',
            recipeType: 'drink'
        },
        {
            title: 'Desserts',
            recipeType: 'dessert'
        },
        {
            title: 'Extra',
            recipeType: 'extra'
        },
    ];

    return (
        <Stack>
            <Navbar showReturnLink={false} showShoppingListLink={true} />
            <DashboardContainer>
                {sections.map((section, index) => (
                    <MenuSection
                        sectionTitle={section.title}
                        recipeType={section.recipeType}
                        setShoppingList={setShoppingList}
                    />
                ))}
            </DashboardContainer>
        </Stack>
    );
}

export default Menu;