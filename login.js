let isLoginMode = true;
const authModal = document.getElementById('authModal');
const quizPrompt = document.getElementById('quizPromptModal');

// --- THEME TOGGLE LOGIC ---
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

// Check for saved theme
if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    
    // Switch Icon
    if (isDark) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// --- MODAL CONTROLS ---
function openModal(mode) {
    isLoginMode = (mode === 'login');
    updateModalUI();
    authModal.classList.remove('hidden');
    authModal.classList.add('flex');
    setTimeout(() => authModal.classList.add('modal-active'), 10);
}

function closeModal(id) {
    const target = document.getElementById(id);
    target.classList.remove('modal-active');
    setTimeout(() => {
        target.classList.add('hidden');
        target.classList.remove('flex');
    }, 300);
}

function toggleMode() {
    isLoginMode = !isLoginMode;
    updateModalUI();
}

function updateModalUI() {
    const title = document.getElementById('modalTitle');
    const sub = document.getElementById('modalSub');
    const nameField = document.getElementById('nameFieldContainer');
    const submitBtn = document.getElementById('submitBtnText');
    const switchBtn = document.getElementById('switchBtn');
    const switchText = document.getElementById('switchText');

    if (isLoginMode) {
        title.innerText = "Log In";
        sub.innerText = "Welcome back, Expert.";
        nameField.classList.add('hidden');
        submitBtn.innerText = "Access Platform";
        switchText.innerText = "New here?";
        switchBtn.innerText = "Create Account";
    } else {
        title.innerText = "Sign Up";
        sub.innerText = "Join the elite circle.";
        nameField.classList.remove('hidden');
        submitBtn.innerText = "Create Account";
        switchText.innerText = "Member already?";
        switchBtn.innerText = "Log In";
    }
}

// --- AUTH HANDLER ---


function handleAuth() {
    const email = document.getElementById('authEmail').value;
    const pass = document.getElementById('authPass').value;
    const name = document.getElementById('authName').value;

    if (!email || !pass) {
        alert("Please fill in all fields.");
        return;
    }

    // 1. Hide the Landing Hero Section
    const heroSection = document.querySelector('section.section-padding:not(#userDashboard)');
    if(heroSection) heroSection.classList.add('hidden');

    // 2. Show the Dashboard
    const dashboard = document.getElementById('userDashboard');
    dashboard.classList.remove('hidden');
    dashboard.classList.add('block');

    // 3. Update the Name Display
    if (!isLoginMode && name) {
        document.getElementById('userNameDisplay').innerText = name;
    }

    // 4. Close the Auth Modal and show success prompt
    closeModal();
    
    // Show the Success Prompt Modal
    const quizPrompt = document.getElementById('quizPromptModal');
    if(quizPrompt) {
        quizPrompt.classList.remove('hidden');
        quizPrompt.classList.add('flex');
        setTimeout(() => quizPrompt.classList.add('modal-active'), 50);
    }
}






function simulateAuth() {
    // FIX: This line immediately hides the login form popup
    document.getElementById('authModal').style.display = 'none';

    const nameInput = document.getElementById('userNameInput');
    const name = nameInput.value.trim() || "Explorer"; 
    
    // Update the UI states for the "Profile Dash Code"
    document.getElementById('guestOptions').classList.add('hidden');
    document.getElementById('memberOptions').classList.remove('hidden');
    document.getElementById('popupUserName').innerText = name;
    
    // Update the Initials and Avatar
    document.getElementById('initialsDisplay').innerText = name.charAt(0).toUpperCase();
    document.getElementById('navAvatarImg').src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=12681b&color=fff`;
    
    // Update Status to "Elite Architect" if they are part of the community
    if(localStorage.getItem('pdsm_tribe') === 'true') {
        document.getElementById('userStatusText').innerText = "Elite Architect";
    }

    // Optional: Add a small success notification instead of a clunky alert
    console.log("Access Granted for " + name);
}