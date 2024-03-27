document.getElementById('check-btn').addEventListener('click', function() {
    const userInput = document.getElementById('text-input').value.trim();

    if (userInput === '') {
        alert('Please input a value');
        return;
    }

    const cleanInput = userInput.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedInput = cleanInput.split('').reverse().join('');

    if (cleanInput === reversedInput) {
        document.getElementById('result').textContent = userInput + ' is a palindrome';
    } else {
        document.getElementById('result').textContent = userInput + ' is not a palindrome';
    }
});
