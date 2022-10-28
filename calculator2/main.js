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
        console.log(operation)
        if (this.currentOperand === '') return //prevents user from inputting an operation if current num is empty
        if (this.prevOperand !== ''){ //allows you to compute current equation and add new operand on display both in previous operand section
            this.compute()
        }
        this.operation = operation
        this.prevOperand = this.currentOperand
        this.currentOperand = ''
    }

    //posOrNeg(){
        //console.log('running')
        //if (this.currentOperand === '') return //prevents user from inputting an operation if current num is empty
        
    //}

    compute(){
        let computation
        const prev = parseFloat(this.prevOperand) //convert string to number
        const current = parseFloat(this.currentOperand) //convert string to number
        if (isNaN(prev) || isNaN(current)) return //if there is no prev or current value dont run
        switch (this.operation){ //switch case to determine operation performed ans computed
            case '+':
                    computation = prev + current //addition operation
                    break 
            case '-':
                    computation = prev - current //subtraction operation
                    break  
            case '*':
                    computation = prev * current //multiplaction operation
                    break  
            case '/':
                    computation = prev / current //division operation
                    break 
            case '%':
                    computation = prev % current //modulus operation
                    break 
            case '+/-':
                    computation = current * -1 //plus or minus operation
                    break 
            default:
                return 
        }
        this.currentOperand = computation //current number will show computation
        this.operation = undefined 
        this.prevOperand = '' //prev text will be cleared
    }

    updateDisplay(){
        this.curOperandText.innerText = this.currentOperand
        this.prevOperandText.innerText = this.prevOperand
    }

}

//VARIABLES
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-allclear]')
const prevOperandText = document.querySelector('[data-prev-operand]')
const curOperandText = document.querySelector('[data-current-operand]')
const posOrNegButton = document.querySelector('[data-posNeg]')

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

//add an event listener to the clear button
//posOrNegButton.addEventListener('click', button => {
    //calculator.posOrNeg()
    //calculator.updateDisplay()

//})

//add an event listener to the equal button
equalsButton.addEventListener('click', button => {
        calculator.compute()
        calculator.updateDisplay()
    
})

//add an event listener to the clear button
allClearButton.addEventListener('click', button => {
        calculator.clear()
        calculator.updateDisplay()
    
})



