import Character from '../Character';

export default class Vampire extends Character {
  constructor(level, type = 'vampire') {
    super(level, type);
    this.attack = 40;
    this.defence = 10;
    this.health = 100;
  }
}
