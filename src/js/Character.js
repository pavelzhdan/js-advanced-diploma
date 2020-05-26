/* eslint-disable consistent-return */
export default class Character {
  constructor(level, type = 'generic') {
    this.level = level;
    this.attack = 0;
    this.defence = 0;
    this.health = 50;
    this.type = type;
    if (new.target.name === 'Character') {
      throw Error("You can't create this object");
    }
  }

  levelUp() {
    const error = Error('Нельзя повысить левел умершего');
    if (this.health <= 0) {
      return error;
    }
    this.attack = Math.max(this.attack, this.attack * (1.8 - this.health / 100));
    this.defence = Math.max(this.defence, this.defence * (1.8 - this.health / 100));
    this.level += 1;
    this.health += 80;
    if (this.health > 100) {
      this.health = 100;
    }
  }
}
