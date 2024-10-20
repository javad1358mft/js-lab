


const myList =[122,11,11,0,111,41];
let small=myList[0];


for (let i = 0; i < myList.length; i++) {
    if (myList[i]<=small){
        small=myList[i];
    }
    console.log('smallest Number =' + small)
    
}