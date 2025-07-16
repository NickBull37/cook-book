import React, { useState } from 'react';

import { Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Navbar, MenuSection } from '..';

import Particles from '../backgrounds/Particles';

// const MenuContainer = styled(Box)(() => ({
//     marginTop: '8rem',
// }));

const MenuContainer = styled(Box)(() => ({
    marginTop: '7rem',
    position: 'relative',
    zIndex: 1,
}));

const BackgroundWrapper = styled('div')(() => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    overflow: 'hidden',
}));

const PageWrapper = styled(Box)(() => ({
    position: 'relative',
    minHeight: '100vh',
    overflow: 'hidden',
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
            title: 'Extras',
            recipeType: 'extra'
        },
    ];

    return (
        <PageWrapper>
            {/* Background Particles */}
            <BackgroundWrapper>
                <Particles
                    particleColors={['#cc5200', '#ff6600']}
                    particleCount={20000}
                    particleSpread={5}
                    speed={0.005}
                    particleBaseSize={100}
                    moveParticlesOnHover={false}
                    alphaParticles={true}
                    disableRotation={false}
                    // sizeRandomness={0}
                    // cameraDistance={20}
                />
            </BackgroundWrapper>

            {/* Foreground Content */}
            <Stack sx={{ position: 'relative', zIndex: 1 }}>
                <Navbar showReturnLink={false} showShoppingListLink={true} />
                <MenuContainer>
                    {sections.map((section, index) => (
                        <MenuSection
                            key={index}
                            sectionTitle={section.title}
                            recipeType={section.recipeType}
                            setShoppingList={setShoppingList}
                        />
                    ))}
                </MenuContainer>
            </Stack>
        </PageWrapper>
        // <Stack>
        //     <Navbar showReturnLink={false} showShoppingListLink={true} />
        //     <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        //         <MenuContainer>
        //             {sections.map((section, index) => (
        //                 <MenuSection
        //                     sectionTitle={section.title}
        //                     recipeType={section.recipeType}
        //                     setShoppingList={setShoppingList}
        //                 />
        //             ))}
        //         </MenuContainer>
        //     </div>
        // </Stack>
    );
}

export default Menu;