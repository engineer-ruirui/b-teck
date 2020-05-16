function displayTodos() {
  // オブジェクトを配列に追加
  addTodo();
  // ノードを作成
  createNode();
};

function redisplayTodos() {
  // オブジェクトを配列に追加
  deleteTodo();
  // ノードを作成
  createNode();
};

function createNode() {
  // 子ノードをクリア
  parent.textContent = ''
  const fragment = document.createDocumentFragment();

  // 配列の要素分子ノードを追加
  for (let i = 0; i < todos.length; i++) {
    const tr = document.createElement("tr");
		tr.setAttribute("id", i);

    // 連番を作成
    const tdIndex = document.createElement("td");
    const valIndex = document.createTextNode(i);
    tdIndex.appendChild(valIndex);
    tr.appendChild(tdIndex);

    // コメントを作成
    const tdTask = document.createElement("td");
    const valTask = document.createTextNode(todos[i].task);
    tdTask.appendChild(valTask);
    tr.appendChild(tdTask);

    // 状態ボタンを作成
    const tdStatus = document.createElement("td");
    const tdStatusInput = document.createElement("input");
    tdStatusInput.setAttribute("type","button");
		tdStatusInput.setAttribute("value",todos[i].status);
    tdStatus.appendChild(tdStatusInput);
    tr.appendChild(tdStatus);

    // 削除ボタンを作成
    const tdDelete = document.createElement("td");
    const tdDeleteInput = document.createElement("input");
    tdDeleteInput.setAttribute("type","button");
		tdDeleteInput.setAttribute("value","削除");
		tdDeleteInput.setAttribute("onClick","redisplayTodos()");
    tdDelete.appendChild(tdDeleteInput);
    tr.appendChild(tdDelete);

    fragment.appendChild(tr);  
  };
  parent.appendChild(fragment);
};

function addTodo() {
  const taskVal = document.getElementById("task").value;
  const todo = {
    task: taskVal,
    status: '作業中'
  };
  todos.push(todo);
};

function deleteTodo() {
  const itemId = event.target.parentNode.parentNode.id;
  todos.splice(itemId,1);
};

const todos = [];
const parent = document.getElementById("parent");
const btn = document.getElementById('btn');
btn.addEventListener('click', displayTodos, false);