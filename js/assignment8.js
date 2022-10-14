/*1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS*/

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
const storyText = "It was 94 fahrenheit outside, so :insertx: decided to go get a gym pump. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and they were in the sauna.";
const insertX = ["Domata Peko", "Biggie Smalls", "Champagne Papi"];
const insertY = ["Planet Fitness", "Gold's Gym", "the Rec Center"];
const insertZ = ["brutally collapsed", "violently disintegrated on the sidewalk", "turned into sissies"];

randomize.addEventListener('click', result);

function result() {
    var newStory = storyText;

    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);
    
    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replaceAll(':inserty:', yItem);
    newStory = newStory.replaceAll(':insertz:', zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300/14)} stone`
    const temperature =  `${Math.round((94-32)*5/9)} centigrade`;
    newStory = newStory.replaceAll("94 fahrenheit", temperature);
    newStory = newStory.replaceAll("300 pounds", weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}