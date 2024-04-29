function showCategories() {
    const username = document.getElementById('username').value;
    if (username.trim() === '') {
        alert("Please enter your name.");
        return;
    }
    document.getElementById('user-details-section').style.display = 'block';
    document.getElementById('category-section').style.display = 'block';
}



// Define categories and questions
const categories = {
    pipes: [
        { question: "Question 1 for Pipes", options: ["Option A", "Option B", "Option C", "Option D"], answer: 0 },
        // Add more questions for Pipes category
    ],
    probability: [
        { question: "Question 1 for Probability", options: ["Option A", "Option B", "Option C", "Option D"], answer: 1 },
        // Add more questions for Probability category
    ],
    age: [
        { question: "Question 1 for Age", options: ["Option A", "Option B", "Option C", "Option D"], answer: 2 },
        // Add more questions for Age category
    ],
    profit: [
        { question: "Question 1 for Profit", options: ["Option A", "Option B", "Option C", "Option D"], answer: 3 },
        // Add more questions for Profit category
    ]
};

// Quiz variables
let currentCategory;
let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let startTime;
let endTime;
