// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);
let ans = Number(kotae);

// 入力回数（予想回数）
let kaisu = 1;

// そのほか，必要に応じて変数を宣言してもよい
let freq = document.querySelector('#kaisu');
freq.textContent=kaisu;
let a = document.querySelector('p#result');

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  freq.textContent =kaisu;
  kaisu = kaisu + 1;
  
  // ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  
  // ここから: テキストボックスに指定された数値を yoso に代入する
  let yoso = document.querySelector('input[name="predict"]');
  let num = Number(yoso.value);
  // ここまで: テキストボックスに指定された数値を yoso に代入する
  
  // ここから: 正解判定する
  if(kaisu<=3){
    // 　　　　  正解/不正解のときのメッセージを表示する
    if(ans===num){
      a.textContent = '正解です。 おめでとうございます！';
    }else if(ans<num){
      a.textContent = '違います。 答えはもっと小さいです。';
    }else{
      a.textContent = '違います。 答えはもっと大きいです。';
    }
  }else{
    a.textContent = 'ゲームはもう終了しました。答えは'+ans+'でした。';
  }
  // ここまで: 正解判定する


}

// ここから: ボタンを押した時のイベントハンドラとして hantei を登録
let i = document.querySelector('button#submit');

i.addEventListener('click',hantei);

// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録
