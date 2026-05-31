window.GRAMMAR_RULES = [
  {
    topic: "clauses",
    title: "Independent Clause",
    body: "An independent clause is a complete sentence: subject + verb + complete thought. If punctuation is changing, find the independent clause first.",
    example: "The scientists published their findings."
  },
  {
    topic: "clauses",
    title: "Dependent Clause",
    body: "A dependent clause has a subject and verb but cannot stand alone. If it comes before the main sentence, use a comma.",
    example: "Because the storm intensified, the hikers turned back. The hikers turned back because the storm intensified."
  },
  {
    topic: "punctuation",
    title: "Comma + FANBOYS",
    body: "Use a comma before FANBOYS only when both sides are complete independent clauses.",
    example: "The data were incomplete, so the researchers repeated the experiment."
  },
  {
    topic: "punctuation",
    title: "Semicolon",
    body: "A semicolon acts like a period. It joins two complete independent clauses. Do not use a semicolon plus FANBOYS.",
    example: "The data were incomplete; the researchers repeated the experiment."
  },
  {
    topic: "punctuation",
    title: "Colon",
    body: "Before a colon must be a complete sentence. After the colon should explain, illustrate, list, or restate the first part.",
    example: "The team made one discovery: the fossil was older than expected."
  },
  {
    topic: "punctuation",
    title: "Nonessential Information",
    body: "If a phrase can be removed and the sentence still works, use matching commas, matching dashes, or matching parentheses.",
    example: "The researcher, a leading fossil expert, challenged the old theory."
  },
  {
    topic: "punctuation",
    title: "Introductory Phrase",
    body: "Use a comma after introductory setup information before the main independent clause.",
    example: "After the experiment, the researchers published the results."
  },
  {
    topic: "punctuation",
    title: "Coordinate Adjectives",
    body: "Use a comma between adjectives if you can reverse them or put 'and' between them.",
    example: "The ancient, weathered lighthouse stood tall."
  },
  {
    topic: "agreement",
    title: "Subject-Verb Agreement",
    body: "Find the real subject. Ignore interrupting phrases such as 'of the,' 'including,' and 'who/that.'",
    example: "The discovery of several fossils was important."
  },
  {
    topic: "verbs",
    title: "Verb Tense",
    body: "Keep tense consistent unless the sentence clearly changes time. Use time clues such as previously, currently, now, by 1920, and today.",
    example: "The researcher collected the samples and analyzed the results."
  },
  {
    topic: "modifiers",
    title: "Modifiers",
    body: "A modifier must be next to the thing it describes. After an introductory modifier, the next noun should be the thing modified.",
    example: "Walking through the museum, the students were impressed by the painting."
  },
  {
    topic: "parallelism",
    title: "Parallelism",
    body: "Items in a list or comparison must use the same grammatical form.",
    example: "The program teaches reading, writing, and editing."
  },
  {
    topic: "pronouns",
    title: "Pronouns",
    body: "Pronouns must agree with their nouns. Ambiguous pronouns are usually wrong on the SAT.",
    example: "The researchers changed their methods."
  },
  {
    topic: "punctuation",
    title: "Its vs It's",
    body: "'Its' is possessive. 'It's' means 'it is.' The SAT often tests this.",
    example: "The company changed its policy. It's difficult to interpret the result."
  }
];

window.GRAMMAR_QUESTIONS = [
  {
    topic: "punctuation",
    prompt: "The data were incomplete ___ the researchers repeated the experiment.",
    choices: [",", ";", "; and", ":"],
    answer: 1,
    explanation: "Both sides are independent clauses, so a semicolon correctly joins them. A comma alone creates a comma splice."
  },
  {
    topic: "punctuation",
    prompt: "The storm intensified ___ so the hikers turned back.",
    choices: [",", ";", ":", "no punctuation"],
    answer: 0,
    explanation: "Use comma + FANBOYS when both sides are complete sentences. Here 'so' is a FANBOYS conjunction."
  },
  {
    topic: "punctuation",
    prompt: "The team made one major discovery ___ the fossil was older than expected.",
    choices: [",", "; and", ":", "no punctuation"],
    answer: 2,
    explanation: "The first part is a complete sentence, and the second part explains the discovery. That is a colon."
  },
  {
    topic: "punctuation",
    prompt: "The exhibit includes ___ paintings, sculptures, and photographs.",
    choices: [":", ";", ",", "no punctuation"],
    answer: 3,
    explanation: "Do not use a colon right after a verb like 'includes.' The word already introduces the list."
  },
  {
    topic: "punctuation",
    prompt: "Langston Hughes ___ a major Harlem Renaissance writer ___ wrote poetry and prose.",
    choices: [", / ,", "- / ,", ", / -", "no punctuation"],
    answer: 0,
    explanation: "The phrase is nonessential information, so use matching punctuation on both sides."
  },
  {
    topic: "punctuation",
    prompt: "After the experiment ___ the researchers published the results.",
    choices: [";", ":", ",", "no punctuation"],
    answer: 2,
    explanation: "Use a comma after an introductory phrase."
  },
  {
    topic: "punctuation",
    prompt: "The ancient ___ weathered lighthouse stood tall.",
    choices: [",", ";", ":", "no punctuation"],
    answer: 0,
    explanation: "Ancient and weathered are coordinate adjectives; you can say 'ancient and weathered.'"
  },
  {
    topic: "punctuation",
    prompt: "The red ___ sports car sped away.",
    choices: [",", ";", ":", "no punctuation"],
    answer: 3,
    explanation: "'Red sports car' has a fixed adjective order. Do not use a comma."
  },
  {
    topic: "agreement",
    prompt: "The discovery of several fossils ___ important to the researchers.",
    choices: ["were", "was", "are", "have been"],
    answer: 1,
    explanation: "The subject is 'discovery,' not 'fossils.' Singular subject takes 'was.'"
  },
  {
    topic: "agreement",
    prompt: "The experiments in the list ___ difficult to reproduce.",
    choices: ["is", "was", "are", "has been"],
    answer: 2,
    explanation: "The subject is 'experiments,' which is plural. Use 'are.'"
  },
  {
    topic: "verbs",
    prompt: "The researcher collected the samples and ___ the results.",
    choices: ["analyzes", "analyzed", "analyzing", "has analyzing"],
    answer: 1,
    explanation: "Keep tense parallel and consistent: collected and analyzed."
  },
  {
    topic: "verbs",
    prompt: "By 1920, the composer ___ three major works.",
    choices: ["writes", "has written", "had written", "is writing"],
    answer: 2,
    explanation: "'By 1920' points to an action completed before a past time, so past perfect works best."
  },
  {
    topic: "modifiers",
    prompt: "Walking through the museum, ___",
    choices: ["the painting impressed the students.", "the students were impressed by the painting.", "the lighting of the painting was impressive.", "the exhibit's silence was noticeable."],
    answer: 1,
    explanation: "The noun after the introductory modifier must be the thing doing the walking: the students."
  },
  {
    topic: "modifiers",
    prompt: "Covered in notes and revisions, ___",
    choices: ["the student submitted the essay.", "the teacher praised the essay.", "the essay was ready to submit.", "the deadline approached quickly."],
    answer: 2,
    explanation: "The essay is covered in notes and revisions, so it should come right after the modifier."
  },
  {
    topic: "parallelism",
    prompt: "The program teaches reading, writing, and ___",
    choices: ["how to edit.", "editing.", "to edit.", "the process of edits."],
    answer: 1,
    explanation: "Keep all items in the same form: reading, writing, and editing."
  },
  {
    topic: "parallelism",
    prompt: "The scientist wanted to collect samples, analyze data, and ___",
    choices: ["publication of findings.", "publishing findings.", "publish findings.", "findings were published."],
    answer: 2,
    explanation: "Parallel infinitive structure: to collect, analyze, and publish."
  },
  {
    topic: "pronouns",
    prompt: "The researchers changed ___ methods after reviewing the data.",
    choices: ["its", "it's", "their", "there"],
    answer: 2,
    explanation: "Researchers is plural, so the pronoun must be 'their.'"
  },
  {
    topic: "pronouns",
    prompt: "The company changed ___ policy after the audit.",
    choices: ["it's", "its", "their", "there"],
    answer: 1,
    explanation: "'Its' is possessive. 'It's' means 'it is.'"
  },
  {
    topic: "clauses",
    prompt: "Because the storm intensified ___ the hikers turned back.",
    choices: [";", ":", ",", "no punctuation"],
    answer: 2,
    explanation: "A dependent clause before an independent clause takes a comma."
  },
  {
    topic: "clauses",
    prompt: "The hikers turned back ___ because the storm intensified.",
    choices: [",", ";", ":", "no punctuation"],
    answer: 3,
    explanation: "When the dependent clause comes after the main clause, do not automatically add a comma."
  }
];

window.DECISION_TREE = [
  {
    title: "1. Find the independent clause",
    body: "A complete sentence has subject + verb + complete thought. Every punctuation decision starts here."
  },
  {
    title: "2. Both sides complete?",
    body: "Use a period, semicolon, or comma + FANBOYS. Do not use a comma alone."
  },
  {
    title: "3. First part complete and second part explains?",
    body: "Use a colon only if the part before the colon is a complete sentence."
  },
  {
    title: "4. Extra removable information?",
    body: "Use matching commas, matching dashes, or matching parentheses. Do not mix marks."
  },
  {
    title: "5. Introductory setup?",
    body: "Use a comma after a phrase or dependent clause that comes before the main sentence."
  },
  {
    title: "6. List or coordinate adjectives?",
    body: "Use commas for simple lists and coordinate adjectives; use semicolons for complex list items."
  }
];

window.BLURT_PROMPTS = [
  {
    prompt: "Write all seven FANBOYS.",
    answer: "for, and, nor, but, or, yet, so"
  },
  {
    prompt: "An independent clause needs what three things?",
    answer: "subject + verb + complete thought"
  },
  {
    prompt: "What is the semicolon rule?",
    answer: "Independent clause ; independent clause. Do not put FANBOYS immediately after a semicolon unless it is a complex list."
  },
  {
    prompt: "What must come before a colon?",
    answer: "A complete independent clause."
  },
  {
    prompt: "What can come after a colon?",
    answer: "An explanation, example, list, or restatement of the first part."
  },
  {
    prompt: "What is the modifier rule?",
    answer: "A modifier must be next to the thing it describes. Introductory modifier, noun being modified."
  },
  {
    prompt: "What is the subject-verb agreement trap?",
    answer: "Find the real subject and ignore interrupting phrases like 'of the,' 'including,' and 'who/that.'"
  },
  {
    prompt: "What is the parallelism rule?",
    answer: "Items in a list or comparison must use the same grammatical form."
  },
  {
    prompt: "What is the difference between its and it's?",
    answer: "its = possessive. it's = it is."
  },
  {
    prompt: "When is an ambiguous pronoun wrong?",
    answer: "When it is unclear which noun the pronoun refers to."
  }
];
