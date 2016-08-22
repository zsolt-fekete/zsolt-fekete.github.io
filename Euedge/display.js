'use strict';

const display = (function(){

  function displayList(data) {
    data.forEach(function (e) {addRow(e)});
  }

  function addRow(row) {
    create.createRow(row);
    create.createCheckStatus(row.employee);
    create.createDeleteButton(row.id);
  }

  function displayErrorMessage() {
    let error = document.querySelector('.error');
    error.textContent = 'Please fill every input field!';
  }

  function erraseErrorMessage() {
    let error = document.querySelector('.error');
    error.textContent = '';
  }

  function erraseTextvalue(inputData) {
    inputData[0].value = "";
    inputData[1].value = "";
    inputData[2].value = "";
    inputData[3].value = "";
    inputData[4].checked = false;
  }

  function switchAddPanel() {
    let addScreen = document.querySelector('.add-screen');
    let fullScreen = document.querySelector('body');
    addScreen.classList.toggle('display');
    fullScreen.classList.toggle('display-gray');
  }

  function displayDataDump(method,data) {
    let row = ''
    if (method === 'add'){
      row ='New row has been added:' + JSON.stringify({name:data[0].value, job:data[1].value, age:data[2].value, nick:data[3].value, employee:data[4].checked});
    } else {
      row ='This row has been deleted:' + JSON.stringify(data);
    }
    let textarea = document.querySelector('textarea');
    textarea.textContent = row;
  }

  return {
    displayList,
    displayErrorMessage,
    displayDataDump,
    erraseTextvalue,
    erraseErrorMessage,
    switchAddPanel,
    addRow,
  };
}());
