'use strict';

const game = (function() {

  function checkNextPlayer() {
    let next = '';
    if (playerNext % 2 === 0){
      next = COMPUTER;
    } else {
      next = PLAYER;
    }
    return next;
  }

  function isTheCellFree(event){
    return event.target.dataset.owner == EMPTY ;
  }

  function isAnyOneWon() {
    return (checkDiagonals() || checkRows() || checkColumns());
  }

  function isTheGameTie() {
    return playerNext === ENDGAME;
  }

  function checkDiagonals() {
    let result = false;
    if (board.a1 !== EMPTY && board.a1 === board.b2  && board.a1 === board.c3) {
      result = true;
    } else if (board.a3 !== EMPTY && board.a3 === board.b2  && board.a3 === board.c1) {
      result = true;
    }
    return result;
  };

  function checkRows() {
    let result = false;
    if (board.a1 !== EMPTY && board.a1 === board.a2  && board.a1 === board.a3) {
      result = true;
    } else if (board.b1 !== EMPTY && board.b1 === board.b2  && board.b1 === board.b3) {
      result = true;
    } else if (board.c1 !== EMPTY && board.c1 === board.c2  && board.c1 === board.c3) {
      result = true;
    }
    return result;
  };

  function checkColumns() {
    let result = false;
    if (board.a1 !== EMPTY && board.a1 === board.b1  && board.a1 === board.c1) {
      result = true;
    } else if (board.a2 !== EMPTY && board.a2 === board.b2  && board.a2 === board.c2) {
      result = true;
    } else if (board.a3 !== EMPTY && board.a3 === board.b3  && board.a3 === board.c3) {
      result = true;
    }
    return result;
  };

  return {
    isAnyOneWon,
    checkNextPlayer,
    isTheGameTie,
    isTheCellFree,
  };

}());
