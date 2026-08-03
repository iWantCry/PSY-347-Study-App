const ch8 = new Chapter("ch8", "Chapter 8: Learning Events and Facts");

// ==========================================
// INTRODUCTION TO MEMORY & H.M.
// ==========================================
const t8_1 = new Topic("ch8-t1", "Introduction to Memory & Patient H.M.");
t8_1.addBlock(new ParagraphBlock("The study of memory was revolutionized by patient H.M., who underwent surgery to remove the medial temporal lobes of his brain in 1953. He was left with severe memory impairment, which fundamentally altered scientific thinking about memory."));

t8_1.addBlock(new DefinitionBlock("Episodic Memory", "Memory for personal experience of specific autobiographical events; includes information about spatial and temporal contexts in which the event occurred. (e.g., Remembering the beautiful sunset you saw on your honeymoon). It is event-related and relies on the feeling of 'I remember'."));

t8_1.addBlock(new DefinitionBlock("Semantic Memory", "Memory for facts or general knowledge about the world, including general personal information. (e.g., Remembering that the capital of Spain is Madrid). It is factual and relies on the feeling of 'I know'."));

t8_1.addBlock(new ParagraphBlock("Broad Memory Categories:"));

// Long-Term Memory Taxonomy Tree Image
t8_1.addBlock(new ImageBlock("images/Screenshot 2026-08-03 085313.png", "Long-Term Memory Taxonomy Tree showing Explicit and Implicit branches"));

t8_1.addBlock(new ParagraphBlock(
    "Memory branches breakdown:" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Declarative (Explicit) Memory:</strong> A broad class of memories, both semantic and episodic, typically verbalized ('declared') or explicitly communicated in some other way. You know that you know the information.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Nondeclarative (Implicit) Memory:</strong> A broad class of memory that includes skill memory and other types of learning (like conditioning and priming) that do not fall under episodic or semantic categories. These occur without the learner's awareness and are not always consciously accessible.</li>" +
    "</ul>"
));
ch8.addTopic(t8_1);

// ==========================================
// DISTINGUISHING EPISODIC & SEMANTIC MEMORY
// ==========================================
const t8_2 = new Topic("ch8-t2", "Distinguishing Episodic from Semantic Memory");

// EXAM FOCUS (Red)
t8_2.addBlock(new ParagraphBlock(
    "<strong>Episodic memory and semantic memory have contrasting properties:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>1. Episodic memories concern specific events that occurred at particular place and time; semantic memories involve factual information without spatial/temporal context.</strong></li>" +
    "<li style='margin-bottom: 10px;'><strong>2. Episodic memory is always autobiographical; semantic memory <em>can</em> be autobiographical, but it need not be.</strong></li>" +
    "<li style='margin-bottom: 10px;'><strong>3. Episodic memory is always acquired in single exposure (the event itself) and can be weakened by exposure to similar events. Semantic memory <em>can</em> be acquired in a single learning event, but can also be strengthened by repetition.</strong></li>" +
    "</ul>", 1
));

t8_2.addBlock(new ParagraphBlock("<strong>Can Nonhumans Have Semantic Memory?</strong>"));

// Radial Arm Maze Image
t8_2.addBlock(new ImageBlock("images/Screenshot 2026-08-03 090246.png", "A rat in a radial arm maze demonstrating semantic memory for food location"));

t8_2.addBlock(new ParagraphBlock("Yes. After many trials exploring a radial maze, a rat will eventually learn to run straight to the goal arm, indicating it has formed a semantic memory for where the food is located."));
ch8.addTopic(t8_2);

// ==========================================
// MEMORY OVER THE LIFESPAN
// ==========================================
const t8_3 = new Topic("ch8-t3", "Memory Over the Lifespan & The Reminiscence Bump");

// EXAM FOCUS (Red)
t8_3.addBlock(new ParagraphBlock(
    "<strong>What events are remembered well?</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Significant events in a person's life</strong></li>" +
    "<li style='margin-bottom: 10px;'><strong>Highly emotional events</strong></li>" +
    "<li style='margin-bottom: 10px;'><strong>Transition points</strong></li>" +
    "</ul>", 1
));

t8_3.addBlock(new DefinitionBlock("The Reminiscence Bump", "When participants over the age of 40 are asked to recall events in their lives, memory is exceptionally high for recent events AND for events that occurred in adolescence and early adulthood (between 10 and 30 years of age). Memory prior to this period is often subject to Childhood Amnesia."));

// Reminiscence Bump Graph Image
t8_3.addBlock(new ImageBlock("images/Screenshot 2026-08-03 085327.png", "The Reminiscence Bump Graph charting memories recalled against age at encoding"));

// EXAM FOCUS (Red)
t8_3.addBlock(new ParagraphBlock(
    "<strong>Hypotheses about the reminiscence bump:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Self-image:</strong> Memory is enhanced for events that occur as a person's identity is formed. Rathbone et al. (2008) asked participants to assign ages to the origin of their 'I AM' statements; the average age was about 25.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Cognitive:</strong> Encoding is better during periods of rapid change followed by stability. Evidence: emigrating to the US late in life shifts the reminiscence bump toward older ages (34-35).</li>" +
    "<li style='margin-bottom: 10px;'><strong>Cultural life script:</strong> Culturally shared expectations structure recall (events are easier to recall when they fit the cultural life script).</li>" +
    "</ul>", 1
));

// Shift in Reminiscence Bump Image
t8_3.addBlock(new ImageBlock("images/Screenshot 2026-08-03 090255.png", "Graph showing the shift in the reminiscence bump due to late emigration"));
ch8.addTopic(t8_3);

// ==========================================
// EMOTION & FLASHBULB MEMORIES
// ==========================================
const t8_4 = new Topic("ch8-t4", "Emotion and Flashbulb Memories");
t8_4.addBlock(new ParagraphBlock(
    "Emotional events are remembered more easily and vividly. Emotion improves memory and may enhance consolidation, with brain activity highly localized in the amygdala." +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>Labar and Phelps (1998) found immediate recall was higher for arousing words versus neutral words.</li>" +
    "<li style='margin-bottom: 10px;'>Dolcos et al. (2005) found recall of emotional pictures was higher than neutral pictures even after 1 year of exposure.</li>" +
    "</ul>"
));

t8_4.addBlock(new DefinitionBlock("Flashbulb Memories", "Memory for circumstances surrounding shocking, highly charged important events (e.g., 9/11/01, Kennedy assassination, Challenger explosion). Brown and Kulik (1977) noted these are analogous to creating a permanent photographic image by using a flashbulb with a camera."));

t8_4.addBlock(new ParagraphBlock("Despite participants reporting high confidence and vividness, repeated recall studies show that flashbulb memories can actually be inaccurate or lacking in detail as time passes. Talarico and Rubin (2003) showed that while actual details remembered drop, the participant's belief in their memory's accuracy stays high. However, Davidson et al. (2006) showed memories for 9/11 were more resistant to fading and that cues helped those memories more than everyday events."));

// Flashbulb Memory Graphs Image
t8_4.addBlock(new ImageBlock("images/Screenshot 2026-08-03 085401.png", "Flashbulb Memory Graphs showing a drop in details but sustained belief in accuracy over time"));
ch8.addTopic(t8_4);

// ==========================================
// ANIMAL CACHING & EPISODIC-LIKE MEMORY
// ==========================================
const t8_5 = new Topic("ch8-t5", "Animal Caching & Episodic-Like Memory");
t8_5.addBlock(new ParagraphBlock(
    "Food caching is highly prevalent in honeybees, squirrels, and birds. There are two main types of hoarders:" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Larder hoarders:</strong> Store all food in one or a few locations (near nest). No problem finding the food, but a big problem defending it.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Scatter hoarders:</strong> Store items singly and widely spread. No problem defending the food, but a big problem finding it.</li>" +
    "</ul>"
));

// EXAM FOCUS (Red)
t8_5.addBlock(new ParagraphBlock(
    "<strong>Reliance on cached food greater for animals living in harsher environments</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Access to food supplies limited</strong></li>" +
    "<li style='margin-bottom: 10px;'><strong>Unpredictable weather may lead to death from starvation</strong></li>" +
    "<li style='margin-bottom: 10px;'><strong>Black-capped chickadees:</strong> Alaskans cache considerably more seeds and are much more efficient at recovery than Colorado chickadees. Even after 2 months of laboratory housing.</li>" +
    "</ul>", 1
));

// EXAM FOCUS (Red)
t8_5.addBlock(new ParagraphBlock(
    "<strong>Food Storing in Black-Capped Chickadees:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Cache food in spring and fall</strong></li>" +
    "<li style='margin-bottom: 10px;'><strong>100,000+ items cached per individual per year</strong></li>" +
    "<li style='margin-bottom: 10px;'><strong>Do not reuse cache sites</strong></li>" +
    "<li style='margin-bottom: 10px;'><strong>Remember sites for hours to weeks</strong></li>" +
    "</ul>", 1
));

t8_5.addBlock(new ParagraphBlock(
    "Chickadees do not use smell to find food; they rely on visuo-spatial cues (Brodbeck, 1994):" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>1. Global landmarks used first (location within aviary) - <em>Most Important</em>.</li>" +
    "<li style='margin-bottom: 10px;'>2. Local configuration of cues (set of feeders).</li>" +
    "<li style='margin-bottom: 10px;'>3. Proximal features immediately surrounding the food cache (pine needles) - <em>Least Important</em>.</li>" +
    "</ul>"
));

t8_5.addBlock(new DefinitionBlock("Clark's Nutcrackers", "Cache 33,000 seeds in 2,500 caches and may find them up to a year later. They rely on landmarks and geometric relationships, and can even remember what *types* of food they stored (evidenced by opening their bill wider for large seeds before uncovering them)."));

t8_5.addBlock(new DefinitionBlock("Episodic-Like Memory & Mental Time Travel", "<strong>Mental Time Travel</strong> is the representation of past experiences and anticipation of future states (develops in humans around age 4). Animals were previously thought to be 'stuck in time', but Episodic-Like Memory proves they remember <em>what</em> happened, <em>where</em> it happened, and <em>when</em> it happened. Clayton & Dickinson (1998) allowed Western Scrub Jays to cache peanuts and wax worms. After 4 hours, birds preferred digging up worms. After 124 hours (knowing the worms would spoil/perish), they actively shifted to preferring the peanuts."));
ch8.addTopic(t8_5);

// ==========================================
// ENCODING, RETRIEVAL, INTERFERENCE & CONSTRUCTIVE MEMORY
// ==========================================
const t8_6 = new Topic("ch8-t6", "Encoding, Retrieval & Memory Failures");
t8_6.addBlock(new ParagraphBlock("Three basic principles govern how successfully a new episodic or semantic memory is encoded:"));

// Penny Test Image
t8_6.addBlock(new ImageBlock("images/Screenshot 2026-08-03 085457.png", "The Penny Test demonstrating that mere exposure does not guarantee memory"));

t8_6.addBlock(new ParagraphBlock(
    "Encoding Principles:" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>Mere exposure to information does not guarantee memory (e.g., people fail to recognize the exact details of a penny despite seeing it daily).</li>" +
    "<li style='margin-bottom: 10px;'>Memory is better for information that relates to prior knowledge.</li>" +
    "<li style='margin-bottom: 10px;'>Deeper processing at encoding improves recall later (Levels-of-processing effect).</li>" +
    "</ul>"
));

// EXAM FOCUS (Red)
t8_6.addBlock(new ParagraphBlock("<strong>The encoding specificity effect: retrieval is more likely to be successful if conditions at recall are similar to those at encoding.</strong>", 1));

t8_6.addBlock(new DefinitionBlock("Transfer-Appropriate Processing (TAP)", "Memory will be best when the way in which information is processed at encoding matches the way it is processed at retrieval."));

t8_6.addBlock(new ParagraphBlock(
    "Retrieval testing formats:" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Free recall:</strong> Generating requested information entirely from memory.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Cued recall:</strong> Using a prompt or cue to aid recall.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Recognition:</strong> Picking out a studied item from a set of options.</li>" +
    "</ul>"
));

t8_6.addBlock(new DefinitionBlock("The Testing Effect", "The act of taking a test can serve as a powerful enhancer of later memory. Struggling to retrieve information (a 'desirable difficulty') actually promotes long-term retention."));

t8_6.addBlock(new ParagraphBlock("Failures of memory include Forgetting (Passive vs. Directed) and Interference:"));

// Two Kinds of Forgetting Image
t8_6.addBlock(new ImageBlock("images/Screenshot 2026-08-03 090311.png", "Graphs comparing Passive forgetting over time vs Directed forgetting cues"));

// Two Kinds of Interference Image
t8_6.addBlock(new ImageBlock("images/Screenshot 2026-08-03 085432.png", "Flowchart mapping out Proactive vs. Retroactive Interference"));

t8_6.addBlock(new ParagraphBlock(
    "Specific memory failures breakdown:" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Proactive Interference:</strong> Previously acquired old information disrupts new learning.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Retroactive Interference:</strong> Recently acquired new information disrupts an old memory.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Source Monitoring Errors:</strong> Remembering information but being mistaken about the specific episode that is the source of the memory.</li>" +
    "<li style='margin-bottom: 10px;'><strong>False Memory:</strong> Memory for events that never actually happened, often occurring when people are prompted to imagine missing details and later misattribute them as truth.</li>" +
    "</ul>"
));

t8_6.addBlock(new DefinitionBlock("Construction of Memories", "Memory is highly constructive. The <strong>advantages</strong> are that it allows us to fill in the blanks, be creative, understand language, solve problems, and make decisions. The <strong>disadvantages</strong> are that we make errors, misattribute sources, and infer things rather than relying on actual presentation. (For example, in over 80% of exonerated DNA cases, the crucial flawed evidence was eyewitness testimony)."));

// False Memories Image
t8_6.addBlock(new ImageBlock("images/Screenshot 2026-08-03 090328.png", "Creating False Memories in the Real World showing altered photos of a handshake"));

ch8.addTopic(t8_6);

psy347.addChapter(ch8);