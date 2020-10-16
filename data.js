export default [
    {
        id: 'peppermint',
        title: 'Peppermint Stick Forest',
        map: {
            top: '95%',
            left: '95%'
        },
        image: './assets/candy-cane.png',
        description: `
        You stumble into the Peppermint Stick Forest. It smells like Christmas!
        A small child brandishing a candy cane appears. Is that a mad glint in their eye or just the sparkle of holiday joy?
        What do you do?
        `,
        choices: [{
            id: 'gift',
            description: 'Put out your hand to accept their gift',
            result: `The child hands over a candy cane that isn't even broken and gives you a smile that doesn't reach their eyes.
            You've made 1 friend and gain 2 candy points.
            `,
            candy: 2,
            friendship: 1
        }, {
            id: 'fight',
            description: 'Uproot a nearby candy cane and prepare to duel',
            result: `The child's big, innocent eyes fill with tears and they begin to cry. C'mon you would really fight a kid?
            Lose 1 friendship point.
            `,
            candy: 0,
            friendship: -1
        }, {
            id: 'eat',
            description: 'Eat a candy cane and pocket a few for later',
            result: `The child wanders off into the forest and a few of your candy canes break as you shove them into your pocket.
            You gain 8 candy points.
            `,
            candy: 8,
            friendship: 0
        }]
    },
    {
        id: 'gumdrop',
        title: 'Gumdrop Mountains',
        map: {
            top: '60%',
            left: '90%'
        },
        prereq: 'peppermint',
        image: './assets/gumdrop.png',
        description: `
        Holy heck! These gumdrops are the size of small mountains.
        You clamber up and over one slightly stale, sugar-coated giant gumdrop after another. Suddenly, the gumdrop fairy appears.
        They giggle and sway back and forth to music only they can hear. I'm beginning to think there's something a little off
        about the creatures in Candy Land. What do you do next?
        `,
        choices: [{
            id: 'gift',
            description: 'You reach into your pocket and hold out a broken candy cane as a peace offering.',
            result: `
            The gumdrop fairy's eyes turn red with fury, they knock the unwanted gift out of your hand and try
            to bite your fingers with incredibly sharp looking teeth. You lose 2 candy points and 1 friendship point.
            `,
            candy: -2,
            friendship: -1
        }, {
            id: 'fight',
            description: 'You pick up a nearby bucket of water and prepare to fight.',
            result: `
            The gumdrop fairy makes a sudden movement and you douse it with the water. It turns into a gooey, soggy lump.
            You pocket a couple of gumdrops in case you need to weaponize them later and gain 3 candy points.
            `,
            candy: 3,
            friendship: 0
        }, {
            id: 'eat',
            description: 'You start eating gumdrop pebbles off the ground.',
            result: `
            The gumdrop fairy blinks at you with blank eyes and continues to sway. The gumdrops are getting
            stuck in your teeth but you eat a couple more anyways and gain 6 candy points.
            `,
            candy: 6,
            friendship: 1
        }]
    },
    {
        id: 'brittle',
        title: 'Crooked Old Peanut Brittle House',
        map: {
            top: '45%',
            left: '5%'
        },
        prereq: ['peppermint', 'gumdrop'],
        image: './assets/peanut.png',
        description: `
        It's getting dark, you walk down a long road and see lights and hear music coming from an old, crooked frat house.
        Peanuts with arms and legs and faces and backwards baseball hats stumble around the lawn and you smell peanut butter whiskey.
        Gross! A nice looking peanut boy approaches you and asks if you'd like to come in and have a drink. What do you do?`,
        choices: [{
            id: 'gift',
            description: 'Accept a swig of peanut butter whiskey and head into the party.',
            result: `
            Soon enough you're both drunk and having a sugar rush, you're the life of the party!
            Eventually you throw up in a urinal and start to feel sleepy. The peanut frat boys chant One of us, one of us!
            As you stumble out into the night. You lose 4 candy points and gain 2 friendship points. `,
            candy: -4,
            friendship: 2
        }, {
            id: 'fight',
            description: 'Call campus police, this party is way out of hand.',
            result: `
            'Whoa not chill' says Chad Peanut as the party police hand him a noise violation ticket. You lose 2 friendship points
            but gain 2 candy points and continue your journey.`,
            candy: 2,
            friendship: -2
        }, {
            id: 'eat',
            description: 'Break off a piece of the peanut brittle roof and start snacking.',
            result: `
            Your teeth are starting to hurt from all of the candy but you continue to eat peanut brittle and add some to your
            sticky, candy-filled pockets.`,
            candy: 7,
            friendship: 0
        }]
    },
];