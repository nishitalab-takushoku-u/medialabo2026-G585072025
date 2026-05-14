function greeting(){
    let i = document.querySelector('input[name="shimei"]');
    let shimei = i.value;
    let p = document.querySelector('p#message');
    let aisatsu = 'こんにちは, '+shimei+'さん';
    p.textContent = aisatsu;
}

let b = document.querySelector('button#print');

b.addEventListener('click',greeting);

