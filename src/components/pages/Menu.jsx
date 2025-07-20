import { Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Navbar, MenuSection, QuickNav } from '..';
import Particles from '../backgrounds/Particles';
import appetizers from '../../data/appetizers';
import entrees from '../../data/entrees';
import sides from '../../data/sides';
import desserts from '../../data/desserts';
import drinks from '../../data/drinks';
import extras from '../../data/extras';

const PageWrapper = styled(Box)(() => ({
    position: 'relative',
    minHeight: '100vh',
    overflow: 'hidden',
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

const MenuContainer = styled(Box)(({ theme }) => ({
    margin: '6rem 8rem 0 12rem',
    position: 'relative',
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
        margin: '6rem 0 0 0',
    },
}));

const Menu = ({ setShoppingList }) => {

    // Constants
    const sections = [
        {
            title: 'Apps',
            recipes: appetizers
        },
        {
            title: 'Entrees',
            recipes: entrees
        },
        {
            title: 'Sides',
            recipes: sides
        },
        {
            title: 'Drinks',
            recipes: drinks
        },
        {
            title: 'Desserts',
            recipes: desserts
        },
        {
            title: 'Extras',
            recipes: extras
        },
    ];

    return (
        <PageWrapper>
            <BackgroundWrapper>
                <Particles
                    particleColors={['#cc5200', '#ff6600']}
                    particleCount={2500}
                    particleSpread={5}
                    speed={0.01}
                    particleBaseSize={100}
                    moveParticlesOnHover={false}
                    alphaParticles={true}
                    disableRotation={false}
                    // sizeRandomness={0}
                    // cameraDistance={20}
                />
            </BackgroundWrapper>

            <QuickNav />

            <Stack sx={{ position: 'relative', zIndex: 1 }}>
                <Navbar showReturnLink={false} showShoppingListLink={true} />
                <MenuContainer>
                    {sections.map((section, index) => (
                        <MenuSection
                            key={index}
                            sectionTitle={section.title}
                            recipes={section.recipes}
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