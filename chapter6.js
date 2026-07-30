const ch6 = new Chapter("ch6", "Chapter 6: Generalization and Discrimination Learning");

// ==========================================
// ADAPTATIONS & EXAPTATIONS
// ==========================================
const t6_1 = new Topic("ch6-t1", "Adaptations & Exaptations");
t6_1.addBlock(new ParagraphBlock("Learning systems can have both generality AND specificity. Evolutionary processes create both adaptations and exaptations to increase fitness."));

// EXAM FOCUS (Red)
t6_1.addBlock(new ParagraphBlock("<strong>Adaptations:</strong> Structural, physiological, or behavioral trait possessed by an organism which allows it to survive and reproduce in the environment in which it lives.", 1));
t6_1.addBlock(new ListBlock([
    "<strong>Structural</strong> - deals with shape of parts of organism (internal & external).",
    "<strong>Physiological</strong> - deals with the chemical reactions that occur within an organism.",
    "<strong>Behavioral</strong> - deals with the actual actions of organisms."
], 1));

t6_1.addBlock(new DefinitionBlock("Exaptations", "A trait adapted for solving one problem that is now used to solve another problem (e.g., bird feathers originally evolved to keep birds warm, but now they help them fly). They still increase an animal's fitness."));
t6_1.addBlock(new ParagraphBlock("For a true adaptive specialization in learning, mechanisms for solving one problem should be functionally incompatible with solving others. For example, a learning mechanism allowing habits to build up over time is incompatible with one that needs to respond in one trial."));
ch6.addTopic(t6_1);

// ==========================================
// ADAPTATION IN OC & CC
// ==========================================
const t6_2 = new Topic("ch6-t2", "Adaptation in OC and CC");
t6_2.addBlock(new ParagraphBlock("In Operant Conditioning (OC), the Law of Effect dictates that animals work to maximize benefits and minimize costs."));

// Added Adaptation in OC Matrix Image
t6_2.addBlock(new ImageBlock("images/Screenshot 2026-07-30 085221.png", "2x2 Matrix showing Reward, Punishment, Omission, and Avoidance/Escape"));

t6_2.addBlock(new ListBlock([
    "<strong>Reward:</strong> when behavior produces a good S*, it increases strength of future responses.",
    "<strong>Punishment:</strong> when behavior produces a bad S*, it decreases strength of future responses.",
    "<strong>Omission:</strong> when behavior prevents a good S*, it decreases strength of future responses.",
    "<strong>Avoidance/Escape:</strong> when behavior prevents a bad S*, it increases the strength of future responses."
]));

t6_2.addBlock(new ParagraphBlock("In Classical Conditioning (CC), an animal learns that a signal predicts an S* is about to happen, allowing them to prepare. This helps dogs digest food, or helps animals avoid poisons."));
t6_2.addBlock(new ListBlock([
    "<span class='definition-term'>Blue Gouramis (Territoriality):</span> Males signaled with a light before an intruder appeared acted much more aggressively and would have won any fights compared to unpaired males.",
    "<span class='definition-term'>Japanese Quail (Reproduction):</span> Males presented with a red light paired with a female stayed near the light and got to the female quicker than unpaired males."
]));
ch6.addTopic(t6_2);

// ==========================================
// STIMULUS CONTROL & GENERALIZATION
// ==========================================
const t6_3 = new Topic("ch6-t3", "Stimulus Control & Generalization");
t6_3.addBlock(new DefinitionBlock("Stimulus Control", "The influence of cues in the world on an organism's behavior. When behavior has been consistently reinforced in the presence of a stimulus, that stimulus reliably affects the probability of the behavior."));
t6_3.addBlock(new ParagraphBlock("An S<sup>D</sup> does not automatically elicit behavior like a CS elicits a reflex; it simply signals the availability of reinforcement, increasing the probability that the behavior will occur. For example, a ringing telephone exerts stimulus control over people picking it up."));

t6_3.addBlock(new DefinitionBlock("Generalization", "The transfer of past learning to novel events and problems. Stimulus generalization is the tendency for an operant response to be emitted in the presence of a stimulus similar to the S<sup>D</sup>. The more similar the stimulus, the stronger the response."));

// EXAM FOCUS (Red)
t6_3.addBlock(new DefinitionBlock(
    "Generalization Gradient", 
    "<strong>Generalization gradient - curve showing how changes in physical properties of stimuli (plotted on horizontal axis) correspond to changes in responding (plotted on the vertical axis).</strong> Animal's response changes in a graded fashion that depends on degree of similarity between test S and original training S. After training in which a single S has been reinforced repeatedly, generalization gradients show a peak (point of maximal responding) that corresponds to the original stimulus.", 
    1
));

// Added Wavelength Gradient Image
t6_3.addBlock(new ImageBlock("images/Screenshot 2026-07-30 085316.png", "Wavelength Generalization Gradient peaking at 580nm"));
ch6.addTopic(t6_3);

// ==========================================
// MODELING GENERALIZATION
// ==========================================
const t6_4 = new Topic("ch6-t4", "Modeling Generalization");
t6_4.addBlock(new DefinitionBlock("Consequential Region", "A set of stimuli in the world that share the same consequence as a stimulus whose consequence is already known. Shepard argued that animals expect the chance of two stimuli having the same consequence drops off sharply as the stimuli become more distinct."));

t6_4.addBlock(new ParagraphBlock("Learning models attempt to represent stimuli in different ways to test generalization:"));

t6_4.addBlock(new ListBlock([
    "<span class='definition-term'>Discrete-Component Representation:</span> Each individual stimulus corresponds to exactly one node in the model. This simple network fails to show a smooth generalization gradient because it gives <em>no response</em> to a similar stimulus (like yellow-orange) if it was only trained on yellow."
]));

// Added Discrete-Component Diagram Image
t6_4.addBlock(new ImageBlock("images/Screenshot 2026-07-30 085505.png", "Discrete-Component Representation Node Diagram"));

t6_4.addBlock(new ListBlock([
    "<span class='definition-term'>Distributed Representation:</span> Information is coded as a pattern of activation distributed across many different nodes. This model successfully generates a proper generalization gradient, showing peak responding to the trained stimulus and decreased responses for stimuli that are increasingly different."
]));

// Added Distributed Representation Diagram Image
t6_4.addBlock(new ImageBlock("images/Screenshot 2026-07-30 085511.png", "Distributed Representation Node Diagram"));
ch6.addTopic(t6_4);

// ==========================================
// DISCRIMINATION TRAINING
// ==========================================
const t6_5 = new Topic("ch6-t5", "Discrimination Training");
t6_5.addBlock(new DefinitionBlock("Discrimination", "The process by which animals or people learn to respond differently to different stimuli. It is the opposite of generalization."));
t6_5.addBlock(new ParagraphBlock("Discrimination training involves the reinforcement of responding in the presence of one stimulus (the S<sup>D</sup>) and not another stimulus (the S<sup>&Delta;</sup>, which signals the absence of reinforcement)."));

// Added Behavioral Processes (Broccoli) Table Image
t6_5.addBlock(new ParagraphBlock("<strong>Behavioral Processes in Generalization and Discrimination:</strong>"));
t6_5.addBlock(new ImageBlock("images/Screenshot 2026-07-30 085609.png", "Behavioral Processes Table comparing Similar and Dissimilar stimuli with Same and Different outcomes"));

// EXAM FOCUS (Red)
t6_5.addBlock(new ParagraphBlock("<strong>Discrimination Learning and Learned Specificity:</strong>", 1));
t6_5.addBlock(new ListBlock([
    "<strong>Herbert Jenkins's study was based on the behavior of two groups of pigeons.</strong>",
    "<strong>One group received standard training in which 1 kHz tone signaled that pecking key would result in food delivery.</strong> S (1 kHz tone) &rarr; R (key peck) &rarr; O (food).",
    "<strong>Second group of pigeons received discrimination training in which one of two different (but similar) S was presented on each trial.</strong> S (1 kHz tone) &rarr; R (key peck) &rarr; O (food). S (950 Hz tone) &rarr; R (key peck) &rarr; O (no food)."
], 1));

t6_5.addBlock(new ParagraphBlock("The more dimensions along which objects differ (e.g., duration, intensity, frequency), the easier it is to establish discriminative stimulus control."));

// EXAM FOCUS (Red)
t6_5.addBlock(new DefinitionBlock(
    "Fading & Errorless Discrimination", 
    "<strong>Fading: gradually altering the intensity of stimulus (music).</strong><br><br>Errorless discrimination training minimizes the number of errors and frustration. It does this by introducing the S<sup>&Delta;</sup> early in training in a weak form, and gradually strengthening it (fading). Problem: Discriminations established through errorless training are very difficult to modify later compared to normal discrimination training.", 
    1
));
ch6.addTopic(t6_5);

// ==========================================
// MEMORY & STIMULUS CONTROL
// ==========================================
const t6_6 = new Topic("ch6-t6", "Memory and Stimulus Control");
t6_6.addBlock(new ParagraphBlock("The act of <em>remembering</em>, to a large extent, is a matter of stimulus control."));

// EXAM FOCUS (Red)
t6_6.addBlock(new DefinitionBlock(
    "Delayed Matching to Sample Task", 
    "<strong>To study animal memory &ndash; animal is shown a certain S at one point in time and is then required to identify that S at a later point in time to receive a reinforcer &ndash; Delayed Matching to Sample Task. Procedure often used for this = delayed matching-to-sample.</strong>", 
    1
));

// Added Delayed Matching Flowchart Image
t6_6.addBlock(new ImageBlock("images/Screenshot 2026-07-30 085551.png", "Delayed Matching to Sample Task Flowchart"));

t6_6.addBlock(new DefinitionBlock("Directed Forgetting", "When an organism is told to forget something. Pigeons do worse on a test phase following a 'forget' cue than a 'remember' cue."));

// Added Directed Forgetting Flowchart Image
t6_6.addBlock(new ImageBlock("images/Screenshot 2026-07-30 085559.png", "Directed Forgetting Flowchart showing Remember vs Forget trials"));
ch6.addTopic(t6_6);

// ==========================================
// GENERALIZATION IN PEOPLE
// ==========================================
const t6_7 = new Topic("ch6-t7", "Generalizations in People");
t6_7.addBlock(new ParagraphBlock("Variability in training can improve generalization. This variability is especially helpful when a person has a high level of initial knowledge and skill. For those with little initial knowledge, it helps to start out with minimal variation."));

t6_7.addBlock(new ListBlock([
    "<span class='definition-term'>Stereotype:</span> A set of beliefs about attributes of the members of a group. Once formed, we are more likely to pay attention to examples that confirm the stereotype (confirmation bias).",
    "<span class='definition-term'>Prototype:</span> Usually defined externally based on the central or common tendencies of exemplars of a category.",
    "<span class='definition-term'>Discrimination (Social):</span> The unfair differential treatment of individuals on the basis of the group to which they are perceived to belong."
]));
ch6.addTopic(t6_7);

psy347.addChapter(ch6);