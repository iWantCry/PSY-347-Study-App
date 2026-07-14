const ch2 = new Chapter("ch2", "Chapter 2: Research Methods & Neuroscience");

// ==========================================
// RESEARCH METHODS (Inferred Purple / High Yield)
// ==========================================

const t2_1 = new Topic("ch2-t1", "Variables & Eliciting Stimuli");
t2_1.addBlock(new ParagraphBlock("Variables are characteristics of a person, place, or thing that can change over time or vary from one situation to another. Learning theorists study the functional relationships (cause-and-effect) between these variables."));

// HIGH YIELD (Purple)
t2_1.addBlock(new DefinitionBlock("Independent Variable (IV)", "Aspects of an experiment that systematically vary across conditions. In behavioral research, this is typically the environmental event (e.g., size of a food reward).", 2));
t2_1.addBlock(new DefinitionBlock("Dependent Variable (DV)", "Aspects of an experiment that are allowed to vary freely to see if they are affected by changes in the IV. In behavioral research, this is the behavior itself (e.g., speed of finishing a maze).", 2));
t2_1.addBlock(new DefinitionBlock("Appetitive vs. Aversive", "<strong>Appetitive stimuli:</strong> Events organisms seek out (e.g., food when hungry). <br><strong>Aversive stimuli:</strong> Events organisms avoid (e.g., extreme heat). This can vary across species, individuals, and situations.", 2));
t2_1.addBlock(new DefinitionBlock("Establishing Operations", "Procedures that affect the appetitiveness or aversiveness of a stimulus. <strong>Deprivation</strong> (prolonged absence) increases appetitiveness, while <strong>Satiation</strong> (prolonged exposure) decreases it.", 2));
t2_1.addBlock(new DefinitionBlock("Contiguity vs. Contingency", "<strong>Contiguity:</strong> Closeness or nearness in time or space. <br><strong>Contingency:</strong> A predictive relationship where the occurrence of one event predicts the probable occurrence of another.", 2));

// Standard Info
t2_1.addBlock(new DefinitionBlock("Stimulus & Response", "A stimulus is any event that can potentially influence behavior. A response is a particular instance of a behavior. The response of one organism can serve as a stimulus for another organism."));
t2_1.addBlock(new DefinitionBlock("Overt vs. Covert Behavior", "<strong>Overt behaviors:</strong> Publicly observed. <br><strong>Covert behaviors:</strong> Private events (dreaming, thinking, visualizing, feeling). Covert behaviors can often be translated into overt measures (e.g., measuring heart rate for anxiety)."));
ch2.addTopic(t2_1);

const t2_2 = new Topic("ch2-t2", "Measurement of Behavior");
t2_2.addBlock(new ParagraphBlock("When studying the effects of variables on behavior, the behavior must be defined unambiguously, be consistent across time and settings, and be objective (e.g., recording 'yelling and striking' rather than subjective 'feelings of anger')."));

// HIGH YIELD (Purple)
t2_2.addBlock(new ListBlock([
    "<span class='definition-term'>Rate of Response:</span> Frequency with which a response occurs in a certain period. Very sensitive measure, often tracked via a Cumulative Recorder (where a steeper line equals a higher rate of response).",
    "<span class='definition-term'>Intensity:</span> The force or magnitude of a behavior (e.g., the volume of a vocalization).",
    "<span class='definition-term'>Duration:</span> The length of time that an animal repeatedly or continuously performs a behavior.",
    "<span class='definition-term'>Speed:</span> The amount of time required to perform a complete episode of a behavior from start to finish.",
    "<span class='definition-term'>Latency:</span> The length of time it takes to <em>begin</em> a behavior (e.g., waiting to press a quiz show buzzer).",
    "<span class='definition-term'>Interval Recording:</span> Measurement of whether or not behavior occurs within a series of continuous intervals (useful for behaviors with ambiguous starts or stops).",
    "<span class='definition-term'>Time Sample Recording:</span> Measurement of whether or not a behavior occurs within a series of discontinuous intervals (highly time efficient).",
    "<span class='definition-term'>Topography:</span> The exact physical form of a behavior (e.g., did the rat press the lever with its right or left paw?).",
    "<span class='definition-term'>Number of Errors:</span> Used for any behavior that can be classified as right or wrong."
], 2));
ch2.addTopic(t2_2);

const t2_3 = new Topic("ch2-t3", "Research Design & Animal Research");

// HIGH YIELD (Purple)
t2_3.addBlock(new DefinitionBlock("Descriptive Research", "Describing behavior and the situation where it occurred without manipulating any variables. Includes <strong>Naturalistic Observations</strong> (e.g., Jane Goodall's chimps; gains detailed info but cannot isolate variables) and <strong>Case Studies</strong> (e.g., Irene Pepperberg & Alex the parrot; extensive examination of a single individual).", 2));
t2_3.addBlock(new DefinitionBlock("Experimental Research", "Discovering cause-and-effect relationships by varying one or more IVs to see how they influence the DV. <strong>Pros:</strong> Enables causal statements and strict control. <strong>Cons:</strong> Artificial lab environments limit real-world applicability.", 2));

// Standard Info
t2_3.addBlock(new ListBlock([
    "<strong>Pros of Animal Research:</strong> Allows strict control over genetic makeup and learning history. Enables strict control over the experimental environment. Allows for life-saving research or procedures that cannot ethically be conducted on humans.",
    "<strong>Cons of Animal Research:</strong> Critics argue findings have limited applicability to humans and that confining, shocking, and depriving animals is morally wrong.",
    "<strong>General Process Theory:</strong> The belief that facts about learning and behavior will generalize across many (if not all) groups of species."
]));
ch2.addTopic(t2_3);

// ==========================================
// NEUROSCIENCE OF LEARNING (Explicit Red Focus)
// ==========================================

const t2_4 = new Topic("ch2-t4", "The Nervous System & Brain Anatomy");
t2_4.addBlock(new DefinitionBlock("Central Nervous System (CNS)", "Consists of the brain and the spinal cord."));
t2_4.addBlock(new DefinitionBlock("Peripheral Nervous System (PNS)", "Transmits signals from sensory receptors to the CNS and carries commands from the CNS to the muscles."));
t2_4.addBlock(new ListBlock([
    "<span class='definition-term'>Frontal Lobe:</span> Part of the cerebral cortex at the front of the brain; enables a person to plan and perform actions.",
    "<span class='definition-term'>Parietal Lobe:</span> Part of the cerebral cortex at the top; important for processing somatosensory (touch) inputs.",
    "<span class='definition-term'>Temporal Lobe:</span> Part of the cerebral cortex at the sides; important for language, auditory processing, and forming new memories of events.",
    "<span class='definition-term'>Occipital Lobe:</span> Part of the cerebral cortex at the rear; important for visual processing."
]));
t2_4.addBlock(new DefinitionBlock("Primary Motor Cortex (M1)", "Specialized for processing outputs that control movements. It receives input from the frontal lobes, which make high-level plans."));
t2_4.addBlock(new DefinitionBlock("Cerebellum", "Brain region lying below the cerebral cortex in the back of the head. Responsible for regulation and coordination of complex voluntary muscular movement, including classical conditioning of motor-reflex responses."));
t2_4.addBlock(new DefinitionBlock("Brainstem", "A group of structures that connects the rest of the brain to the spinal cord and regulates automatic functions like breathing and body temperature."));
t2_4.addBlock(new ParagraphBlock("<strong>Subcortical Structures:</strong> The basal ganglia, thalamus, amygdala, and hippocampus all contribute to learning and memory in different, specialized ways."));
ch2.addTopic(t2_4);

const t2_5 = new Topic("ch2-t5", "Searching for Memories in the Brain");
t2_5.addBlock(new ParagraphBlock("Historically, Franz Joseph Gall developed Phrenology, assuming differences in cortical size and abilities were evident from bumps in the skull. Today, we use modern imaging techniques."));

// EXPLICIT HIGHLIGHT (Red)
t2_5.addBlock(new ParagraphBlock(
    "<strong>Neuropsychology: branch of psychology dealing with relationship between brain function and behavior, usually by examining functioning of patients who have specific types of brain damage.</strong>", 
    1
));

// EXPLICIT HIGHLIGHT (Red)
t2_5.addBlock(new ParagraphBlock(
    "<strong>Karl Lashley (1890–1958): American psychologist looking for location of the engram—supposed physical change in the brain that forms basis of memory (also referred to as memory trace).</strong> <br><br>Lashley searched for the engram by removing various cortical areas in maze-trained rats. He found no single area was responsible, leading him to endorse the theory of <strong>Equipotentiality</strong>: memories are not stored in one area, but rather the brain operates as a whole.", 
    1
));

t2_5.addBlock(new DefinitionBlock("Structural Neuroimaging", "Creates pictures of anatomical structures and lesions. <strong>MRI</strong> relies on changes in magnetic fields, while <strong>DTI</strong> measures connections between brain regions."));
t2_5.addBlock(new DefinitionBlock("Functional Neuroimaging", "Looks at the activity of a living brain. <strong>fMRI</strong> tracks local changes in blood oxygen levels. <strong>EEG</strong> measures electrical activity via scalp electrodes (often averaged into Event-Related Potentials or ERPs to track responses to specific stimuli)."));
t2_5.addBlock(new DefinitionBlock("Single-Cell Recording", "A neurophysiology technique that measures firing patterns by using an implanted electrode to detect electrical activity (spiking) in a single neuron."));
ch2.addTopic(t2_5);

const t2_6 = new Topic("ch2-t6", "Neurons, Synapses & Hebbian Learning");
t2_6.addBlock(new ParagraphBlock("Most neuroscientists agree memories are stored by physical properties of neurons. A prototypical neuron consists of three main components:"));
t2_6.addBlock(new ListBlock([
    "<strong>Dendrites:</strong> Input areas that receive signals from other neurons.",
    "<strong>Cell Body (Soma):</strong> Integrates signals from the dendrites.",
    "<strong>Axons:</strong> Transmit electrical signals to other neurons. Neural activity generally flows in one direction: from dendrites to axons."
]));
t2_6.addBlock(new ParagraphBlock("William James proposed that learning links are physical properties of the brain. Demonstrating this, providing rats with environmental enrichment (opportunities for learning and exercise) leads to visible structural changes in their neurons."));
t2_6.addBlock(new DefinitionBlock("Hebbian Learning", "Learning-related changes in connections between neurons are an automatic result of mutual activity and the brain's capacity for structural plasticity. <em>'Neurons that fire together, wire together.'</em>"));
t2_6.addBlock(new DefinitionBlock("The Synapse", "A narrow 20-nanometer gap where chemicals are passed between the presynaptic (sending) axon and the postsynaptic (receiving) dendrite."));
t2_6.addBlock(new DefinitionBlock("Neurotransmitters", "Chemicals that cross the synapse. <strong>Glutamate</strong> is an excitatory neurotransmitter (increases likelihood of firing). <strong>GABA</strong> is an inhibitory neurotransmitter (decreases likelihood of firing)."));
t2_6.addBlock(new DefinitionBlock("Receptors & Neuromodulators", "Receptors are molecules embedded in the postsynaptic surface that bind with neurotransmitters. Neuromodulators (like Acetylcholine) affect activity in many neurons rather than a single synapse."));
t2_6.addBlock(new DefinitionBlock("LTP & LTD", "<strong>Long-Term Potentiation (LTP)</strong> occurs when synaptic transmission becomes more effective from recent activity. <strong>Long-Term Depression (LTD)</strong> occurs when it becomes less effective. These represent synaptic plasticity mechanisms for learning."));
ch2.addTopic(t2_6);

const t2_7 = new Topic("ch2-t7", "How Researchers Change Brain Activity");

// EXPLICIT HIGHLIGHT (Red)
t2_7.addBlock(new ParagraphBlock(
    "<strong>Electromagnetic stimulation of neurons: <br>– Researchers use microelectrodes to stimulate neural activity by delivering tiny amounts of electrical current into brain.</strong><br><br>– Used as early as 1800s to prove that neural activity in motor cortex produces motor behavior.", 
    1
));

t2_7.addBlock(new DefinitionBlock("Biochemical Control (Drugs)", "Chemicals that alter the biochemical functioning of the body. They can increase/decrease presynaptic neurotransmitter release, increase/decrease postsynaptic receptor ability, or alter the clearing mechanisms in the synapse. Drugs are heavily used in research to shut down processing in neural circuits or disrupt structural plasticity."));
ch2.addTopic(t2_7);

psy347.addChapter(ch2);