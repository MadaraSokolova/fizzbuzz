function innit(){
    document.getElementById('elements');
    let clearButton = document.getElementById('button2');
    clearButton.addEventListener("click", onClickClear);
    let submitButton = document.getElementById('button1');
    submitButton.addEventListener("click", onClickCreate);
};
function onClickCreate (){
    onClickClear();
    let startInput = document.getElementById('StartingInput').value;
    let endInput = document.getElementById('EndingInput').value;   
    let fizzInput = document.getElementById('FizzInput').value;
    let buzzInput = document.getElementById('BuzzInput').value;
        for (startInput; startInput<=endInput; startInput++){
            const element = document.createElement('div');
            element.id="element_" + startInput;
            
            elements.appendChild(element);
                if (startInput % fizzInput === 0 && startInput % buzzInput === 0){
                    element.setAttribute("id", "element_" +startInput);
                    element.setAttribute("class", "fizzbuzz");
                    element.innerText="FizzBuzz";
                }
                else if (startInput % fizzInput === 0 && startInput % buzzInput !== 0) {
                    element.setAttribute("id", "element_" +startInput);
                    element.setAttribute("class", "fizz");
                    element.innerText="Fizz";
                }

                else if (startInput % buzzInput === 0 && startInput % fizzInput !== 0){
                    element.setAttribute("id", "element_" +startInput);
                    element.setAttribute("class", "buzz");
                    element.innerText="Buzz";
                }

                else{
                    element.setAttribute("id", "element_" +startInput);
                    element.setAttribute("class", "digit");
                    element.innerText=startInput;
                }
        }
};

function onClickClear () {
    while (elements.firstChild) {
        elements.removeChild(elements.firstChild);
    }
}

innit();
