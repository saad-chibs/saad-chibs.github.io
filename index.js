const userInput = document.getElementById('userInput');
const output = document.getElementById('output');
let optionsDisplayed = false;

// Automatically focus on the input field when the page loads
window.addEventListener('load', function () {
    userInput.focus();
    userInput.addEventListener('keydown', handleKeyPress);
});

function handleKeyPress(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        const inputText = userInput.innerText.trim().toLowerCase();
        userInput.innerText = ''; // Clear input

        if (!optionsDisplayed && inputText === 'ls') {
            output.innerHTML += 'whoami  resume  portfolio  posts  contact<br>';
            output.innerHTML += 'Tap the option that you want to see<br>';
            optionsDisplayed = true;
        } else {
            switch (inputText) {
                case 'whoami':
                    window.location.href = 'whoami.html'; // Redirect to whoami.html
                    break;
                case 'resume':
                    window.location.href = 'resume.html'; // Redirect to experiences.html
                    break;
                case 'portfolio':
                    window.location.href = 'portfolio.html'; // Redirect to projects.html
                    break;
                case 'posts':
                    window.location.href = 'posts.html'; // Redirect to contact.html
                    break;
                case 'contact':
                    window.location.href = 'contact.html'; // Redirect to resume.html
                    break;
                default:
                    output.innerHTML += 'Command not found<br>';
            }
        }
    }
}
