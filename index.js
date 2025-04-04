/*let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let message = " ";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el"); //storing sum paragraph in a variable sumEl
let cardsEl = document.getElementById("cards-el"); //storing cards paragraph in a variable cardsEl

let player = {
    name:"Abeera",
    chips:145
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + " : $" + player.chips; 

function renderGame(){
    cardsEl.textContent = "Cards:";
    for(let i=0 ; i<cards.length ; i+=1){
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum:" + sum;
    if(sum <= 20){
        message = "Do you want to draw a new card?";
    }
    else if(sum === 21){
        message = "Congrats!You have got a Blackjack";
        hasBlackJack = true;
    }
    else{
        message = "You are out of the game";
        isAlive = false;
    }
    
    messageEl.textContent = message;
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard,secondCard];
    sum = firstCard + secondCard;
    renderGame();
}
function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
} 

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1;
    if(randomNumber > 10){
        return 10;
    }
    else if(randomNumber === 1){
        return 11;
    }
    else{
        return randomNumber;
    }   
} */


/*let age = 22;
if(age < 21){
    console.log("You cannot enter the club");
}
else{
    console.log("Welcome!");
} 
age = 100;
if(age < 100){
    console.log("Not eligible");
}
else if(age === 100){
    console.log("Here is your birthday card from the King!");
}
else {
    console.log("Not eligible you have already gotten one");
} 


//Compares value and type
console.log(4 === 3); //false
console.log(5>2);//true
console.log(12>12);//false
console.log(3<0);//false
console.log(3>=3);//true
console.log(11<=11);//true
console.log(3<=2);//false 

//Arrays
let featuredPosts = [
    "Checkout my Netflix clone",
    "Here is the code for my project",
    "I have just relaunched my portfolio"
]
console.log(featuredPosts[1]);
console.log(featuredPosts.length);

let experience = ["CEO ar Scrimba",
    "Frontend developer at Xeneta",
    "People counter for Norstat"
]
console.log(experience[1]);
console.log(experience[2]);
console.log(experience[0]);

let myInfo = ["Abeera",21,true];

let cards = [7,4];
cards.push(6);
console.log(cards);

let messages = [
    "Hey,how's it going?",
    "I'm great,thank you!How about you?",
    "All good.Been working on my portfolio lately."
]

let newMessage = "Same here!";
messages.push(newMessage);
console.log(messages);
messages.pop(); //Removes the last item
console.log(messages); 

//loops
 for(let count = 1;count < 11 ; count+=1){
    console.log(count);
 }
 for(let count = 1;count < 11 ; count += 2){
    console.log(count);
 }
 for(let count = 10;count < 21 ; count += 1){
    console.log(count);
 }

 //Create a for loop that counts from 10 to 100 in steps of 10
 for(let count = 10 ; count < 101 ; count += 10){
    console.log(count);
 }

 for(let i=0 ; i<messages.length ; i++){
    console.log(messages[i]);
 } 

let cards = [7,3,9];
for(let i = 0 ; i<cards.length ; i++){
    console.log(cards[i]);
} 

let sentence = ["Hello ","my ","name ","is ","Abeera"];
let greetingEl = document.getElementById("greeting-El");
for(let i=0 ; i<sentence.length ; i+=1){
    greetingEl.textContent += sentence[i];
}

//if the array is without spaces
sentence = ["Hello","my","name","is","Abeera"];
for(let i=0 ; i<sentence.length ; i++){
    greetingEl.textContent += sentence[i] + " ";
} 

let player1Time = 102;
let player2Time = 107;

function getFastestRaceTime(){
    if(player1Time < player2Time){
        return player1Time;
    }
    else if(player1Time > player2Time){
        return player2Time;
    }
    else {
        return player1Time;
    }
}
let fastest = getFastestRaceTime();
console.log(fastest); //The function getFastestRaceTime() logs the result but doesn't return a value.
                    // Since the function does not use return, fastest will be undefined.

function getTotalRaceTime(){
    return player1Time + player2Time;
}

let totalRaceTime = getTotalRaceTime();
console.log(totalRaceTime); 

let randomNumber = Math.random(); // generates a random number between 0 and 1
console.log(randomNumber);

let randomNum = Math.random()*6; //generates a random number between 0 and 6
console.log(randomNum); 

let flooredNumber = Math.floor(3.45632);
console.log(flooredNumber); 

let randomNo = Math.floor(Math.random() * 6);
console.log(randomNo);

//Modifying the expression so that we get a number in the range of 1 to 6
let randNum = Math.floor(Math.random()*6)+1; 
console.log(randNum)
function rollDice(){
    return Math.floor(Math.random())*6 + 1;
}
let dice = rollDice();
console.log(dice); 

let hasSolvedChallenge = false;
let hasHintsLeft = false;

if(hasSolvedChallenge === false && hasHintsLeft === false){
    showSolution();
}

function showSolution(){
    console.log("Showing the solution");
}

let likesDocumentaries = false;
let likeStartups = true;

if(likesDocumentaries === true || likeStartups === true){
    recommendMovie();
}
function recommendMovie(){
    console.log("Hey,check out this new film you will like!")
} */

let castle = {
    isAvailable : true,
    name : "Air bnb castle",
    price: 250,
    images : ["img.castle1/png" , "img.castle2/png"]
}
console.log(castle.name);
console.log(castle.price);