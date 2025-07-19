import { Box, Stack, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import { MenuSectionMap } from '../../components';

const SectionContainer = styled(Box)(({ theme }) => ({
    marginBottom: '9rem',
    [theme.breakpoints.down('md')]: {
        marginBottom: '5rem',
    },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
    marginBottom: '1.5rem',
    paddingLeft: '4rem',
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

const GridContainer = (props) => (
    <Grid
        container
        flexDirection={{ xs: 'column', sm: 'row' }}
        rowSpacing={{ xs: 8, sm: 12 }}
        columnSpacing={{ xs: 0, sm: 24 }}
        {...props}
    />
);

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
                        <GridContainer>
                            <MenuSectionMap
                                recipes={recipes}
                                setShoppingList={setShoppingList}
                            />
                        </GridContainer>
                    </SectionMapContainer>
                </Stack>
            </SectionContainer>
        </>
    );
}

export default MenuSection;