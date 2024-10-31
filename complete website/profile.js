// Define the prompt questions
const prompts = [
    { category: 'Personal Details', prompt: 'Enter Your Name:-' },
    { category: 'Personal Details', prompt: 'Enter Your Gender:-' },
    { category: 'Personal Details', prompt: 'Enter Your date of Birth:-' },
    { category: 'Personal Details', prompt: 'Enter Your Location:-' },
    { category: 'Health and Lifestyle', prompt: 'Enter Your Height:-' },
    { category: 'Health and Lifestyle', prompt: 'Enter Your Weight:-' },
    { category: 'Health and Lifestyle', prompt: 'Enter Your Dietary Peference:-' },
    { category: 'Health and Lifestyle', prompt: 'Enter your Current Health Condition:-' },
    { category: 'Health habit and preferences', prompt: 'Enter Your Sleeping Habit:-' },
    { category: 'Health habit and preferences', prompt: 'Enter Your Prefered Activities:-' },
    { category: 'Health habit and preferences', prompt: 'How about your stress level?:-' },
    { category: 'Health habit and preferences', prompt: 'How about your medical history?:-' },
    { category: 'Health details', prompt: 'Insurance Information:-' },
    { category: 'Health details', prompt: 'Medical Conditions:-' },
    { category: 'Health details', prompt: 'Allergies:-' },
    { category: 'Health details', prompt: 'Exercise Routine:-' },
];

// profile questionnaire
class ProfileQuestionnaire {
    constructor(prompts) {
        this.prompts = prompts;
        this.currentStep = 0;
        this.userProfile = {};
        this.outputContainer = document.getElementById('display-profile');
        this.BarFill = document.getElementById('bar-fill');
        this.initPrompt();
    }

    // Initializing prompt
    initPrompt() {
        const currentPrompt = this.prompts[this.currentStep];
        this.currentCategory = currentPrompt.category;
        const questionNumber = (this.currentStep % 4) + 1;
        const totalQuestions = this.currentCategory === 'Personal Details' ? 4 : 4;
        const questionLabel = `${questionNumber}/${totalQuestions}`;
        const promptContainer = document.getElementById('container-prompt');
        promptContainer.innerHTML = '';

        const promptElement = document.createElement('div');
        promptElement.classList.add('prompt-box');
        promptElement.innerHTML = `
            <p class="question-number">Question Number: ${questionLabel}</p>
            <p>${currentPrompt.prompt}</p>
            <input type="text" id="user-response">
            <button onclick="profileQuestionnaire.nextPrompt()">Next</button>
            <button class="skip" onclick="profileQuestionnaire.skipPrompt()">Skip</button>
        `;
        promptContainer.appendChild(promptElement);
    }

    // Moving to the next prompt
    nextPrompt() {
        const userResponse = document.getElementById('user-response').value;

        if (!this.userProfile[this.currentCategory]) {
            this.userProfile[this.currentCategory] = '';
        }
        this.userProfile[this.currentCategory] += `<p><strong>${this.prompts[this.currentStep].prompt}</strong>: ${userResponse}</p>`;

        this.currentStep++;
        if (this.currentStep < this.prompts.length && this.prompts[this.currentStep].category !== this.currentCategory) {
            this.displayCategoryOutput();
            this.initPrompt();
        } else if (this.currentStep < this.prompts.length) {
            this.initPrompt();
        } else {
            this.displayCategoryOutput();
        }
        this.updateProgressBar();
    }

    // Updating the progress bar
    updateProgressBar() {
        const progressPercentage = Math.min(((this.currentStep + 1) / this.prompts.length) * 100, 100);
        this.BarFill.style.width = progressPercentage + '%';
        document.getElementById('counter-progress').textContent = `Profile completed ${progressPercentage.toFixed(1)}%`;

        if (this.currentStep === 0) {
            this.BarFill.style.width = '0%';
            document.getElementById('counter-progress').textContent = 'Profile completed 0%';
        }
    }

    // Displaying output for the current category
    displayCategoryOutput() {
        const outputBox = document.createElement('div');
        outputBox.classList.add('output-box');
        outputBox.innerHTML = `<h3>${this.currentCategory}</h3>${this.userProfile[this.currentCategory]}`;
        this.outputContainer.appendChild(outputBox);
    }

    // Skiping the current prompt
    skipPrompt() {
        this.currentStep++;
        if (this.currentStep < this.prompts.length && this.prompts[this.currentStep].category !== this.currentCategory) {
            this.displayCategoryOutput();
            this.initPrompt();
        } else if (this.currentStep < this.prompts.length) {
            this.initPrompt();
        } else {
            this.displayCategoryOutput();
        }
    }
}

// Create an instance of ProfileQuestionnaire
const profileQuestionnaire = new ProfileQuestionnaire(prompts);
