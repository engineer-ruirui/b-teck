function displayTodos() {
  // 子ノードをクリア
  parent.textContent = ''
  const fragment = document.createDocumentFragment();

  // オブジェクトを配列に追加
  addTodo()

  // 配列の要素分子ノードを追加
  for (var i = 0; i < todos.length; i++) {
    const tr = document.createElement("tr");

    // 連番を作成
    const td_index = document.createElement("td");
    const val_index = document.createTextNode(i);
    td_index.appendChild(val_index);
    tr.appendChild(td_index);

    // コメントを作成
    const td_task = document.createElement("td");
    const val_task = document.createTextNode(todos[i].task);
    td_task.appendChild(val_task);
    tr.appendChild(td_task);

    // 状態ボタンを作成
    const td_status = document.createElement("td");
    const td_status_input = document.createElement("input");
    td_status_input.setAttribute("type","button");
		td_status_input.setAttribute("value",todos[i].status);
    td_status.appendChild(td_status_input);
    tr.appendChild(td_status);

    // 削除ボタンを作成
    const td_delete = document.createElement("td");
    const td_delete_input = document.createElement("input");
    td_delete_input.setAttribute("type","button");
		td_delete_input.setAttribute("value","削除");
    td_delete.appendChild(td_delete_input);
    tr.appendChild(td_delete);

    fragment.appendChild(tr);  
  };
  parent.appendChild(fragment);
};

function addTodo() {
  const task = document.getElementById("task").value;
  var todo = {
    task: task,
    status: '作業中'
  };
  todos.push(todo);
};

var todos = [];
const parent = document.getElementById("parent");
var btn = document.getElementById('btn');
btn.addEventListener('click', displayTodos, false);