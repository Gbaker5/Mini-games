//EVENT LISTENERS
document.querySelector('#choiceButton').addEventListener('click', getChoice )
document.querySelector('#heads').addEventListener('click', heads )
document.querySelector('#tails').addEventListener('click', tails)
document.querySelector('#resultButton').addEventListener('click', getResult )
document.querySelector('#reset').addEventListener('click', reset )

//VARIABLES



//FUNCTIONS
function getChoice(){
    const choice = document.querySelector('#choice').value.toLowerCase()//grab value from input
    console.log(choice)
    
    //conditionals that display your choice in the dom and return it
    if(choice === 'heads'){
        document.querySelector('#choiceText').innerText = `You chose ${choice.toUpperCase()}!!!`
        return choice
    }else if(choice === 'tails'){
        document.querySelector('#choiceText').innerText = `You chose ${choice.toUpperCase()}!!!`
        return choice
    }else{
        document.querySelector('#choiceText').innerText = `Pick a Coin, Any Coin`
        return ''
    }
}

//COIN TOSS FUNCTIONS
var HeadsOrTails = {} //global function for coin choice

function heads(){
    document.querySelector('#choiceText').innerText = 'You chose HEADS!!!' //shows text after you click the image
    document.querySelector('#tails').src = 'img/leftarrow.png'
    HeadsOrTails.flip = 'heads'
}

function tails(){
    document.querySelector('#choiceText').innerText = 'You chose TAILS!!!' //shows text after you click the image
    document.querySelector('#heads').src = 'img/rightarrow.png'
    HeadsOrTails.flip = 'tails'
}

//RESULT
function getResult(){
    
    //Flip gif
    //document.querySelector('#flip').src = 'img/coinflip.gif'

    //value and decision
    const choice = document.querySelector('#choice').value.toLowerCase()//grab value from input
    
    const decision = Number(Math.random().toFixed(1)) <  .5 ? 'heads' : 'tails'; //gets random number and determines heads or tails
    console.log(decision)

    //places result from input in DOM
    if(decision == 'heads'){
        document.querySelector('#flipdecision').innerText = 'HEADS!'
    }else{
        document.querySelector('#flipdecision').innerText = 'TAILS!'
    }

    

    //conditional that inserts text to declare a winner or loser
    if(decision == choice || decision == HeadsOrTails.flip){
        document.querySelector('#resultText').innerText = 'You Won!!!'
    }else if(document.querySelector('#choiceText').innerText == `Pick a Coin, Any Coin`){
        document.querySelector('#resultText').innerText = 'Choose a side'
    }else{
        document.querySelector('#resultText').innerText = 'Sorry, You Lost, Try again'
    }
}

function reset(){
    document.querySelector('#choiceText').innerText = ''
    document.querySelector('#resultText').innerText = ''
    document.querySelector('#choice').value = ''
    document.querySelector('#flipdecision').innerText = ''
    document.querySelector('#heads').src = 'img/heads.jpeg'
    document.querySelector('#tails').src = 'img/tails.jpeg'
}