var wordClasses = {
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
      "the", "a", "an", "this", "that", "my", "your", "his", "her", "its", "our", "their"
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
    var randomIndex = Math.floor(Math.random() * wordArray.length);
    return wordArray[randomIndex];
  }


  function instructions() {
    var wordDivs = document.querySelectorAll(".word");
    wordDivs.forEach(function (div) {
      var classNames = div.classList; // Get all the classes
      var wordArray = [];
      // Iterate through the class names to find the corresponding word class
      classNames.forEach(function (className) {
        if (wordClasses.hasOwnProperty(className)) {
        div.textContent = className;
        }
      })
    });
        // Change the button text content to "REFORMULATE"
        var button = document.querySelector("button");
        button.textContent = "REFORMULATE";
  };
  

  function newSentence() {
    var wordDivs = document.querySelectorAll(".word");
    wordDivs.forEach(function (div) {
      var classNames = div.classList; // Get all the classes
      var wordArray = [];
      // Iterate through the class names to find the corresponding word class
      classNames.forEach(function (className) {
        if (wordClasses.hasOwnProperty(className)) {
          wordArray = wordClasses[className];
          return; // Stop searching once a corresponding class is found
        }
      });
      // Check if the text content is equal to the className
      if (div.textContent === classNames[1]) {
        // Fill the div with a random word from the selected array
        div.textContent = getRandomWord(wordArray);
      }
    });
  
    // Change the button text content to "RESET"
    var button = document.querySelector("button");
    button.textContent = "RESET";
  };



//formulates a sentence on loading
document.addEventListener("DOMContentLoaded", instructions);

// Listen to reformulate button and refresh the sentence
var reformulate = document.getElementById("reformulate"); 
reformulate.addEventListener("click", function() {
  var button = document.querySelector("button");
  if (button.textContent === "RESET") {
    instructions();
  } else if (button.textContent === "REFORMULATE") {
    newSentence();
  }
});