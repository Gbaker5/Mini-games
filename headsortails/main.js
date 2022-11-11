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
        return ''
    }
}

function heads(){

}

function tails(){

}

function getResult(){

}

function reset(){

}