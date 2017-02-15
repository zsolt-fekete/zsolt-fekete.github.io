const display = (function(){
  'use strict';

  function displayBoard() {
    if (data.gameStatus.fields) {
      data.gameStatus.fields.forEach(player => {fillTheCell(field)});
    };
    displayLevel();
  }

  function fillTheCell(field) {
    let cell = document.getElementById(field.id);
    cell.textContent = data.players[field.owner].icon;
  }

  function displayLevel() {
    let levelText = document.querySelector('.level-text');
    levelText.textContent = 'Level: ' + data.gameStatus.level.name;
  }

  // function displayNextGameLevel() {
  //   let select = document.querySelector('.selected');
  //   let nextbutton = document.getElementById(nextGameLevel);
  //   if (select !== null){
  //     select.classList.remove('selected');
  //   }
  //   nextbutton.classList.add('selected');
  // }
  //
  // function displaySelectBorder(item) {
  //   let select = document.querySelector('.selected');
  //   if (select !== null){
  //     select.classList.remove('selected');
  //   }
  //   item.classList.add('selected');
  // }
  //
  // function showPopUpWindow() {
  //   let popUpWindow = document.querySelector('.end-screen');
  //   popUpWindow.classList.toggle('display');
  //   let body = document.querySelector('body');
  //   body.classList.toggle('display-gray');
  //   displayNextGameLevel();
  // }
  //
  // function showMessage(winner) {
  //   const h2 = document.querySelector('h2');
  //   if (game.isAnyOneWon() && winner ===PLAYER){
  //     h2.textContent = 'You won';
  //   }
  //   else if (game.isAnyOneWon() && winner === COMPUTER){
  //     h2.textContent = 'You loose';
  //   }
  //   else {
  //     h2.textContent = 'Game is Tie';
  //   }
  //   showPopUpWindow();
  // }

  return {
    displayBoard,
    fillTheCell
    // displaySelectBorder,
    // showMessage,
    // showPopUpWindow,
  };
}());
