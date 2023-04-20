// Initialize the count variable

let count;

// assign value to zero
/*

// or you can assign at the start like this:
let count = 0;

*/
count = 0;



function showMessage(){

    // Get Elements
    const input = document.getElementById('myInput');
    const message = document.getElementById('message');

    // Get the value of the input
    const inputText = input.value;
    const allValues = input.value

    // Get the value of the cuurent value pressed
    document.getElementById('current').textContent = 'Current Value: ' + inputText;

    // Show all values pressed 
    document.getElementById('allValues').textContent +=  allValues;

    /*
        Show the message and increment the counter,
        if the input is not empty
     */
    if(inputText !== ""){
        count++; // Increment the counter
        message.innerHTML = `You typed ${inputText}, this is the ${count}st/nd/rd/th value`;
        input.value = "";
    }
}

function clearValue(){
    allValues.textContent = ''

    let all;

    allValues.textContent = all;


    if(all.length = 0){
        document.getElementById('clearValues').textContent = 'Clear Value'
    }
}