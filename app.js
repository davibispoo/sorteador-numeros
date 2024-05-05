// Function to generate numbers
function sortear() {
    // Clear previous result
    //document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Generated numbers: </label>';

    // Get input field values
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    // Check if values are valid
    if (isNaN(quantidade) || isNaN(de) || isNaN(ate) || quantidade < 1 || de < 1 || ate < 1 || de > ate) {
        alert('Please enter valid values.');
        return;
    }

    let generatedNumbers = [];
    let number; 


    for (let i = 0; i < quantidade; i++) {
        // Call function to generate random numbers within the specified range
        number = generateRandomNumbers(de, ate);
        
        while (generatedNumbers.includes(number)) {
            number = generateRandomNumbers(de, ate);
        }
        generatedNumbers.push(number);
        }
        
    //Display on alert
    alert (generatedNumbers);
    
    // Display generated numbers
    let result = document.getElementById('resultado');
    result.innerHTML = '<label class="texto__paragrafo">' + generatedNumbers.join(', ') + '</label>';
}

// Function to generate random numbers within a range
function generateRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

// Function to reset
//function reiniciar() {
    // Clear input fields and result
  //  document.getElementById('quantidade').value = '';
  //  document.getElementById('de').value = '';
  //  document.getElementById('ate').value = '';
  //  document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Generated numbers: none yet</label>';
// }
