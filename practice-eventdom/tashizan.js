function calculate() {
    let a = document.querySelector('input[name="right"]');
    let num1 = Number(a.value);
    let b = document.querySelector('input[name="left"]');
    let num2 = Number(b.value);
    let result = num1 + num2;
    let p = document.querySelector('#answer');
    p.textContent = result;
}

let i = document.querySelector('button#calc');

i.addEventListener('click', calculate);