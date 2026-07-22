const ch2 = new Chapter("ch2", "Chapter 2: Research Methods & Neuroscience");

const t2_1 = new Topic("ch2-t1", "Variables & Eliciting Stimuli");
t2_1.addBlock(new ParagraphBlock("Variables are characteristics of a person, place, or thing that can change over time or vary from one situation to another. Learning theorists study the functional relationships (cause-and-effect) between these variables."));
t2_1.addBlock(new DefinitionBlock("Independent Variable (IV)", "Aspects of an experiment that systematically vary across conditions. In behavioral research, this is typically the environmental event (e.g., size of a food reward).", 2));
t2_1.addBlock(new DefinitionBlock("Dependent Variable (DV)", "Aspects of an experiment that are allowed to vary freely to see if they are affected by changes in the IV. In behavioral research, this is the behavior itself.", 2));
t2_1.addBlock(new DefinitionBlock("Appetitive vs. Aversive", "<strong>Appetitive stimuli:</strong> Events organisms seek out. <br><strong>Aversive stimuli:</strong> Events organisms avoid.", 2));
t2_1.addBlock(new DefinitionBlock("Establishing Operations", "Procedures that affect the appetitiveness or aversiveness of a stimulus. <strong>Deprivation</strong> (prolonged absence) increases appetitiveness, while <strong>Satiation</strong> (prolonged exposure) decreases it.", 2));
t2_1.addBlock(new DefinitionBlock("Contiguity vs. Contingency", "<strong>Contiguity:</strong> Closeness or nearness in time or space. <br><strong>Contingency:</strong> A predictive relationship where the occurrence of one event predicts the probable occurrence of another.", 2));
t2_1.addBlock(new DefinitionBlock("Stimulus & Response", "A stimulus is any event that can potentially influence behavior. A response is a particular instance of a behavior."));
t2_1.addBlock(new DefinitionBlock("Overt vs. Covert Behavior", "<strong>Overt behaviors:</strong> Publicly observed. <br><strong>Covert behaviors:</strong> Private events (dreaming, thinking, visualizing, feeling)."));
ch2.addTopic(t2_1);

const t2_2 = new Topic("ch2-t2", "Measurement of Behavior");
t2_2.addBlock(new ParagraphBlock("When studying the effects of variables on behavior, the behavior must be defined unambiguously, be consistent across time and settings, and be objective."));
t2_2.addBlock(new ListBlock([
    "<span class='definition-term'>Rate of Response:</span> Frequency with which a response occurs in a certain period. Very sensitive measure, often tracked via a Cumulative Recorder.",
    "<span class='definition-term'>Intensity:</span> The force or magnitude of a behavior.",
    "<span class='definition-term'>Duration:</span> The length of time that an animal repeatedly or continuously performs a behavior.",
    "<span class='definition-term'>Speed:</span> The amount of time required to perform a complete episode of a behavior from start to finish.",
    "<span class='definition-term'>Latency:</span> The length of time it takes to <em>begin</em> a behavior.",
    "<span class='definition-term'>Interval Recording:</span> Measurement of whether or not behavior occurs within a series of continuous intervals.",
    "<span class='definition-term'>Time Sample Recording:</span> Measurement of whether or not a behavior occurs within a series of discontinuous intervals.",
    "<span class='definition-term'>Topography:</span> The exact physical form of a behavior.",
    "<span class='definition-term'>Number of Errors:</span> Used for any behavior that can be classified as right or wrong."
], 2));

// Updated Image Path
t2_2.addBlock(new ImageBlock("images/Screenshot 2026-07-16 092510.png", "Diagram of a Cumulative Recorder graph"));
ch2.addTopic(t2_2);

const t2_3 = new Topic("ch2-t3", "Research Design & Animal Research");
t2_3.addBlock(new DefinitionBlock("Descriptive Research", "Describing behavior and the situation where it occurred without manipulating any variables. Includes <strong>Naturalistic Observations</strong> and <strong>Case Studies</strong>.", 2));
t2_3.addBlock(new DefinitionBlock("Experimental Research", "Discovering cause-and-effect relationships by varying one or more IVs to see how they influence the DV.", 2));
t2_3.addBlock(new ListBlock([
    "<strong>Pros of Animal Research:</strong> Allows strict control over genetic makeup and learning history. Enables strict control over the experimental environment.",
    "<strong>Cons of Animal Research:</strong> Critics argue findings have limited applicability to humans and that confining animals is morally wrong.",
    "<strong>General Process Theory:</strong> The belief that facts about learning and behavior will generalize across many species."
]));
ch2.addTopic(t2_3);

const t2_4 = new Topic("ch2-t4", "The Nervous System & Brain Anatomy");
t2_4.addBlock(new DefinitionBlock("Central Nervous System (CNS)", "Consists of the brain and the spinal cord."));
t2_4.addBlock(new DefinitionBlock("Peripheral Nervous System (PNS)", "Transmits signals from sensory receptors to the CNS and carries commands from the CNS to the muscles."));

// Updated Image Path
t2_4.addBlock(new ImageBlock("images/Screenshot 2026-07-16 092711.png", "Diagram of the Four Brain Lobes, Cerebellum, and Brainstem"));

t2_4.addBlock(new ListBlock([
    "<span class='definition-term'>Frontal Lobe:</span> Enables a person to plan and perform actions.",
    "<span class='definition-term'>Parietal Lobe:</span> Important for processing somatosensory (touch) inputs.",
    "<span class='definition-term'>Temporal Lobe:</span> Important for language, auditory processing, and forming new memories.",
    "<span class='definition-term'>Occipital Lobe:</span> Important for visual processing."
]));
t2_4.addBlock(new DefinitionBlock("Primary Motor Cortex (M1)", "Specialized for processing outputs that control movements."));
t2_4.addBlock(new DefinitionBlock("Cerebellum", "Responsible for regulation and coordination of complex voluntary muscular movement, including classical conditioning of motor-reflex responses."));
t2_4.addBlock(new DefinitionBlock("Brainstem", "Regulates automatic functions like breathing and body temperature."));
ch2.addTopic(t2_4);

const t2_5 = new Topic("ch2-t5", "Searching for Memories in the Brain");
t2_5.addBlock(new ParagraphBlock(
    "<strong>Neuropsychology: branch of psychology dealing with relationship between brain function and behavior, usually by examining functioning of patients who have specific types of brain damage.</strong>", 1
));
t2_5.addBlock(new ParagraphBlock(
    "<strong>Karl Lashley (1890–1958): American psychologist looking for location of the engram—supposed physical change in the brain that forms basis of memory.</strong> <br><br>He endorsed the theory of <strong>Equipotentiality</strong>: memories are not stored in one area, but rather the brain operates as a whole.", 1
));
t2_5.addBlock(new DefinitionBlock("Structural Neuroimaging", "Creates pictures of anatomical structures and lesions (MRI, DTI)."));
t2_5.addBlock(new DefinitionBlock("Functional Neuroimaging", "Looks at the activity of a living brain (fMRI, EEG)."));
t2_5.addBlock(new DefinitionBlock("Single-Cell Recording", "A neurophysiology technique that measures firing patterns in a single neuron."));
ch2.addTopic(t2_5);

const t2_6 = new Topic("ch2-t6", "Neurons, Synapses & Hebbian Learning");

// Updated Image Path
t2_6.addBlock(new ImageBlock("images/Screenshot 2026-07-16 092605.png", "Diagram showing the Dendrites, Soma, Axon, and Synapse of a Neuron"));

t2_6.addBlock(new ParagraphBlock("Most neuroscientists agree memories are stored by physical properties of neurons. Neural activity generally flows in one direction: from dendrites to axons."));
t2_6.addBlock(new DefinitionBlock("Hebbian Learning", "Learning-related changes in connections between neurons are an automatic result of mutual activity. <em>'Neurons that fire together, wire together.'</em>"));
t2_6.addBlock(new DefinitionBlock("The Synapse", "A narrow 20-nanometer gap where chemicals are passed between the presynaptic axon and the postsynaptic dendrite."));
t2_6.addBlock(new DefinitionBlock("Neurotransmitters", "Chemicals that cross the synapse. <strong>Glutamate</strong> is excitatory. <strong>GABA</strong> is inhibitory."));
t2_6.addBlock(new DefinitionBlock("Receptors & Neuromodulators", "Receptors are molecules that bind with neurotransmitters. Neuromodulators (like Acetylcholine) affect activity in many neurons rather than a single synapse."));
t2_6.addBlock(new DefinitionBlock("LTP & LTD", "<strong>Long-Term Potentiation (LTP)</strong> occurs when synaptic transmission becomes more effective. <strong>Long-Term Depression (LTD)</strong> occurs when it becomes less effective."));
ch2.addTopic(t2_6);

const t2_7 = new Topic("ch2-t7", "How Researchers Change Brain Activity");
t2_7.addBlock(new ParagraphBlock(
    "<strong>Electromagnetic stimulation of neurons: <br>– Researchers use microelectrodes to stimulate neural activity by delivering tiny amounts of electrical current into brain.</strong>", 1
));
t2_7.addBlock(new DefinitionBlock("Biochemical Control (Drugs)", "Chemicals that alter the biochemical functioning of the body (e.g., altering neurotransmitter release)."));
ch2.addTopic(t2_7);

psy347.addChapter(ch2);