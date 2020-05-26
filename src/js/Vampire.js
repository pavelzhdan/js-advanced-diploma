import Character from './Character';

export default class Vampire extends Character {
  constructor(level, type = 'vampire') {
    super(type);
    this.level = level;
    this.attack = 40;
    this.defence = 10;
    this.health = 100;
  }
}
