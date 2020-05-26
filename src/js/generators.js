/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */

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
