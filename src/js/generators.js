/* eslint-disable max-len */
/* eslint-disable consistent-return */
/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */
import Team from './Team';
import PositionedCharacter from './PositionedCharacter';
import Bowman from './characters/Bowman';
import generatePosition from './positionGenerator';

export function* characterGenerator(allowedTypes, maxLevel) {
  const randomElement = Math.floor(Math.random() * allowedTypes.length);
  const ChosenCharacter = allowedTypes[randomElement];
  let randomLevel = Math.floor(Math.random() * maxLevel);
  if (randomLevel === 0) {
    randomLevel = 1;
  }
  yield new ChosenCharacter(randomLevel);
}

export default function generateTeam(allowedTypes, maxLevel, characterCount) {
  const playerPosition = [0, 1, 8, 9, 16, 17, 24, 25, 32, 33, 40, 41, 48, 49, 56, 57];
  const computerPosition = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 62, 63];
  let selectedPositionArray;
  if (allowedTypes.includes(Bowman)) {
    selectedPositionArray = playerPosition;
  } else {
    selectedPositionArray = computerPosition;
  }
  const generatedTeam = new Team();
  for (let i = 0; i < characterCount; i += 1) {
    generatedTeam.add(new PositionedCharacter(characterGenerator(allowedTypes, maxLevel).next().value, generatePosition(selectedPositionArray)));
  }
  return generatedTeam;
  // TODO: write logic here
}
