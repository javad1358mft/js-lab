let count = 0;

function serverStatus() {

    count++

 
        const paragraph = document.querySelector('p');
        paragraph.style.color = 'red';
        const button = document.querySelector('button');
        button.innerHTML = ('stop');

       

    
   


    if (count == 1) {

  
        // const paragraph = document.querySelector('p');
        paragraph.style.color = 'black';
        // const button = document.querySelector('button');
        button.innerHTML = ('start');

    }
  
}