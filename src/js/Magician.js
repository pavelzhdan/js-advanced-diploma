import Character from './Character';

export default class Magician extends Character {
  constructor(level, type = 'magician') {
    super(type);
    this.level = level;
    this.attack = 10;
    this.defence = 40;
    this.health = 100;
  }
}
