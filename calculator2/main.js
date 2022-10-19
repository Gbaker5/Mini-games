class Calculator{
    constructor(prevOperandText, curOperandText){
        this.prevOperandText = prevOperandText
        this.curOperandText = curOperandText
    }

    clear() {
        this.curre
    }

    delete(){

    }

    appendNumber(number){

    }

    chooseOperation(operation){

    }

    compute(){

    }

    updateDisplay(){

    }

}








const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const prevOperandText = document.querySelector('[data-prev-operand]')
const curOperandText = document.querySelector('[data-current-operand]')