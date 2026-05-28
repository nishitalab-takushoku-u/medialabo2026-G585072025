//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!

function printDom(data){
	let r = document.createElement("div");
	r.id = "result";
	document.body.insertAdjacentElement("beforeend", r);
	let p = document.createElement("p");
	p.textContent = data.address;
	r.insertAdjacentElement("beforeend", p);
	let ul1 = document.createElement("ul");
	for(let d of data.buildingD){
		let li = document.createElement("li");
		li.textContent = d;
		ul1.insertAdjacentElement("beforeend", li);
	}
	r.insertAdjacentElement("beforeend", ul1);
	let ul2 = document.createElement("ul");
	for(let g of data.gakka){
		let li = document.createElement("li");
		li.textContent = g.name;
		ul2.insertAdjacentElement("beforeend", li);
	}
	r.insertAdjacentElement("beforeend", ul2);
}