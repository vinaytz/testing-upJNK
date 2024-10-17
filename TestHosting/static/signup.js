let activeButton = null;

function handleButtonClick(button) {
    if (activeButton) {
        activeButton.classList.remove('bg-red-500');
        activeButton.classList.add('bg-blue-500');
    }

    button.classList.remove('bg-blue-500');
    button.classList.add('bg-red-500');
    activeButton = button;
}

document.getElementById('employerBtn').addEventListener('click', function() {
    handleButtonClick(this);
});

document.getElementById('candidateBtn').addEventListener('click', function() {
    handleButtonClick(this);
});