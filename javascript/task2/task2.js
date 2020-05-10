// ゼロ以上の整数が対象の正規表現
const usernamePattern = /^([1-9]\d*|0)$/;

function fizzBuzz() {
  const fizzNum = document.getElementById("fizzNum").value;
  const buzzNum = document.getElementById("buzzNum").value;
  const parent = document.getElementById("parent");
  const fragment = document.createDocumentFragment();
  
  // 子ノードを初期化（方法１）
  parent.textContent = ''

  // 子ノードを初期化（方法２）
  // 備忘のため記載
  // while (parent.firstChild) {
  //   parent.removeChild(parent.firstChild);
  // }

  // バリデーションチェック
  if (!(usernamePattern.test(fizzNum)) || !(usernamePattern.test(buzzNum))) {
    let child = document.createElement("p");
    child.innerText = "数字を入力してください";
    parent.appendChild(child);
    return;
  }

  // fizzbuzz問題を実行し、子ノードを追加
  for(let i = 1; i < 100; i++) {
    let child = document.createElement("p");
    if (i%fizzNum == 0 && i % buzzNum == 0) {
      child.innerText = "FizzBuzz " + i;
    } else if (i % fizzNum == 0) {
      child.innerText = "Fizz " + i;
    } else if (i % buzzNum == 0) {
      child.innerText = "Buzz " + i;
    } else {
      // 空の子ノード追加を回避
      continue;
    }
    fragment.appendChild(child);
  }
  parent.appendChild(fragment);
};