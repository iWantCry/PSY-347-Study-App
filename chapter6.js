const ch6 = new Chapter("ch6", "Chapter 6: Generalization and Discrimination Learning");

// ==========================================
// ADAPTATIONS & EXAPTATIONS
// ==========================================
const t6_1 = new Topic("ch6-t1", "Adaptations & Exaptations");

t6_1.addBlock(new ParagraphBlock(
    "<strong>Generality vs. Specificity:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 10px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>Learning systems possess both generality and specificity.</li>" +
    "<li style='margin-bottom: 10px;'>Evolutionary processes create traits to increase an organism's fitness.</li>" +
    "</ul>"
));

// EXAM FOCUS (Red)
t6_1.addBlock(new ParagraphBlock(
    "<strong>Adaptations:</strong><br> Adjustments of organisms to increase fitness; traits selected exactly for certain functions." +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 10px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Structural:</strong> Deals with the physical shape of parts of the organism (internal & external).</li>" +
    "<li style='margin-bottom: 10px;'><strong>Physiological:</strong> Deals with the chemical reactions that occur within an organism.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Behavioral:</strong> Deals with the actual actions of organisms.</li>" +
    "</ul>", 1
));

t6_1.addBlock(new DefinitionBlock("Exaptations", "A trait adapted for solving one problem that is now co-opted to solve another problem (e.g., bird feathers originally evolved to keep birds warm, but now help them fly). They still increase an animal's fitness."));

t6_1.addBlock(new ParagraphBlock("<strong>Adaptive Specialization in Learning:</strong> For a true adaptive specialization, mechanisms for solving one problem should be <em>functionally incompatible</em> with solving others. For example, a learning mechanism that allows habits to build up over time is incompatible with one that needs to respond in a single trial."));
ch6.addTopic(t6_1);

// ==========================================
// ADAPTATION IN OC & CC
// ==========================================
const t6_2 = new Topic("ch6-t2", "Adaptation in OC and CC");

t6_2.addBlock(new ParagraphBlock(
    "<strong>Operant Conditioning (OC) Adaptations:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 10px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>The <strong>Law of Effect</strong> dictates that animals work to maximize benefits (food, water, sex) and minimize costs.</li>" +
    "</ul>"
));

t6_2.addBlock(new ImageBlock("images/Screenshot 2026-07-30 085221.png", "2x2 Matrix showing Reward, Punishment, Omission, and Avoidance/Escape"));

t6_2.addBlock(new ParagraphBlock(
    "<strong>The 4 Types of OC Adaptations:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 10px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Reward:</strong> Behavior produces a good S* &rarr; increases strength of future responses.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Punishment:</strong> Behavior produces a bad S* &rarr; decreases strength of future responses.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Omission:</strong> Behavior prevents a good S* &rarr; decreases strength of future responses.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Avoidance/Escape:</strong> Behavior prevents a bad S* &rarr; increases strength of future responses.</li>" +
    "</ul>"
));

t6_2.addBlock(new ParagraphBlock(
    "<strong>Classical Conditioning (CC) Adaptations:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 10px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>Animals learn that a signal predicts an S* is about to happen, allowing them to prepare (e.g., Pavlov's dogs salivating to digest food, or avoiding poisons).</li>" +
    "<li style='margin-bottom: 10px;'><strong>Blue Gouramis (Territoriality):</strong> Males signaled with a light before an intruder appeared acted much more aggressively (bites/tailbeats) and would win fights compared to unpaired males.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Japanese Quail (Reproduction):</strong> Males presented with a red light paired with a female stayed near the light and got to the female quicker than unpaired males.</li>" +
    "</ul>"
));
ch6.addTopic(t6_2);

// ==========================================
// STIMULUS CONTROL & GENERALIZATION
// ==========================================
const t6_3 = new Topic("ch6-t3", "Stimulus Control & Generalization");

t6_3.addBlock(new DefinitionBlock("Stimulus Control", "The influence of cues in the world on an organism's behavior. When behavior is consistently reinforced in the presence of a stimulus, that stimulus reliably affects the probability of the behavior."));

t6_3.addBlock(new ParagraphBlock(
    "<strong>How Stimulus Control Works:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 10px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>An S<sup>D</sup> does <em>not</em> automatically elicit behavior like a CS elicits a reflex.</li>" +
    "<li style='margin-bottom: 10px;'>It simply signals the availability of reinforcement, increasing the probability of the behavior (e.g., a ringing telephone exerts stimulus control over picking it up).</li>" +
    "</ul>"
));

t6_3.addBlock(new DefinitionBlock("Generalization", "The transfer of past learning to novel events and problems. Stimulus generalization is the tendency for an operant response to be emitted in the presence of a stimulus similar to the original S<sup>D</sup>."));

// EXAM FOCUS (Red)
t6_3.addBlock(new DefinitionBlock(
    "Generalization Gradient", 
    "<strong>A curve showing how changes in the physical properties of stimuli (horizontal axis) correspond to changes in responding (vertical axis).</strong><br><br>The animal's response changes in a graded fashion depending on the degree of similarity. It shows a peak (maximal responding) corresponding to the original trained stimulus, dropping off smoothly as stimuli become more distinct.", 
    1
));

t6_3.addBlock(new ImageBlock("images/Screenshot 2026-07-30 085316.png", "Wavelength Generalization Gradient peaking at 580nm"));
ch6.addTopic(t6_3);

// ==========================================
// MODELING GENERALIZATION
// ==========================================
const t6_4 = new Topic("ch6-t4", "Modeling Generalization");

t6_4.addBlock(new DefinitionBlock("Consequential Region", "A set of stimuli in the world that share the same consequence as a stimulus whose consequence is already known. Shepard argued animals expect the chance of two stimuli sharing a consequence to drop off sharply as they become more distinct."));

t6_4.addBlock(new ParagraphBlock("<strong>Two Learning Models for Generalization:</strong>"));

t6_4.addBlock(new ListBlock([
    "<strong>Discrete-Component Representation:</strong> Each individual stimulus corresponds to exactly one node in the model. This simple network <em>fails</em> to show a smooth generalization gradient because it gives <strong>no response</strong> to a similar stimulus (like yellow-orange) if it was only trained on yellow."
]));

t6_4.addBlock(new ImageBlock("images/Screenshot 2026-07-30 085505.png", "Discrete-Component Representation Node Diagram"));

t6_4.addBlock(new ListBlock([
    "<strong>Distributed Representation:</strong> Information is coded as a pattern of activation distributed across many different shared nodes. This model <em>successfully</em> generates a proper generalization gradient, showing peak responding to the trained stimulus and decreased responses for stimuli that are increasingly different."
]));

t6_4.addBlock(new ImageBlock("images/Screenshot 2026-07-30 085511.png", "Distributed Representation Node Diagram"));
ch6.addTopic(t6_4);

// ==========================================
// DISCRIMINATION TRAINING
// ==========================================
const t6_5 = new Topic("ch6-t5", "Discrimination Training");

t6_5.addBlock(new DefinitionBlock("Discrimination", "The process by which animals or people learn to respond differently to different stimuli (the opposite of generalization)."));

t6_5.addBlock(new ParagraphBlock("Discrimination training involves the reinforcement of responding in the presence of one stimulus (S<sup>D</sup>) and not another stimulus (S<sup>&Delta;</sup>, which signals the absence of reinforcement)."));

t6_5.addBlock(new ParagraphBlock("<strong>Behavioral Processes in Generalization and Discrimination:</strong>"));
t6_5.addBlock(new ImageBlock("images/Screenshot 2026-07-30 085609.png", "Behavioral Processes Table comparing Similar and Dissimilar stimuli with Same and Different outcomes"));

// EXAM FOCUS (Red)
t6_5.addBlock(new ParagraphBlock(
    "<strong>Discrimination Learning and Learned Specificity:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Herbert Jenkins's pigeon study:</strong></li>" +
    "<li style='margin-bottom: 10px;'><strong>Group 1 (Standard):</strong> 1 kHz tone signaled pecking would result in food delivery. S (1 kHz) &rarr; R (peck) &rarr; O (food).</li>" +
    "<li style='margin-bottom: 10px;'><strong>Group 2 (Discrimination):</strong> 1 kHz tone meant food, but a very similar 950 Hz tone meant no food. S (950 Hz) &rarr; R (peck) &rarr; O (no food). This forced them to develop learned specificity.</li>" +
    "</ul>", 1
));

t6_5.addBlock(new ParagraphBlock("The more dimensions along which objects differ (e.g., duration, intensity, frequency), the easier it is to establish discriminative stimulus control."));

// EXAM FOCUS (Red)
t6_5.addBlock(new DefinitionBlock(
    "Fading & Errorless Discrimination", 
    "<strong>Fading: Gradually altering the intensity of a stimulus.</strong><br><br>Errorless discrimination minimizes errors and frustration by introducing the S<sup>&Delta;</sup> early in training in a weak form, and gradually fading it in. <em>Problem:</em> Discriminations established through errorless training are very rigid and difficult to modify later.", 
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
    "<strong>To study animal memory &ndash; an animal is shown a certain Sample Stimulus at one point in time and is required to identify that exact Stimulus at a later point in time to receive a reinforcer.</strong>", 
    1
));

t6_6.addBlock(new ImageBlock("images/Screenshot 2026-07-30 085551.png", "Delayed Matching to Sample Task Flowchart"));

t6_6.addBlock(new DefinitionBlock("Directed Forgetting", "When an organism is explicitly told to forget something. Pigeons do significantly worse on a test phase following a 'forget' cue than a 'remember' cue."));

t6_6.addBlock(new ImageBlock("images/Screenshot 2026-07-30 085559.png", "Directed Forgetting Flowchart showing Remember vs Forget trials"));
ch6.addTopic(t6_6);

// ==========================================
// GENERALIZATION IN PEOPLE
// ==========================================
const t6_7 = new Topic("ch6-t7", "Generalizations in People");

t6_7.addBlock(new ParagraphBlock(
    "<strong>Variability in Training:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 10px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>Variability improves generalization, especially when a person already has a high level of initial knowledge.</li>" +
    "<li style='margin-bottom: 10px;'>For those with little initial knowledge, it helps to start out with minimal variation.</li>" +
    "</ul>"
));

t6_7.addBlock(new ParagraphBlock(
    "<strong>Stereotypes & Social Discrimination:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 10px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Stereotype:</strong> A set of beliefs about attributes of the members of a group. Unlike a prototype, it may not be accurate. People filter stereotypes through their own self-interest.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Confirmation Bias:</strong> Once a negative stereotype is formed, we are highly likely to pay attention only to examples that confirm it.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Social Discrimination:</strong> The unfair differential treatment of individuals based on perceived group membership.</li>" +
    "<li style='margin-bottom: 10px;'>Trouble arises when people use generalizations not based on true statistics, or use valid statistics to justify discriminating against individuals.</li>" +
    "</ul>"
));
ch6.addTopic(t6_7);

psy347.addChapter(ch6);