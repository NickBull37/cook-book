import React from 'react';

import { Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Navbar, MenuSection } from '../../components';

const DashboardContainer = styled(Box)(() => ({
    marginTop: '8rem',
}));

const CookBookDashboard = () => {

    const sections = [
        {
            title: 'Dinner',
            recipeType: 'dinner'
        },
        {
            title: 'Sides',
            recipeType: 'side'
        },
        {
            title: 'Desserts',
            recipeType: 'dessert'
        },
        {
            title: 'Drinks',
            recipeType: 'drink'
        },
        {
            title: 'Extra',
            recipeType: 'extra'
        },
    ];

    return (
        <Stack>
            <Navbar showReturnLink={false} />
            <DashboardContainer>
                {sections.map((section, index) => (
                    <MenuSection
                        sectionTitle={section.title}
                        recipeType={section.recipeType}
                    />
                ))}
            </DashboardContainer>
        </Stack>
    );
}

export default CookBookDashboard;