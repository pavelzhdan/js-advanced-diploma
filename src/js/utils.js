export function calcTileType(index, boardSize) {
  // TODO: write logic here
  switch (true) {
    case index === 0:
      return 'top-left';
      break;
    case index === boardSize - 1:
      return 'top-right';
      break;
    case index > 0 && index < boardSize - 1:
      return 'top';
      break;
    case index === boardSize * (boardSize - 1):
      return 'bottom-left';
      break;
    case index === (boardSize * boardSize) - 1:
      return 'bottom-right';
      break;
    case index > boardSize * (boardSize - 1) && index < boardSize * boardSize - 1:
      return 'bottom';
      break;
    case index > 0 && index % boardSize === 0 && index < boardSize * (boardSize - 1):
      return 'left';
      break;
    case (index - (boardSize - 1)) % boardSize === 0:
      return 'right';
      break;
    default:
      return 'center';
  }
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}
