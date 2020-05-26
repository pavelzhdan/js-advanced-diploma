/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */
import Bowman from './Bowman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Undead from './Undead';
import Vampire from './Vampire';
import Daemon from './Daemon';

const playerTeam = [new Bowman(1), new Swordsman(1), new Magician(1)];
const computerTeam = [new Undead(1), new Vampire(1), new Daemon(1)];


export function* characterGenerator(allowedTypes, maxLevel) {
  const randomElement = Math.floor(Math.random() * allowedTypes.length);
  yield allowedTypes[randomElement].level = maxLevel;
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  for (let i = 0; i <= characterCount; i += 1) {
    characterGenerator(allowedTypes, maxLevel);
  }
  // TODO: write logic here
}
