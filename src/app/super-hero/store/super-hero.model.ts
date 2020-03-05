export interface SuperHero     {
  id: string;
  name: string;
  powerstats: {
    intelligence: number,
    strength: number,
    speed: number,
    durability: number,
    power: number,
    combat: number
  };
  biography: {
    name: string,
    aliases?: string[],
    publisher: string,
    alignment: string
  };
  appearance: {
    gender: string,
    race: string,
    height: string[],
    weight: string[],
    eyeColor: string,
    hairColor: string
  };
  image?: string;
}
