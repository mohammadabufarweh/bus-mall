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
const viewResult = document.getElementById('click');
const parentElement = document.getElementById('submitt');
const leftImage = document.getElementById('leftImage');
const rightImage = document.getElementById('rightImage');
const midleImage = document.getElementById('midleImage');
let clickCounter = 0
let leftClick = 0;
let rightClick = 0;
let midleClick = 0;
let m = 0;
let n = 0;
let z = 0;
let b = 0

function Bus(name) {
  this.name = name.split('.')[0];

  this.img = `./img/${name}`;
  this.shown = 0;
  this.clicks = 0;
  Bus.all.push(this);
}

Bus.all = [];

for (let i = 0; i < imgArray.length; i++) {
  new Bus(imgArray[i]);
}

function eventHandler(e) {
  e.preventDefault
  if ((e.target.id == 'leftImage' || e.target.id == 'rightImage' || e.target.id == 'midleImage') && clickCounter < 25) {

    if (e.target.id == 'leftImage') {
      Bus.all[leftClick].clicks++;

    }
    if (e.target.id == 'rightImage') {
      Bus.all[rightClick].clicks++;

    }
    if (e.target.id == 'midleImage') {
      Bus.all[midleClick].clicks++;

    }
    clickCounter++;
    renderContent();
  }
  // else {
  //   console.log(Bus.all);


  // }
  
}

function renderContent() {

  let leftPart = theRandomNumber(0, imgArray.length - 1);
  let midlePart;
  let rightPart;

  do {
    midlePart = theRandomNumber(0, imgArray.length - 1);
    rightPart = theRandomNumber(0, imgArray.length - 1);
  } while (midlePart === rightPart || midlePart === leftPart || leftPart === rightPart)
  leftClick = leftPart;
  rightClick = rightPart;
  midleClick = midlePart;
  Bus.all[midlePart].shown++;
  Bus.all[rightPart].shown++;
  Bus.all[leftPart].shown++;
   if (m !== leftPart && m !== rightPart && m !== midlePart && n !== leftPart && n !== rightPart && n !== midlePart && z !== leftPart && z !== rightPart && z !== midlePart) {
    m = leftPart;
    n = rightPart;
    z = midlePart;
    leftImage.src = Bus.all[leftPart].img;
    rightImage.src = Bus.all[rightPart].img;
    midleImage.src = Bus.all[midlePart].img;
    b++;}
    else {
      leftPart = theRandomNumber(0, imgArray.length - 1);
      midlePart;
      rightPart;

      do {
        midlePart = theRandomNumber(0, imgArray.length - 1);
        rightPart = theRandomNumber(0, imgArray.length - 1);
      } while (midlePart === rightPart || midlePart === leftPart || leftPart === rightPart)
    }
  }



function eventButton(event) {
  event.preventDefault();
  let ulElement = document.createElement('ul');
  parentElement.appendChild(ulElement);
  for (let i = 0; i < Bus.all.length; i++) {
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement)
    liElement.textContent = `${Bus.all[i].name} had a ${Bus.all[i].clicks}  votes,and was seen  ${Bus.all[i].shown}`;
    viewResult.removeEventListener('click', eventButton);
  }
  renderChart();
  getData();
  saveData();
 // renderContent();
}


function theRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function renderChart() {

  let clickss = [];
  let names = [];
  let shownn = [];
  for (let i = 0; i < Bus.all.length; i++) {
    clickss.push(Bus.all[i].clicks);
    names.push(Bus.all[i].name);
    shownn.push(Bus.all[i].shown);

  }

  let ctx = document.getElementById('myChart').getContext('2d');
  let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: names,
      datasets: [{
        label: '# of Votes',
        data: clickss,
        backgroundColor:
          'rgba(255, 99, 132, 0.2)',
        borderColor:
          'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      }, {
        label: '# of shown',
        data: shownn,
        backgroundColor:
          'rgba(144, 99, 100, 0.2)',
        borderColor:
          'rgba(144, 99, 100, 1)',
        borderWidth: 1,
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function saveData() {
  localStorage.setItem( 'Bus', JSON.stringify( Bus.all ) );

}


function getData() {
 JSON.parse( localStorage.getItem( 'Bus' ) );
 
}
 
renderContent();
imageSection.addEventListener('click', eventHandler);
viewResult.addEventListener('click', eventButton);