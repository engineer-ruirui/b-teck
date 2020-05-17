function displayTodos() {
  // オブジェクトを配列に追加
  addTodo();
  // ノードを初期化
  initializeNode();
  // 入力フォームをクリア
  document.getElementById("task").value = "";
};

function initializeNode() {
  // 子ノードをクリア
  parent.textContent = ''
  const fragment = document.createDocumentFragment();

  // 配列の要素分子ノードを追加
  for (let i = 0; i < todos.length; i++) {
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
    tr.appendChild(createStatusButton(i));
    // 削除ボタンを作成
    tr.appendChild(createDeleteButton());
    fragment.appendChild(tr);  
  };
  parent.appendChild(fragment);
  // 削除イベントを登録
  registerDeleteEvent();
};

function addTodo() {
  const taskVal = document.getElementById("task").value;
  const todo = {
    task: taskVal,
    status: "作業中"
  };
  todos.push(todo);
};

function deleteTodo() {
  // 指定の要素を削除
  todos.splice(deleteIndex,1);
  // ノードを初期化
  initializeNode();
};

function registerDeleteEvent() {
  const elms = document.querySelectorAll(".deleteBtn");
  // クリックイベントをトリガーにインデックスを取得
  elms.forEach((elm) => {
    elm.addEventListener("click", () => {
      // 対象要素のインデックスを取得
      deleteIndex = [].slice.call(elms).indexOf(elm);
      deleteTodo();
    });
  });
};

function createStatusButton(index) {
  const tdStatus = document.createElement("td");
  const tdStatusInput = document.createElement("input");
  tdStatusInput.setAttribute("type","button");
  tdStatusInput.setAttribute("value",todos[index].status);
  tdStatus.appendChild(tdStatusInput);
  return tdStatus;
};

function createDeleteButton() {
  const tdDelete = document.createElement("td");
  const tdDeleteInput = document.createElement("input");
  tdDeleteInput.setAttribute("type","button");
  tdDeleteInput.setAttribute("value","削除");
  tdDeleteInput.setAttribute("class","deleteBtn");
  tdDelete.appendChild(tdDeleteInput);
  return tdDelete;
}

const todos = [];
const parent = document.getElementById("parent");
const btn = document.getElementById("btn");
btn.addEventListener("click", displayTodos, false);
// クリックした要素のインデックスを格納する変数
let deleteIndex;