const demi = {
    desing: 'musen',
    color: 'black',
    position: 'Light salon',
    clickMe: function() {
        document.querySelector('.demi').addEventListener('click', () => {
            var str = 'This is musen desing interior shop ' + this.desing + ' and it is a ' + this.position + ' with the color of ' + this.color;
            alert(str);
        });
    }
}
demi.clickMe();

const h = document.querySelector('h1');
const headerImage = document.querySelectorAll('.header');
const all = [h,...headerImage];

Array.from(all).forEach(cur => cur.style.color = 'red');

function sectionTips(tipsPhoto) {
    let decorations;
    const figure = 'true';
    
    if (tipsPhoto) {
        decorations = 'Neocon';
        }
       console.log(decorations + ' 2019 social 2019 highlights  sunday kicks off are ' + figure);
}

sectionTips(true);

let kick = 23;
for (let kick = 0; kick < 5; kick++) {
    console.log(kick);
}
console.log(kick);

function seductionLight(pure) {
   let more;
    const learn = 'downloadLight';
    
    if(pure) {
      more = 'powerful'
       }
       console.log(`The most ${more} Architectural ${learn} is a very powerful design.`);
}
seductionLight(true);

{
 const hires = 1;
 let top = 2;
  var promotions = 3;
}

//console.log(hires + top);
console.log(promotions);

function bckPainted(glass) {
   let sleek;
   const inspiring = 'Spaces';
    
    if(glass) {
       sleek = 'Bck-Painted'
       }
       console.log(`${sleek} glass is the Sleek Solutions for inspiring ${inspiring}`);
}

bckPainted(true);

let v = 40;

for (let v = 0; v < 7; v++) {
    console.log(v);
}
console.log(v);

const canada = [400, 500, 390, 670];

let offices = canada.map(el => 40 - el);
console.log(offices);

function tailors(minded){
  let brand; 
  const british = 'Headquarter';
    
    if(minded) {
       brand = 'Morey Smith';
       }
       console.log(`${brand} tailors a sartorially minded mens wears on dull hill at the british ${british}.`);
}
tailors(true);

const customersDesigns = [900, 1000, 4000, 6000];

let interiorProduction = customersDesigns.map(el => 8000 - el);
console.log(interiorProduction);

interiorProduction = customersDesigns.map((el, index) => `Interior Element ${index + 1}: ${8000 - el}.`);
console.log(interiorProduction);

function Person(directors){
    this.directors = directors;
}
const shareholders = ['max', 'brazilian', 'modernism'];

Person.prototype.myShareholders = function(shareholders) {
      var arr = shareholders.map(el => `${this.directors} are the board of directors for every dsign shops with ${el}`);
    
    console.log(arr);
}
new Person('Canadians').myShareholders(shareholders);

function noddles(wins) {
    let award;
    const IIDA = 2019;
    
    if(wins){
       award = 'OpenUU'
       }
    console.log(`${award} mean noodeles wins the IIDA ${IIDA} award.`);
}

noddles(true);

let a = 500;

for (let a = 0; a < 10; a++){
    console.log(a);
}
console.log(a);

const ministry = 'defense';
let brand = 'Interior Designs';
switch(ministry) {
    case 'defense':
     console.log(brand + ' creates user experiences at durasport.');
     break;
    case 'blurs':
      console.log(brand + 'perkins works leisure for madison.');
     break;
    case 'question':
     console.log(brand + 'with IDA award winner Liz Ogbu');
     break;
    default:
      console.log(brand + ' is an awesome interior design company.');
}

const elements = {
    blur: 'Exhibition',
    botanical: 'Garden',
    myShareholders: 'Brazilian',
    presentation: function(style) {
        if (style === 'compliment') {
            console.log(`${this.blur} of Roberto Burle Marz was helid at the NY ${this.botanical} with lots of ${this.myShareholders} interior design shareholders`);
        } else if(style === 'friendly') {
            console.log(`${this.debuts} at NeoCon 2019 social highlights sunday kicks off with maximum ${this.offering}`);
        }
    }
};

const matherialBank = {
    offering: 'Speed',
    debuts: 'Decorations',
}

elements.presentation('compliment');
elements.presentation.call(matherialBank, 'friendly');
