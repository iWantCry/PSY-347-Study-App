const ch11 = new Chapter("ch11", "Chapter 11: Social Learning & Lifespan");

// ==========================================
// SOCIAL LEARNING THEORY & IMITATION
// ==========================================
const t11_1 = new Topic("ch11-t1", "Social Learning Theory & Imitation");
t11_1.addBlock(new ParagraphBlock("Social learning involves situations where an individual actively monitors events involving other individuals and then chooses later actions based on those observations. It involves two pieces: the Model (demonstrator/tutor) and the Observer. It differs from classical and operant conditioning because researchers cannot reliably predict what an organism will learn from observing others."));

t11_1.addBlock(new ParagraphBlock("Albert Bandura and colleagues demonstrated this by showing that preschool children would become more aggressive after observing aggressive adults in the famous 'Bobo Doll' experiment."));

// EXAM FOCUS (Red)
t11_1.addBlock(new ParagraphBlock(
    "<strong>Social Learning Theory & Copying:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Social learning theory:</strong> theory of human behavior, prominent from 1940s-1960s, proposing kinds of reinforcements an individual has experienced in past social contexts will determine how individual will act in any given situation.</li>" +
    "<li style='margin-bottom: 10px;'>According to Bandura, observers can gain information about whether particular action will be rewarded or punished by witnessing outcomes of model's actions.</li>" +
    "<li style='margin-bottom: 10px;'><strong>True imitation:</strong> copying that involves reproducing motor acts.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Emulation:</strong> copying that involves replicating an outcome without replicating specific motor acts.</li>" +
    "</ul>", 1
));

// EXAM FOCUS (Red)
t11_1.addBlock(new ParagraphBlock(
    "<strong>Studies of True Imitation:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>Technique developed to investigate true imitation abilities is called <strong>two-action test</strong>.</li>" +
    "<li style='margin-bottom: 10px;'>Enabled researchers to compare imitative capacities across species (e.g., chimpanzees vs. children observing a poke vs. twist action to open a box).</li>" +
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
    "<strong>Stimulus Enhancement & Contagion:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Stimulus (local) enhancement:</strong> observations of other individuals draw an organism's attention toward specific objects, events, or locations within environment.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Contagion:</strong> \"Response Facilitation Effect\" &ndash; behaviors in which performers of pattern of behavior by one act as releaser for same behavior in others (e.g., satiated animals will resume eating upon introduction of a hungry animal that begins eating).</li>" +
    "<li style='margin-bottom: 10px;'>Works in conjunction with <strong>Instinctive behaviors</strong> &ndash; feeding, flight, mirrored courtship displays.</li>" +
    "</ul>", 1
));

t11_2.addBlock(new ImageBlock("images/Screenshot 2026-08-06 191548.png", "Diagram of two fish demonstrating local/stimulus enhancement"));

t11_2.addBlock(new ParagraphBlock("Other means by which social learning operates include:"));
t11_2.addBlock(new ListBlock([
    "<strong>Imitation:</strong> Acquisition of a novel response (a spatially new manipulation) through observation.",
    "<strong>Copying:</strong> Observer repeats what a model does, leading to reward. Different from imitation because the behavior does not need to be novel (e.g., they already know how to forage, they just copy doing it here)."
]));

t11_2.addBlock(new ParagraphBlock("Speech imitation is a type of vocal imitation (copying that involves pushing air through vocal membranes to re-create properties of a previously experienced sound). No mammals other than humans are able to reproduce speech sounds as well as birds can."));

// EXAM FOCUS (Red)
t11_2.addBlock(new ParagraphBlock(
    "<strong>Template model of song learning:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>Model of song learning with three basic phases: song memorization, song practice, and song utilization.</li>" +
    "</ul>", 1
));
ch11.addTopic(t11_2);

// ==========================================
// CULTURE & CONFORMITY
// ==========================================
const t11_3 = new Topic("ch11-t3", "Culture & Social Conformity");
t11_3.addBlock(new ParagraphBlock("Culture is a system of information transfer affecting an individual's phenotype (e.g., learning what foods are dangerous by smelling what other rats eat). Single individuals can dramatically change behaviors in an entire group. In regular learning, when an animal dies, the learning dies too, but cultural learning is MUCH quicker than natural selection in changing populations."));

// EXAM FOCUS (Red)
t11_3.addBlock(new ParagraphBlock(
    "<strong>Modes of Cultural Transmission:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Vertical, horizontal, and oblique.</strong></li>" +
    "</ul>", 1
));

t11_3.addBlock(new ImageBlock("images/Screenshot 2026-08-06 191558.png", "Three panels illustrating vertical, horizontal, and oblique modes of cultural transmission"));

t11_3.addBlock(new DefinitionBlock("Social Conformity", "The tendency to adopt the behavior of the group. While it allows for rapid acquisition of adaptive information and provides protective functions, it can also hinder the development of advantageous novel behaviors."));
ch11.addTopic(t11_3);

// ==========================================
// LEARNING ACROSS THE LIFESPAN
// ==========================================
const t11_4 = new Topic("ch11-t4", "Early Lifespan & Imprinting");
t11_4.addBlock(new ParagraphBlock("By about 25 weeks of gestational age, the brain and sense organs are sufficiently developed for a fetus to start perceiving and learning about sounds (habituation and recognition are possible before birth). An explosion in learning marks the first few years of life, with complex grammar and reading usually evident by 4 to 5 years."));

// EXAM FOCUS (Red)
t11_4.addBlock(new ParagraphBlock(
    "<strong>Sensitive Periods & Imprinting:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Sensitive period:</strong> time window, usually early in life, during which certain kind of learning occurs most easily and is most effective.</li>" +
    "<li style='margin-bottom: 10px;'>Studies of children raised in institutions until ~2 years of age show differences in IQ, working memory, autistic-like behaviors, and attention, proving the importance of early sensitive periods for humans.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Imprinting</strong> refers to way that animals of many species, including birds, are especially likely to form an attachment to first individual they see after birth.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Migration in Fish:</strong> Juveniles learn odors of natal streams (imprinting!) during a specific \"sensitive period\" and use odors later to guide them home.</li>" +
    "</ul>", 1
));

t11_4.addBlock(new ParagraphBlock("During adolescence, some of the most profound changes occur in working memory and executive function maturation."));

t11_4.addBlock(new ImageBlock("images/Screenshot 2026-08-06 191608.png", "Graphs showing the maturation of working memory via digit span and 2-back task scores increasing through adolescence"));
ch11.addTopic(t11_4);

// ==========================================
// AGING MEMORY
// ==========================================
const t11_5 = new Topic("ch11-t5", "Aging Memory: Adulthood Through Old Age");

// EXAM FOCUS (Red)
t11_5.addBlock(new ParagraphBlock(
    "<strong>Cognitive Decline Timelines:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>Seattle Longitudinal Study tested more than 6,000 individuals and found <strong>relatively little change in most kinds of cognitive ability</strong>&mdash;including verbal memory&mdash;as participants <strong>age from 20s-50s</strong>.</li>" +
    "<li style='margin-bottom: 10px;'>Many cognitive abilities start to decline as humans reach <strong>60s+</strong>.</li>" +
    "<li style='margin-bottom: 10px;'>Some forms of memory, such as <strong>working memory</strong>, start to decline in humans as young as mid-30s, others, such as <strong>semantic knowledge and verbal ability</strong>, tend to remain strong well into old age.</li>" +
    "</ul>", 1
));

t11_5.addBlock(new ImageBlock("images/Screenshot 2026-08-06 191615.png", "Graph charting human cognition across the lifespan, showing declines in various abilities after age 60"));

// EXAM FOCUS (Red)
t11_5.addBlock(new ParagraphBlock(
    "<strong>Conditioning and Skill Learning in Aging Adults:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>In general, learning by conditioning declines with age.</li>" +
    "<li style='margin-bottom: 10px;'>Skill learning also declines in old age.</li>" +
    "<li style='margin-bottom: 10px;'>However, even though learning of new associations and skills is slowed in healthy aging, <strong>highly practiced skills tend to be maintained well</strong>.</li>" +
    "</ul>", 1
));

// EXAM FOCUS (Red)
t11_5.addBlock(new ParagraphBlock(
    "<strong>Types of Memories and Aging:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>1. Recalling one's wedding day = episodic memory (doesn't decline much).</li>" +
    "<li style='margin-bottom: 10px;'>2. Remembering the items on this week's shopping list = working memory (declines!).</li>" +
    "<li style='margin-bottom: 10px;'>3. Remembering how to make coffee = skill memory (doesn't decline much).</li>" +
    "<li style='margin-bottom: 10px;'>4. Learning the name of a new friend = acquiring new semantic information (declines with old age).</li>" +
    "<li style='margin-bottom: 10px;'>5. Learning how to take photos with a new phone = learning a new skill (declines with old age).</li>" +
    "</ul>", 1
));
ch11.addTopic(t11_5);

// ==========================================
// GENETICS & BRAIN SUBSTRATES
// ==========================================
const t11_6 = new Topic("ch11-t6", "Genetics, Environment, and Brain Substrates");

// EXAM FOCUS (Red)
t11_6.addBlock(new ParagraphBlock(
    "<strong>Selective Breeding and Twin Studies:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>Early experiment in genetics of learning and memory considered whether animals could be bred for learning ability (\"Maze-bright\" vs \"Maze-dull\" rats).</li>" +
    "<li style='margin-bottom: 10px;'>In twin studies, Identical twins show more similarity than fraternal twins on working memory and verbal/picture information tests.</li>" +
    "<li style='margin-bottom: 10px;'>Some suggest that over half of the variation in individuals' memory scores may be accounted for by genetics.</li>" +
    "</ul>", 1
));

t11_6.addBlock(new ImageBlock("images/Screenshot 2026-08-06 191632.png", "Graphs illustrating errors in maze-bright versus maze-dull rats across selectively bred generations and environmental conditions"));

t11_6.addBlock(new ParagraphBlock("The other half of individual variability is accounted for by nongenetic factors (health, stress, living conditions). Early exposure to an enriched environment produces positive effects, while severe environmental deprivation produces negative effects."));

// EXAM FOCUS (Red)
t11_6.addBlock(new ParagraphBlock(
    "<strong>Effects of Sex Hormones on Brain Organization:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>By adulthood, men's brains are ~100 grams heavier and contain about 4 billion more neurons, on average, than women's brains.</li>" +
    "<li style='margin-bottom: 10px;'>Some brain areas are proportionately larger in one sex than in the other.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Male > Female:</strong> Visual and Spatial processing.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Female > Male:</strong> Working memory and Language processing.</li>" +
    "</ul>", 1
));

t11_6.addBlock(new ImageBlock("images/Screenshot 2026-08-06 191649.png", "Brain diagrams showing anatomical and functional processing differences between males and females"));

t11_6.addBlock(new ParagraphBlock("Circulating sex hormones also have effects (estrogen may improve verbal learning, while testosterone can improve spatial learning), though clear patterns are not always found and results are sometimes inconsistent."));

t11_6.addBlock(new ParagraphBlock("Brain Changes in Aging:"));
t11_6.addBlock(new ListBlock([
    "<strong>Neuron Loss:</strong> Older adults have smaller volume in the lateral prefrontal cortex. However, primary visual cortex declines very little, and the hippocampus shrinks in volume but does not show much actual neuron loss.",
    "<strong>Synaptic Stability:</strong> Neuronal plasticity (LTP) becomes less stable, so new learning may not survive long. Reduced slow-wave sleep (SWS) impairs the aged hippocampus's ability to consolidate new memories."
]));
ch11.addTopic(t11_6);

psy347.addChapter(ch11);