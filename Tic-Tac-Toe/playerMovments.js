const player = (function(){
  'use strict';

  function click(event){
    if (!game.isTheFieldOccupied(event.target.id)) {
      game.addField(event.target.id);
      game.isFinished();
      if (data.gameStatus.status === 1) {
        data.gameStatus.turn = data.players.computer.name;
        computer.run();
      }
    }
  }

  return {
    click,
  };

}());
