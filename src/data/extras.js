import {
    burgerSauce,
    cowboyButter,
    steakAioli,
    alfredoSauce,
    dynamiteSauce,
    honeyGarlicSauce
} from "../utils/constants";

const extras = [
    {
        index: 10,
        type: 'extra',
        recipeName: 'Aioli Steak Sauce',
        ingredientsList: [
                '1 cup mayo',
                '1/4 cup steak sauce',
                '2 tbsp horseradish',
                '2 tbsp black pepper',
                '1 tbsp chives'
            ],
        instructionsList: [
                'Mix all listed ingredients into a bowl.',
                'Chill in fridge for 30 mins.'
            ],
        prepTime: '0',
        cookTime: '5',
        time: 5,
        serves: '4-6',
        rating: 4,
        difficulty: 1,
        photo: steakAioli
    },
    {
        index: 11,
        type: 'extra',
        recipeName: 'Alfredo Sauce',
        ingredientsList: [
                '2 oz shredded parmesean cheese',
                '1 oz shredded romano cheese',
                '3/4 cup heavy cream',
                '3 tbsp unsalted butter',
                '1/2 tbsp minced garlic'
            ],
        instructionsList: [
                'Melt button in a pan and add minced garlic. Cook till golden brown.',
                'Remove pan from heat, let cool 1-2 mins.',
                'Add in room temperature heavy cream, whisk until blended.',
                'Add pan back to heat on low - do not allow sauce to boil.',
                'Slowly add shredded cheese, whisking to blend in melted cheese.',
                'Add salt & pepper.',
                'Mix in pasta when ready.'
            ],
        prepTime: '10',
        cookTime: '15',
        time: 15,
        serves: '1-2',
        rating: 3.5,
        difficulty: 2,
        photo: alfredoSauce
    },
    {
        index: 12,
        type: 'extra',
        recipeName: 'Burger Sauce',
        ingredientsList: [
                '1/2 cup mayo',
                '2 tbsp ketchup',
                '1 tbsp yellow mustard',
                '1 tbsp dijon mustard',
                '1 tbsp pickle juice',
                '1 tsp garlic powder',
                '1 tsp onion powder',
                '1/4 tsp cayenne pepper'
            ],
        instructionsList: [
                'Mix all listed ingredients into a bowl.'
            ],
        prepTime: '0',
        cookTime: '5',
        time: 5,
        serves: '4-6',
        rating: 4,
        difficulty: 1,
        photo: burgerSauce
    },
    {
        index: 13,
        type: 'extra',
        recipeName: 'Cowboy Butter',
        ingredientsList: [
                '6 tbsp butter',
                '4-5 cloves garlic (minced)',
                'juice from 1/2 a lemon',
                '1/2 tbsp lemon zest',
                '1 tbsp dijon mustard',
                '1/2 tsp cayenne pepper',
                '1 tsp paprika',
                '2 tbsp fresh parsley',
                '1 tbsp chives',
                '1 tsp chili flakes',
                '1 tsp thyme',
                'salt & pepper to taste'
            ],
        instructionsList: [
                'Melt butter in a sauce pan with garlic, lemon juice, lemon zest, dijon mustard, salt, pepper, paprika, & cayenne.',
                'Stir and add parsley, chives, chili flakes, & thyme.'
            ],
        prepTime: '0',
        cookTime: '10',
        time: 10,
        serves: '4-6',
        rating: 4,
        difficulty: 1,
        photo: cowboyButter
    },
    {
        index: 19,
        type: 'extra',
        recipeName: 'Dynamite Sauce',
        ingredientsList: [
            '1/2 cup mayo',
            '2 tbsp siracha sauce',
            '1 tbsp honey',
            't tsp lemon juice',
        ],
        instructionsList: [
            'Mix all ingredients into a large bowl.',
        ],
        prepTime: '0',
        cookTime: '0',
        time: 5,
        serves: '1-2',
        rating: 4,
        difficulty: 1,
        photo: dynamiteSauce
    },
    {
        index: 20,
        type: 'extra',
        recipeName: 'Honey Galic Sauce',
        ingredientsList: [
            '2 tbsp honey',
            '2 tbsp soy sauce',
            '1 tbsp vinegar',
            '1/2 tbsp minced garlic',
        ],
        instructionsList: [
            'Add all ingredients to a sauce pan on MED heat. Stir occasionally.',
            'Remove from heat after a few mins when sauce has thickened.',
        ],
        prepTime: '0',
        cookTime: '0',
        time: 10,
        serves: '1-2',
        rating: 4,
        difficulty: 2,
        photo: honeyGarlicSauce
    },
];
    

export default extras;