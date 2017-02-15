const game = (function() {
  'use strict';

  let isTheFieldOccupied = (field) => {
    return data.gameStatus.fields.includes(field);
  }

  let isFinished = () => {
    if (isAnyOneWon()) {
      setWinner()
    }
    else if (isTheGameTie()) {
      diplay.showTieMessage();
    }
    else {
      data.gameStatus.status = 1;
    }
  }

  let addField = (id) => {
    let field = {id: id, owner: data.gameStatus.turn}
    data.gameStatus.fields.push(field);
    data.saveState();
    display.fillTheCell(field);
  }

  let setWinner = () => {
    let winner = data.gameStatus.turn;
    data.gameStatus.status = data.status[winner].stid;
    diplay.showWinningMessage(data.status[winner].name);
  }

  let isAnyOneWon = () => {
    if (checkDiagonals() || checkRows() || checkColumns()) {
      return true;
    };
  }

  let checkDiagonals = () => {
    let topDiagonal = [11 , 22, 33];
    let bottomDiagonal = [13 , 22, 31];
    return (checkOptions(topDiagonal) || checkOptions(bottomDiagonal))
  };

  let checkRows = () => {
    let ftRow = [11 , 12, 13];
    let sdRow = [21 , 22, 23];
    let tdRow = [31 , 32, 33];
    return (checkOptions(ftRow) || checkOptions(sdRow) || checkOptions(tdRow));
  };

  let checkColumns = () => {
    let ftColumn = [11 , 21, 31];
    let sdColumn = [12 , 22, 32];
    let tdColumn = [13 , 23, 33];
    return (checkOptions(ftColumn) || checkOptions(sdColumn) || checkOptions(tdColumn));
  };

  let isTheGameTie = () => {
    return data.gameStatus.fields.length === 9;
  }

  let checkOptions = (otherList) => {
    let fieldsList = data.getFieldsList();
    return fieldsList.every((field) => otherList.includes(field));
  }

  return {
    addField,
    isFinished,
    isTheFieldOccupied,
  };

}());
