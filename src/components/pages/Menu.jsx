import { Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Navbar, MenuSection, QuickNav } from '..';
import Particles from '../backgrounds/Particles';
import recipes from '../../data/recipes';

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

    const getSortedRecipesByType = (type) =>
        recipes
            .filter(recipe => recipe.type === type)
            .sort((a, b) => a.recipeName.localeCompare(b.recipeName));

    const sections = [
        { title: 'Apps', recipes: getSortedRecipesByType('appetizer') },
        { title: 'Entrees', recipes: getSortedRecipesByType('entree') },
        { title: 'Sides', recipes: getSortedRecipesByType('side') },
        { title: 'Drinks', recipes: getSortedRecipesByType('drink') },
        { title: 'Desserts', recipes: getSortedRecipesByType('dessert') },
        { title: 'Sauces', recipes: getSortedRecipesByType('sauce') },
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
    );
}

export default Menu;