'use strict';

const player = (function(){

  function click(event){
    if (game.isTheCellFree(event) && (game.checkNextPlayer() === PLAYER)){
      board[event.target.id] = PLAYER;
      data.saveChangestoLocalStorage();
      display.displayCell(event.target.id, PLAYER);
      playerNext++;
      if (game.isAnyOneWon() || game.isTheGameTie()){
        return display.showMessage(PLAYER);
      }
      computer.run();
    }
  }

  return {
    click,
  };

}());
