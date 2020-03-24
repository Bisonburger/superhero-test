export interface SuperHero     {
  id: string;
  name: string;
  slug: string;
  powerstats: {
    intelligence: number,
    strength: number,
    speed: number,
    durability: number,
    power: number,
    combat: number
  };
  biography: {
    fullName: string,
    alterEgos: string,
    aliases?: string[],
    publisher: string,
    alignment: string,
    placeOfBirth: string,
    firstAppearance: string
  };
  appearance: {
    gender: string,
    race: string,
    height: string[],
    weight: string[],
    eyeColor: string,
    hairColor: string
  };
  work: {
    occupation: string,
    base: string
  };
  connections: {
    groupAffiliation: string,
    relatives: string
  }
  images: {
    xs: string,
    sm: string,
    md: string,
    lg: string
  }
}
