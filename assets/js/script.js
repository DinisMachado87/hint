const wordClasses = {
  singularNoun: [
    "cat", "dog", "house", "car", "book", "computer", "ball", "tree", "flower", "friend",
    "beach", "sun", "moon", "star", "ocean", "river", "mountain", "city", "food", "music",
    "dreamscape", "melted clock", "whispering shadow", "surrealistic labyrinth", "floating fish", "absurd reality", "enchanted mirror",
    "phantom staircase", "velvet fog", "timeless void", "cosmic paradox", "dreaming moon", "impossible cityscape", "silent echo", "ethereal nightmare"
  ],
    pluralNoun: [
    "cats", "dogs", "houses", "cars", "books", "computers", "balls", "trees", "flowers", "friends",
    "beaches", "suns", "moons", "stars", "oceans", "rivers", "mountains", "cities", "foods", "music",
    "dreamscapes", "melted clocks", "whispering shadows", "surrealistic labyrinths", "floating fish", "absurd realities", "enchanted mirrors",
    "phantom staircases", "velvet fogs", "timeless voids", "cosmic paradoxes", "dreaming moons", "impossible cityscapes", "silent echoes", "ethereal nightmares"
  ],
  singularArticle: [
    "the", "this", "that", "my", "your", "his", "her", "its", "our", "their"
  ],
  pluralArticle: [
    "the", "these", "those", "my", "your", "his", "her", "its", "our", "their"
  ],
  verb: [
    "running", "eating", "sleeping", "writing", "dancing", "singing", "playing", "swimming", "jumping", "laughing",
    "studying", "working", "driving", "reading", "cooking", "traveling", "creating", "talking", "listening", "loving",
    "dissolving", "transcending", "whispering", "weaving", "morphing", "shattering", "drifting", "echoing", "stretching", "unraveling",
    "enchanting", "surrendering", "manifesting", "defying", "hovering", "awakening", "merging", "suspending", "reverberating", "unfolding"
  ],
  adverb: [
    "quickly", "loudly", "very", "well", "often", "suddenly", "silently", "carefully", "always", "never",
    "happily", "slowly", "badly", "loudly", "easily", "gracefully", "quietly", "patiently", "frequently", "gently",
    "beyond", "within", "amidst", "twistedly", "hypnotically", "whisperingly", "unconventionally", "dreamily", "timelessly", "surreally",
    "impossibly", "luminously", "ethereally", "absurdly", "unpredictably", "deliriously", "sensationally", "miraculously", "chaotically", "inexplicably",
    "happily", "quickly", "loudly", "beautifully", "quickly", "smartly", "funnily", "brightly", "loudly", "gently",
    "colorfully", "peacefully", "excitingly", "mysteriously", "magnificently", "deliciously", "vibrantly", "creatively", "calmly", "energetically",
    "timelessly", "luminously", "surreally", "hypnotically", "transcendently", "illusorily", "fluidly", "sensory", "infinitely", "ephemerally",
    "enigmatically", "suspendedly", "hypnagogically", "whimsically", "ethereally", "meltingly", "intriguingly", "metamorphically", "enigmatically", "surrealistically"
  ],
  conjunction: [
    "and", "but", "or", "so", "while", "although", "because", "if", "when", "while",
    "since", "unless", "unless", "while", "since", "whether", "even though", "as", "though", "whereas", "after",
    "while", "as", "beneath", "throughout", "between", "inside", "beyond", "when", "because", "alongside",
    "despite", "where", "notwithstanding", "although", "if", "unless", "unless", "while", "since", "whether"
  ],
  preposition: [
    "in", "on", "under", "between", "above", "behind", "over", "around", "through", "near",
    "at", "by", "for", "with", "to", "from", "during", "among", "upon", "within",
    "beneath", "beyond", "inside", "alongside", "throughout", "within", "between", "behind", "above", "beside",
    "against", "underneath", "amidst", "toward", "inside", "onto", "below", "across", "amid", "amongst"
  ],
};
  
 
function getRandomWord(wordArray) {
  const randomIndex = Math.floor(Math.random() * wordArray.length);
  return wordArray[randomIndex];
}

document.addEventListener("DOMContentLoaded", instructions);

const instructionsDiv = document.getElementById("instructions");

function instructions() {
  const wordDivs = document.querySelectorAll(".word");

  wordDivs.forEach(function (div) {
    const classNames = div.classList;

    classNames.forEach(function (className) {
      if (wordClasses.hasOwnProperty(className)) {
        div.textContent = "+   " + className;
      }
    });
  });

  const button = document.querySelector("button");
  button.textContent = "REFORMULATE";

  instructionsDiv.innerHTML = `
    <h2>an app for writers and creatives.</h2>
    <hr>
    <p>It generates surrealistic fictional sentences to kickstart your writing, overcome writer's block, or engage in playful creative exercises.</p>
    <p>Type some words to use and press "REFORMULATE" to complete the sentence.</p>
    <p>Or simply can click "REFORMULATE" for a random sentence.</p>
  `;
}

function newSentence() {
  const wordDivs = document.querySelectorAll(".word");

  wordDivs.forEach(function (div) {
    const classNames = div.classList;

    classNames.forEach(function (className) {
      if (wordClasses.hasOwnProperty(className)) {
        const wordArray = wordClasses[className];
        if (div.textContent === "+   " + classNames[1]) {
          div.textContent = getRandomWord(wordArray);
        }
      }
    });
  });

  const button = document.querySelector("button");
  button.textContent = "RESET";
  instructionsDiv.innerHTML = "";
}

const reformulate = document.getElementById("reformulate");
reformulate.addEventListener("click", function () {
  const button = document.querySelector("button");

  if (button.textContent === "RESET") {
    instructions();
  } else if (button.textContent === "REFORMULATE") {
    newSentence();
  }
});