'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent='Correct Number!';
document.querySelector('.number').textContent = 14;
document.querySelector('.score').textContent = 20;
//jo value diya haiya hai uske equal hai ya nahi hai

document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value);*/



//for Guess my Number (tyachya value sathi)
//random number sathi (Math.random()*20) 20 yasathi multiply kela bcz and te point madhe deta and nanter tyala integer madhe convert karnyasathi (math.trunc) use 
//so Math.trunc(Math.random()*20) 

const secretNumber = Math.trunc(Math.random()*20)+1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;



//work on check button (tyaver clilck kelyananter te work kela pahije)
//jo bhi number column me daal rahe hai uskpo console me print kara raha hai
document.querySelector('.check').addEventListener('click',function(){
    const guess = document.querySelector('.guess').value;
    console.log(guess);
    //for empty 
    if(!guess){
        document.querySelector('.message').textContent = 'No Number!';
    }
    //when player wins
    else if(guess == secretNumber){
        document.querySelector('.message').textContent = 'Correct Number!';
        //for changing background color
        //yahape body ye class nahi hai
        //(style)-css ka use kara hai
        document.querySelector('body').style.backgroundColor = '#60b347';
        //Guess my num chya khalcha jo num ahe to disla pahije after succesfuly run
        document.querySelector('body').style.width = '70rem';
    }
    else if(guess > secretNumber){
        if(score>1){
        document.querySelector('.message').textContent = 'Too high';
        score = score - 2;
        document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'You lost the game bro!';
            document.querySelector('.score').textContent = 0;
        }
    }
    else if (guess < secretNumber) {
           if (score > 1) {
             document.querySelector('.message').textContent = ' Too low!';
             score = score -2;
             document.querySelector('.score').textContent = score;
           } else {
             document.querySelector('.message').textContent = ' You lost the game!';
             document.querySelector('.score').textContent = 0;
   }
}
}); 