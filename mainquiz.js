// ==========================================
// 1. SELECTORS
// ==========================================
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

// Progress Bar Selectors
const progressBar = document.getElementById("progress-bar");
const progressPercentText = document.getElementById("progress-percentage");
const progressCounterText = document.getElementById("progress-text");

// The Insight/Explanation Box
const explanationElement = document.createElement("div");
explanationElement.id = "explanation";
explanationElement.style.display = "none";
questionElement.parentNode.insertBefore(explanationElement, nextButton);

// ==========================================
// 2. GLOBAL VARIABLES
// ==========================================
const SESSION_TOTAL = 25; 
let sessionMasteredCount = 0; 
let currentSessionQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

// ==========================================
// 3. CORE FUNCTIONS
// ==========================================

function updateMasteryUI() {
    const percentage = (sessionMasteredCount / SESSION_TOTAL) * 100;
    
    // Update Bar width
    if(progressBar) progressBar.style.width = percentage + "%";
    
    // Update Text
    if(progressPercentText) progressPercentText.innerText = Math.round(percentage) + "%";
    if(progressCounterText) progressCounterText.innerText = `${sessionMasteredCount}/${SESSION_TOTAL} Concepts Mastered`;


    
}


// Add this inside your quiz completion logic in script.js
function saveRealTimeProgress(score) {
    // Calculate percentage based on your 3,000 question goal
    let totalProgress = (score / 3000) * 100; 
    
    // Save to browser memory so the Dashboard can see it
    localStorage.setItem('totalMasteryScore', Math.round(totalProgress));
    
    // Update Streak logic: If they finished a session, add 1
    let currentStreak = parseInt(localStorage.getItem('userDailyStreak') || 0);
    localStorage.setItem('userDailyStreak', currentStreak + 1);
}



function startQuiz() {
    // Pick 25 random questions from your bank in questions.js
    const shuffled = [...expertBank].sort(() => Math.random() - 0.5);
    currentSessionQuestions = shuffled.slice(0, SESSION_TOTAL);
    
    currentQuestionIndex = 0;
    score = 0;
    sessionMasteredCount = 0; 
    
    nextButton.innerHTML = "Next";
    updateMasteryUI(); 
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = currentSessionQuestions[currentQuestionIndex];
    
    questionElement.innerHTML = `
        <div style="font-size: 14px; color: #12681b; margin-bottom: 10px; font-weight: bold;">
            ${currentQuestion.category} | Concept ${currentQuestionIndex + 1} of 25
        </div>
        ${currentQuestion.question}
    `;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) button.dataset.correct = "true";
        button.addEventListener("click", selectAnswer);
        answerButton.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    explanationElement.style.display = "none";
    progressBar.classList.remove("progress-bar-error"); // Clean red state
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        // SUCCESS LOGIC
        selectedBtn.classList.add("correct");
        score++;
        sessionMasteredCount++; 
        progressBar.classList.remove("progress-bar-error");
        updateMasteryUI();
    } else {
        // FAILURE LOGIC
        selectedBtn.classList.add("incorrect");
        progressBar.classList.add("progress-bar-error");
        
        // Remove red color after 1 second so it looks fresh for the next question
        setTimeout(() => {
            progressBar.classList.remove("progress-bar-error");
        }, 1000);
    }

    // Reveal correct answers and disable buttons
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") button.classList.add("correct");
        button.disabled = true;
    });

    // Show Deep Insight
    explanationElement.innerHTML = `<strong>DEEP INSIGHT:</strong> ${currentSessionQuestions[currentQuestionIndex].explanation}`;
    explanationElement.style.display = "block";
    explanationElement.className = "insight-box"; 
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `
        <h2 style="color: #12681b;">Session Complete!</h2>
        <p>You successfully mastered ${score} out of 25 concepts.</p>
        <p style="font-size: 14px; margin-top: 10px; font-style: italic;">Progress only moves when you get it right. Keep going!</p>
    `;
    nextButton.innerHTML = "Start New 25-Question Session";
    nextButton.style.display = "block";
}

// ==========================================
// 4. EVENT LISTENERS & INITIALIZATION
// ==========================================

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < SESSION_TOTAL) {
        showQuestion();
    } else {
        if(nextButton.innerHTML === "Next") {
            showScore();
        } else {
            startQuiz();
        }
    }
});

// Run the quiz on load
startQuiz();







