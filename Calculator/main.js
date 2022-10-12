

//Operations Click Events
document.querySelector('#clear').addEventListener('click', Clear)
document.querySelector('#posOrNeg').addEventListener('click', PosOrNeg)
document.querySelector('#modulus').addEventListener('click', Modulus)
document.querySelector('#divide').addEventListener('click', Divide)
document.querySelector('#multiply').addEventListener('click', Multiply)
document.querySelector('#subtract').addEventListener('click', Subtract)
document.querySelector('#plus').addEventListener('click', Plus)
document.querySelector('#equals').addEventListener('click', Equals)



//Numbers Click Events

document.querySelector('#One').addEventListener('click', One)
document.querySelector('#Two').addEventListener('click', Two)
document.querySelector('#Three').addEventListener('click', Three)
document.querySelector('#Four').addEventListener('click', Four)
document.querySelector('#Five').addEventListener('click', Five)
document.querySelector('#Six').addEventListener('click', Six)
document.querySelector('#Seven').addEventListener('click', Seven)
document.querySelector('#Eight').addEventListener('click', Eight)
document.querySelector('#Nine').addEventListener('click', Nine)

//
let CurrentNum = document.querySelector('#result').innerText
//Operation Functions

function Clear(){
    
    Num = Number(CurrentNum)
    console.log(Num)
    console.log(Num*0)
    CurrentNum = Num*0

}

function PosOrNeg(){
    Num = Number(CurrentNum)*-1
    console.log(Num)
    
}

function Modulus(){

}

function Divide(){
Num = Number(CurrentNum)
console.log(Num/1)
}

function Multiply(){

}

function Subtract(){

}

function Plus(){

}

function Equals(){

}

//Number Functions

function One(){
Num = Number(CurrentNum)
one= 1
console.log(Num + one)
}

function Two(){
    
}
function Three(){
    
}

function Four(){
    
}

function Five(){
    
}

function Six(){
    
}

function Seven(){
    
}

function Eight(){
    
}

function Nine(){
    
}