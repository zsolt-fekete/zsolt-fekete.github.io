const data = (function(){
  'use strict'

  let players = {
    computer: {name: 'computer', icon: 'o'},
    player: {name: 'player', icon: 'x'}
  };

  let level = {
    easy: {id: 0, name: 'Easy'},
    medium: {id: 1, name:'Medium'},
    hard: {id: 2, name: 'Hard'}
  };

  let status = {
    new: {stId: 0, name: 'New'},
    game: {stId: 1, name:'Game'},
    player: {stId: 2, name: 'Player wins'},
    computer: {stId: 2, name: 'Computer wins'},
    tie: {stId: 2, name: 'Tie'}
  };

  let gameStatus = {
    status: status.new.stId,
    level: level.easy,
    nextLevel: level.easy,
    turn: players.player.name,
    fields: [],
  };

  let board = {
    all : [11, 12, 13, 21 ,22 ,23 ,31 ,32 , 33],
  };

  let checkState = () => {
    if (localStorage.gameStatus) {
      loadState();
    }
    else {
      saveState();
    }
  }

  let loadState = () => {
    gameStatus= JSON.parse(localStorage.getItem('gameStatus'));
  }

  let saveState = () => {
    localStorage.setItem('gameStatus', JSON.stringify(gameStatus));
  }

  let filterByOwner = (field) => {
    if (field.owner === data.gameStatus.turn) {
      return true;
    }
  }

  let getFieldsList = () => {
    if (gameStatus.fields){
      return gameStatus.fields.filter(filterByOwner).map(field => {field.id})
    }
  }

  let getEmptyList = () => {
    let fieldsList = getFieldsList()
    return board.all.filter(x => fieldsList.indexOf(x) === -1);
  }

  return {
    board,
    status,
    players,
    gameStatus,
    checkState,
    saveState,
    getFieldsList,
    getEmptyList
  };
}());
