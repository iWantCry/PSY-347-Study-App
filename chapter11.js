const ch11 = new Chapter("ch11", "Chapter 11: Social Learning & Lifespan");

// ==========================================
// SOCIAL LEARNING THEORY & IMITATION
// ==========================================
const t11_1 = new Topic("ch11-t1", "Social Learning Theory & Imitation");

t11_1.addBlock(new ParagraphBlock(
    "<strong>What is Social Learning?</strong><br>" +
    "Situations where an individual actively monitors events involving others and chooses later actions based on those observations." +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 10px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>The 2 Pieces:</strong> The Model (demonstrator/tutor) and the Observer.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Unpredictable:</strong> Unlike classical/operant conditioning, researchers cannot reliably predict exactly what an organism will learn from observation.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Bobo Doll Experiment:</strong> Albert Bandura proved preschool children become more aggressive after observing aggressive adults.</li>" +
    "</ul>"
));

// EXAM FOCUS (Red)
t11_1.addBlock(new ParagraphBlock(
    "<strong>Social Learning Theory & Copying Types:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Social Learning Theory:</strong> The reinforcements an individual has experienced in past social contexts determine how they will act now.</li>" +
    "<li style='margin-bottom: 10px;'>Observers learn whether an action will be rewarded or punished by witnessing the <strong>outcomes</strong> of a model's actions.</li>" +
    "<li style='margin-bottom: 10px;'><strong>True imitation:</strong> Copying that involves perfectly reproducing the exact motor acts.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Emulation:</strong> Copying that involves replicating an outcome, but <em>without</em> replicating the specific motor acts.</li>" +
    "</ul>", 1
));

// EXAM FOCUS (Red)
t11_1.addBlock(new ParagraphBlock(
    "<strong>Testing True Imitation:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Two-action test:</strong> A technique developed to investigate true imitation and compare capacities across species.</li>" +
    "<li style='margin-bottom: 10px;'><em>Example:</em> Chimpanzees vs. children observing a box being opened via a 'poke' vs. a 'twist'.</li>" +
    "</ul>", 1
));

t11_1.addBlock(new ImageBlock("images/Screenshot 2026-08-06 191540.png", "The two-action test diagram showing a poke versus twist mechanism and a scatterplot comparing chimpanzees and children"));
ch11.addTopic(t11_1);

// ==========================================
// MECHANISMS OF SOCIAL LEARNING
// ==========================================
const t11_2 = new Topic("ch11-t2", "Mechanisms of Social Learning");

// EXAM FOCUS (Red)
t11_2.addBlock(new ParagraphBlock(
    "<strong>Ways Social Learning Operates:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Stimulus (Local) Enhancement:</strong> Observations of others simply draw an organism's attention toward a specific object, event, or location.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Contagion:</strong> The \"Response Facilitation Effect.\" Behaviors performed by one act as a releaser for the exact same innate behavior in others (e.g., a satiated animal starts eating again because a hungry animal starts eating).</li>" +
    "<li style='margin-bottom: 10px;'>Contagion works in conjunction with <strong>Instinctive behaviors</strong> like feeding, flight, and mirrored courtship displays.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Imitation:</strong> Acquisition of a <em>novel</em> response (spatially new manipulation).</li>" +
    "<li style='margin-bottom: 10px;'><strong>Copying:</strong> Observer repeats a model's behavior for a reward. Unlike imitation, the behavior does <em>not</em> need to be novel.</li>" +
    "</ul>", 1
));

t11_2.addBlock(new ImageBlock("images/Screenshot 2026-08-06 191548.png", "Diagram of two fish demonstrating local/stimulus enhancement"));

t11_2.addBlock(new DefinitionBlock("Vocal Imitation", "Copying that involves pushing air through vocal membranes to re-create properties of a previously experienced sound. No mammals other than humans can reproduce speech sounds as well as birds can."));

// EXAM FOCUS (Red)
t11_2.addBlock(new ParagraphBlock(
    "<strong>Template Model of Song Learning:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>A model of song learning in birds featuring three basic phases: <strong>1. Song memorization</strong>, <strong>2. Song practice</strong>, and <strong>3. Song utilization</strong>.</li>" +
    "</ul>", 1
));
ch11.addTopic(t11_2);

// ==========================================
// CULTURE & CONFORMITY
// ==========================================
const t11_3 = new Topic("ch11-t3", "Culture & Social Conformity");

t11_3.addBlock(new ParagraphBlock(
    "<strong>Culture vs. Regular Learning:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 10px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Culture:</strong> A system of information transfer affecting an individual's phenotype (e.g., rats learning what foods are safe by smelling other rats).</li>" +
    "<li style='margin-bottom: 10px;'>A single individual can dramatically change the behaviors of an entire group.</li>" +
    "<li style='margin-bottom: 10px;'>In regular learning, when an animal dies, the learning dies with them. Culture allows learning to survive and changes populations <em>much quicker</em> than natural selection.</li>" +
    "</ul>"
));

// EXAM FOCUS (Red)
t11_3.addBlock(new ParagraphBlock(
    "<strong>Modes of Cultural Transmission:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Vertical:</strong> Parent to offspring.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Horizontal:</strong> Peer to peer.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Oblique:</strong> Non-parent adult to younger individual.</li>" +
    "</ul>", 1
));

t11_3.addBlock(new ImageBlock("images/Screenshot 2026-08-06 191558.png", "Three panels illustrating vertical, horizontal, and oblique modes of cultural transmission"));

t11_3.addBlock(new DefinitionBlock("Social Conformity", "The tendency to adopt the behavior of the group. It allows for rapid acquisition of safe/adaptive information, but it can also actively hinder the development of highly advantageous novel behaviors."));
ch11.addTopic(t11_3);

// ==========================================
// LEARNING ACROSS THE LIFESPAN
// ==========================================
const t11_4 = new Topic("ch11-t4", "Early Lifespan & Imprinting");

t11_4.addBlock(new ParagraphBlock(
    "<strong>Milestones in Early Learning:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 10px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>25 Weeks Gestation:</strong> Fetal brain and sense organs can perceive sound; habituation and recognition happen <em>before</em> birth.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Ages 4 to 5:</strong> Complex grammar and reading usually become evident.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Adolescence:</strong> Profound maturation of <strong>working memory</strong> and <strong>executive function</strong>.</li>" +
    "</ul>"
));

// EXAM FOCUS (Red)
t11_4.addBlock(new ParagraphBlock(
    "<strong>Sensitive Periods & Imprinting:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Sensitive period:</strong> A time window (usually early in life) where specific learning occurs most easily and effectively.</li>" +
    "<li style='margin-bottom: 10px;'><em>Human Example:</em> Children raised in institutions until ~2 years of age show permanent differences in IQ, working memory, attention, and autistic-like behaviors.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Imprinting:</strong> Animals (especially birds) form an intense attachment to the very first individual they see after birth.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Migration in Fish:</strong> Juveniles imprint on the specific chemical odors of their natal streams during a sensitive period and use it to navigate home years later.</li>" +
    "</ul>", 1
));

t11_4.addBlock(new ImageBlock("images/Screenshot 2026-08-06 191608.png", "Graphs showing the maturation of working memory via digit span and 2-back task scores increasing through adolescence"));
ch11.addTopic(t11_4);

// ==========================================
// AGING MEMORY
// ==========================================
const t11_5 = new Topic("ch11-t5", "Aging Memory: Adulthood Through Old Age");

// EXAM FOCUS (Red)
t11_5.addBlock(new ParagraphBlock(
    "<strong>Cognitive Decline Timelines (Seattle Longitudinal Study):</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>20s through 50s:</strong> Relatively little change in most cognitive abilities (including verbal memory).</li>" +
    "<li style='margin-bottom: 10px;'><strong>Mid-30s:</strong> <strong>Working memory</strong> is one of the first abilities to begin declining.</li>" +
    "<li style='margin-bottom: 10px;'><strong>60s+:</strong> Many cognitive abilities begin a sharper decline.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Old Age:</strong> <strong>Semantic knowledge</strong> and <strong>verbal ability</strong> remain exceptionally strong.</li>" +
    "</ul>", 1
));

t11_5.addBlock(new ImageBlock("images/Screenshot 2026-08-06 191615.png", "Graph charting human cognition across the lifespan, showing declines in various abilities after age 60"));

// EXAM FOCUS (Red)
t11_5.addBlock(new ParagraphBlock(
    "<strong>Conditioning and Skill Learning in Aging:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>In general, learning by conditioning and acquiring new skills declines with age.</li>" +
    "<li style='margin-bottom: 10px;'>However, <strong>highly practiced skills</strong> are maintained incredibly well.</li>" +
    "</ul>", 1
));

// EXAM FOCUS (Red)
t11_5.addBlock(new ParagraphBlock(
    "<strong>Types of Memories and Aging (Cheat Sheet):</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>Recalling your wedding day = <strong>Episodic memory (Stable)</strong>.</li>" +
    "<li style='margin-bottom: 10px;'>Remembering a mental shopping list = <strong>Working memory (Declines)</strong>.</li>" +
    "<li style='margin-bottom: 10px;'>Remembering how to make coffee = <strong>Skill memory (Stable)</strong>.</li>" +
    "<li style='margin-bottom: 10px;'>Learning a new friend's name = <strong>Acquiring NEW semantic info (Declines)</strong>.</li>" +
    "<li style='margin-bottom: 10px;'>Learning to use a new phone = <strong>Acquiring NEW skill (Declines)</strong>.</li>" +
    "</ul>", 1
));
ch11.addTopic(t11_5);

// ==========================================
// GENETICS & BRAIN SUBSTRATES
// ==========================================
const t11_6 = new Topic("ch11-t6", "Genetics, Environment, and Brain Substrates");

// EXAM FOCUS (Red)
t11_6.addBlock(new ParagraphBlock(
    "<strong>The Nature vs. Nurture Split:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Genetics (>50%):</strong> Twin studies show identical twins are more similar than fraternal twins on working memory/verbal tests. Selective breeding experiments also successfully bred \"Maze-bright\" and \"Maze-dull\" rats.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Environment (<50%):</strong> Nongenetic factors (health, stress, living conditions) make up the rest. Early exposure to enriched environments boosts learning; severe deprivation heavily impairs it.</li>" +
    "</ul>", 1
));

t11_6.addBlock(new ImageBlock("images/Screenshot 2026-08-06 191632.png", "Graphs illustrating errors in maze-bright versus maze-dull rats across selectively bred generations and environmental conditions"));

// EXAM FOCUS (Red)
t11_6.addBlock(new ParagraphBlock(
    "<strong>Sex Differences in the Brain:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>Men's brains are ~100 grams heavier and contain ~4 billion more neurons.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Male > Female:</strong> Visual and Spatial processing areas are larger.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Female > Male:</strong> Working memory and Language processing areas are larger.</li>" +
    "<li style='margin-bottom: 10px;'><em>Note:</em> While estrogen may improve verbal learning and testosterone may improve spatial learning, clear patterns are not always found and results can be inconsistent.</li>" +
    "</ul>", 1
));

t11_6.addBlock(new ImageBlock("images/Screenshot 2026-08-06 191649.png", "Brain diagrams showing anatomical and functional processing differences between males and females"));

t11_6.addBlock(new ParagraphBlock(
    "<strong>The Aging Brain:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 10px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Neuron Loss:</strong> Volume shrinks in the lateral prefrontal cortex. However, the primary visual cortex declines very little.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Hippocampus:</strong> It shrinks in overall volume, but does <em>not</em> actually show much neuron loss in humans.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Synaptic Stability:</strong> Neuronal plasticity (LTP) degrades, meaning new learning struggles to survive.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Consolidation:</strong> Reduced/disrupted slow-wave sleep (SWS) severely impairs the aged hippocampus's ability to encode new memories.</li>" +
    "</ul>"
));
ch11.addTopic(t11_6);

psy347.addChapter(ch11);