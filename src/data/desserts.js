import {
    chocolateCheeseCake,
    oreoCookieCake,
} from "../utils/constants";

const recipes = [
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