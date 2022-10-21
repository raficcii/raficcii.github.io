const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgNames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
/* Declaring the alternative text for each image file */
const altText = {
    'pic1.jpg': 'Closeup of a human eye',
    'pic2.jpg': 'Marble stone',
    'pic3.jpg': 'Brunfelsia flower',
    'pic4.jpg': 'An egyptian wall painting',
    'pic5.jpg': 'A butterfly on a leaf'
}
/* Looping through images */
function imageThumbBar(){
    for(let i=0; i<imagesNames.length; i++){
        const newImage = document.createElement('img');
        newImage.setAttribute('src', `../img/assignment9_img/${imgNames[i]}`);
    }
}
imageThumbBar();
/*const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);*/

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    if (btn.getAttribute('class') === 'dark') {
        btn.setAttribute('class', 'light');    
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
})