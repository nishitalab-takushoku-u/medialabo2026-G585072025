
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
 console.log("検索結果");
 console.log("都市名 :"+data.name);
 console.log("ID :"+data.id);
 console.log("天気 :"+data.weather[0].description);
 console.log("最高気温 :"+data.main.temp_max);
 console.log("最低気温 :"+data.main.temp_min);
 console.log("湿度 :"+data.main.humidity);
 console.log("風速 :"+data.wind.speed);
 console.log("風向 :"+data.wind.deg);
 console.log("経度 :"+data.coord.lon);
 console.log("緯度 :"+data.coord.lat);
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {

  let first = document.querySelector("#result");

  if(first){
    first.remove();
  }

    let result = document.createElement("div");
    result.id = "result";

    document.body.insertAdjacentElement("beforeend", result);

    let h2 = document.createElement("h2");
    h2.textContent = "世界の天気";
    result.insertAdjacentElement("beforeend", h2);

    let h31 = document.createElement("h3");
    h31.textContent = "都市情報";

    let img1 = document.createElement("img");
    img1.setAttribute("src","map_location.png");
    img1.style.height = "1em";
    img1.style.verticalAlign = "middle";

    h31.insertAdjacentElement("afterbegin",img1);
    result.insertAdjacentElement("beforeend",h31);

    let ul1 = document.createElement("ul");

    let li1 = document.createElement("li");
    li1.textContent = "都市名: " + data.name;
    ul1.insertAdjacentElement("beforeend", li1);

    result.insertAdjacentElement("beforeend",ul1);

    let h32 = document.createElement("h3");
    h32.textContent = "天気情報";

    let img2 = document.createElement("img");
    img2.setAttribute("src","weather_cloudy .png");
    img2.style.height = "1em";
    img2.style.verticalAlign = "middle";

    h32.insertAdjacentElement("afterbegin",img2);
    result.insertAdjacentElement("beforeend",h32);

    let ul2 = document.createElement("ul");

    let li2 = document.createElement("li");
    li2.textContent = "天気: " + data.weather[0].description;
    ul2.insertAdjacentElement("beforeend", li2);

    let li3 = document.createElement("li");
    li3.textContent = "最高気温: " + data.main.temp_max;
    ul2.insertAdjacentElement("beforeend", li3);

    let li4 = document.createElement("li");
    li4.textContent = "最低気温: " + data.main.temp_min;
    ul2.insertAdjacentElement("beforeend", li4);

    let li5 = document.createElement("li");
    li5.textContent = "湿度: " + data.main.humidity;
    ul2.insertAdjacentElement("beforeend", li5);

    result.insertAdjacentElement("beforeend",ul2);

    let h33 = document.createElement("h3");
    h33.textContent = "風情報";
    result.insertAdjacentElement("beforeend",h33);

    let ul3 = document.createElement("ul");

    let li6 = document.createElement("li");
    li6.textContent = "風速: " + data.wind.speed;
    ul3.insertAdjacentElement("beforeend", li6);

    let li7 = document.createElement("li");
    li7.textContent = "風向: " + data.wind.deg;
    ul3.insertAdjacentElement("beforeend", li7);

    result.insertAdjacentElement("beforeend",ul3);

    let h34 = document.createElement("h3");
    h34.textContent = "位置情報";
    result.insertAdjacentElement("beforeend",h34);

    let ul4 = document.createElement("ul");

    let li8 = document.createElement("li");
    li8.textContent = "経度: " + data.coord.lon;
    ul4.insertAdjacentElement("beforeend", li8);

    let li9 = document.createElement("li");
    li9.textContent = "緯度: " + data.coord.lat;
    ul4.insertAdjacentElement("beforeend",li9);

    result.insertAdjacentElement("beforeend",ul4);

}

// 課題6-1 のイベントハンドラ登録処理は以下に記述




// 課題6-1 のイベントハンドラ sendRequest() の定義
//通信を開始する処理
function sendRequest() {

  let input = document.querySelector('#name');
  let id = input.value;
  // urlを設定
  //let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/2643743.json';//ロンドン
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+id+'.json'
  //通信開始
  axios.get(url)
  .then(showResult)
  .catch(showError)
  .then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
//通信が成功した時の処理
function showResult(resp) {
  //サーバから送られてきたデータを出力
  let data = resp.data;
  // data が文字列型なら,オブジェクトに変換する
  if(typeof data === 'string'){
    data = JSON.parse(data);
  }
  //dataをコンソールに出力
  console.log(data);
  print(data);
  printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

let b = document.querySelector('#print');
b.addEventListener('click',sendRequest);

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
