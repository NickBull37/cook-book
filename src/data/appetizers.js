import {
    guacamole,
    hoagieDip
} from "../utils/constants";

const appetizers = [
    {
        index: 14,
        type: 'appetizer',
        recipeName: 'Guacamole',
        ingredientsList: [
                '3 avocados',
                '1/4 cup diced red onion',
                '1/4 cup finely chopped fresh cilantro',
                '2 tbsp lime juice',
                '1 small diced jalapeno pepper',
                '1/2 tsp salt',
                '1/4 cup seeded & diced tomatoes'
            ],
        instructionsList: [
                'In a large bowl, combine avocados, red onion, cilantro, lime juice, jalapenos, & salt.',
                'Mash until guacamole reaches desired consistency.',
                'Mix in tomatoes & add more salt to taste if desired.'
            ],
        prepTime: '15',
        cookTime: '0',
        time: 15,
        serves: '4-6',
        rating: 4,
        difficulty: 1.5,
        photo: guacamole
    },
    {
        index: 16,
        type: 'appetizer',
        recipeName: 'Hoagie Dip',
        ingredientsList: [
                '1/2 lb ham',
                '1/2 lb genova salami',
                '1/2 lb provolone cheese',
                '1 vidalia onion ',
                'tomatoes',
                'chopped sweet peppers',
                '2 tbsp mayo',
                '1 tbsp olive oil',
                'oregano',
                'garlic powder',
                'salt & pepper to tase'
            ],
        instructionsList: [
                'Chop everything and mix together in a large bowl.',
                'Serve with fresh bread.'
            ],
        prepTime: '45',
        cookTime: '0',
        time: 45,
        serves: '6-12',
        rating: 4,
        difficulty: 2.5,
        photo: hoagieDip
    },
];
    

export default appetizers;