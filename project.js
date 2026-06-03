function searchWord(){
    let i = document.querySelector('input#name');
    let keyword = i.value;

    console.log(keyword);
}

let b = document.querySelector('button#print');

b.addEventListener('click', searchWord);
