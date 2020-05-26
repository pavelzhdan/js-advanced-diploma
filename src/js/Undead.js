import Character from './Character';

export default class Undead extends Character {
  constructor(level, type = 'undead') {
    super(type);
    this.level = level;
    this.attack = 25;
    this.defence = 25;
    this.health = 100;
  }
}
