export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(characterName) {
    this.members.add(characterName);
  }

  toArray() {
    return [...this.members];
  }
}
