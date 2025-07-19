import {
    chickenPicatta,
    tenerloinSteak,
    potatoMochi,
    chocolateCheeseCake,
    watermelonMarg,
    burgerSauce,
    cowboyButter,
    steakAioli,
    crabToppedSalmon,
    greekSalad,
    chickenTacos,
    alfredoSauce,
    honeyGarlicChicken,
    chickenParm,
    guacamole,
    hoagieDip,
    oreoCookieCake
} from "../utils/constants";

const recipes = [
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
        index: 9,
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
                'Crush 200g wafers into mixing bowl. Add 200g nutella and mix throroughly.',
                'Transfer base layer to tray and pack down.',
                'Add 400g cream cheese & 150g nutella to a bowl and mix throroughly.',
                'Add 50g powdered sugar and 300ml heavy cream to the same bowl and whip until the filling holds its shape.',
                'Transfer middle layer to tray and smooth out the top.',
                'Melt 150g milk chocolate and 150ml heavy cream on low heat.',
                'Once melted pour top layer into tray (may be extra depending on size of tray).',
                'Place tray in refrigerator to set for 5-6 hours.'
            ],
        prepTime: '< 5',
        cookTime: '30',
        time: 30,
        serves: '6-12',
        rating: 4.5,
        difficulty: 2,
        photo: chocolateCheeseCake
    },
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
    {
        index: 17,
        type: 'dessert',
        recipeName: 'Oreo Cookie Cake',
        ingredientsList: [
                '1 pack Devil\'s food cake mix',
                '4 oz semi-sweet baking chocolate',
                '1/4 cup butter',
                '8 oz softened cream cheese',
                '1/2 cup white sugar',
                '2 cups thawed frozen whipped topping',
                '12 crushed Oreo cookies',
            ],
        instructionsList: [
                'Prepare cake batter and bake in 2 separate 9 inch round cake pans.',
                'Let top & bottom layers cool for 10 mins then remove from pans.',
                'In a large mixing bowl, beat cream cheese and sugar until blended.',
                'Gently stir in whipped topping and crushed cookies.',
                'Place bottom layer on plate, add a 2 inch layer of filling, and then add the top layer.',
                'Microwave chocolate and butter in small bowl until melted (approx 2 mins).',
                'Pour melted chocolate on top layer of cake to finish.',
                'Let cake set in refrigerator until chocolate glaze forms a hard shell.'
            ],
        prepTime: '0',
        cookTime: '0',
        time: 60,
        serves: '6-12',
        rating: 4,
        difficulty: 4,
        photo: oreoCookieCake
    },
];
    

export default recipes;