const computer = (function(){
  'use strict'

  function run(){
    if (data.gameStatus.level.id === 0){
      toAnswerEasy();
    }else if(data.gameStatus.level.id === 1){
      toAnswerMedium();
    }else if (data.gameStatus.level.id === 2){
      toAnswerHard();
    }
    game.isFinished();
    data.saveState();
    data.gameStatus.turn = data.players.player.name;
  }

  function toAnswerEasy(){
    let selectedCell = getRandomCell();
    game.addField(selectedCell);
  }

  function getRandomCell(){
    let emptyCells = data.getEmptyList();
    let selectedCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    return selectedCell;
  }

  //
  //
  //
  // function toAnswerMedium(){
  //   let selectedCell;
  //   if (checkTheNextMove(ATTACK)) {
  //     selectedCell = checkTheNextMove(ATTACK);
  //   } else if (checkTheNextMove(DEFENSE)) {
  //     selectedCell = checkTheNextMove(DEFENSE);
  //   } else{
  //     selectedCell = getRandomCell();
  //   }
  //   saveAndDisplayMove(selectedCell);
  // }
  //
  // function toAnswerHard(){
  //   let selectedCell;
  //   if (checkTheNextMove(ATTACK)) {
  //     selectedCell = checkTheNextMove(ATTACK);
  //   } else if (checkTheNextMove(DEFENSE)) {
  //     selectedCell = checkTheNextMove(DEFENSE);
  //   } else{
  //     selectedCell = findThebestCell();
  //   }
  //   saveAndDisplayMove(selectedCell);
  // }
  //
  //
  // function saveAndDisplayMove(selectedCell){
  //   board[selectedCell] = COMPUTER;
  //   display.displayCell(selectedCell, COMPUTER);
  // }
  //
  // function checkTheNextMove(targetValue){
  //   let selectedCell;
  //   if (checkTheOptionDiagonal(targetValue)) {
  //     selectedCell = checkTheOptionDiagonal(targetValue);
  //   } else if (checkTheOptionRow(targetValue)) {
  //     selectedCell = checkTheOptionRow(targetValue);
  //   } else if (checkTheOptionColumn(targetValue)) {
  //     selectedCell = checkTheOptionColumn(targetValue);
  //   }
  //   return selectedCell;
  // }
  //
  // function checkTheOptionRow(targetValue){
  //   let selectedCell;
  //   let list = ['a' , 'b', 'c'];
  //   for (let i = 0; i < 3; i++){
  //     if (checkOption(list[i] + 1, list[i] + 2, list[i] + 3, targetValue)) {
  //       selectedCell = (checkOption(list[i] + 1, list[i] + 2, list[i] + 3, targetValue));
  //     }
  //   }
  //   return selectedCell;
  // }
  //
  // function checkTheOptionColumn(targetValue){
  //   let selectedCell;
  //   let list = ['a' , 'b', 'c'];
  //   for (let i = 1; i < 4; i++){
  //     if (checkOption(list[0] + i, list[1] + i, list[2] + i, targetValue)) {
  //       selectedCell = (checkOption(list[0] + i, list[1] + i, list[2] + i, targetValue));
  //     }
  //   }
  //   return selectedCell;
  // }
  //
  // function checkTheOptionDiagonal(targetValue){
  //   let selectedCell;
  //   if (checkOption('a1', 'b2', 'c3', targetValue)) {
  //     selectedCell = checkOption('a1', 'b2', 'c3', targetValue);
  //   } else if (checkOption('a3', 'b2', 'c1', targetValue)) {
  //     selectedCell = checkOption('a3', 'b2', 'c1', targetValue);
  //   }
  //   return selectedCell;
  // }
  //
  // function checkOption(cell1, cell2, cell3, mode){
  //   let selectedCell;
  //   if (board[cell1]+board[cell2]+board[cell3] === mode) {
  //     let emptyCells = checkTheCells(EMPTY);
  //     if (emptyCells.includes(cell1)){
  //       selectedCell = cell1;
  //     } else if (emptyCells.includes(cell2)){
  //       selectedCell = cell2;
  //     }
  //     else if (emptyCells.includes(cell3)){
  //       selectedCell = cell3;
  //     }
  //   }
  //   return selectedCell;
  // }
  //
  // function checkTheCells(filter) {
  //   let cellList = Object.keys(board);
  //   let filteredCells =[];
  //   cellList.forEach(function (e) {
  //     if (board[e] === filter )
  //     filteredCells.push(e)
  //   });
  //   return filteredCells;
  // }
  //
  // function findThebestCell(){
  //   let selectedCell;
  //   let emptyCells = checkTheCells(EMPTY);
  //   let corner =['a1','a3','c1','c3'];
  //   let center = 'b2';
  //   if (emptyCells.includes(center)){
  //     selectedCell = center;
  //   } else if (emptyCells.includes(corner)) {
  //     for (let i = 0; i < 4; i++){
  //       if (emptyCells.includes(corner[i])){
  //         selectedCell = corner[i];
  //       }
  //     }
  //   }else{
  //     selectedCell = getRandomCell();
  //   }
  //   return selectedCell;
  // }

  return {
    run,
  };
}());
