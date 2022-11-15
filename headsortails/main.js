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

function heads(){
    document.querySelector('#choiceText').innerText = 'You chose HEADS!!!' //shows text after you click the image
    
}

function tails(){
    document.querySelector('#choiceText').innerText = 'You chose TAILS!!!' //shows text after you click the image
}

function getResult(){
    const choice = document.querySelector('#choice').value.toLowerCase()//grab value from input
    
    const decision = Number(Math.random().toFixed(1)) <  .5 ? 'heads' : 'tails'; //gets random number and determines heads or tails
    console.log(decision)
    
    //conditional that inserts text to declare a winner or loser
    if(decision == choice){
        document.querySelector('#resultText').innerText = 'You Won!!!'
    }else if(!decision == choice){
        document.querySelector('#resultText').innerText = 'Sorry, You Lost, Try again'
    }else{
        document.querySelector('#resultText').innerText = 'Choose a side'
    }
}

function reset(){
    document.querySelector('#choiceText').innerText = ''
    document.querySelector('#resultText').innerText = ''
    document.querySelector('#choice').value = ''
}