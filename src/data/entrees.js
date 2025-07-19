import {
    chickenPicatta,
    tenerloinSteak,
    crabToppedSalmon,
    chickenTacos,
    honeyGarlicChicken,
    chickenParm,
} from "../utils/constants";

const entrees = [
    {
        index: 1,
        type: 'dinner',
        recipeName: 'Chicken Parmesan',
        ingredientsList: [
                '2 chicken breasts',
                '1 cup flour',
                '2 eggs',
                '1 cup Italian breadcrumbs',
                '1/2 cup grated Parmesan cheese',
                '1/2 tsp garlic powder',
                '1 cup marinara sauce',
                '1 1/2 cups shredded mozzarella cheese',
                '2 tbsp olive oil',
                'salt and black pepper to taste',
                'fresh basil leaves (optional)'
            ],
        instructionsList: [
                'Preheat oven to 425°F.',
                'Tenderize chicken breasts to an even thickness (about 1/2 inch).',
                'Season both sides with salt, pepper, and garlic powder.',
                'Dredge chicken in flour, dip in beaten eggs, then coat with a mix of breadcrumbs and parmesan cheese.',
                'Heat 2 tbsp olive oil in a large skillet over medium heat.',
                'Cook chicken until golden brown, about 2-3 minutes each side.',
                'Transfer chicken to a baking dish and spoon marinara sauce evenly over the top.',
                'Add shredded mozzarella cheese to each piece of chicken.',
                'Bake in oven for 15-20 minutes, or until chicken reaches 165°F and cheese is bubbly and browned.',
                'Garnish with fresh basil if desired.'
            ],
        prepTime: '20',
        cookTime: '25',
        time: 60,
        serves: '2',
        rating: 4,
        difficulty: 4,
        photo: chickenParm
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
                '1/2 tsp cracked black pepper'
            ],
        prepList: [
                '1. Slice chicken horizontally into thin slices',
                '2. Season chicken with salt & pepper then coat them in flower',
                '3. Finely chop 1 shallot'
            ],
        instructionsList: [
                'Add olive oil & butter to a pan on medium heat',
                'Add chicken once oil is up to temp & butter is melted, flip halfway through',
                'Remove chicken from pan and add shallots & garlic',
                'Pour in chicken stock and scrape up any fond stuck to the pan',
                'Add another 1/4 stick of butter  & lemon juice',
                'Add chicken back to the pan and season with salt & pepper'
            ],
        prepTime: '15',
        cookTime: '30',
        time: 45,
        serves: '6-12',
        rating: 4.5,
        difficulty: 3,
        photo: chickenPicatta
    },
    {
        index: 3,
        type: 'dinner',
        recipeName: 'Crab Topped Salmon',
        ingredientsList: [
                '1 pc salmon',
                '1 can lump crab meat (drained)',
                '1/2 stick butter',
                '2 tbsp breadcrumbs',
                '2 tbsp mayo',
                '1 tbsp egg (beaten)',
                '1 tbsp dijon mustard',
                '1/4 tsp salt',
                '1/4 tsp pepper',
                '1/4 tsp garlic powder',
                'parsley'
            ],
        instructionsList: [
                'Pre-heat oven to 400 degrees.',
                'If salmon still has skin: pour 1/2 cup boiling water on skin and peel off.',
                'Melt butter in oven-safe tray.',
                'Add salt & pepper to salmon on both sides and place in tray with butter.',
                'In a mixing bowl, combine crab meat, breadcrumbs, mayo, egg(s), dijon mustard, and garlic powder. Mix thoroughly.',
                'Spread crabmeat mixture on top of salmon.',
                'Bake in oven at 400 degrees for approx 20-25 mins.'
            ],
        prepTime: '15',
        cookTime: '25',
        time: 45,
        serves: '1-2',
        rating: 4,
        difficulty: 2.5,
        photo: crabToppedSalmon
    },
    {
        index: 4,
        type: 'dinner',
        recipeName: 'Crispy Chicken Tacos',
        ingredientsList: [
                'tortillas',
                'grated parmesan cheese',
                'shredded lettuce',
                'ceaser dressing',
                'ground chicken'
            ],
        instructionsList: [
                'Spread ground chicken to edge of tortilla.',
                'Pan fry on medium (chicken side down) until chicken is crispy.',
                'Flip and fry tortilla side shortly until brown & crispy.',
                'Remove tacos from pan and top with lettuce and ceaser dressing.'
            ],
        prepTime: '10',
        cookTime: '0',
        time: 20,
        serves: '1-2',
        rating: 3.5,
        difficulty: 1.5,
        photo: chickenTacos
    },
    {
        index: 5,
        type: 'dinner',
        recipeName: 'Honey Garlic Chicken',
        ingredientsList: [
                '2 chicken thighs',
                '1/2 cup cornstarch',
                'salt',
                '2 tbsp honey',
                '2 tbsp soy sauce',
                '1 tbsp vinegar',
                '1/2 tbsp minced garlic'
            ],
        instructionsList: [
                'Cut chicken thighs into 1 inch cubes.',
                'Add corstach and salt to mixing bowl.',
                'Toss chicken until evenly coated.',
                'Cook chicken in oven at 400 for 20 mins.',
                'Add soy sauce, honey, vinegar, and minced garlic to sauce pot on MED heat.',
                'Simmer for 4-5 mins until it starts to thicken.',
                'Remove chicken from oven and toss with honey garlic sauce.'
            ],
        prepTime: '10',
        cookTime: '25',
        time: 35,
        serves: '1-2',
        rating: 4,
        difficulty: 2.5,
        photo: honeyGarlicChicken
    },
    {
        index: 6,
        type: 'dinner',
        recipeName: 'Tenderloin Steak',
        ingredientsList: [
                '1 tenderloin steak',
                '6-10 cloves of garlic',
                '1 shallot',
                '2 oz avacado oil',
                'kosher salt',
                'crushed black pepper'
            ],
        instructionsList: [
                'Heat cast iron skillet on high until smoking.',
                'Add enough avacado oil to cover the bottom of the skillet.',
                'Place steak in skillet and place steak press on top.',
                'Sear each side for approx 1 min 30 seconds.',
                'Turn heat down to low, remove steak from pan and drain remaining oil.',
                'Add 1 stick of butter, garlic, & shallots to skillet.',
                'Once butter is mostly melted, add the steak back in and baste on each side for 1 min.',
                'Place the entire skillet in 400 degree oven for 4 mins.',
                'Remove skillet from oven & steak from the skillet.',
                'Allow 5-10 mins to rest before cutting.'
            ],
        prepTime: '25',
        cookTime: '10',
        time: 35,
        serves: '1-2',
        rating: 4.5,
        difficulty: 3.5,
        photo: tenerloinSteak
    },
];
    

export default entrees;