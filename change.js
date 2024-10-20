



function change() {
    const img1 = document.querySelector('.image1');
    const img2 = document.querySelector('.image2');

    const img1src = img1.getAttribute('src');
    const img2src = img2.getAttribute('src');


    img1.setAttribute('src', img2src);
    img2.setAttribute('src', img1src);



}

