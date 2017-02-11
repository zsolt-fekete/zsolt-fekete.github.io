'use strict'

const data = (function(){

  function getEmptyBoard() {
    const BASEBOARD = {
      a1: EMPTY , a2: EMPTY , a3: EMPTY,
      b1: EMPTY , b2: EMPTY , b3: EMPTY,
      c1: EMPTY , c2: EMPTY , c3: EMPTY,
    };
    return BASEBOARD;
  }

  function checkLocalStorage() {
    if (localStorage.board) {
      board = JSON.parse(localStorage.getItem('board'));
      playerNext = JSON.parse(localStorage.getItem('playerNext'));
      level = JSON.parse(localStorage.getItem('level'));
    }
    else {
      saveChangestoLocalStorage();
    }
  }

  function saveChangestoLocalStorage() {
    localStorage.setItem('board', JSON.stringify(board));
    localStorage.setItem('playerNext', JSON.stringify(playerNext));
    localStorage.setItem('level', JSON.stringify(level));
  }

  return {
    getEmptyBoard,
    checkLocalStorage,
    saveChangestoLocalStorage,
  };
}());
