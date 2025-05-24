import {
    chickenPicatta,
    tenerloinSteak,
    potatoMochi,
    chocolateCheeseCake,
    watermelonMarg,
    burgerSauce
} from "../utils/constants";

const recipes = [
    {
        index: 1,
        type: 'dinner',
        recipeName: 'Tenderloin Steak',
        ingredientsList: [
            '1 tenderloin steak',
            '6-10 cloves of garlic',
            '1 shallot',
            '2 oz avacado oil',
            'kosher salt',
            'crushed black pepper',
        ],
        instructionsList: [
            '1. Heat cast iron skillet on high until smoking',
            '2. Add enough avacado oil to cover the bottom of the skillet',
            '3. Place steak in skillet and place steak press on top',
            '4. Sear each side for approx 1.5 mins',
            '5. Turn heat down to low, remove steak from pan and drain remaining oil',
            '6. Add 1 stick of butter, garlic, & shallots to skillet',
            '7. Once butter is mostly melted, add the steak back in and baste on each side for 1 min',
            '8. Place entire skillet in 400 degree oven for 4 mins',
            '9. Remove skillet from oven & steak from the skillet',
            '10. Allow 5-10 mins to rest before cutting',
        ],
        prepTime: '25',
        cookTime: '10',
        serves: '1-2',
        rating: 4.5,
        difficulty: 3,
        photo: tenerloinSteak,
    },
    {
        index: 2,
        type: 'dinner',
        recipeName: 'Chicken Picatta',
        ingredientsList: [
            '2 lbs boneless chicken breast',
            '1 shallot',
            '1 lemon',
            '1 ½ cups chicken stock',
            '1 cup flour',
            '1/2 cup olive oil',
            '1 stick unsalted butter',
            '1 tablespoon minced garlic (4-6 cloves)',
            '2 tbsp capers',
            '2 tsp salt',
            '1/2 tsp cracked black pepper',
        ],
        prepList: [
            '1. Slice chicken horizontally into thin slices',
            '2. Season chicken with salt & pepper then coat them in flower',
            '3. Finely chop 1 shallot',
        ],
        instructionsList: [
            '1. Add olive oil & butter to a pan on medium heat',
            '2. Add chicken once oil is up to temp & butter is melted, flip halfway through',
            '3. Remove chicken from pan and add shallots & garlic',
            '4. Pour in chicken stock and scape up any fond stuck to the pan',
            '5. Add another 1/4 stick of butter  & lemon juice',
            '6. Add chicken back to the pan and season with salt & pepper',
        ],
        prepTime: '15',
        cookTime: '30',
        serves: '6-12',
        rating: 4.5,
        difficulty: 3,
        photo: chickenPicatta,
    },
    {
        index: 3,
        type: 'side',
        recipeName: 'Potato Mochi',
        ingredientsList: [
            '',
        ],
        instructionsList: [
            '1. '
        ],
        prepTime: '15',
        cookTime: '30',
        serves: '6-12',
        rating: 4.5,
        difficulty: 3,
        photo: potatoMochi,
    },
    {
        index: 4,
        type: 'dessert',
        recipeName: 'Chocolate Cheese Cake',
        ingredientsList: [
            '400g cream cheese',
            '350g nutella',
            '200g chocolate wafers',
            '50g powdered sugar',
            '450ml heavy cream'
        ],
        instructionsList: [
            '1. Crush 200g wafers into mixing bowl. Add 200g nutella and mix throroughly.',
            '2. Transfer base layer to tray and pack down.',
            '3. Add 400g cream cheese & 150g nutella to a bowl and mix throroughly.',
            '4. Add 50g powdered sugar and 300ml heavy cream to the same bowl and whip until the filling holds its shape.',
            '5. Transfer middle layer to tray and smooth out the top.',
            '6. Melt 150g milk chocolate and 150ml heavy cream on low heat.',
            '7. Once melted pour top layer into tray (may be extra depending on size of tray).',
            '8. Place tray in refrigerator to set for 5-6 hours.'
        ],
        prepTime: '< 5',
        cookTime: '30',
        serves: '6-12',
        rating: 4.5,
        difficulty: 2,
        photo: chocolateCheeseCake,
    },
    {
        index: 5,
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
            '1. Add mint leaves, watermelon, and agave simple syrup to mixer & muddle',
            '2. Add tequila, lemon juice, & water melon combier, shake well',
            '3. Strain and pour over ice to serve'
        ],
        prepTime: '10',
        cookTime: '0',
        serves: '1',
        rating: 4.5,
        difficulty: 2.5,
        photo: watermelonMarg,
    },
    {
        index: 6,
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
            '1. Mix all listed ingredients into a bowl.'
        ],
        prepTime: '0',
        cookTime: '10',
        serves: '4-6',
        rating: 4,
        difficulty: 1,
        photo: burgerSauce,
    },
];

export default recipes;