import {
    watermelonMarg,
} from "../utils/constants";

const drinks = [
    {
        index: 15,
        type: 'drink',
        recipeName: 'Watermelon Mint Margarita',
        ingredientsList: [
                '5-8 mint leaves',
                '3 medium chunks of watermelon',
                '0.5 oz agave simple syrup (2 parts water, 1 part agave, boil)',
                '1.5 oz tequila',
                '1 oz lemon juice',
                '0.75 oz watermelon combier'
            ],
        instructionsList: [
                'Add mint leaves, watermelon, and agave simple syrup to mixer & muddle',
                'Add tequila, lemon juice, & water melon combier, shake well',
                'Strain and pour over ice to serve'
            ],
        prepTime: '10',
        cookTime: '0',
        time: 10,
        serves: '1',
        rating: 4.5,
        difficulty: 2.5,
        photo: watermelonMarg
    }
];
    

export default drinks;