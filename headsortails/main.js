//EVENT LISTENERS
document.querySelector('#choiceButton').addEventListener('click', getChoice )
document.querySelector('#heads').addEventListener('click', heads )
document.querySelector('#tails').addEventListener('click', tails)
document.querySelector('#resultButton').addEventListener('click', getResult )
document.querySelector('#reset').addEventListener('click', reset )

//VARIABLES



//FUNCTIONS
function getChoice(){
    const choice = document.querySelector('#choice').value
    console.log(choice)
    if(choice === 'heads'){
        document.querySelector('#choiceText').innerText = `You chose ${choice.toUpperCase()}!!!`
    }else if(choice === 'tails'){
        document.querySelector('#choiceText').innerText = `You chose ${choice.toUpperCase()}!!!`
    }else{
        document.querySelector('#choiceText').innerText = `Pick a Coin, Any Coin`
    }
}

function heads(){
    document.querySelector('#choiceText').innerText = `You chose HEADS!!!`
}

function tails(){
    document.querySelector('#choiceText').innerText = `You chose TAILS!!!`
}

function getResult(){
    
    
    if(){
        document.querySelector('#resultText').innerText = 'You Won!!!'
    }else if(){
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