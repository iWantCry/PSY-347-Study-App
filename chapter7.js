const ch7 = new Chapter("ch7", "Chapter 7: Concept Formation and Category Learning");

// ==========================================
// CONCEPTS & CATEGORIES
// ==========================================
const t7_1 = new Topic("ch7-t1", "Concepts & Categories");
t7_1.addBlock(new DefinitionBlock("Concept", "A mental representation of a real or abstract entity used for cognitive functions. It helps us understand individual cases not previously encountered!"));

// EXAM FOCUS (Red)
t7_1.addBlock(new DefinitionBlock(
    "Category", 
    "<strong>A division or class of entities in the world.</strong>", 
    1
));
ch7.addTopic(t7_1);

// ==========================================
// ANIMAL CATEGORIZATION
// ==========================================
const t7_2 = new Topic("ch7-t2", "Animal Categorization");

// EXAM FOCUS (Red)
t7_2.addBlock(new ParagraphBlock("<strong>Associative Learning in Bees: Bees can learn to discriminate amongst complex visual patterns:</strong>", 1));
t7_2.addBlock(new ListBlock([
    "<strong>Human faces</strong>",
    "<strong>Complementary shapes and patterns</strong>"
], 1));

// Added Bee Image
t7_2.addBlock(new ImageBlock("images/Screenshot 2026-07-30 091014.png", "Associative learning in bees with human faces"));

// EXAM FOCUS (Red)
t7_2.addBlock(new ParagraphBlock("<strong>Categorization: Herrnstein, Wasserman, and colleagues - train pigeons with exemplars. Then query about new stimuli (transfer test)</strong>", 1));
t7_2.addBlock(new ListBlock([
    "Trees vs. non-trees",
    "Water vs. non-water",
    "Margaret vs. non-Margaret",
    "Fish vs. non-fish",
    "Animals vs. non-animals",
    "Monet vs. Picasso"
]));

// Added Pigeon Image
t7_2.addBlock(new ImageBlock("images/Screenshot 2026-07-30 091021.png", "Pigeon categorization in a skinner box"));

t7_2.addBlock(new ParagraphBlock("A pigeon's capacity = 800+ pictures!!!!"));

// EXAM FOCUS (Red)
t7_2.addBlock(new ParagraphBlock("<strong>How?</strong>", 1));
t7_2.addBlock(new ListBlock([
    "<strong>1. Feature theory</strong>",
    "<strong>2. Prototype theory</strong>",
    "<strong>3. Exemplar theory</strong>"
], 1));
ch7.addTopic(t7_2);

// ==========================================
// FEATURE THEORY
// ==========================================
const t7_3 = new Topic("ch7-t3", "Feature Theory");
t7_3.addBlock(new ParagraphBlock("According to Feature Theory, all pictures contain features, and animals must learn which ones are rewarded. For example, discriminating 'Cats vs. non-cats' by identifying whiskers, ears, paws, and tails."));

// EXAM FOCUS (Red)
t7_3.addBlock(new ListBlock([
    "<strong>Associations are made between the compound stimulus and the Reward (Rew).</strong>",
    "<strong>Over time, the strength of some features increases, while the strength of others decreases.</strong>"
], 1));

t7_3.addBlock(new ParagraphBlock("Example of analyzing 4 features to categorize a face:"));
t7_3.addBlock(new ListBlock([
    "Forehead size",
    "Eye space",
    "Nose length",
    "Chin size"
]));

// Added Feature Theory Faces Image
t7_3.addBlock(new ImageBlock("images/image_2ab5d8.png", "Three line-drawn faces showing variations in forehead, eyes, nose, and chin features"));
ch7.addTopic(t7_3);

// ==========================================
// PROTOTYPES & NATURAL CATEGORIES
// ==========================================
const t7_4 = new Topic("ch7-t4", "Prototypes and Natural Categories");

// EXAM FOCUS (Red)
t7_4.addBlock(new ParagraphBlock("<strong>Eleanor Rosch showed natural categories often have ill-defined boundaries, with some members of categories being viewed as better, more central, and more typical examples of category than others.</strong>", 1));

// EXAM FOCUS (Red)
t7_4.addBlock(new DefinitionBlock(
    "Prototype", 
    "<strong>Central tendency or idealized version of category.</strong>", 
    1
));

// Added Robin vs Penguin Image
t7_4.addBlock(new ImageBlock("images/Screenshot 2026-07-30 091032.png", "Prototypes: Penguin vs Robin"));

// EXAM FOCUS (Red)
t7_4.addBlock(new ParagraphBlock("<strong>Results of Rosch’s (1975a) experiment, in which participants judged objects on a scale of 1 (good example of a category) to 7 (poor example): (a) ratings for birds; (b) ratings for furniture.</strong>", 1));

// Added Rosch Graph Image
t7_4.addBlock(new ImageBlock("images/Screenshot 2026-07-30 091036.png", "Rosch 1975a Experiment Rating Scale for birds and furniture"));
ch7.addTopic(t7_4);

// ==========================================
// THE EXEMPLAR APPROACH
// ==========================================
const t7_5 = new Topic("ch7-t5", "Exemplar Approach");
t7_5.addBlock(new ParagraphBlock("Similar to the prototype view, representing a category is not defining it."));

// EXAM FOCUS (Red)
t7_5.addBlock(new ParagraphBlock("Different from the prototype view, the representation is not abstract. It relies on descriptions of <strong>specific examples</strong>.", 1));

t7_5.addBlock(new ParagraphBlock("The more similar a specific exemplar is to a known category member, the faster it will be categorized."));
ch7.addTopic(t7_5);

psy347.addChapter(ch7);