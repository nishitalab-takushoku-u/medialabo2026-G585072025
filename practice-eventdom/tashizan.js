function calculate(){
 let a = document.querySelector('input[name="right"]');
 let num1 = Number(a);
 let b = ducument.querySelector('input[name="left"]');
 let num2 = Number(b);

 let result = num1+num2;
 let p = ducument.querySelector('p#answer');
 p.textContent = result;
}

let i = document.querySelector('button#Calc');

i.addEventListener('click',Calculate);