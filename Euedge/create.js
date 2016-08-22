const create = (function(){

  function createRow(row) {
    let newRow = document.createElement('tr');
    newRow.setAttribute('id',row.id);

    newRow.innerHTML =`
      <td class="name"><p>${row.name}</p><p class="job">${row.job}</p></td>
      <td class="age">${row.age}</td>
      <td class="nickname">${row.nick}</td>
      <td class="employeeIcon"><button class="completeButton"></button></td>
      <td class="delete"><button class="deleteButton"></button></td>`;
    table.appendChild(newRow);
  }

  function createCheckStatus(status){
    let completeButtonList = document.querySelectorAll('.completeButton');
    let completeButton = completeButtonList[completeButtonList.length - 1]
    if (status === true) {
      completeButton.classList.add('checked');
    }
    else {
      completeButton.classList.add('unchecked');
    }
  }

  function createDeleteButton(id){
    let deleteButtonList = document.querySelectorAll('.deleteButton');
    let deleteButton = deleteButtonList[deleteButtonList.length- 1]
    deleteButton.setAttribute('id',id);
    deleteButton.addEventListener('click', function(event){controller.deleteRow(event)});
  }

  function createRowFromInputdata(inputData) {
    let row ={};
    row.name = inputData[0].value;
    row.job = inputData[1].value;
    row.age = inputData[2].value;
    row.nick = inputData[3].value;
    row.employee = inputData[4].checked;
    row.id = database.id;
    display.addRow(row);
  }

  return {
    createRow,
    createCheckStatus,
    createDeleteButton,
    createRowFromInputdata,
  };
}());
