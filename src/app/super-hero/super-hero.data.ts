import { SuperHero } from './store/super-hero.model';

export const superHeroes: SuperHero[] = [

  // BATMAN
  {
    id: '70',
    name: 'Batman',
    powerstats: {
      intelligence: 100,
      strength: 26,
      speed: 27,
      durability: 50,
      power: 47,
      combat: 100
    },
    biography: {
      name: 'Bruce Wayne',
      publisher: 'DC Comics',
      alignment: 'good'
    },
    appearance: {
      gender: 'Male',
      race: 'Human',
      height: [ '6\'2', '188 cm' ],
      weight: [ '210 lb', '95 kg' ],
      eyeColor: 'blue',
      hairColor: 'black'
    },
    image: 'https://www.superherodb.com/pictures2/portraits/10/100/639.jpg'
  },

  // SUPERMAN
  {
    id: '644',
    name: 'Superman',
    powerstats: {
      intelligence: 94,
      strength: 100,
      speed: 100,
      durability: 100,
      power: 100,
      combat: 85
    },
    biography: {
      name: 'Clark Kent',
      aliases: [
        'Clark Joseph Kent',
        'Man of Steel',
        'Last Son of Krypton',
      ],
      publisher: 'Superman Prime One-Million',
      alignment: 'good'
    },
    appearance: {
      gender: 'Male',
      race: 'Kryptonian',
      height: ['6\'3', '191 cm'],
      weight: [ '225 lb', '101 kg'],
      eyeColor: 'Blue',
      hairColor: 'Black'
    },
    image: 'https://www.superherodb.com/pictures2/portraits/10/100/791.jpg'
  },

  // WONDER WOMAN
  {
    id: '720',
    name: 'Wonder Woman',
    powerstats: {
      intelligence: 88,
      strength: 100,
      speed: 79,
      durability: 100,
      power: 100,
      combat: 100
    },
    biography: {
      name: 'Diana Prince',
      aliases: [
        'Princess Diana',
        'Princess of the Amazons',
        'Goddess of Truth',
        'Wondy',
        'Wonder Girl',
        'The Amazon Princess'
      ],
      publisher: 'DC Comics',
      alignment: 'good'
    },
    appearance: {
      gender: 'Female',
      race: 'Amazon',
      height: ['6\'0', '183 cm'],
      weight: ['165 lb', '74 kg' ],
      eyeColor: 'Blue',
      hairColor: 'Black'
    },
    image: 'https://www.superherodb.com/pictures2/portraits/10/100/807.jpg'
  },

  // FLASH
  {
    id: '263',
    name: 'Flash',
    powerstats: {
      intelligence: 63,
      strength: 10,
      speed: 100,
      durability: 50,
      power: 68,
      combat: 32
    },
    biography: {
      name: 'Jay Garrick',
      aliases: [
      'Jay Garrick',
      'Siegfreid the Speedster'
      ],
      publisher: 'DC Comics',
      alignment: 'good'
    },
    appearance: {
      gender: 'Male',
      race: 'Human',
      height: ['5\'11', '180 cm'],
      weight: ['179 lb','81 kg'],
      eyeColor: 'Blue',
      hairColor: 'Brown / White'
    },
  },

  // AQUAMAN
  {
    id: '38',
    name: 'Aquaman',
    powerstats: {
      intelligence: 81,
      strength: 85,
      speed: 79,
      durability: 80,
      power: 100,
      combat: 80
    },
    biography: {
      name: 'Orin',
      aliases: [
        'Dweller in the Depths',
        'Swimmer',
      ],
      publisher: 'DC Comics',
      alignment: 'good'
    },
    appearance: {
      gender: 'Male',
      race: 'Atlantean',
      height: ['6\'1','185 cm'],
      weight: ['325 lb','146 kg'],
      eyeColor: 'Blue',
      hairColor: 'Blond'
    },
    image: 'https://www.superherodb.com/pictures2/portraits/10/100/634.jpg'
  },

  // CYBORG
  {
    id: '194',
    name: 'Cyborg',
    powerstats: {
      intelligence: 75,
      strength: 53,
      speed: 42,
      durability: 85,
      power: 71,
      combat: 64
    },
    biography: {
      name: 'Victor Stone',
      aliases: [
      'Cyberion Technis',
      'Omegadrome',
      ],
      publisher: 'DC Comics',
      alignment: 'good'
    },
    appearance: {
      gender: 'Male',
      race: 'Cyborg',
      height: ['6\'6', '198 cm'],
      weight: [ '385 lb', '173 kg'],
      eyeColor: 'Brown',
      hairColor: 'Black'
    },
    image: 'https://www.superherodb.com/pictures2/portraits/10/100/1204.jpg'
    },

    // JOKER
    {
      id: '370',
      name: 'Joker',
      powerstats: {
        intelligence: 100,
        strength: 10,
        speed: 12,
        durability: 60,
        power: 43,
        combat: 70
      },
      biography: {
        name: 'Jack Napier',
        aliases: [
          'Red Hood I',
          'Clown Prince of Crime',
          'Harlequin of Hate',
          'Jack Napier',
          'Joe Kerr',
          'Mr. J'
        ],
        publisher: 'DC Comics',
        alignment: 'bad'
      },
      appearance: {
        gender: 'Male',
        race: 'Human',
        height: ['6\'5','196 cm'],
        weight: ['192 lb','86 kg'],
        eyeColor: 'Green',
        hairColor: 'Green'
      },
      image: 'https://www.superherodb.com/pictures2/portraits/10/100/719.jpg'
    },


    // BRAINIAC
    {
      id: '136',
      name: 'Brainiac',
      powerstats: {
        intelligence: 100,
        strength: 95,
        speed: 63,
        durability: 90,
        power: 60,
        combat: 75
      },
      biography: {
        name: 'Vril Dox',
        aliases: [
          'Milton Fine'
        ],
        publisher: 'DC Comics',
        alignment: 'bad'
      },
      appearance: {
        gender: 'Male',
        race: 'Android',
        height: ['6\'6','198 cm'],
        weight: ['300 lb','135 kg'],
        eyeColor: 'Green',
        hairColor: 'No Hair'
      },
      image: 'https://www.superherodb.com/pictures2/portraits/10/100/648.jpg'
    },

    // DARKSEID
    {
      id: '204',
      name: 'Darkseid',
      powerstats: {
        intelligence: 88,
        strength: 100,
        speed: 83,
        durability: 100,
        power: 100,
        combat: 95
      },
      biography: {
        name: 'Uxas',
        aliases: [
          'Dark God'
        ],
        publisher: 'DC Comics',
        alignment: 'bad'
      },
      appearance: {
        gender: 'Male',
        race: 'New God',
        height: [ '8\'9', '267 cm' ],
        weight: [ '1815 lb', '817 kg' ],
        eyeColor: 'Red',
        hairColor: 'No Hair'
      },
      image: 'https://www.superherodb.com/pictures2/portraits/10/100/668.jpg'
    },

    // CHEETAH
    {
      id: '172',
      name: 'Cheetah',
      powerstats: {
        intelligence: 38,
        strength: 8,
        speed: 42,
        durability: 20,
        power: 32,
        combat: 70
      },
      biography: {
        name: 'Priscilla Rich',
        aliases: [
          'Kay Carlton',
          'The Cheetah'
        ],
        publisher: 'DC Comics',
        alignment: 'bad'
      },
      appearance: {
        gender: 'Female',
        race: 'Human',
        height: [ '5\'4', '163 cm'],
        weight: [ '110 lb', '50 kg' ],
        eyeColor: 'Green',
        hairColor: 'Blond'
      },
      image: 'https://www.superherodb.com/pictures2/portraits/10/100/661.jpg'
    },

    // CAPTAIN LIBERA
    {
      id: '800',
      name: 'Captain Libera',
      powerstats: {
        intelligence: 100,
        strength: 100,
        speed: 100,
        durability: 100,
        power: 100,
        combat: 100
      },
      biography: {
        name: undefined,
        aliases: [],
        publisher: undefined,
        alignment: '?'
      },
      appearance: {
        gender: undefined,
        race: '?',
        height: undefined,
        weight: undefined,
        eyeColor: undefined,
        hairColor: undefined
      },
      // tslint:disable-next-line:max-line-length
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTF6n8pGg8UAtauJr4xyqCLNKDrXjic6rjxI6Kd542jRuwQxZLz'
    }
]
