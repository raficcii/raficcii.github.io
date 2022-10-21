const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgNames = ['pic6.jpg', 
'pic7.jpg', 
'pic8.jpg', 
'pic9.jpg', 
'pic10.jpg',];
/* Declaring the alternative text for each image file */
const altText = {
    'pic6.jpg': 'Peter Griffin',
    'pic7.jpg': 'Stan Smith',
    'pic8.jpg': 'Roger Smith',
    'pic9.jpg': 'Stewie Griffin',
    'pic10.jpg': 'Glenn Quagmire'
}
/* Looping through images */
function imageThumbBar(){
    for(let i=0; i<imgNames.length; i++){
        const newImage = document.createElement('img');
        newImage.setAttribute('src', `../img/assignment9_img/${imgNames[i]}`);
        newImage.setAttribute('alt', altText[`${imgNames[i]}`]);        
        thumbBar.appendChild(newImage);
        newImage.addEventListener('click', (e) => {
            displayedImage.src = e.target.src;
            displayedImage.alt = e.target.alt;
        })
    }
}

imageThumbBar()
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
    }
    else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
})