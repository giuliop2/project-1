// jshint esversion: 7

//define helper functions here
let rollDie = () => {
   return Math.floor (Math.random() * 6) + 1;
};

//Define a controller to handle the button click
let controller = ()  => {
  let target, die1, die2, rollCount = 0,
  die1URL, die2URL, imgElem1, cheeryMsg;

target = document.querySelector('input').value;
console.log(target);


do {
  die1 = rollDie();
  die2 = rollDie();

  console.log(`${die1}${die2}${rollCount}`);
} while (die1 + die2 !=target);

die1URL = `images/die${die1}.gif`;
console.log(die1URL);
imgElem1= document.querySelector('#imgElem1');
imgElem1.setAttribute('src', die1URL);

die2URL = `images/die${die2}.gif`;
imgElem2= document.querySelectorAll('#imgElem2')[0];
imgElem2.setAttribute('src', die2URL);

cheeryMsg = `You hit your number in ${rollCount} rolls!`;
document.querySelector('div').innerHTML = cheeryMsg;
  //Input: prompt the user for cost and diameter

  //Processing: assemble the result string
  //use <br> in the result string for html newline

  //Output: write the result string into the empty div
};

//Register the controller after the DOM is complete
window.addEventListener("load", ()=> {
  //select the button
  let button = document.querySelector("button");

  //register the click handler for the button
  button.addEventListener("click", controller);
});
