/*
 * Offline quiz application for Trisha's 25th birthday.
 * This file defines the questions, handles user interaction, and tracks the score.
 */

// Array of quiz questions. Each question includes the text, the answer options,
// and the index of the correct option (0-based).
const questions = [
  {
    question: "Trisha ka childhood ka adda kaunsa sheher tha? (Which city did Trisha grow up in?)",
    options: ["Chennai", "Mumbai", "Kolkata", "Pune"],
    answer: 1,
  },
  {
    question: "2013–2019 tak Trisha ne kaunsi fancy international school mein padhai ki? (Which fancy international school did Trisha attend from 2013–2019?)",
    options: [
      "Dhirubhai Ambani International School",
      "Campion School",
      "Oberoi International School",
      "Bombay International Academy",
    ],
    answer: 0,
  },
  {
    question: "2023 mein Union College se Trisha ne kya degree haasil ki? (What degree did Trisha earn from Union College in 2023?)",
    options: ["Political Science", "Economics", "Psychology", "Data Science"],
    answer: 1,
  },
  {
    question: "Latin mein Trisha ke naam ke aage kaunsa dhamakedaar honor tha? (Which Latin honor did Trisha graduate with?)",
    options: ["cum laude", "summa cum laude", "magna cum laude", "ultra cum laude"],
    answer: 1,
  },
  {
    question: "Union College campus par Trisha ne kaunsa “cool” role nibhaaya? (Which “cool” role did Trisha hold on Union’s campus?)",
    options: [
      "Residential Advisor",
      "Campus DJ",
      "Cafeteria Critic",
      "Mascot Trainer",
    ],
    answer: 0,
  },
  {
    question: "Summer 2018 mein Trisha ne Mumbai mein kaunsi research internship ki? (Which research internship did Trisha do in Mumbai, Summer 2018?)",
    options: ["Schbang Research", "McKinsey & Company", "Bain & Company", "NEXTGEN Labs"],
    answer: 0,
  },
  {
    question: "June–July 2020 mein Trisha ne kis mentoring program ko support kiya? (Which mentoring program did Trisha support in June–July 2020?)",
    options: ["Teach for India", "Next Genius Foundation", "Junior Achievement", "STEM Sisters"],
    answer: 1,
  },
  {
    question: "Summer 2020 mein Trisha ne Mumbai ke kis public health initiative par research ki? (On which Mumbai public health initiative did Trisha conduct research in Summer 2020?)",
    options: ["Swachh Bharat Mission", "Mumbai Health Trust", "Myna Mahila", "HealthBridge India"],
    answer: 2,
  },
  {
    question: "Late 2020 mein Trisha ne kaunsi private equity firm ke saath intern kiya? (Which private equity firm did Trisha intern with in late 2020?)",
    options: ["Carlyle Group", "Paragon Partners Asia", "Blackstone Asia", "TPG Capital"],
    answer: 1,
  },
  {
    question: "Trisha ne Goldman Sachs mein full-time kaam kab start kiya? (When did Trisha start her full-time role at Goldman Sachs?)",
    options: ["January 2023", "July 2023", "September 2022", "June 2024"],
    answer: 1,
  },
  {
    question: "What is the address of Trisha’s Goldman Sachs branch in the US?",
    options: ["200 Park Avenue", "200 West Street", "1 World Trade Center", "250 Vesey Street"],
    answer: 1,
  },
  {
    question: "On which honor roll did Trisha remain for three straight years at Union?",
    options: ["President’s List", "Dean’s List", "Chancellor’s Roll", "Scholar’s League"],
    answer: 1,
  },
  {
    question: "In which city was Trisha’s first Goldman Sachs summer analyst internship?",
    options: ["New York, NY", "Albany, NY", "Chicago, IL", "San Francisco, CA"],
    answer: 1,
  },
  {
    question: "In which city was her second Goldman Sachs summer analyst internship?",
    options: ["Miami, FL", "New York, NY", "Boston, MA", "Los Angeles, CA"],
    answer: 1,
  },
  {
    question: "Before starting work after graduation, which city did Trisha return to?",
    options: ["Mumbai, India", "Delhi, India", "London, UK", "Dubai, UAE"],
    answer: 0,
  },
  {
    question: "What is Trisha’s current job title at Goldman Sachs?",
    options: ["Investment Banker", "Portfolio Manager", "Financial Analyst", "Equity Research Associate"],
    answer: 2,
  },
  {
    question: "How many years did Trisha study at Union College?",
    options: ["3", "4", "5", "2"],
    answer: 1,
  },
  {
    question: "What role might Trisha have played at her college fun fest?",
    options: ["Dance Performer", "Debate Champion", "Event Organizer", "Stand-up Comedian"],
    answer: 2,
  },
  {
    question: "Which special chai do you think is Trisha’s favorite?",
    options: ["Masala Chai", "Adrak Chai", "Elaichi Chai", "Sab kuch mix — ultimate chai!"],
    answer: 3,
  },
  {
    question: "What’s her real Instagram handle?",
    options: ["@trishaagarwal", "@trishaaagarwal", "@trishaagrawal8", "@trishwishy"],
    answer: 2,
  },
  {
    question: "What creative title does she proudly wear in her bio?",
    options: ["Dream Weaver", "Vision Crafters", "Dreams Architect", "Idea Alchemist"],
    answer: 2,
  },
  {
    question: "Which cheeky line shows her generous nature?",
    options: ["Always Giving 😉", "Pretty Generous", "Still generous.", "Generosity Goals"],
    answer: 2,
  },
  {
    question: "Which loyal motto is she rocking?",
    options: ["Forever by your side…", "I follow your lead…", "Where you lead, I will follow…", "Together, always…"],
    answer: 2,
  },
  {
    question: "What’s her time-management mantra?",
    options: ["Better Early Than Late…", "Always On Time!", "On My Own Clock…", "Late but Always Great…"],
    answer: 3,
  },
  {
    question: "What major role did Trisha play in the DAIMUN Press Corps?",
    options: ["Head of Logistics", "Head of Illustration", "Chief Delegate", "Press Secretary"],
    answer: 1,
  },
];

// Fun feedback messages for wrong answers. One of these will be shown at random
// when the user selects an incorrect answer.
const wrongMessages = [
  "Arre yaar, galti ho gayi—par tension nahi, try again! 😜",
  "Bhai, thoda Dhoka ho gaya—dusri baar phir se dekh! 😂",
  "Oops! Thoda focus dhyaan se, ek aur chance! 😉",
  "Arey chutki bajao, ye answer toh goli se bhi tez chala! 🤣",
  "Galat jawab, par fikar not—inspo milega next time! 😁",
];

// State variables to keep track of progress
let currentQuestionIndex = 0;
let score = 0;
let selectedOptionIndex = null;

// DOM elements
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const scoreContainer = document.getElementById('score-container');

// Display the current question and its options
function showQuestion() {
  const q = questions[currentQuestionIndex];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = '';
  selectedOptionIndex = null;
  nextBtn.disabled = true;
  // Create a button for each option
  q.options.forEach((option, index) => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option';
    optionDiv.textContent = option;
    optionDiv.addEventListener('click', () => handleOptionClick(optionDiv, index));
    optionsEl.appendChild(optionDiv);
  });
}

// Handle the user selecting an option
function handleOptionClick(optionElement, index) {
  // If already selected, ignore further clicks
  if (selectedOptionIndex !== null) return;
  selectedOptionIndex = index;
  // Highlight the selected option
  const optionDivs = optionsEl.getElementsByClassName('option');
  for (let i = 0; i < optionDivs.length; i++) {
    optionDivs[i].classList.remove('selected');
  }
  optionElement.classList.add('selected');
  nextBtn.disabled = false;
}

// Advance to the next question or finish the quiz
function nextQuestion() {
  // Check if answer is correct
  const correctIndex = questions[currentQuestionIndex].answer;
  if (selectedOptionIndex === correctIndex) {
    score++;
  } else {
    // Show a fun feedback message for wrong answer
    alert(wrongMessages[Math.floor(Math.random() * wrongMessages.length)]);
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

// Display the final score
function showScore() {
  questionEl.textContent = '';
  optionsEl.innerHTML = '';
  nextBtn.classList.add('hidden');
  scoreContainer.classList.remove('hidden');
  scoreContainer.textContent = `You scored ${score} out of ${questions.length}!`;
}

// Event listener for the Next button
nextBtn.addEventListener('click', nextQuestion);

// Initialize the quiz
showQuestion();
