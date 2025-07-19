import { Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { MenuSectionMap } from '../../components';

const SectionContainer = styled(Box)(({ theme }) => ({
    marginBottom: '9rem',
    [theme.breakpoints.down('md')]: {
        marginBottom: '4rem',
    },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
    marginBottom: '1.5rem',
    paddingLeft: '12rem',
    cursor: 'default',
    [theme.breakpoints.down('md')]: {
        marginBottom: '0.5rem',
        paddingLeft: '1.5rem',
    },
}));

const SectionMapContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    padding: '0 9rem',
    [theme.breakpoints.down('md')]: {
        padding: '0',
    },
}));

const MenuSection = ({ sectionTitle, recipes, setShoppingList }) => {
    return (
        <>
            <SectionContainer>
                <Stack>
                    <SectionTitle
                        className='kepo-h1-orange'
                    >
                        {sectionTitle}
                    </SectionTitle>
                    <SectionMapContainer>
                        <MenuSectionMap
                            recipes={recipes}
                            setShoppingList={setShoppingList}
                        />
                    </SectionMapContainer>
                </Stack>
            </SectionContainer>
        </>
    );
}

export default MenuSection;