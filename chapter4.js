const ch4 = new Chapter("ch4", "Chapter 4: Classical Conditioning");

// ==========================================
// BASIC CONCEPTS
// ==========================================

const t4_1 = new Topic("ch4-t1", "Pavlov & Basic Concepts");
t4_1.addBlock(new ParagraphBlock("In the late 1800s, Ivan Pavlov discovered that salivation in dogs could be initiated by psychic factors (like the sight of food) rather than just the physical presence of food."));
t4_1.addBlock(new DefinitionBlock("Classical Conditioning", "A process where a stimulus that does not initially elicit a response is associated with a second stimulus that does, causing the first stimulus to elicit the response. Also known as Pavlovian or Respondent conditioning."));
t4_1.addBlock(new ListBlock([
    "<span class='definition-term'>US (Unconditioned Stimulus):</span> Biological cue (e.g., Food).",
    "<span class='definition-term'>UR (Unconditioned Response):</span> Natural reaction (e.g., Salivate).",
    "<span class='definition-term'>CS (Conditioned Stimulus):</span> Neutral cue paired with US (e.g., Bell).",
    "<span class='definition-term'>CR (Conditioned Response):</span> Learned reaction (e.g., Salivate to Bell)."
]));
t4_1.addBlock(new ParagraphBlock("The CR is often similar to the UR, but rarely identical. It is usually weaker, and sometimes completely different (e.g., UR to a dog bite is pain; CR to seeing the dog later is freezing in fear)."));
t4_1.addBlock(new DefinitionBlock("Appetitive vs. Aversive", "<strong>Appetitive conditioning:</strong> US is pleasant and sought out. <strong>Aversive conditioning:</strong> US is unpleasant and avoided. Aversive conditioning is usually more rapid because it is critical for survival."));
t4_1.addBlock(new DefinitionBlock("Conditioned Emotional Response (CER)", "A paradigm used to measure fear (e.g., a rat trained to lever-press for food stops pressing when a tone predicting shock plays). The degree of behavioral suppression is an indirect measure of fear."));

// HIGHLIGHTED: Excitatory and Inhibitory
t4_1.addBlock(new ParagraphBlock(
    "<strong>Excitatory conditioning – when NS is associated with presentation of US</strong> (CS+ elicits response). <br><br><strong>Inhibitory conditioning – when NS is associated with absence of US</strong> (CS- inhibits response). Example: A vicious dog always bites except in the presence of its owner, making the owner a safety signal.", 
    1
));
ch4.addTopic(t4_1);

// ==========================================
// TEMPORAL ARRANGEMENT
// ==========================================

const t4_2 = new Topic("ch4-t2", "Temporal Arrangement");
// HIGHLIGHTED: Temporal Arrangements
t4_2.addBlock(new ParagraphBlock("<strong>Temporal Arrangement of Stimuli</strong><br>The Neutral Stimulus (NS) does not always have to be presented prior to the US. <strong>Different arrangements are more or less effective:</strong>", 1));
t4_2.addBlock(new ListBlock([
    "<strong>1. Delayed:</strong> NS precedes US and they overlap (Highly effective).",
    "<strong>2. Trace:</strong> NS precedes US with a gap. Organism must 'remember' the stimulus.",
    "<strong>3. Simultaneous:</strong> NS and US at same time (Poor conditioning).",
    "<strong>4. Backward:</strong> NS follows US. <strong>Least effective procedure.</strong>"
], 1));
ch4.addTopic(t4_2);

// ==========================================
// BASIC PHENOMENA
// ==========================================

const t4_3 = new Topic("ch4-t3", "Basic Phenomena");
t4_3.addBlock(new DefinitionBlock("Acquisition", "Developing a CR through repeated NS-US pairings. Rapid early on, then levels off at an asymptote (maximum conditioning). More intense stimuli produce faster conditioning."));

// HIGHLIGHTED: Extinction
t4_3.addBlock(new DefinitionBlock(
    "Extinction", 
    "<strong>Definition: CR can be weakened or eliminated when CS is repeatedly presented in absence of US (process).</strong><br><br><strong>Also applies to name of procedure: Repeated presentation of CS in absence of US.</strong> Pavlov noted this is learning to actively inhibit the response, not just 'unlearning'.", 
    1
));

// HIGHLIGHTED: Spontaneous Recovery
t4_3.addBlock(new DefinitionBlock(
    "Spontaneous Recovery", 
    "<strong>Definition: reappearance of CR following rest period after extinction.</strong> Each recovery is weaker than the last.", 
    1
));

t4_3.addBlock(new DefinitionBlock("Disinhibition", "Sudden recovery of a response during extinction when a <em>novel</em> stimulus is introduced (e.g., a random hum causes the metronome to elicit salivation again)."));

// HIGHLIGHTED: Generalization & Discrimination
t4_3.addBlock(new DefinitionBlock(
    "Stimulus Generalization", 
    "<strong>Definition: tendency for CR to occur in presence of S similar to CS.</strong> Semantic generalization occurs with verbal stimuli similar in meaning.", 
    1
));
t4_3.addBlock(new DefinitionBlock(
    "Stimulus Discrimination", 
    "<strong>Definition: tendency for R to be elicited by one S but not another.</strong> Discrimination training uses a CS+ and a CS- to counter generalization.", 
    1
));

// HIGHLIGHTED: Phobias
t4_3.addBlock(new ParagraphBlock(
    "If a fear response cannot extinguish, some people develop \"<strong>phobias</strong>\". <br><br><strong>Phobias – involve CC of fear and overgeneralization of fear response to inappropriate stimuli.</strong>", 
    1
));

t4_3.addBlock(new DefinitionBlock("Experimental Neurosis", "Experimentally produced disorder where unpredictable events cause neurotic-like symptoms. Foundation for studying the biological basis of personality."));
ch4.addTopic(t4_3);

// ==========================================
// EXTENSIONS
// ==========================================

const t4_4 = new Topic("ch4-t4", "Extensions to CC");

// HIGHLIGHTED: Higher-Order Conditioning
t4_4.addBlock(new DefinitionBlock(
    "<strong>Higher-Order Conditioning</strong>", 
    "<strong>Definition: S associated with CS can also become CS.</strong> (e.g., Wasp = CS1; Trash bin near wasp = CS2).", 
    1
));

t4_4.addBlock(new DefinitionBlock("Sensory Preconditioning", "When one stimulus is conditioned as a CS, another stimulus it was previously associated with can also become a CS (e.g., Pre-associating a toolshed with wasps. Later getting stung by a wasp makes you fear the toolshed too)."));
ch4.addTopic(t4_4);

// ==========================================
// THEORIES OF CONDITIONING (Part 2)
// ==========================================

const t4_5 = new Topic("ch4-t5", "Theories of Conditioning");

// HIGHLIGHTED: Rescorla-Wagner
t4_5.addBlock(new DefinitionBlock(
    "Rescorla-Wagner Theory", 
    "<strong>Most influential formal model of learning/CC (1972). <br><br>Rescorla-Wagner Theory - a given US can support only so much conditioning, and the amount of conditioning must be distributed among various CSs available.</strong> Bigger US = higher asymptote. More salient CS = faster learning.", 
    1
));

// HIGHLIGHTED: Overexpectation Effect
t4_5.addBlock(new DefinitionBlock(
    "Overexpectation Effect", 
    "<strong>Overexpectation effect: decrease in CR that occurs when two separately conditioned CSs are combined into compound stimulus for further pairings with US.</strong>", 
    1
));

t4_5.addBlock(new DefinitionBlock("Attention Models", "<strong>Mackintosh Model:</strong> Animals have limited attention; the CS that is a better predictor receives more attention. <strong>Pearce-Hall Model:</strong> Animals only pay attention to novel, surprising CSs, not ones that are already good predictors."));
t4_5.addBlock(new DefinitionBlock("SOP & AESOP Models", "<strong>SOP:</strong> Memory nodes move between A1 (focal attention), A2 (peripheral), and inactive states. <strong>AESOP:</strong> Extends SOP by activating two US nodes: Sensory (sensations) and Emotive (affective qualities that last longer)."));
ch4.addTopic(t4_5);

// ==========================================
// NEUROSCIENCE OF CC
// ==========================================

const t4_6 = new Topic("ch4-t6", "Neuroscience of CC");
t4_6.addBlock(new ParagraphBlock("The neural circuits for eyeblink conditioning (a simple motor reflex) lie entirely within the cerebellum."));
t4_6.addBlock(new ListBlock([
    "<span class='definition-term'>Purkinje Cells:</span> Receive inputs related to both the CS and US. Inhibiting these prevents the association from being learned.",
    "<span class='definition-term'>Interpositus Nucleus:</span> The only output pathway; drives the Conditioned Response (CR). Inhibiting this prevents the CR from being performed."
]));
t4_6.addBlock(new DefinitionBlock("Hippocampus", "Not necessary for simple delay conditioning, but crucial for trace conditioning (remembering the CS during a gap) and latent inhibition (ignoring familiar stimuli)."));
ch4.addTopic(t4_6);

// ==========================================
// PRACTICAL APPLICATIONS
// ==========================================

const t4_7 = new Topic("ch4-t7", "Practical Applications");
t4_7.addBlock(new ParagraphBlock("Phobias can be influenced by 7 variables: Observational learning, Temperament, Preparedness (genetic predisposition), History of control, Incubation, US revaluation, and Selective sensitization."));

// HIGHLIGHTED: Incubation
t4_7.addBlock(new DefinitionBlock(
    "Incubation", 
    "<strong>Incubation: strengthening of conditioned fear response as result of brief exposures to aversive CS.</strong> (e.g., A child bitten by a dog runs away every time they see one; the fear grows worse over time despite never being bitten again).", 
    1
));

// HIGHLIGHTED: Systematic Desensitization
t4_7.addBlock(new DefinitionBlock(
    "Systematic Desensitization", 
    "<strong>Systematic desensitization: behavioral treatment of phobias involving pairing relaxation with succession of stimuli that elicit increasing levels of fear.</strong> Relies on counterconditioning and reciprocal inhibition.", 
    1
));

t4_7.addBlock(new DefinitionBlock("Flooding", "Prolonged exposure to a feared stimulus to provide maximal opportunity for extinction (no relaxation involved)."));

// HIGHLIGHTED: Aversion Therapy
t4_7.addBlock(new DefinitionBlock(
    "Aversion Therapy", 
    "<strong>Aversion therapy - reduces the attractiveness of a desired event by associating it with an aversive stimulus.</strong>", 
    1
));

// HIGHLIGHTED: Drug Addiction & Medicine
t4_7.addBlock(new ParagraphBlock(
    "Environmental cues act as CSs associated with drugs. The intense craving is a CR resulting from the body's conditioned compensatory response. <br><br><strong>Extinguishing a Drug Habit: <br>Whenever possible, the cue-exposure therapy should take place in the same contexts in which the original drug habits were acquired.</strong>", 
    1
));

t4_7.addBlock(new ParagraphBlock(
    "<strong>Reducing the Need for Medication or Reducing Its Side Effects: <br>Classical conditioning methods can be used to train people to suppress their own immune responses by pairing an immune-suppressing drug with a previously neutral odor and taste.</strong>", 
    1
));
ch4.addTopic(t4_7);

psy347.addChapter(ch4);