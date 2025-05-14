import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Stack, Typography, Grid, Rating } from '@mui/material';
import { styled } from '@mui/material/styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';

const RecipeStack = styled(Stack)(({ theme }) => ({
    display: 'flex',
    backgroundColor: '#404040',
    ...theme.typography.body2,
    borderLeft: '1px solid #b3b3b3',
    '&:hover': {
        cursor: 'pointer',
    },
}));

const RecipeTitle = styled(Typography)(({ theme }) => ({
    fontSize: '1.75rem',
    padding: '0.5rem 1rem',
    borderBottom: '1px solid #b3b3b3',
    color: '#e6e6e6',
    [theme.breakpoints.down('sm')]: {
        padding: '0.5rem 1rem',
    },
}));

const CardDetails = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 0 0 1rem',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column-reverse',
        padding: '1rem',
        alignItems: 'flex-start',
    },
}));

const DetailBox = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    gap: 4,
}));

const CardText = styled(Typography)(() => ({
    color: '#d9d9d9',
}));

const CardImageBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    width: 'inherit',
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginTop: '0.75rem',
        marginBottom: '2.25rem',
    },
}));

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff8533',
    },
});

const RecipeMap = ({ recipes, recipeType }) => {

    return (
        <>
            {recipes.map((recipe, index) => (
                <>
                    { recipe.type === recipeType
                        ?
                            <Grid size={{ xs: 12, md: 6 }} key={index}>
                                <Link
                                    to={`/recipe?index=${recipe.index}`}
                                >
                                    <RecipeStack className='recipe-card'>
                                        <RecipeTitle>
                                            {recipe.recipeName}
                                        </RecipeTitle>
                                        <CardDetails>
                                            <Stack
                                                gap={{ xs: 1.5, md: 2.5 }}
                                            >
                                                <DetailBox>
                                                    <AccessTimeIcon fontSize='' sx={{ color: '#fff' }} />
                                                    <CardText>
                                                        Prep time <span className='subtext'>(min)</span>&nbsp;&nbsp;&nbsp;<span className='value-highlight'>{recipe.prepTime}</span>
                                                    </CardText>
                                                </DetailBox>
                                                <DetailBox>
                                                    <AccessTimeIcon fontSize='' sx={{ color: '#fff' }} />
                                                    <CardText>
                                                        Cook time <span className='subtext'>(min)</span>&nbsp;&nbsp;&nbsp;<span className='value-highlight'>{recipe.cookTime}</span>
                                                    </CardText>
                                                </DetailBox>
                                                <DetailBox>
                                                    <PersonIcon fontSize='' sx={{ color: '#fff' }} />
                                                    <CardText>
                                                        Serves&nbsp;&nbsp;&nbsp;<span className='value-highlight'>{recipe.serves}</span>
                                                    </CardText>
                                                </DetailBox>
                                                <DetailBox>
                                                    <LocalDiningIcon fontSize='' sx={{ color: '#fff' }} />
                                                    <CardText>
                                                        Difficulty&nbsp;&nbsp;
                                                    </CardText>
                                                    <StyledRating
                                                        readonly
                                                        size="small"
                                                        value={recipe.difficulty}
                                                        precision={0.5}
                                                        icon={<LunchDiningIcon fontSize="inherit" />}
                                                        emptyIcon={<LunchDiningOutlinedIcon fontSize="inherit" />}
                                                    />
                                                </DetailBox>
                                            </Stack>
                                            <CardImageBox>
                                                <img className="recipe-card-photo" src={recipe.photo} />
                                            </CardImageBox>
                                        </CardDetails>
                                    </RecipeStack>
                                </Link>
                            </Grid>
                        :
                            <></>
                    }
                </>
            ))}
        </>
    );
}

export default RecipeMap;