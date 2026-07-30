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

// UPDATED Pigeon Image
t7_2.addBlock(new ImageBlock("images/Screenshot 2026-07-30 093954.png", "Pigeon categorization in a skinner box"));

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
t7_3.addBlock(new ParagraphBlock("According to Feature Theory, all pictures contain features, and animals must learn which are rewarded. For example, discriminating 'Cats vs. non-cats' by identifying whiskers, ears, paws, and tails."));

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

// UPDATED Feature Theory Faces Image
t7_3.addBlock(new ImageBlock("images/Screenshot 2026-07-30 094003.png", "Three line-drawn faces showing variations in forehead, eyes, nose, and chin features"));
ch7.addTopic(t7_3);

// ==========================================
// PROTOTYPE THEORY & NATURAL CATEGORIES
// ==========================================
const t7_4 = new Topic("ch7-t4", "Prototype Theory & Natural Categories");

// EXAM FOCUS (Red)
t7_4.addBlock(new ParagraphBlock("<strong>Eleanor Rosch showed natural categories often have ill-defined boundaries, with some members of categories being viewed as better, more central, and more typical examples of category than others.</strong>", 1));

t7_4.addBlock(new ImageBlock("images/Screenshot 2026-07-30 091032.png", "Prototypes: Penguin vs Robin"));

// EXAM FOCUS (Red)
t7_4.addBlock(new DefinitionBlock(
    "Prototype", 
    "<strong>Central tendency or idealized version of category.</strong>", 
    1
));

t7_4.addBlock(new ParagraphBlock("Key characteristics of the Prototype view:"));
t7_4.addBlock(new ListBlock([
    "A prototype is usually defined externally based on the central or common tendencies of exemplars of a category.",
    "The representation of the category is highly <strong>abstract</strong>.",
    "Representing a category is <strong>not defining it</strong> (it relies on fuzzy boundaries rather than rigid checklists)."
]));

// EXAM FOCUS (Red)
t7_4.addBlock(new ParagraphBlock("<strong>Results of Rosch’s (1975a) experiment, in which participants judged objects on a scale of 1 (good example of a category) to 7 (poor example): (a) ratings for birds; (b) ratings for furniture.</strong>", 1));

// UPDATED Rosch Graph Image
t7_4.addBlock(new ImageBlock("images/Screenshot 2026-07-30 094039.png", "Rosch 1975a Experiment Rating Scale for birds and furniture"));

t7_4.addBlock(new ListBlock([
    "<strong>Category = Birds:</strong> Sparrow (1.18) is highly typical, while a Bat (6.15) is a poor example.",
    "<strong>Category = Furniture:</strong> Chair/sofa (1.04) are central prototypes, while a Telephone (6.68) is a poor example."
]));

t7_4.addBlock(new DefinitionBlock("Prototypes vs. Stereotypes", "The concept of a stereotype is similar to that of a prototype but with subtle differences. A stereotype is a psychological concept that may or may not closely correspond to an accurate prototype for the category of people to which it refers."));

t7_4.addBlock(new ParagraphBlock("How do people learn and use stereotypes?"));
t7_4.addBlock(new ListBlock([
    "In acquiring stereotypes, people filter what they attend to through a personal lens of their own needs and self-interest.",
    "<strong>Confirmation Bias:</strong> Once we have formed a negative stereotype about members of another group, we are more likely to pay attention to examples that confirm this stereotype.",
    "Using stereotypes appropriately requires finding a balance between specificity (does the stereotype apply only to members of a particular group?) and generality (does it apply to all members of that group?)."
]));

t7_4.addBlock(new ParagraphBlock("Trouble with stereotypes arises when:"));
t7_4.addBlock(new ListBlock([
    "People use generalizations not based on true or appropriate statistics.",
    "People use statistically valid generalizations to justify discrimination against individuals, denying the possibility that the generalization may not pertain to everyone in the group."
]));

ch7.addTopic(t7_4);

// ==========================================
// THE EXEMPLAR APPROACH
// ==========================================
const t7_5 = new Topic("ch7-t5", "Exemplar Approach");
t7_5.addBlock(new ParagraphBlock("Similar to the prototype view, representing a category is not defining it."));

// EXAM FOCUS (Red)
t7_5.addBlock(new ParagraphBlock("Different from the prototype view, the representation is not abstract. It relies on descriptions of <strong>specific examples</strong>.", 1));

t7_5.addBlock(new ParagraphBlock("The more similar a specific exemplar is to a known category member, the faster it will be categorized. For example, when trying to categorize a mysterious figure in the woods, an individual will retrieve specific primate exemplars, bear exemplars, and human exemplars to determine what it is."));

// ADDED Exemplars Diagram Image
t7_5.addBlock(new ImageBlock("images/Screenshot 2026-07-30 094115.png", "How Exemplars Lead to Categorization: Comparing a mystery figure to Bear, Primate, and Human exemplars"));
ch7.addTopic(t7_5);

psy347.addChapter(ch7);