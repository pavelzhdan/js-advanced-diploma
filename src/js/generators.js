/* eslint-disable consistent-return */
/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */
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
  for (let i = 1; i < characterCount; i += 1) {
    return characterGenerator(allowedTypes, maxLevel).next().value;
  }
  // TODO: write logic here
}
