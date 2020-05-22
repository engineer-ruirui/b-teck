function addTodo() {
  // タスクの追加
  const taskVal = document.getElementById("task").value;
  const todo = {
    task: taskVal,
    status: "作業中"
  };
  todos.push(todo);
  // 画面表示
  displayTodos(todo);
};

function deleteTodo(index) {
  // 指定の要素を削除
  todos.splice(index,1);
  // 画面表示
  displayTodos();
};

function displayTodos() {
  // 子ノードをクリア
  parent.textContent = ''
  const fragment = document.createDocumentFragment();
  // 配列の要素分子ノードを追加
  todos.forEach((todo, i)=>{
    const tr = document.createElement("tr");
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
    const statusButton = createStatusButton(i);
    tr.appendChild(statusButton);
    // 削除ボタンを作成
    const deleteButton = createDeleteButton(i);
    tr.appendChild(deleteButton);
    fragment.appendChild(tr);  
  })
  parent.appendChild(fragment);
  // 入力フォームをクリア
  document.getElementById("task").value = "";
};

function createStatusButton(index) {
  const tdStatus = document.createElement("td");
  const tdStatusInput = document.createElement("input");
  tdStatusInput.setAttribute("type","button");
  tdStatusInput.setAttribute("value",todos[index].status);
  tdStatus.appendChild(tdStatusInput);
  return tdStatus;
};

function createDeleteButton(index) {
  const tdDelete = document.createElement("td");
  const tdDeleteInput = document.createElement("input");
  tdDeleteInput.setAttribute("type","button");
  tdDeleteInput.setAttribute("value","削除");
  tdDeleteInput.setAttribute("class","deleteBtn");
  tdDelete.appendChild(tdDeleteInput);
  // クリックイベントを設定
  tdDeleteInput.addEventListener("click", () => {
    deleteTodo(index);
  });
  return tdDelete;
}

const todos = [];
const parent = document.getElementById("parent");
const btn = document.getElementById("btn");
btn.addEventListener("click", addTodo, false);