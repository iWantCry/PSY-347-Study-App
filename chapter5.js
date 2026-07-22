const ch5 = new Chapter("ch5", "Chapter 5: Operant Conditioning");

// ==========================================
// BACKGROUND & THORNDIKE
// ==========================================

const t5_1 = new Topic("ch5-t1", "Historical Background & Law of Effect");

// EXAM FOCUS (Red)
t5_1.addBlock(new ParagraphBlock(
    "<strong>Edward L. Thorndike</strong> conducted the <strong>first experimental studies of operant conditioning in animals</strong> by observing how cats learned to escape from puzzle boxes. He believed the intellectual ability of animals should be assessed through systematic investigations rather than circulating anecdotes.", 
    1
));

// Added Thorndike Image
t5_1.addBlock(new ImageBlock("images/Screenshot 2026-07-22 133330.png", "Thorndike's Puzzle Box and Learning Curve"));

// EXAM FOCUS (Red)
t5_1.addBlock(new DefinitionBlock(
    "Thorndike's Law of Effect", 
    "Behaviors leading to satisfying states of affairs are strengthened or 'stamped in', while behaviors leading to an unsatisfactory or annoying state of affairs are weakened or 'stamped out'. <br><br><strong>The law of effect: likelihood of future events increasing when rewards are received.</strong>", 
    1
));

// EXAM FOCUS (Red)
t5_1.addBlock(new ParagraphBlock(
    "<strong>B. F. Skinner concluded that in classical conditioning, organisms experience an outcome (the unconditioned stimulus, or US) whether or not they perform the conditioned response (CR).</strong> In operant conditioning, the outcome O depends on whether the organism performs the response R. Operant and classical conditioning share many characteristics, including negatively accelerated learning curve. Both operant and classical conditioning show extinction.", 
    1
));

t5_1.addBlock(new ListBlock([
    "<strong>Classical Conditioning (CC):</strong> Elicits involuntary and automatic responses from the animal. The reinforcement is presented to elicit the response.",
    "<strong>Operant Conditioning (OC):</strong> Depends on the animal's voluntary emission of a response. The reinforcement is presented <em>after</em> the response."
]));
ch5.addTopic(t5_1);

// ==========================================
// SKINNER & THREE-TERM CONTINGENCY
// ==========================================

const t5_2 = new Topic("ch5-t2", "B.F. Skinner & The Three-Term Contingency");
t5_2.addBlock(new ParagraphBlock("Skinner abandoned the notion that all behavior is reflexive. He divided behavior into <strong>Respondent Behavior</strong> (involuntary/CC) and <strong>Operant Behavior</strong> (voluntary/governed by consequences). During WW2, he even attempted to train pigeons to guide missiles in 'Project Pelican', though it was rejected."));

// EXAM FOCUS (Red)
t5_2.addBlock(new DefinitionBlock(
    "Skinner Box & Free-Operant Learning", 
    "Contrasts with Thorndike's <em>discrete-trials paradigm</em> (where the experimenter defines the beginning and end of each trial). Rats can earn food pellets by pressing a response lever or bar. <strong>'Free operant' procedure b/c rats freely control the rate at which they respond for food.</strong>", 
    1
));

// Added Skinner Box Image
t5_2.addBlock(new ImageBlock("images/Screenshot 2026-07-22 133346.png", "Diagram of a rat inside a Skinner Box"));

// Added Cumulative Recorder Image
t5_2.addBlock(new ImageBlock("images/Screenshot 2026-07-22 133505.png", "Cumulative Recorder graphs showing Acquisition and Extinction"));

t5_2.addBlock(new DefinitionBlock("Operant Behavior", "A class of emitted responses that result in certain consequences, which in turn affect the future probability of those responses. It is defined as a 'class' because exact movements vary (e.g., force of press, which paw is used)."));

// EXAM FOCUS (Red)
t5_2.addBlock(new DefinitionBlock(
    "Three-Term Contingency", 
    "<strong>Three-term contingency: discriminative stimulus, operant behavior, and reinforcer or punisher.<br><br>Antecedent (Tone: S<sup>D</sup>) &rarr; Behavior (Lever press &rarr; R) &rarr; Consequence (Food pellet S<sup>R</sup>).</strong> Notice something &rarr; do something &rarr; get something.", 
    1
));

// EXAM FOCUS (Red)
t5_2.addBlock(new DefinitionBlock(
    "Discriminative Stimuli (S<sup>D</sup>, S<sup>P</sup>, S<sup>&Delta;</sup>)", 
    "<strong>Discriminative stimuli 'set the occasion for' behavior. S<sup>D</sup> = occasion setters!</strong> It does not automatically elicit behavior in manner of CS or US in CC. Tone increases probability that lever press will occur.", 
    1
));

t5_2.addBlock(new ListBlock([
    "<strong>S<sup>D</sup> (Discriminative Stimulus):</strong> Signals a response will be reinforced.",
    "<strong>S<sup>P</sup> (Discriminative Stimulus for Punishment):</strong> Signals a response will be punished (e.g., a police car signals speeding will get a fine).",
    "<strong>S<sup>&Delta;</sup> (Discriminative Stimulus for Extinction):</strong> Signals the absence/nonavailability of a previously available reinforcer (e.g., a buzzer instead of a tone means no food)."
]));

// EXAM FOCUS (Red)
t5_2.addBlock(new DefinitionBlock(
    "Shaping", 
    "<strong>Shaping: operant conditioning technique in which successive approximations to desired response are reinforced.</strong> Positive reinforcement is a good way to strengthen behavior, but what if behavior we want to reinforce never occurs? (e.g., reinforcing a rat only when it stands near the lever, then faces it, then touches it, then presses it).", 
    1
));

t5_2.addBlock(new DefinitionBlock("Chaining", "Operant conditioning technique in which organisms are gradually trained to execute complicated sequences of discrete responses."));
ch5.addTopic(t5_2);

// ==========================================
// CONSEQUENCES (FOUR CONTINGENCIES)
// ==========================================

const t5_3 = new Topic("ch5-t3", "Reinforcers, Punishers, & Contingencies");
t5_3.addBlock(new ParagraphBlock("Consequences will either increase (strengthen) or decrease (weaken) the frequency of behavior. Note the difference in terminology: a <em>Reinforcer</em> or <em>Punisher</em> is the specific item (food, frown), while <em>Reinforcement</em> or <em>Punishment</em> is the procedure."));
t5_3.addBlock(new ParagraphBlock("Timing affects learning: immediate outcomes produce the fastest learning. A rat learns much faster with a 0-sec delay than a 4-sec or 10-sec delay."));

// Added Effects of Delay Image
t5_3.addBlock(new ImageBlock("images/Screenshot 2026-07-22 133527.png", "Graph comparing 0-sec, 4-sec, and 10-sec delays on learning"));

// EXAM FOCUS (Red)
t5_3.addBlock(new DefinitionBlock(
    "Four Contingencies", 
    "<strong>1. Positive Reinforcement<br>2. Negative Reinforcement<br>3. Positive Punishment<br>4. Negative Punishment</strong>", 
    1
));

// EXAM FOCUS (Red)
t5_3.addBlock(new DefinitionBlock(
    "Negative Reinforcement",
    "<strong>2 types of behavior</strong>:<br><strong>- Escape: results in termination of aversive S</strong><br><strong>- Avoidance: prevents delivery of aversive S</strong>",
    1
));

// EXAM FOCUS (Red) - Paradigms Table
t5_3.addBlock(new ParagraphBlock("<strong>Operant Conditioning Paradigms:</strong>", 1));
t5_3.addBlock(new ListBlock([
    "<strong>Outcome is added (positive) &rarr; Response increases (reinforcement)</strong>: Positive reinforcement. Example: Clean room &rarr; get weekly allowance.",
    "<strong>Outcome is removed (negative) &rarr; Response increases (reinforcement)</strong>: Negative reinforcement (escape/avoidance training). Example: Take aspirin &rarr; headache goes away.",
    "<strong>Outcome is added (positive) &rarr; Response decreases (punishment)</strong>: Positive punishment. Example: Exceed the speed Limit &rarr; ticket and fine.",
    "<strong>Outcome is removed (negative) &rarr; Response decreases (punishment)</strong>: Negative punishment (omission training). Example: Fight with other Children &rarr; time-out from play."
], 1));

t5_3.addBlock(new ParagraphBlock("Thorndike and Skinner initially concluded punishment wasn't as effective as reinforcement. Modern researchers argue punishment <em>can</em> be highly effective, but it depends on several factors:"));
t5_3.addBlock(new ListBlock([
    "Punishment often leads to more variable behavior.",
    "Discriminative stimuli for punishment (S<sup>P</sup>) can encourage cheating when the punisher isn't around.",
    "Concurrent reinforcement can undermine the punishment.",
    "Initial intensity matters (it must be strong enough immediately)."
]));

// EXAM FOCUS (Red)
t5_3.addBlock(new DefinitionBlock(
    "Primary Reinforcers", 
    "<strong>Food, water, sleep, comfortable temperatures, and sex are all examples of primary reinforcers.</strong> They are innately reinforcing and tied to states of deprivation.", 
    1
));

// EXAM FOCUS (Red)
t5_3.addBlock(new DefinitionBlock(
    "Drive Reduction Theory", 
    "<strong>Clark Hull's drive reduction theory proposed that all learning reflects the innate, biological need to obtain primary reinforcers.</strong>", 
    1
));

// EXAM FOCUS (Red)
t5_3.addBlock(new DefinitionBlock(
    "Negative Contrast Effect", 
    "<strong>The phenomenon in which reinforcing value of one reward is reduced because better reward is expected is called negative contrast.</strong> (e.g., Infants suck less vigorously for plain water if they were previously given sweetened water).", 
    1
));

t5_3.addBlock(new ListBlock([
    "<span class='definition-term'>Secondary Reinforcers:</span> Have no initial biological value but are paired with primary ones (e.g., good grades, tokens in a token economy).",
    "<span class='definition-term'>Generalized Reinforcers:</span> A type of secondary reinforcer associated with <em>several</em> other reinforcers (e.g., Money, Social attention).",
    "<span class='definition-term'>Intrinsic vs. Extrinsic:</span> Intrinsic reinforcement is provided by the act itself (skiing). Extrinsic is external to the behavior (working for money).",
    "<span class='definition-term'>Natural vs. Artificial:</span> Natural reinforcers are naturally provided for a behavior (selling merchandise &rarr; money). Artificial reinforcers are deliberately arranged to modify behavior."
]));
ch5.addTopic(t5_3);

// ==========================================
// SCHEDULES OF REINFORCEMENT
// ==========================================

const t5_4 = new Topic("ch5-t4", "Schedules of Reinforcement");
t5_4.addBlock(new ParagraphBlock("Rules determining how and when outcomes are delivered are called reinforcement schedules."));
t5_4.addBlock(new ListBlock([
    "<span class='definition-term'>Continuous schedule:</span> Every instance of R is reinforced.",
    "<span class='definition-term'>Partial schedule:</span> Only some instances are reinforced.",
    "<span class='definition-term'>Post-reinforcement pause:</span> A brief pause in responding that follows the delivery of a reinforcer."
]));

// Added Reinforcement Schedules Graph
t5_4.addBlock(new ImageBlock("images/Screenshot 2026-07-22 133557.png", "Graphs comparing Fixed-Ratio, Variable-Ratio, Fixed-Interval, and Variable-Interval schedules"));

// EXAM FOCUS (Red) 
t5_4.addBlock(new ListBlock([
    "<strong>VR = Fastest, no pauses</strong>. (Variable-Ratio: reinforced after an <em>average</em> number of responses).",
    "<strong>FR = Moderate, pauses</strong>. (Fixed-Ratio: reinforced after a <em>specific</em> number of responses).",
    "<strong>VI = Moderate, no pauses</strong>. (Variable-Interval: reinforced after an <em>average</em> amount of time. e.g., Checking phones for texts!).",
    "<strong>FI = Moderate, pauses</strong>. (Fixed-Interval: reinforced after a <em>fixed</em> amount of time)."
], 1));
ch5.addTopic(t5_4);

// ==========================================
// CHOICE & BEHAVIORAL ECONOMICS
// ==========================================

const t5_5 = new Topic("ch5-t5", "Choice Behavior & Altruism");

// EXAM FOCUS (Red)
t5_5.addBlock(new DefinitionBlock(
    "Matching Law", 
    "<strong>In concurrent reinforcement schedules</strong>, organism can choose between several possible responses, each leading to different outcome. <strong>Organism's response patterns will closely mimic relative rates of reinforcement for each possible response is called matching law of choice behavior</strong>.", 
    1
));

t5_5.addBlock(new DefinitionBlock("Behavioral Economics & Bliss Point", "The study of how organisms allocate time and resources among possible options. It predicts consumers allocate resources to maximize subjective value. The <strong>Bliss Point</strong> is the particular allocation of resources that provides maximal subjective value to an individual."));

// Added Bliss Point Graph
t5_5.addBlock(new ImageBlock("images/Screenshot 2026-07-22 133629.png", "Behavioral Economics graphs showing the Bliss Point"));

// EXAM FOCUS (Red)
t5_5.addBlock(new DefinitionBlock(
    "Delay Discounting", 
    "<strong>Delay discounting: progressive reduction (or discounting) of subjective value of a reward the longer it is delayed</strong>. (e.g., Hard to study for an exam 5 weeks away vs tomorrow).", 
    1
));

// Added Delay Discounting Graph
t5_5.addBlock(new ImageBlock("images/Screenshot 2026-07-22 133641.png", "Graph showing how the value of a reward drops as the delay increases"));

t5_5.addBlock(new ParagraphBlock("Self-control refers to an organism's willingness to forgo a small immediate reward in favor of a larger future reward. A good way to improve this is inducing a <em>precommitment</em> to make the choice hard to change later."));
t5_5.addBlock(new DefinitionBlock("Reciprocity & Altruism", "Altruism (acting to benefit another at one's own expense) seems to violate the law of effect. Often occurs in kin relationships, but is also explained by <em>reciprocal altruism</em> (donating resources expecting the favor to be returned later)."));
ch5.addTopic(t5_5);

// ==========================================
// EXTINCTION & RECOVERY
// ==========================================

const t5_6 = new Topic("ch5-t6", "Extinction, Resistance, & Recovery");
t5_6.addBlock(new DefinitionBlock("Extinction", "The nonreinforcement of a previously reinforced response, resulting in a decrease in the strength of that response. Note: You must ensure that the consequence you are withholding is <em>actually</em> the reinforcer maintaining the behavior (e.g., withholding candy doesn't work if the child is whining for attention)."));

// EXAM FOCUS (Red)
t5_6.addBlock(new ParagraphBlock("<strong>Side Effects of Extinction:</strong> Often lead you to believe extinction procedure is not having an effect.", 1));
t5_6.addBlock(new ListBlock([
    "<strong>1. Extinction burst:</strong> Temporary increase in frequency and intensity of responding when extinction is first implemented (e.g., slamming a broken vending machine).",
    "<strong>2. Increase in variability:</strong> Organism varies manner of behavior (e.g., using a different paw).",
    "<strong>3. Emotional behavior:</strong> Frustration and agitation (e.g., pigeons flapping wings).",
    "<strong>4. Aggression:</strong> Extinction-induced anger is common when blocked from a goal.",
    "<strong>5. Resurgence:</strong> Reappearance of other behaviors that had once been effective in the past (resembles the psychoanalytic concept of regression).",
    "<strong>6. Depression:</strong> Activity levels decrease below normal before returning to baseline (seen in humans after the loss of a major reinforcer like a loved one)."
], 1));

// EXAM FOCUS (Red)
t5_6.addBlock(new DefinitionBlock(
    "Resistance to Extinction & The Partial Reinforcement Effect", 
    "The extent to which responding persists after extinction is implemented. The most important factor is the <strong>schedule of reinforcement</strong>.<br><br><strong>Partial Reinforcement Effect:</strong> Behavior maintained on an intermittent (partial) schedule will extinguish much more slowly than behavior maintained on a continuous schedule. (A VR 20 schedule produces greater resistance than an FR 20 schedule)."
));

// Added Resistance to Extinction Graph
t5_6.addBlock(new ImageBlock("images/Screenshot 2026-07-22 133702.png", "Graphs comparing high resistance to extinction versus low resistance to extinction"));

// EXAM FOCUS (Red) 
t5_6.addBlock(new ParagraphBlock(
    "To counteract this effect: <strong>Spend several days turning partially-reinforced behavior into continuously reinforced one</strong>. When extinction is implemented, extinction should be more rapid.",
    1
));

t5_6.addBlock(new ParagraphBlock("<strong>Other Factors Affecting Resistance to Extinction:</strong>"));
t5_6.addBlock(new ListBlock([
    "<strong>History of Reinforcement:</strong> More reinforcers received = greater resistance (peaks around 1000 reinforcers).",
    "<strong>Magnitude of Reinforcer:</strong> Large or highly preferred reinforcers sometimes result in greater resistance.",
    "<strong>Degree of Deprivation:</strong> Greater level of deprivation = greater resistance.",
    "<strong>Previous Experience:</strong> Greater number of prior exposures to extinction = quicker extinction.",
    "<strong>Distinctive Signal:</strong> Extinction is facilitated when there is a distinct stimulus signaling onset (S<sup>&Delta;</sup>)."
]));

t5_6.addBlock(new DefinitionBlock("Spontaneous Recovery", "The reappearance of an extinguished response following a rest period. Skinner proposed this is a function of discriminative stimuli associated with the start of a session (e.g., the rat being weighed and placed in the box signals food)."));

// Added Spontaneous Recovery Graph
t5_6.addBlock(new ImageBlock("images/Screenshot 2026-07-22 133716.png", "Graph showing Spontaneous Recovery weakening over multiple sessions"));

t5_6.addBlock(new DefinitionBlock("DRA, DRO, & DRI", "To facilitate extinction without harsh side effects, therapists use:<br>- <strong>DRA (Alt. Behaviors):</strong> Reward preferred alternative behaviors (e.g., for self-injurious autistic children).<br>- <strong>DRO (Other Behavior):</strong> Reinforcing <em>any</em> behavior other than the target.<br>- <strong>DRI (Incompatible Behavior):</strong> Reinforcing a behavior that specifically physically conflicts with the target."));
ch5.addTopic(t5_6);

psy347.addChapter(ch5);