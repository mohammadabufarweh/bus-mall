let imgArray = [
  'bag.jpg',
  'banana.jpg',
  'bathroom.jpg',
  'boots.jpg',
  'breakfast.jpg',
  'bubblegum.jpg',
  'chair.jpg',
  'cthulhu.jpg',
  'dog-duck.jpg',
  'pen.jpg',
  'pet-sweep.jpg',
  'scissors.jpg',
  'shark.jpg',
  'sweep.png',
  'tauntaun.jpg',
  'unicorn.jpg',
  'usb.gif',
  'water-can.jpg',
  'wine-glass.jpg'
];

const parentElement = document.getElementById('submitt');
//const imageSection = document.getElementById('imageSection');
const leftImage = document.getElementById('leftImage');
const rightImage = document.getElementById('rightImage');
const midleImage = document.getElementById('midleImage');
let clickCounter = 0
let leftClick = 0;
let rightClick = 0;
let midleClick = 0;


function Bus(name) {
  this.name = name;
  this.img = `./img/${name}`;
  this.shown = 0;
  this.clicks = 0;
  Bus.all.push(this);
}
function Ss(name) {
  this.name = name;
  this.shownn = 0;
  this.clickss = 0;
  Ss.all.push(this);
}

Ss.all=[];
Bus.all = [];

for (let i = 0; i < imgArray.length; i++) {
  new Bus(imgArray[i]);
  new Ss (imgArray[i]);
}

function eventHandler(e) {
  e.preventDefault
  if ((e.target.id == 'leftImage' || e.target.id == 'rightImage' || e.target.id == 'midleImage') && clickCounter < 25) {

    if (e.target.id == 'leftImage') {
      Bus.all[leftClick].clicks++;
      Ss.all[leftClick].clickss++;
    }
    if (e.target.id == 'rightImage') {
      Bus.all[rightClick].clicks++;
      Ss.all[rightClick].clickss++;
    }
    if (e.target.id == 'midleImage') {
      Bus.all[midleClick].clicks++;
      Ss.all[midleClick].clickss++;
    }
    clickCounter++;
    renderContent();
  }
  else {
    console.log(Bus.all);
    console.log(Ss.all);
    
  }
}

function renderContent() {
  let leftPart = theRandomNumber(0, imgArray.length - 1);
  let midlePart = theRandomNumber(0, imgArray.length - 1);
  let rightPart = theRandomNumber(0, imgArray.length - 1);
  
  leftImage.src = Bus.all[leftPart].img;
  rightImage.src = Bus.all[rightPart].img;
  midleImage.src = Bus.all[midlePart].img;
  leftClick = leftPart;
  rightClick = rightPart;
  midleClick = midlePart;
  Bus.all[midlePart].shown++;
  Bus.all[rightPart].shown++;
  Bus.all[leftPart].shown++;
  
  Ss.all[midlePart].shownn++;
  Ss.all[rightPart].shownn++;
  Ss.all[leftPart].shownn++;
  
  // console.log(Bus.all);
}

function renderContenttt() {
  let articleElement = document.createElement('article');
  parentElement.appendChild(articleElement);
  
  const h2Element = document.createElement('h2');
  h2Element.textContent = Ss.all.target;
  articleElement.appendChild(h2Element);
}


function eventButton(event) {
  event.preventDefault();
  renderContenttt();
}

function theRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
renderContenttt();

renderContent();
imageSection.addEventListener('click', eventHandler);
submitt.addEventListener('submit', eventButton)
