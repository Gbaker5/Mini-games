//calculator CLASS which holds all functions necessary for calculator to operate
class Calculator{
    constructor(prevOperandText, curOperandText){
        this.prevOperandText = prevOperandText
        this.curOperandText = curOperandText
        this.clear()
    }

    
    clear() {
        this.currentOperand = '' //clears all numbers and operations
        this.prevOperand = ''
        this.operation = undefined
    }

    delete(){

    }
   
    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.')) return //prevents user from repeating the period sign in the current problem
        this.currentOperand = this.currentOperand.toString() + number.toString()  //adds a number in the form of a string instead of a number so that it appends instead of adding together
    }

    chooseOperation(operation){
        if (this.currentOperand === '') return //prevents user from inputting an operation if current num is empty
        if (this.prevOperand !== ''){ //allows you to compute current equation and add new operand on display both in previous operand section
            this.compute()
        }
        this.operation = operation
        this.prevOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute(){

    }

    updateDisplay(){
        this.curOperandText.innerText = this.currentOperand
        this.prevOperandText.innerText = this.prevOperand
    }

}

//declare VARIABLES
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const prevOperandText = document.querySelector('[data-prev-operand]')
const curOperandText = document.querySelector('[data-current-operand]')

const calculator = new Calculator(prevOperandText, curOperandText)


///EVENT LISTENERS
//add an event listener to each number button that appends the corresponding number to display and updates
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

//add an event listener to each operation button 
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

//add an event listener to the equal button
equalsButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.compute()
        calculator.updateDisplay()
    })
})