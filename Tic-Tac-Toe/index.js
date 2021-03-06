const mainController = (function() {
  'use strict';

  const table = document.querySelector('table');
  const restart = document.querySelector('.restart');
  const levelButton = document.querySelector('.level-container');
  const endLevelButton = document.querySelector('.level-container-end');
  const newGameButton = document.querySelector('.new-game');
  table.addEventListener("click", player.click);
  restart.addEventListener("click", restartGame);
  levelButton.addEventListener("click", setNextLevelStatus);
  endLevelButton.addEventListener("click", setNextLevelStatus);
  newGameButton.addEventListener("click", startNewGame);

  function startNewGame() {
    restartGame();
    display.showPopUpWindow();
  }

  function restartGame() {
    board = data.getEmptyBoard();
    playerNext = true;
    level = nextGameLevel;
    data.saveChangestoLocalStorage();
    display.displayBoard();
  }

  function setNextLevelStatus(event) {
    display.displaySelectBorder(event.target);
    nextGameLevel = event.target.dataset.level;
  }

  return {
    startNewGame,
  };

}());

data.checkState();
display.displayBoard();
