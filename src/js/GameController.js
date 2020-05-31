/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import GamePlay from './GamePlay';
import { charactersToDraw as allcharacters } from './teamsCreation';

let saveThis;
let anySelectedCellIndex;
let selectedCharacter;

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
  }

  init() {
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
    this.gamePlay.drawUi('prairie');
    this.gamePlay.addCellEnterListener(this.onCellEnter);
    this.gamePlay.addCellLeaveListener(this.onCellLeave);
    this.gamePlay.addCellClickListener(this.onCellClick);
    saveThis = this.gamePlay;
  }

  onCellClick(index) {
    selectedCharacter = allcharacters.filter((element) => element.position === index);
    if (selectedCharacter.length === 1) {
      const typeOfCharacter = selectedCharacter[0].character.type;
      if (typeOfCharacter === 'vampire' || typeOfCharacter === 'daemon' || typeOfCharacter === 'undead') {
        GamePlay.showError('Неиграбельный персонаж');
        return false;
      }
      saveThis.selectCell(index);
      if (anySelectedCellIndex) {
        saveThis.deselectCell(anySelectedCellIndex);
      }
      if (anySelectedCellIndex === index) {
        anySelectedCellIndex = null;
        selectedCharacter = null;
      } else {
        anySelectedCellIndex = index;
      }
    }
    // TODO: react to click
  }

  onCellEnter(index) {
    const levelEmoji = String.fromCodePoint(0x1F396);
    const attackEmoji = String.fromCodePoint(0x2694);
    const defenceEmoji = String.fromCodePoint(0x1F6E1);
    const healthEmoji = String.fromCodePoint(0x2764);
    const characterInside = allcharacters.filter((element) => element.position === index);
    if (characterInside.length === 1) {
      const outcome = `${levelEmoji} ${characterInside[0].character.level}${attackEmoji}${characterInside[0].character.attack}${defenceEmoji}${characterInside[0].character.defence}${healthEmoji}${characterInside[0].character.health}`;
      saveThis.showCellTooltip(outcome, index);
    }
    const chosenCell = document.querySelector('div.selected-yellow');
    if (chosenCell && characterInside.length === 1) {
      saveThis.setCursor('pointer');
    }
    let movementDistance;
    const movement = [];
    if (selectedCharacter[0].character.type === 'swordsman') {
      movementDistance = 4;
    } else if (selectedCharacter[0].character.type === 'bowman') {
      movementDistance = 2;
    } else {
      movementDistance = 1;
    }
    const currentPosition = selectedCharacter[0].position;
    for (let i = 1; i < movementDistance + 1; i += 1) {
      const checkSteps = [(currentPosition + i), (currentPosition - i), (currentPosition + 8 * i), (currentPosition - 8 * i), (currentPosition + 7 * i), (currentPosition - 7 * i), (currentPosition + 9 * i), (currentPosition - 9 * i)];
      checkSteps.forEach((element) => movement.push(element));
      
    }
    console.log(movement);
    if (movement.includes(index)) {
      saveThis.setCursor('pointer');
      saveThis.selectCell(index, 'green');
    }

    // TODO: react to mouse enter
  }

  onCellLeave(index) {
    saveThis.hideCellTooltip(index);
    saveThis.setCursor('auto');
    const seectedCell = document.querySelector('div.selected-yellow');
    console.log(seectedCell.classList);

    // saveThis.deselectCell(index);
    // TODO: react to mouse leave
  }
}
