function greeting(){
    let i = document.querySelector('input[name="shimei"]');
    let shimei = i.value;
    let p = document.querySelector('p#message');
    p.textContent = 'こんにちは, '+shimei+'さん';
}

let b = document.querySelector('button#print');

b.addEventListener('click',greeting);

