'use strict';

const controller = (function() {

  function deleteRow(row) {
    let deletableRow =document.getElementById(row.target.id);
    let element = database.getData()[row.target.id-1];
    display.displayDataDump('delete' ,element);
    table.removeChild(deletableRow);
  };

  function addRow() {
    let inputData = document.querySelectorAll('.inputData');
    if (inputTextValidation(inputData)){
      create.createRowFromInputdata(inputData);
      display.displayDataDump('add' ,inputData);
      display.switchAddPanel();
      display.erraseTextvalue(inputData);
      display.erraseErrorMessage();
    } else {
      display.displayErrorMessage();
    }
  }

  function cancelAdd() {
    let inputData = document.querySelectorAll('.inputData');
    display.erraseTextvalue(inputData);
    display.erraseErrorMessage();
    display.switchAddPanel();
  }

  

  function inputTextValidation(inputData) {
    return (inputData[0].value !== "" && inputData[1].value !== "" && inputData[2].value !== "" && inputData[3].value !== "");
  }

  return {
    deleteRow,
    addRow,
    cancelAdd,
  };
}());


var table = document.querySelector('table');
var addButton = document.querySelector('.Add');
var okButton = document.querySelector('.okButton');
var cancelButton = document.querySelector('.cancelButton');
addButton.addEventListener('click', display.switchAddPanel);
okButton.addEventListener('click', controller.addRow);
cancelButton.addEventListener('click', controller.cancelAdd);
display.displayList(database.getData())
