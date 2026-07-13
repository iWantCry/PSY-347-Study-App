const ch2 = new Chapter("ch2", "Chapter 2: Research Methods & Neuroscience");

// ==========================================
// RESEARCH METHODS (Inferred Purple / High Yield)
// ==========================================

const t2_1 = new Topic("ch2-t1", "What do Learning Theorists Study?");
t2_1.addBlock(new ParagraphBlock("Variables are characteristics of a person, place, or thing that can change over time or vary from one situation to another. Learning theorists study the functional relationships (cause-and-effect) between these variables."));
t2_1.addBlock(new DefinitionBlock("Independent Variable (IV)", "Aspects of an experiment that systematically vary across conditions (e.g., The environmental event, such as the size of a food reward).", 2));
t2_1.addBlock(new DefinitionBlock("Dependent Variable (DV)", "Aspects of an experiment that are allowed to vary freely to see if they are affected by changes in the IV (e.g., The behavior, such as the total errors in a maze).", 2));
t2_1.addBlock(new DefinitionBlock("Stimulus & Response", "A stimulus is any event that can potentially influence behavior. A response is a particular instance of a behavior. Note that the response of one organism can become a stimulus for another.", 0));
t2_1.addBlock(new DefinitionBlock("Overt vs. Covert Behavior", "Overt behaviors are publicly observed. Covert behaviors are private events (dreaming, thinking, visualizing, feeling). Covert behaviors can often be made overt (e.g., measuring heart rate for anxiety).", 0));
t2_1.addBlock(new DefinitionBlock("Appetitive vs. Aversive", "Appetitive stimuli are events organisms seek out (e.g., food when hungry). Aversive stimuli are events organisms avoid (e.g., extreme heat). This can vary across species, individuals, and situations.", 2));
t2_1.addBlock(new DefinitionBlock("Establishing Operations", "Procedures affecting the appetitiveness or aversiveness of a stimulus. Deprivation (prolonged absence) increases appetitiveness, while Satiation (prolonged exposure) decreases it.", 2));
t2_1.addBlock(new DefinitionBlock("Contiguity vs. Contingency", "Contiguity is the closeness or nearness in time or space. Contingency is a predictive relationship where the occurrence of one event predicts the probable occurrence of another.", 2));
ch2.addTopic(t2_1);

const t2_2 = new Topic("ch2-t2", "Measurement of Behavior");
t2_2.addBlock(new ParagraphBlock("When studying the effects of variables on behavior, the behavior must be defined unambiguously, be consistent across time/settings, and be objective (e.g., 'yelling and striking' rather than 'feelings of anger')."));
t2_2.addBlock(new ListBlock([
    "<span class='definition-term'>Rate of Response:</span> Frequency with which a response occurs in a certain period. Highly sensitive measure. Often tracked via a Cumulative Recorder.",
    "<span class='definition-term'>Intensity:</span> Force or magnitude of a behavior.",
    "<span class='definition-term'>Duration:</span> Length of time that an animal repeatedly or continuously performs a behavior.",
    "<span class='definition-term'>Speed:</span> Amount of time required to perform a complete episode of a behavior from start to finish.",
    "<span class='definition-term'>Latency:</span> Length of time it takes to <em>begin</em> a behavior.",
    "<span class='definition-term'>Interval Recording:</span> Measurement of whether or not behavior occurs within a series of continuous intervals.",
    "<span class='definition-term'>Time Sample Recording:</span> Measurement of whether or not a behavior occurs within a series of discontinuous intervals.",
    "<span class='definition-term'>Topography:</span> The exact physical form of a behavior.",
    "<span class='definition-term'>Number of Errors:</span> For any behavior that can be classified as right or wrong."
], 2));
ch2.addTopic(t2_2);

const t2_3 = new Topic("ch2-t3", "Research Design & Animal Research");
t2_3.addBlock(new DefinitionBlock("Descriptive Research", "Describing behavior and the situation where it occurred without manipulating variables. Includes Naturalistic Observations and Case Studies. Cons: Cannot tell you which variables are responsible for behavior.", 2));
t2_3.addBlock(new DefinitionBlock("Experimental Research", "Discovering cause-and-effect relationships by varying one or more IVs to see how they influence the DV. Pros: Enables causal statements and isolation of variables.", 2));
t2_3.addBlock(new ListBlock([
    "<strong>Pros of Animal Research:</strong> Allows strict control over genetic makeup and learning history (identical upbringing). Enables strict control over the experimental environment. Allows for life-saving research.",
    "<strong>Cons of Animal Research:</strong> Critics argue findings have limited applicability to humans and that confining/depriving animals is morally wrong.",
    "<strong>General Process Theory:</strong> The belief that facts about learning and behavior will generalize across many (if not all) groups of species."
], 0));
ch2.addTopic(t2_3);

// ==========================================
// NEUROSCIENCE OF LEARNING (Explicit Highlights Only)
// ==========================================

const t2_4 = new Topic("ch2-t4", "The Nervous System & Brain Anatomy");
t2_4.addBlock(new DefinitionBlock("Central Nervous System (CNS)", "Consists of the brain and the spinal cord.", 0));
t2_4.addBlock(new DefinitionBlock("Peripheral Nervous System (PNS)", "Transmits signals from sensory receptors to the CNS and carries commands from the CNS to the muscles.", 0));
t2_4.addBlock(new ListBlock([
    "<span class='definition-term'>Frontal Lobe:</span> Front of the brain; enables a person to plan and perform actions.",
    "<span class='definition-term'>Parietal Lobe:</span> Peak/Top of the brain; important for processing somatosensory (touch) inputs.",
    "<span class='definition-term'>Temporal Lobe:</span> Sides/Behind Temples; important for language, auditory processing, and forming new memories.",
    "<span class='definition-term'>Occipital Lobe:</span> Rear/Out back; important for visual processing."
], 0));
t2_4.addBlock(new DefinitionBlock("Primary Motor Cortex (M1)", "Specialized for processing outputs that control movements. Gets input from the frontal lobes.", 0));
t2_4.addBlock(new DefinitionBlock("Cerebellum", "Brain region lying below the cerebral cortex in the back of the head. Responsible for regulation and coordination of complex voluntary muscular movement.", 0));
t2_4.addBlock(new DefinitionBlock("Brainstem", "Connects the rest of the brain to the spinal cord and regulates automatic functions like breathing and body temperature.", 0));
ch2.addTopic(t2_4);

const t2_5 = new Topic("ch2-t5", "Searching for Memories in Cerebral Cortex");
t2_5.addBlock(new ParagraphBlock("Historically, Franz Joseph Gall developed Phrenology, believing that differences in cortical size and abilities were evident from bumps in the skull. Today, we use structural and functional neuroimaging.", 0));

// HIGHLIGHTED: Neuropsychology
t2_5.addBlock(new ParagraphBlock(
    "<strong>Neuropsychology: branch of psychology dealing with relationship between brain function and behavior, usually by examining functioning of patients who have specific types of brain damage</strong>", 
    1
));

// HIGHLIGHTED: Karl Lashley
t2_5.addBlock(new ParagraphBlock(
    "<strong>Karl Lashley (1890–1958): American psychologist looking for location of the engram—supposed physical change in the brain that forms basis of memory (also referred to as memory trace)</strong>. <br><br>Lashley searched for it by removing cortical areas in maze-trained rats. He found no single area was responsible, leading to the theory of Equipotentiality: memories are not stored in one area, but rather the brain operates as a whole.", 
    1
));
ch2.addTopic(t2_5);

const t2_6 = new Topic("ch2-t6", "Neurons, Synapses & Hebbian Learning");
t2_6.addBlock(new ParagraphBlock("A prototypical neuron consists of three main components: Dendrites (receive signals), Cell Body (integrates signals), and Axons (transmit electrical signals).", 0));
t2_6.addBlock(new DefinitionBlock("Hebbian Learning", "Learning-related changes in connections between neurons are an automatic result of mutual activity. 'Neurons that fire together, wire together.'", 0));
t2_6.addBlock(new DefinitionBlock("The Synapse", "A narrow gap where chemicals are passed between the presynaptic (sending) axon and the postsynaptic (receiving) dendrite.", 0));
t2_6.addBlock(new DefinitionBlock("Neurotransmitters", "Chemicals that cross the synapse (e.g., Glutamate is excitatory; GABA is inhibitory).", 0));
t2_6.addBlock(new DefinitionBlock("LTP & LTD", "Long-Term Potentiation (LTP) occurs when synaptic transmission becomes more effective from recent activity. Long-Term Depression (LTD) occurs when it becomes less effective.", 0));
ch2.addTopic(t2_6);

const t2_7 = new Topic("ch2-t7", "How Researchers Change Brain Activity");

// HIGHLIGHTED: Electromagnetic stimulation
t2_7.addBlock(new ParagraphBlock(
    "<strong>Electromagnetic stimulation of neurons: <br>– Researchers use microelectrodes to stimulate neural activity by delivering tiny amounts of electrical current into brain</strong><br><br>– Used as early as 1800s to prove that neural activity in motor cortex produces motor behavior", 
    1
));

t2_7.addBlock(new DefinitionBlock("Biochemical Control (Drugs)", "Chemicals that alter the biochemical functioning of the body. They can increase/decrease presynaptic neurotransmitter release, increase/decrease postsynaptic receptor ability, or alter the clearing mechanisms in the synapse.", 0));
ch2.addTopic(t2_7);

psy347.addChapter(ch2);