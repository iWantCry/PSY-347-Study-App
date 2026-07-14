const ch4 = new Chapter("ch4", "Chapter 4: Classical Conditioning (Part 1)");

// ==========================================
// BASIC CONCEPTS
// ==========================================

const t4_1 = new Topic("ch4-t1", "Pavlov's Discovery & Basic Concepts");
t4_1.addBlock(new ParagraphBlock("In the late 1800s, Ivan Pavlov studied digestive secretions in dogs and discovered that salivation could be initiated by psychic factors, like the sight of food[cite: 4].", 0));
t4_1.addBlock(new DefinitionBlock("Classical Conditioning (CC)", "A process where one stimulus that does not elicit a response is associated with a second stimulus that does; as a result, the first stimulus also comes to elicit the response[cite: 4].", 0));
t4_1.addBlock(new ListBlock([
    "<span class='definition-term'>Unconditioned Stimulus (US):</span> A cue that has biological significance and naturally evokes a response in the absence of prior training[cite: 4].",
    "<span class='definition-term'>Unconditioned Response (UR):</span> The naturally occurring, unlearned, or innate reaction to a US[cite: 4].",
    "<span class='definition-term'>Conditioned Stimulus (CS):</span> A previously neutral stimulus (NS) that comes to elicit a response because it was paired/associated with a US[cite: 4].",
    "<span class='definition-term'>Conditioned Response (CR):</span> The trained response elicited by the CS in anticipation of the US[cite: 4]."
], 0));
t4_1.addBlock(new DefinitionBlock("Appetitive vs. Aversive Conditioning", "Appetitive conditioning occurs when the US is pleasant and sought out[cite: 4]. Aversive conditioning occurs when the US is unpleasant and avoided[cite: 4].", 0));
t4_1.addBlock(new DefinitionBlock("Conditioned Emotional Response (CER)", "A paradigm used to measure fear[cite: 4]. The degree to which behavior is suppressed is an indirect measure of fear[cite: 4].", 0));

// HIGHLIGHTED: Excitatory and Inhibitory
t4_1.addBlock(new ParagraphBlock(
    "<strong>Excitatory conditioning – when NS is associated with presentation of US</strong> (CS+ elicits response of salivation or fear)[cite: 4]. <br><br><strong>Inhibitory conditioning – when NS is associated with absence of US</strong> (CS- inhibits occurrence of response)[cite: 4].", 
    1
));
ch4.addTopic(t4_1);

// ==========================================
// TEMPORAL ARRANGEMENTS
// ==========================================

const t4_2 = new Topic("ch4-t2", "Temporal Arrangement of Stimuli");

// HIGHLIGHTED: Temporal Arrangements
t4_2.addBlock(new ParagraphBlock("<strong>Temporal Arrangement of Stimuli</strong><br>The NS does not always have to be presented prior to the US[cite: 4]. Different arrangements are more or less effective[cite: 4]:", 1));
t4_2.addBlock(new ListBlock([
    "<strong>1. Delayed conditioning:</strong> Onset of NS precedes onset of US, and the two overlap[cite: 4].",
    "<strong>2. Trace conditioning:</strong> Onset and offset of NS precedes onset of US[cite: 4].",
    "<strong>3. Simultaneous conditioning:</strong> Onset of NS and US are simultaneous[cite: 4].",
    "<strong>4. Backward conditioning:</strong> Onset of NS follows onset of US[cite: 4]. This is the <strong>least effective procedure</strong>[cite: 4]."
], 1));
ch4.addTopic(t4_2);

// ==========================================
// BASIC PHENOMENA
// ==========================================

const t4_3 = new Topic("ch4-t3", "Basic Conditioning Phenomena");
t4_3.addBlock(new DefinitionBlock("Acquisition", "The process of developing and strengthening a CR through repeated pairings of an NS and US[cite: 4].", 0));

// HIGHLIGHTED: Extinction
t4_3.addBlock(new DefinitionBlock(
    "Extinction", 
    "<strong>Definition:</strong> CR can be weakened or eliminated when CS is repeatedly presented in absence of US (<strong>process</strong>)[cite: 4]. <br><br>Also applies to name of <strong>procedure:</strong> Repeated presentation of CS in absence of US[cite: 4].", 
    1
));

// HIGHLIGHTED: Spontaneous Recovery
t4_3.addBlock(new DefinitionBlock(
    "Spontaneous Recovery", 
    "<strong>Definition: reappearance of CR following rest period after extinction</strong>[cite: 4].", 
    1
));

t4_3.addBlock(new DefinitionBlock("Disinhibition", "The sudden recovery of a response during an extinction procedure when a novel stimulus is introduced[cite: 4].", 0));

// HIGHLIGHTED: Stimulus Generalization
t4_3.addBlock(new DefinitionBlock(
    "Stimulus Generalization", 
    "<strong>Definition: tendency for CR to occur in presence of S similar to CS</strong>[cite: 4].", 
    1
));

// HIGHLIGHTED: Stimulus Discrimination
t4_3.addBlock(new DefinitionBlock(
    "Stimulus Discrimination", 
    "<strong>Definition: tendency for R to be elicited by one S but not another</strong>[cite: 4].", 
    1
));

// HIGHLIGHTED: Phobias & Generalization
t4_3.addBlock(new ParagraphBlock(
    "If a fear response cannot extinguish, some people unfortunately develop \"<strong>phobias</strong>\"[cite: 4]. <br><br><strong>Phobia = overgeneralisation of a CC fear response to inappropriate stimuli</strong>[cite: 4].<br><br><strong>Phobias – involve CC of fear and overgeneralization of fear response to inappropriate stimuli</strong>[cite: 4].", 
    1
));

t4_3.addBlock(new DefinitionBlock("Experimental Neurosis", "An experimentally produced disorder where animals exposed to unpredictable events develop neurotic-like symptoms[cite: 4].", 0));
ch4.addTopic(t4_3);

// ==========================================
// EXTENSIONS TO CC
// ==========================================

const t4_4 = new Topic("ch4-t4", "Extensions to CC");

// HIGHLIGHTED: Higher-Order Conditioning
t4_4.addBlock(new DefinitionBlock(
    "<strong>Higher-Order Conditioning</strong>", 
    "<strong>Definition: S associated with CS can also become CS</strong>[cite: 4]. For example, if a wasp (NS1) is paired with a sting to elicit fear, it becomes CS1[cite: 4]. If a trash bin (NS2) is repeatedly associated with the wasp, the trash bin alone will eventually elicit fear as a CS2[cite: 4].", 
    1
));

t4_4.addBlock(new DefinitionBlock("Sensory Preconditioning", "When one stimulus is conditioned as a CS, another stimulus with which it was previously associated can also become a CS[cite: 4].", 0));
ch4.addTopic(t4_4);

psy347.addChapter(ch4);