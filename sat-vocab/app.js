const starterDeck = (window.COLLEGE_PANDA_VOCAB && window.COLLEGE_PANDA_VOCAB.length >= 400)
  ? window.COLLEGE_PANDA_VOCAB
  : [
  ["abate", "to reduce in intensity or amount"],
  ["aberration", "a departure from what is normal or expected"],
  ["abstain", "to choose not to do something"],
  ["adversity", "difficulty or misfortune"],
  ["aesthetic", "concerned with beauty or artistic taste"],
  ["alleviate", "to make a problem less severe"],
  ["ambiguous", "open to more than one interpretation"],
  ["anachronistic", "out of place in time"],
  ["analogous", "similar in a way that invites comparison"],
  ["anomaly", "something that differs from the norm"],
  ["appease", "to calm or satisfy by giving in"],
  ["arbitrary", "based on random choice rather than reason"],
  ["arduous", "requiring great effort"],
  ["articulate", "able to express ideas clearly"],
  ["assuage", "to make an unpleasant feeling less intense"],
  ["audacious", "bold or daring"],
  ["benign", "gentle; not harmful"],
  ["bolster", "to support or strengthen"],
  ["brevity", "shortness or conciseness"],
  ["candid", "truthful and direct"],
  ["capricious", "changing suddenly and unpredictably"],
  ["cogent", "clear, logical, and convincing"],
  ["compelling", "powerfully convincing or interesting"],
  ["concede", "to admit reluctantly that something is true"],
  ["conciliatory", "intended to reduce hostility"],
  ["conspicuous", "easy to notice"],
  ["conventional", "based on common or traditional practice"],
  ["convoluted", "complicated and difficult to follow"],
  ["corroborate", "to confirm or support with evidence"],
  ["cursory", "done quickly with little attention to detail"],
  ["deference", "respectful submission to another's judgment"],
  ["deleterious", "harmful"],
  ["delineate", "to describe or outline precisely"],
  ["detrimental", "causing harm or damage"],
  ["didactic", "intended to teach"],
  ["disparage", "to speak about as unimportant or inferior"],
  ["disparate", "essentially different; not comparable"],
  ["elicit", "to draw out a response"],
  ["empirical", "based on observation or evidence"],
  ["ephemeral", "lasting a very short time"],
  ["equivocal", "uncertain or open to interpretation"],
  ["erudite", "having or showing great knowledge"],
  ["exacerbate", "to make worse"],
  ["exemplify", "to serve as a clear example of"],
  ["expedite", "to make happen faster"],
  ["facilitate", "to make easier"],
  ["fallacious", "based on faulty reasoning"],
  ["formidable", "impressive and difficult to overcome"],
  ["galvanize", "to shock or excite into action"],
  ["hackneyed", "overused and unoriginal"],
  ["imminent", "about to happen"],
  ["impartial", "fair and unbiased"],
  ["implausible", "not seeming reasonable or probable"],
  ["inadvertent", "unintentional"],
  ["incongruous", "not in harmony or keeping with surroundings"],
  ["indifferent", "unconcerned or having no preference"],
  ["indigenous", "native to a particular place"],
  ["inevitable", "certain to happen"],
  ["innocuous", "not harmful or offensive"],
  ["inscrutable", "difficult to understand or interpret"],
  ["integral", "necessary to make something complete"],
  ["juxtapose", "to place side by side for comparison"],
  ["lucid", "clear and easy to understand"],
  ["meticulous", "showing great attention to detail"],
  ["mitigate", "to make less severe"],
  ["nuance", "a subtle difference in meaning or expression"],
  ["obscure", "not clear or not well known"],
  ["ostensible", "stated or appearing to be true, but not necessarily so"],
  ["paradox", "a statement that seems contradictory but may be true"],
  ["pervasive", "spread throughout"],
  ["plausible", "seeming reasonable or probable"],
  ["pragmatic", "practical rather than idealistic"],
  ["prolific", "producing much work or many results"],
  ["reconcile", "to make consistent or compatible"],
  ["refute", "to prove wrong"],
  ["salient", "most noticeable or important"],
  ["scrutinize", "to examine closely"],
  ["substantiate", "to support with evidence"],
  ["subtle", "delicate or not obvious"],
  ["tenuous", "weak or uncertain"],
  ["undermine", "to weaken gradually"],
  ["unequivocal", "clear and unambiguous"],
  ["viable", "capable of working successfully"],
  ["vindicate", "to clear from blame or suspicion"]
].map(([term, definition], index) => ({ id: `starter-${index}`, term, definition }));

const els = {
  modeSelect: document.getElementById("modeSelect"),
  deckFilter: document.getElementById("deckFilter"),
  dailyGoal: document.getElementById("dailyGoal"),
  dailyGoalOut: document.getElementById("dailyGoalOut"),
  masteredCount: document.getElementById("masteredCount"),
  streakCount: document.getElementById("streakCount"),
  dueCount: document.getElementById("dueCount"),
  sessionTitle: document.getElementById("sessionTitle"),
  sessionMeta: document.getElementById("sessionMeta"),
  goalMeter: document.getElementById("goalMeter"),
  flashView: document.getElementById("flashView"),
  quizView: document.getElementById("quizView"),
  typeView: document.getElementById("typeView"),
  matchView: document.getElementById("matchView"),
  importView: document.getElementById("importView"),
  flashCard: document.getElementById("flashCard"),
  flashTag: document.getElementById("flashTag"),
  flashWord: document.getElementById("flashWord"),
  flashHint: document.getElementById("flashHint"),
  flashExample: document.getElementById("flashExample"),
  forgotBtn: document.getElementById("forgotBtn"),
  flipBtn: document.getElementById("flipBtn"),
  knewBtn: document.getElementById("knewBtn"),
  resetSessionBtn: document.getElementById("resetSessionBtn"),
  resetProgressBtn: document.getElementById("resetProgressBtn"),
  quizWord: document.getElementById("quizWord"),
  quizChoices: document.getElementById("quizChoices"),
  quizFeedback: document.getElementById("quizFeedback"),
  quizExample: document.getElementById("quizExample"),
  typeDefinition: document.getElementById("typeDefinition"),
  typeForm: document.getElementById("typeForm"),
  typeInput: document.getElementById("typeInput"),
  typeFeedback: document.getElementById("typeFeedback"),
  typeExample: document.getElementById("typeExample"),
  matchTimer: document.getElementById("matchTimer"),
  matchBoard: document.getElementById("matchBoard"),
  matchFeedback: document.getElementById("matchFeedback"),
  importText: document.getElementById("importText"),
  importBtn: document.getElementById("importBtn"),
  restoreStarterBtn: document.getElementById("restoreStarterBtn")
};

const storageKey = "eashanSatVocabGame";
let state = loadState();
let session = {
  queue: [],
  current: null,
  revealed: false,
  practiced: 0,
  streak: state.streak || 0,
  selectedMatch: null,
  matchedIds: new Set(),
  matchStartedAt: null,
  matchTimerId: null
};

function loadState() {
  const saved = JSON.parse(localStorage.getItem(storageKey) || "null");
  if (saved?.deck?.length) {
    if (window.COLLEGE_PANDA_VOCAB?.length >= 400 && saved.deck.length < 400) {
      return {
        ...saved,
        deck: window.COLLEGE_PANDA_VOCAB,
        progress: {},
        practicedToday: 0
      };
    }
    return saved;
  }
  return {
    deck: starterDeck,
    progress: {},
    streak: 0,
    dailyGoal: 30,
    practicedToday: 0,
    lastDate: todayKey()
  };
}

function saveState() {
  if (state.lastDate !== todayKey()) {
    state.lastDate = todayKey();
    state.practicedToday = 0;
  }
  state.streak = session.streak;
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function normalize(text) {
  return text.trim().toLowerCase().replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, " ");
}

function progressFor(card) {
  if (!state.progress[card.id]) {
    state.progress[card.id] = { correct: 0, missed: 0, seen: 0, last: null };
  }
  return state.progress[card.id];
}

function wordForSentence(card) {
  return card.term.replace(/\s*\([^)]*\)/g, "").trim();
}

function gatsbyExample(card) {
  const word = wordForSentence(card);
  const templates = [
    `Nick noticed the ${word} mood of the party as laughter rose and faded across West Egg.`,
    `Gatsby tried to sound ${word} when Daisy asked whether the green light still mattered to him.`,
    `At Tom's table, Jordan gave a ${word} glance that made Nick question what had just been said.`,
    `The mansion's music felt ${word} after midnight, when the guests left and Gatsby stood alone.`,
    `Daisy's voice made even a ${word} remark seem polished, careless, and difficult to ignore.`,
    `In the valley of ashes, the billboard gave the scene a strangely ${word} quality.`,
    `Gatsby's hope remained ${word}, even when the facts around him became harder to deny.`,
    `Nick later remembered the evening as ${word}, full of bright surfaces and uneasy meanings.`
  ];
  const numericId = Number((card.id || "").match(/\d+/)?.[0] || 0);
  return templates[numericId % templates.length];
}

function getFilteredDeck() {
  const filter = els.deckFilter.value;
  return state.deck.filter((card) => {
    const p = progressFor(card);
    if (filter === "new") return p.seen === 0;
    if (filter === "mastered") return p.correct >= 3 && p.missed === 0;
    if (filter === "due") return p.seen === 0 || p.missed > 0 || p.correct < 3;
    return true;
  });
}

function buildQueue() {
  const pool = getFilteredDeck();
  const weighted = pool.flatMap((card) => {
    const p = progressFor(card);
    const weight = p.missed > 0 ? 4 : p.correct === 0 ? 3 : p.correct < 3 ? 2 : 1;
    return Array.from({ length: weight }, () => card);
  });
  session.queue = shuffle(weighted.length ? weighted : state.deck);
}

function nextCard() {
  if (!session.queue.length) buildQueue();
  session.current = session.queue.pop() || state.deck[0];
  session.revealed = false;
}

function record(card, correct) {
  const p = progressFor(card);
  p.seen += 1;
  p.last = Date.now();
  if (correct) {
    p.correct += 1;
    session.streak += 1;
  } else {
    p.missed += 1;
    p.correct = Math.max(0, p.correct - 1);
    session.streak = 0;
  }
  state.practicedToday += 1;
  session.practiced += 1;
  saveState();
  updateStats();
}

function updateStats() {
  const mastered = state.deck.filter((card) => {
    const p = progressFor(card);
    return p.correct >= 3 && p.missed === 0;
  }).length;
  const due = state.deck.filter((card) => {
    const p = progressFor(card);
    return p.seen === 0 || p.missed > 0 || p.correct < 3;
  }).length;
  els.masteredCount.textContent = mastered;
  els.streakCount.textContent = session.streak;
  els.dueCount.textContent = due;
  els.dailyGoal.value = state.dailyGoal;
  els.dailyGoalOut.textContent = `${state.dailyGoal} words`;
  const pct = Math.min(100, Math.round((state.practicedToday / state.dailyGoal) * 100));
  els.goalMeter.style.width = `${pct}%`;
}

function showMode(mode) {
  for (const panel of [els.flashView, els.quizView, els.typeView, els.matchView, els.importView]) {
    panel.classList.add("hidden");
  }
  document.getElementById(`${mode}View`).classList.remove("hidden");

  const titles = {
    flash: ["Flashcards", "Review the word, then mark recall."],
    quiz: ["Multiple choice", "Pick the exact meaning."],
    type: ["Type answer", "Recall the word from the definition."],
    match: ["Speed match", "Pair words with definitions quickly."],
    import: ["Import words", "Paste Quizlet terms when available."]
  };
  els.sessionTitle.textContent = titles[mode][0];
  els.sessionMeta.textContent = titles[mode][1];

  if (mode === "flash") renderFlash();
  if (mode === "quiz") renderQuiz();
  if (mode === "type") renderType();
  if (mode === "match") renderMatch();
}

function renderFlash() {
  nextCard();
  els.flashTag.textContent = "Word";
  els.flashWord.textContent = session.current.term;
  els.flashHint.textContent = "Click card or press Space to reveal the meaning.";
  els.flashExample.textContent = "";
}

function flipFlash() {
  session.revealed = !session.revealed;
  els.flashTag.textContent = session.revealed ? "Meaning" : "Word";
  els.flashWord.textContent = session.revealed ? session.current.definition : session.current.term;
  els.flashHint.textContent = session.revealed ? session.current.term : "Click card or press Space to reveal the meaning.";
  els.flashExample.textContent = session.revealed ? gatsbyExample(session.current) : "";
}

function renderQuiz() {
  nextCard();
  els.quizFeedback.textContent = "";
  els.quizFeedback.className = "feedback";
  els.quizExample.textContent = "";
  els.quizWord.textContent = session.current.term;
  const wrong = shuffle(state.deck.filter((card) => card.id !== session.current.id)).slice(0, 3);
  const choices = shuffle([session.current, ...wrong]);
  els.quizChoices.innerHTML = "";
  for (const choice of choices) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = choice.definition;
    btn.addEventListener("click", () => {
      const correct = choice.id === session.current.id;
      btn.classList.add(correct ? "correct" : "wrong");
      els.quizFeedback.textContent = correct ? "Correct. Clean recall." : `Missed. ${session.current.term}: ${session.current.definition}`;
      els.quizFeedback.className = `feedback ${correct ? "good" : "bad"}`;
      els.quizExample.textContent = gatsbyExample(session.current);
      record(session.current, correct);
      setTimeout(renderQuiz, 1800);
    });
    els.quizChoices.appendChild(btn);
  }
}

function renderType() {
  nextCard();
  els.typeDefinition.textContent = session.current.definition;
  els.typeInput.value = "";
  els.typeFeedback.textContent = "";
  els.typeFeedback.className = "feedback";
  els.typeExample.textContent = "";
  setTimeout(() => els.typeInput.focus(), 50);
}

function renderMatch() {
  const cards = shuffle(getFilteredDeck()).slice(0, 6);
  const usable = cards.length >= 4 ? cards : shuffle(state.deck).slice(0, 6);
  session.selectedMatch = null;
  session.matchedIds = new Set();
  session.matchStartedAt = Date.now();
  clearInterval(session.matchTimerId);
  session.matchTimerId = setInterval(() => {
    els.matchTimer.textContent = ((Date.now() - session.matchStartedAt) / 1000).toFixed(1);
  }, 100);
  els.matchFeedback.textContent = "";
  els.matchFeedback.className = "feedback";

  const tiles = shuffle([
    ...usable.map((card) => ({ id: card.id, kind: "term", text: card.term })),
    ...usable.map((card) => ({ id: card.id, kind: "definition", text: card.definition }))
  ]);
  els.matchBoard.innerHTML = "";
  for (const tile of tiles) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "match-item";
    btn.textContent = tile.text;
    btn.dataset.id = tile.id;
    btn.dataset.kind = tile.kind;
    btn.addEventListener("click", () => handleMatch(btn, usable));
    els.matchBoard.appendChild(btn);
  }
}

function handleMatch(btn, cards) {
  if (btn.classList.contains("correct")) return;
  if (!session.selectedMatch) {
    session.selectedMatch = btn;
    btn.classList.add("selected");
    return;
  }
  const first = session.selectedMatch;
  first.classList.remove("selected");
  session.selectedMatch = null;
  const correct = first.dataset.id === btn.dataset.id && first.dataset.kind !== btn.dataset.kind;
  if (correct) {
    first.classList.add("correct");
    btn.classList.add("correct");
    const card = cards.find((item) => item.id === btn.dataset.id);
    record(card, true);
    session.matchedIds.add(btn.dataset.id);
    if (session.matchedIds.size === cards.length) {
      clearInterval(session.matchTimerId);
      els.matchFeedback.textContent = `Round complete in ${els.matchTimer.textContent}s.`;
      els.matchFeedback.className = "feedback good";
    }
  } else {
    first.classList.add("wrong");
    btn.classList.add("wrong");
    setTimeout(() => {
      first.classList.remove("wrong");
      btn.classList.remove("wrong");
    }, 450);
  }
}

function parseImport(text) {
  return text
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line, index) => {
      const parts = line.includes("\t")
        ? line.split("\t")
        : line.includes(" - ")
          ? line.split(" - ")
          : line.split(":");
      if (parts.length < 2) return null;
      const term = parts.shift().trim();
      const definition = parts.join(":").trim();
      if (!term || !definition) return null;
      return { id: `import-${Date.now()}-${index}`, term, definition };
    })
    .filter(Boolean);
}

els.flashCard.addEventListener("click", flipFlash);
els.flipBtn.addEventListener("click", flipFlash);
els.knewBtn.addEventListener("click", () => {
  record(session.current, true);
  renderFlash();
});
els.forgotBtn.addEventListener("click", () => {
  record(session.current, false);
  renderFlash();
});
els.modeSelect.addEventListener("change", () => showMode(els.modeSelect.value));
els.deckFilter.addEventListener("change", () => {
  buildQueue();
  showMode(els.modeSelect.value);
});
els.dailyGoal.addEventListener("input", () => {
  state.dailyGoal = Number(els.dailyGoal.value);
  saveState();
  updateStats();
});
els.resetSessionBtn.addEventListener("click", () => {
  session.practiced = 0;
  buildQueue();
  showMode(els.modeSelect.value);
});
els.resetProgressBtn.addEventListener("click", () => {
  if (!confirm("Reset all vocab progress?")) return;
  state.progress = {};
  state.practicedToday = 0;
  session.streak = 0;
  saveState();
  buildQueue();
  showMode(els.modeSelect.value);
});
els.typeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const correct = normalize(els.typeInput.value) === normalize(session.current.term);
  els.typeFeedback.textContent = correct ? "Correct." : `Missed. Answer: ${session.current.term}`;
  els.typeFeedback.className = `feedback ${correct ? "good" : "bad"}`;
  els.typeExample.textContent = gatsbyExample(session.current);
  record(session.current, correct);
  setTimeout(renderType, 1800);
});
els.importBtn.addEventListener("click", () => {
  const imported = parseImport(els.importText.value);
  if (!imported.length) {
    alert("No valid terms found. Use term TAB definition, term - definition, or term: definition.");
    return;
  }
  state.deck = imported;
  state.progress = {};
  state.practicedToday = 0;
  session.streak = 0;
  saveState();
  buildQueue();
  alert(`Imported ${imported.length} words.`);
  els.modeSelect.value = "flash";
  showMode("flash");
});
els.restoreStarterBtn.addEventListener("click", () => {
  state.deck = starterDeck;
  state.progress = {};
  state.practicedToday = 0;
  session.streak = 0;
  saveState();
  buildQueue();
  showMode(els.modeSelect.value);
});
document.addEventListener("keydown", (event) => {
  if (els.modeSelect.value === "flash" && event.code === "Space") {
    event.preventDefault();
    flipFlash();
  }
});

if (state.lastDate !== todayKey()) {
  state.lastDate = todayKey();
  state.practicedToday = 0;
}
buildQueue();
updateStats();
showMode("flash");
