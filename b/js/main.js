const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector('.numpad');
const display = calculator.querySelector('.screen');

//missing feature is to combine both keyboard and buttons together when using operators.
//points are not working.

keys.addEventListener('click', event =>{
    if(!event.target.closest('button')) return;

    const key = event.target;
    const keyValue = key.textContent;
    const displayValue = display.textContent;
    const type = key.dataset.type;
    const {previousKeyType} = calculator.dataset;

    if (type == 'number'){
        if (displayValue == 0){
            display.textContent = keyValue;
        } else if (previousKeyType == 'operator'){
            display.textContent = keyValue;
        } else {
            display.textContent = displayValue + keyValue;
        }

    }

    if (type == 'operator'){
        const operatorKeys = keys.querySelectorAll('[data-type="operator"]');
        operatorKeys.forEach(el => {el.dataset.state =''});
        key.dataset.state = 'selected';
        calculator.dataset.firstN = displayValue;
        calculator.dataset.operator = keyValue;
    }

    if (type == 'equal'){
        equal(displayValue);
    }
    if (type == 'clear'){
        clear();
    }

    if (type == 'erase'){
        erase();

    }

    calculator.dataset.previousKeyType = type;

});


document.onkeyup = e =>{
    const keyValue = e.key;
    const pattern1 = /[0-9]{1,23}/;
    const pattern2 = /[*+/-]/;
    const displayValue = display.textContent;
    let type = '';
    const {previousKeyType} = calculator.dataset;
    if (pattern1.test(keyValue)){
        if (displayValue == 0){
            display.textContent = keyValue;
        } else if (previousKeyType == 'operator'){
            display.textContent = keyValue;
        } else {
            display.textContent = displayValue + keyValue;
        }
        type='number';
    }

    if (pattern2.test(keyValue)){
        const operatorKeys = keys.querySelectorAll('[data-type="operator"]');
        operatorKeys.forEach(el => {el.dataset.state =''});
        // key.dataset.state = 'selected';
        calculator.dataset.firstN = displayValue;
        calculator.dataset.operator = keyValue;
        type='operator';
    }

    if (e.key == "Enter" || e.key == "Numenter"){
        equal(displayValue);
        type='equal';
    }

    if (e.key == "Backspace" || e.key == "Escape"){
        erase();
        type='erase';
    }

    if (e.key == "Delete") {
        clear();
        type='clear';
    }
    calculator.dataset.previousKeyType = type;
};

const erase = () =>{
    if (display.textContent.length == '1'){
        display.textContent = "0";
    }else {
        display.textContent = display.textContent.substr(0,display.textContent.length - 1);
    }
};

const clear = () =>{
    display.textContent = "0";
};

const equal = (displayValue) =>{
    const firstN = parseInt(calculator.dataset.firstN);
    const operator = calculator.dataset.operator;
    const secondN = parseInt(displayValue);

    let result = '0';
    if (operator == '+') result = firstN + secondN;
    if (operator == '-') result = firstN - secondN;
    if (operator == '*') result = firstN * secondN;
    if (operator == '/') result = firstN / secondN;

    display.textContent = result;
};











