console.log("Linked.");

// Dramatis Personae
const hobbits = [
  `Frodo Baggins`,
  `Samwise "Sam" Gamgee`,
  `Meriadoc "Merry" Brandybuck`,
  `Peregrin "Pippin" Took`
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  'The-Shire', 
  'Rivendell', 
  'Mordor'
];


// ============
// Chapter 1
// ============


  

  // 1. create a section tag with an id of middle-earth
 // 2. use a for loop to iterate over the lands array that does the following:
 function makeMiddleEarth () { 
   const middleEarthSection = document.createElement("section");
  middleEarthSection.id = "middle-earth";
  for (let i = 0; i < lands.length; i++) {
  const article = document.createElement('article');
  article.id = lands[i];
  const h1 = document.createElement('h1');
  h1.innerText = lands[i];
  article.appendChild(h1);
  middleEarthSection.appendChild(article);
  }
  document.body.appendChild(middleEarthSection);
}
console.log("1: makeMiddleEarth");
  //   2a. creates an article tag (there should be one for each land when the loop is done)

  //   2b. gives each land article an `id` tag of the corresponding land name

  //   2c. includes an h1 with the name of the land inside each land article

  //   2d. appends each land to the middle-earth section

  // 3. append the section to the body of the DOM.




// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

 
function makeHobbits() {
  const theShire = document.querySelectorAll('#The-Shire');
  const hobbitNames = document.createElement('ul');
  for (let i = 0; i < hobbits.length; i++) {
    const list = document.createElement('li');
    list.innerHTML = hobbits[i];
    list.classList.add('hobbits');
    hobbitNames.appendChild(list);
  }
     theShire[0].appendChild(hobbitNames);
}

   console.log("2: makeHobbits");
  // display an `unordered list` of hobbits in the shire

  // give each hobbit a class of `hobbit`

  // hint: create a 'ul' outside the loop into which to append the 'li's

  // hint: get 'The-Shire' by using its id



// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".


// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() { 
  const allHobbits = document.querySelectorAll('.hobbits');
  const precious = document.createElement('div');
  precious.id = 'the-ring';
  precious.classList.add('magic-imbued-jewelry');
  allHobbits[0].appendChild(precious);  
}

  console.log("3: keepItSecretKeepItSafe");

  // create a div with an id of `'the-ring'`

  // give the div a class of `'magic-imbued-jewelry'`

  // add the ring as a child of `Frodo`



// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".


// ============
// Chapter 4
// ============

function makeBaddies() { 
    const theMordor = document.querySelectorAll('#Mordor');
    const baddieNames = document.createElement('ul');
  for (let i = 0; i < baddies.length; i++) {
    const list = document.createElement('li');
    list.innerHTML = baddies[i];
    list.classList.add('baddy');
    baddieNames.appendChild(list);
 }
    theMordor[0].appendChild(baddieNames);
}
  console.log("4: makeBaddies");

  // display an unordered list of baddies in Mordor

  // give each of the baddies a class of "baddy"

  // remember to append them to Mordor

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..


// ============
// Chapter 5
// ============

function makeBuddies () { 
  const asideTag = document.createElement("aside");
const buddiesList = document.createElement('ul');
for (i = 0; i < buddies.length; i++){
           const li = document.createElement('li');
           li.innerText = buddies[i];
           buddiesList.appendChild(li);
}
  asideTag.appendChild(buddiesList);
  document.querySelector('#Rivendell').appendChild(asideTag);
}

  console.log("5: makeBuddies");
  // create an `aside` tag
   
  // put an `unordered list` of the `'buddies'` in the aside
   
  // insert your aside as a child element of `rivendell`


// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".


// ============
// Chapter 6
// ============

function leaveTheShire() { 
 
const newLocation = document.querySelector('#Rivendell');
  const moveHobbits = document.querySelector('#The-Shire ul');
  newLocation.appendChild(moveHobbits);
  
}

console.log("6: leaveTheShire");
  // assemble the `hobbits` and move them to `rivendell`


// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"


// ============
// Chapter 7
// ============

function beautifulStranger() { 
  const findStrider = document.querySelector('#Rivendell ul'); 
  const changeStider = findStrider.getElementsByTagName('li')[3];
    changeStider.innerText = "Aragorn";
  
   }     
  console.log("7: beautifulStranger");

  // change the `'Strider'` text to `'Aragorn'`


// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"


// ============
// Chapter 8
// ============

function forgeTheFellowShip() { 
    const newDiv = document.createElement('div');
    const newParty = document.querySelector('#Rivendell');
    newParty.appendChild(newDiv);
    newDiv.classList.add('the-fellowship');
      const buddies = document.querySelectorAll('#Rivendell li');
      for (let i = 0; i < buddies.length; i++) {
          newDiv.appendChild(buddies[i]);
      }
      }
    console.log("8: forgeTheFellowShip");

  // create a new div called `'the-fellowship'` within `rivendell`
  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
  // after each character is added make an alert that they // have joined your party
  
  // NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.



// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() { 
  const gandalfName = document.querySelector('.the-fellowship li');
  gandalfName.innerText = "Gandalf the White";
  gandalfName.style.backgroundColor = "white";
  gandalfName.style.border = "grey";
}
  console.log("9: theBalrog");

   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border


// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"


// ============
// Chapter 10
// ============

function hornOfGondor() { 
    alert("The horn of gondor has been blown");
    const findBoromir = document.querySelectorAll('.the-fellowship li');
      const boromir = findBoromir[4];
      boromir.innerHTML ='';
   }
 
  console.log("10: hornOfGondor");
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // Remove `Boromir` from the Fellowship


// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"


// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() { 
      const newMordor = document.querySelector('#Mordor');
    const firstHobbit = document.querySelectorAll('.hobbits')[0];
    const secondHobbit = document.querySelectorAll('.hobbits')[1];
          newMordor.appendChild(firstHobbit);
          newMordor.appendChild(secondHobbit);    
   const newDiv = document.createElement('div');
    newMordor.appendChild(newDiv);
    newDiv.id = "mount-doom";
  }
  console.log("11: itsDangerousToGoAlone");

  // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
  // add a div with an id of `'mount-doom'` to `Mordor`



// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"


// ============
// Chapter 12
// ============

function weWantsIt() { 
    const gollumInMordor = document.querySelector('#Mordor');
    const newDiv = document.createElement('div');
    newDiv.id = 'gollum';
    gollumInMordor.appendChild(newDiv);
    const frodo = gollumInMordor.querySelectorAll('.hobbits')[0];
    const frodoRing = frodo.childNodes;
    const ring = frodoRing[1];
    const gollom = document.querySelector('#gollum');
    gollum.appendChild(ring);
    const mtDoom = document.querySelector('#mount-doom');
    mtDoom.appendChild(gollum);
   }
  console.log("12: weWantsIt");
  // Create a div with an id of `'gollum'` and add it to Mordor
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  // Move Gollum into Mount Doom



// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() { 
  const mtDoom = document.querySelector('#mount-doom');
 const gollumRing = document.querySelectorAll('#gollum')[0];
  mtDoom.removeChild(gollumRing);
const allTheHobbits = document.querySelectorAll('.hobbits');
  const home = document.querySelector('#The-Shire');
  for (let i = 0; i < allTheHobbits.length; i++) {
    home.appendChild(allTheHobbits[i]);
  }
}
  console.log("13: thereAndBackAgain");
  // remove `Gollum` and `the Ring` from the document
  // Move all the `hobbits` back to `the shire`


// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================


document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth);
document.getElementById('chapter-2').addEventListener('click', makeHobbits);
document.getElementById('chapter-3').addEventListener('click', keepItSecretKeepItSafe);
document.getElementById('chapter-4').addEventListener('click', makeBaddies);
document.getElementById('chapter-5').addEventListener('click', makeBuddies);
document.getElementById('chapter-6').addEventListener('click', leaveTheShire);
document.getElementById('chapter-7').addEventListener('click', beautifulStranger);
document.getElementById('chapter-8').addEventListener('click', forgeTheFellowShip);
document.getElementById('chapter-9').addEventListener('click', theBalrog);
document.getElementById('chapter-10').addEventListener('click', hornOfGondor);
document.getElementById('chapter-11').addEventListener('click', itsDangerousToGoAlone);
document.getElementById('chapter-12').addEventListener('click', weWantsIt);
document.getElementById('chapter-13').addEventListener('click', thereAndBackAgain);
document.getElementById('all-chapters').addEventListener('click', () => {
  makeMiddleEarth();
  makeHobbits();
  keepItSecretKeepItSafe();
  makeBaddies();
  makeBuddies();
  leaveTheShire();
  beautifulStranger();
  forgeTheFellowShip();
  theBalrog();
  hornOfGondor();
  itsDangerousToGoAlone();
  weWantsIt();
  thereAndBackAgain();
});