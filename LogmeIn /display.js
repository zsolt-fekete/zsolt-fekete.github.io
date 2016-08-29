'use strict';

const display = (function(){

  function displayBoard() {
    let cellList = Object.keys(board);
    cellList.forEach(function (e) {
    displayCell(e, board[e]);
    });
  }

  function displayCell(key, value) {
    let playerSymbol = 'x';
    let computerSymbol = 'o';
    let cell = document.getElementById(key);
    if (value === COMPUTER){
      cell.textContent = computerSymbol;
      cell.dataset.owner = COMPUTER;
    } else if ((value === PLAYER)) {
      cell.textContent = playerSymbol;
      cell.dataset.owner = PLAYER;
    }
    else {
      cell.dataset.owner = EMPTY;
      cell.textContent = '';
    }
    displayLevel();
  }

  function displayNextGameLevel() {
    let select = document.querySelector('.selected');
    let nextbutton = document.getElementById(nextGameLevel);
    if (select !== null){
      select.classList.remove('selected');
    }
    nextbutton.classList.add('selected');
  }

  function displaySelectBorder(item) {
    let select = document.querySelector('.selected');
    if (select !== null){
      select.classList.remove('selected');
    }
    item.classList.add('selected');
  }

  function displayLevel() {
    let levelText = document.querySelector('.level-text');
    levelText.textContent = 'Level: ' + level;
  }

  function showPopUpWindow() {
    let popUpWindow = document.querySelector('.end-screen');
    popUpWindow.classList.toggle('display');
    let body = document.querySelector('body');
    body.classList.toggle('display-gray');
    displayNextGameLevel();
  }

  function showMessage(winner) {
    const h2 = document.querySelector('h2');
    if (game.isAnyOneWon() && winner ===PLAYER){
      h2.textContent = 'You won';
      controller.resultCounter('Won');
    }
    else if (game.isAnyOneWon() && winner === COMPUTER){
      h2.textContent = 'You loose';
      controller.resultCounter('Loose');
    }
    else {
      h2.textContent = 'Game is Tie';
      controller.resultCounter('Tie');
    }
    showPopUpWindow();
  }

  return {
    displayBoard,
    displayCell,
    displaySelectBorder,
    showMessage,
    showPopUpWindow,
  };
}());
