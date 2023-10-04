const userInput = document.getElementById('userInput');
const output = document.getElementById('output');
let optionsDisplayed = false;

window.addEventListener('load', function () {
    userInput.focus();
    userInput.addEventListener('keydown', handleKeyPress);
});

function handleKeyPress(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        const inputText = userInput.innerText.trim().toLowerCase();

        if (!optionsDisplayed && inputText === 'ls') {
            output.innerHTML += 'whoami  resume  portfolio  posts  contact<br>';
            output.innerHTML += 'Tap the option that you want to see<br>';
            optionsDisplayed = true;
        } else {
            switch (inputText) {
                case 'whoami':
                    window.location.href = 'whoami.html';
                    break;
                case 'resume':
                    window.location.href = 'resume.html';
                    break;
                case 'portfolio':
                    window.location.href = 'portfolio.html';
                    break;
                case 'posts':
                    window.location.href = 'posts.html';
                    break;
                case 'contact':
                    window.location.href = 'contact.html';
                    break;
                default:
                    output.innerHTML += 'Command not found<br>';
                    break;
            }
        }

        if (!optionsDisplayed) {
            userInput.innerText = ''; // Clear input only if options are not displayed
        }
    }
}
