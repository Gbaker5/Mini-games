class Calculator{
    constructor(prevOperandText, curOperandText){
        this.prevOperandText = prevOperandText
        this.curOperandText = curOperandText
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.prevOperand = ''
        this.operation = undefined
    }

    delete(){

    }

    appendNumber(number){
        this.currentOperand = number
    }

    chooseOperation(operation){

    }

    compute(){

    }

    updateDisplay(){
        this.curOperandText.innerText = this.currentOperand
    }

}


//declare variables
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const prevOperandText = document.querySelector('[data-prev-operand]')
const curOperandText = document.querySelector('[data-current-operand]')

const calculator = new Calculator(prevOperandText, curOperandText)

//add an event listener to each number button that appends the corresponding number to display and updates
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})