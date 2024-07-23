const questionsSet = new Set([
    'What is HTML?',
    'What is a HTML tag?',
    'What are HTML forms?',
    'What is table tag?',
    'What is meta element in HTML?',
    'What is CSS?',
    'What is a CSS sprite?',
    'What is pseudo-element?',
    'What is pseudo-class?',
    'What is the difference between Flexbox and Grid?'
]);

function acceptQuestion() {
    const questionInput = document.getElementById('questionInput').value;
    const errorMessage = document.getElementById('errorMessage');

    if (questionsSet.has(questionInput)) {
        errorMessage.style.display = 'none';
        alert('Question accepted: ' + questionInput);
    } else {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Error: Question does not meet the condition.';
    }
}
function declineQuestion() {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.style.display = 'none';
    alert('Question declined.');
}
