'use strict'

const computer = (function(){

  const ATTACK = 2;
  const DEFENSE = 10;

  function run(){
    if (level === 'easy'){
      toAnswerEasy();
    }else if(level === 'medium'){
      toAnswerMedium();
    }else if (level === 'hard'){
      toAnswerHard();
    }
    playerNext++;
    data.saveChangestoLocalStorage()
    if (game.isAnyOneWon() || game.isTheGameTie()){
      return display.showMessage(COMPUTER);
    }
  }

  function toAnswerEasy(){
    let selectedCell = getRandomCell();
    saveAndDisplayMove(selectedCell);
  }

  function toAnswerMedium(){
    let selectedCell;
    if (checkTheNextMove(ATTACK)) {
      selectedCell = checkTheNextMove(ATTACK);
    } else if (checkTheNextMove(DEFENSE)) {
      selectedCell = checkTheNextMove(DEFENSE);
    } else{
      selectedCell = getRandomCell();
    }
    saveAndDisplayMove(selectedCell);
  }

  function toAnswerHard(){
    let selectedCell;
    if (checkTheNextMove(ATTACK)) {
      selectedCell = checkTheNextMove(ATTACK);
    } else if (checkTheNextMove(DEFENSE)) {
      selectedCell = checkTheNextMove(DEFENSE);
    } else{
      selectedCell = findThebestCell();
    }
    saveAndDisplayMove(selectedCell);
  }


  function saveAndDisplayMove(selectedCell){
    board[selectedCell] = COMPUTER;
    display.displayCell(selectedCell, COMPUTER);
  }

  function checkTheNextMove(targetValue){
    let selectedCell;
    if (checkTheOptionDiagonal(targetValue)) {
      selectedCell = checkTheOptionDiagonal(targetValue);
    } else if (checkTheOptionRow(targetValue)) {
      selectedCell = checkTheOptionRow(targetValue);
    } else if (checkTheOptionColumn(targetValue)) {
      selectedCell = checkTheOptionColumn(targetValue);
    }
    return selectedCell;
  }

  function checkTheOptionRow(targetValue){
    let selectedCell;
    let list = ['a' , 'b', 'c'];
    for (let i = 0; i < 3; i++){
      if (checkOption(list[i] + 1, list[i] + 2, list[i] + 3, targetValue)) {
        selectedCell = (checkOption(list[i] + 1, list[i] + 2, list[i] + 3, targetValue));
      }
    }
    return selectedCell;
  }

  function checkTheOptionColumn(targetValue){
    let selectedCell;
    let list = ['a' , 'b', 'c'];
    for (let i = 1; i < 4; i++){
      if (checkOption(list[0] + i, list[1] + i, list[2] + i, targetValue)) {
        selectedCell = (checkOption(list[0] + i, list[1] + i, list[2] + i, targetValue));
      }
    }
    return selectedCell;
  }

  function checkTheOptionDiagonal(targetValue){
    let selectedCell;
    if (checkOption('a1', 'b2', 'c3', targetValue)) {
      selectedCell = checkOption('a1', 'b2', 'c3', targetValue);
    } else if (checkOption('a3', 'b2', 'c1', targetValue)) {
      selectedCell = checkOption('a3', 'b2', 'c1', targetValue);
    }
    return selectedCell;
  }

  function checkOption(cell1, cell2, cell3, mode){
    let selectedCell;
    if (board[cell1]+board[cell2]+board[cell3] === mode) {
      let emptyCells = checkTheCells(EMPTY);
      if (emptyCells.includes(cell1)){
        selectedCell = cell1;
      } else if (emptyCells.includes(cell2)){
        selectedCell = cell2;
      }
      else if (emptyCells.includes(cell3)){
        selectedCell = cell3;
      }
    }
    return selectedCell;
  }

  function getRandomCell(){
    let emptyCells = checkTheCells(EMPTY);
    let selectedCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    return selectedCell;
  }

  function checkTheCells(filter) {
    let cellList = Object.keys(board);
    let filteredCells =[];
    cellList.forEach(function (e) {
      if (board[e] === filter )
      filteredCells.push(e)
    });
    return filteredCells;
  }

  function findThebestCell(){
    let selectedCell;
    let emptyCells = checkTheCells(EMPTY);
    let corner =['a1','a3','c1','c3'];
    let center = 'b2';
    if (emptyCells.includes(center)){
      selectedCell = center;
    } else if (emptyCells.includes(corner)) {
      for (let i = 0; i < 4; i++){
        if (emptyCells.includes(corner[i])){
          selectedCell = corner[i];
        }
      }
    }else{
      selectedCell = getRandomCell();
    }
    return selectedCell;
  }

  return {
    run,
  };
}());
