function addTodo() {
  const parent = document.getElementById("parent");
  const task = document.getElementById("task");
  const row = todoList.rows.length;
  
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  const td4 = document.createElement("td");
  const html3 = `<input type="button" value="作業中">`;
  const html4 = `<input type="button" value="削除">`;
  td1.innerText = row;
  td2.innerText = task.value;
  td3.innerHTML += html3;
  td4.innerHTML += html4;
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  parent.appendChild(tr);
};
