
let count=0;

function add(params) {
    count++
    if (count>5){
        const divAdd=document.getElementById('add');
        divAdd.style.backgroundColor='red';
    }

    if (count>8){
        const divAdd=document.getElementById('add');
        divAdd.style.backgroundColor='green';
    }

}