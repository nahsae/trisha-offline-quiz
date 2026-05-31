const els = {
  modeSelect: document.getElementById("modeSelect"),
  topicSelect: document.getElementById("topicSelect"),
  correctCount: document.getElementById("correctCount"),
  streakCount: document.getElementById("streakCount"),
  accuracyCount: document.getElementById("accuracyCount"),
  screenTitle: document.getElementById("screenTitle"),
  screenMeta: document.getElementById("screenMeta"),
  topicPill: document.getElementById("topicPill"),
  drillView: document.getElementById("drillView"),
  rulesView: document.getElementById("rulesView"),
  decisionView: document.getElementById("decisionView"),
  blurtView: document.getElementById("blurtView"),
  questionTopic: document.getElementById("questionTopic"),
  questionText: document.getElementById("questionText"),
  choiceGrid: document.getElementById("choiceGrid"),
  feedback: document.getElementById("feedback"),
  ruleTopic: document.getElementById("ruleTopic"),
  ruleTitle: document.getElementById("ruleTitle"),
  ruleBody: document.getElementById("ruleBody"),
  ruleExample: document.getElementById("ruleExample"),
  prevRuleBtn: document.getElementById("prevRuleBtn"),
  nextRuleBtn: document.getElementById("nextRuleBtn"),
  treeGrid: document.getElementById("treeGrid"),
  blurtPrompt: document.getElementById("blurtPrompt"),
  blurtInput: document.getElementById("blurtInput"),
  blurtAnswer: document.getElementById("blurtAnswer"),
  showAnswerBtn: document.getElementById("showAnswerBtn"),
  nextBlurtBtn: document.getElementById("nextBlurtBtn"),
  newRoundBtn: document.getElementById("newRoundBtn"),
  resetBtn: document.getElementById("resetBtn")
};

const storageKey = "eashanSatGrammarTrainer";
const topicLabels = {
  all: "All topics",
  punctuation: "Punctuation",
  clauses: "Clauses",
  agreement: "Agreement",
  verbs: "Verb tense",
  modifiers: "Modifiers",
  parallelism: "Parallelism",
  pronouns: "Pronouns"
};

let state = JSON.parse(localStorage.getItem(storageKey) || "null") || {
  correct: 0,
  attempted: 0,
  streak: 0,
  ruleIndex: 0,
  blurtIndex: 0
};

let currentQuestion = null;

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function filteredQuestions() {
  const topic = els.topicSelect.value;
  return window.GRAMMAR_QUESTIONS.filter((q) => topic === "all" || q.topic === topic);
}

function filteredRules() {
  const topic = els.topicSelect.value;
  return window.GRAMMAR_RULES.filter((r) => topic === "all" || r.topic === topic);
}

function updateStats() {
  els.correctCount.textContent = state.correct;
  els.streakCount.textContent = state.streak;
  els.accuracyCount.textContent = state.attempted ? `${Math.round((state.correct / state.attempted) * 100)}%` : "0%";
  els.topicPill.textContent = topicLabels[els.topicSelect.value];
}

function showMode() {
  for (const panel of [els.drillView, els.rulesView, els.decisionView, els.blurtView]) {
    panel.classList.add("hidden");
  }

  const mode = els.modeSelect.value;
  document.getElementById(`${mode}View`).classList.remove("hidden");
  const titles = {
    drill: ["Question drill", "Pick the answer that makes the sentence correct."],
    rules: ["Rule cards", "Review one grammar rule at a time."],
    decision: ["Punctuation tree", "Use this when punctuation answer choices change."],
    blurt: ["Blurt practice", "Recall rules from memory before checking."]
  };
  els.screenTitle.textContent = titles[mode][0];
  els.screenMeta.textContent = titles[mode][1];

  if (mode === "drill") renderQuestion();
  if (mode === "rules") renderRule();
  if (mode === "decision") renderDecisionTree();
  if (mode === "blurt") renderBlurt();
  updateStats();
}

function renderQuestion() {
  const pool = filteredQuestions();
  currentQuestion = shuffle(pool)[0] || window.GRAMMAR_QUESTIONS[0];
  els.questionTopic.textContent = topicLabels[currentQuestion.topic] || currentQuestion.topic;
  els.questionText.textContent = currentQuestion.prompt;
  els.feedback.textContent = "";
  els.feedback.className = "feedback";
  els.choiceGrid.innerHTML = "";

  currentQuestion.choices.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = choice;
    btn.addEventListener("click", () => answerQuestion(index, btn));
    els.choiceGrid.appendChild(btn);
  });
}

function answerQuestion(index, btn) {
  const correct = index === currentQuestion.answer;
  state.attempted += 1;
  if (correct) {
    state.correct += 1;
    state.streak += 1;
  } else {
    state.streak = 0;
  }
  saveState();
  updateStats();

  [...els.choiceGrid.children].forEach((choiceBtn, choiceIndex) => {
    choiceBtn.disabled = true;
    if (choiceIndex === currentQuestion.answer) choiceBtn.classList.add("correct");
  });
  if (!correct) btn.classList.add("wrong");

  els.feedback.textContent = `${correct ? "Correct." : "Missed."} ${currentQuestion.explanation}`;
  els.feedback.className = `feedback ${correct ? "good" : "bad"}`;
  setTimeout(renderQuestion, 2200);
}

function renderRule() {
  const rules = filteredRules();
  if (!rules.length) return;
  state.ruleIndex = ((state.ruleIndex % rules.length) + rules.length) % rules.length;
  const rule = rules[state.ruleIndex];
  els.ruleTopic.textContent = topicLabels[rule.topic] || rule.topic;
  els.ruleTitle.textContent = rule.title;
  els.ruleBody.textContent = rule.body;
  els.ruleExample.textContent = rule.example;
  saveState();
}

function renderDecisionTree() {
  els.treeGrid.innerHTML = "";
  window.DECISION_TREE.forEach((step) => {
    const card = document.createElement("article");
    card.className = "tree-step";
    card.innerHTML = `<h3>${step.title}</h3><p>${step.body}</p>`;
    els.treeGrid.appendChild(card);
  });
}

function renderBlurt() {
  const item = window.BLURT_PROMPTS[state.blurtIndex % window.BLURT_PROMPTS.length];
  els.blurtPrompt.textContent = item.prompt;
  els.blurtInput.value = "";
  els.blurtAnswer.textContent = "";
  saveState();
}

els.modeSelect.addEventListener("change", showMode);
els.topicSelect.addEventListener("change", () => {
  state.ruleIndex = 0;
  showMode();
});
els.newRoundBtn.addEventListener("click", showMode);
els.resetBtn.addEventListener("click", () => {
  if (!confirm("Reset grammar progress?")) return;
  state = { correct: 0, attempted: 0, streak: 0, ruleIndex: 0, blurtIndex: 0 };
  saveState();
  showMode();
});
els.prevRuleBtn.addEventListener("click", () => {
  state.ruleIndex -= 1;
  renderRule();
});
els.nextRuleBtn.addEventListener("click", () => {
  state.ruleIndex += 1;
  renderRule();
});
els.showAnswerBtn.addEventListener("click", () => {
  const item = window.BLURT_PROMPTS[state.blurtIndex % window.BLURT_PROMPTS.length];
  els.blurtAnswer.textContent = item.answer;
});
els.nextBlurtBtn.addEventListener("click", () => {
  state.blurtIndex += 1;
  renderBlurt();
});

updateStats();
showMode();
