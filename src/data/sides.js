import {
    potatoMochi,
    greekSalad,
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
        serves: '1-2',
        rating: 4.5,
        difficulty: 2.5,
        photo: potatoMochi
    },
];
    

export default sides;