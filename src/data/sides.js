import {
    potatoMochi,
    greekSalad,
    friedRice
} from "../utils/constants";

const sides = [
    {
        index: 7,
        type: 'side',
        recipeName: 'Greek Salad',
        ingredientsList: [
                '1/2 cup romain lettuce',
                '1/2 cup shredded iceberg lettuce',
                '2 tbsp lemon juice',
                '1/4 cup olive oil',
                '1/4 cup crutons',
                '1/4 cup feta cheese',
                '1/2 tsp salt',
                '1/2 tsp black pepper',
                '1/4 tsp garlic powder',
                'splash of white vinegar'
            ],
        instructionsList: [
                'Mix all listed ingredients into a bowl.'
            ],
        prepTime: '10',
        cookTime: '0',
        time: 5,
        serves: '1-2',
        rating: 3.5,
        difficulty: 1.5,
        photo: greekSalad
    },
    {
        index: 8,
        type: 'side',
        recipeName: 'Potato Mochi',
        ingredientsList: [
                '2 large russet potatoes',
                '1 cup shredded mozz cheese',
                '4 tbsp potato starch',
                '2 tbsp milk',
                '1 tbsp avocado oil',
                '2 tbsp soy sauce',
                '2 tbsp mirin',
                '2 tbsp sugar'
            ],
        instructionsList: [
                'Peel, chop, and boil potatoes.',
                'Once soft, mash potatoes in a bowl and mix in potato starch, salt, and avocado oil. Mix thoroughly.',
                'Take a small handfull of mashed potatoes and form a ball with a pinch of mozz cheese in the center.',
                'Pan fry both sides until golden brown.',
                'Remove potato cakes and add soy sauce, mirin, and sugar to pan and stir.',
                'Add potatoes back to pan.'
            ],
        prepTime: '15',
        cookTime: '30',
        time: 45,
        serves: '1-2',
        rating: 4.5,
        difficulty: 2.5,
        photo: potatoMochi
    },
    {
        index: 21,
        type: 'side',
        recipeName: 'Fried Rice',
        ingredientsList: [
            '1 cup day old cooked rice',
            '1/4 cup diced onion',
            '1/4 cup diced carrots',
            '3 tbsp butter',
            '1/8 green onion',
            '21 tbsp minced garlic',
            '3 tbsp soy sauce',
            '2 scrambled eggs'
        ],
        instructionsList: [
            'Scrable eggs in seperate pan and set aside.',
            'Add butter, onions, carrots and garlic to wok and satuee for ~5 mins on med heat.',
            'Add day old rice, soy sauce, and green onions. Turn the heat up to high.',
            'Stir every 30 - 60 seconds. Fry rice for approx 4 - 5 mins.',
            'Turn off heat and mix in scrambled eggs. Add salt to taste.',
        ],
        prepTime: '0',
        cookTime: '0',
        time: 15,
        serves: '1-2',
        rating: 4,
        difficulty: 3,
        photo: friedRice
    },
];

export default sides;