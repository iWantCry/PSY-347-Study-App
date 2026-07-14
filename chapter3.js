const ch3 = new Chapter("ch3", "Chapter 3: Learning About Repeated Events");

const t3_1 = new Topic("ch3-t1", "Elicited Behaviors & Reflexes");
t3_1.addBlock(new DefinitionBlock("Elicited Behaviors", "Behaviors automatically drawn out by certain stimuli. They are involuntary (e.g., sneezing at dust, startling at a gunshot)."));
t3_1.addBlock(new ParagraphBlock("A reflex is the most basic elicited behavior, consisting of a simple, involuntary response to a stimulus. It can involve just one gland or set of muscles."));
t3_1.addBlock(new ListBlock([
    "<span class='definition-term'>Startle Response:</span> A defensive reaction to a sudden, unexpected stimulus.",
    "<span class='definition-term'>Orienting Response:</span> An automatic positioning to facilitate attending to a novel stimulus.",
    "<span class='definition-term'>Infant Reflexes:</span> Built-in survival actions including sucking, rooting, startling, stepping, grasping, and the Babinski reflex."
]));
t3_1.addBlock(new DefinitionBlock("The Reflex Arc", "The neural structure underlying reflexes. It typically consists of a sensory neuron, an interneuron, and a motor neuron. For example, withdrawing your hand from a hot flame occurs through the spinal cord before pain signals are even sent to the brain, protecting you from further damage."));
ch3.addTopic(t3_1);


const t3_2 = new Topic("ch3-t2", "Fixed Action Patterns (FAPs)");
t3_2.addBlock(new ParagraphBlock("Some elicited behaviors are more complex than simple reflexes."));
t3_2.addBlock(new DefinitionBlock("Fixed Action Pattern (FAP)", "A fixed sequence of responses elicited by a specific stimulus. These are species-specific, highly adaptive responses evolved to help animals cope with consistent aspects of their environment. However, rapid changes in the environment can make these patterns useless or harmful."));

// HIGHLIGHTED: Sign Stimulus
t3_2.addBlock(new DefinitionBlock(
    "Sign Stimulus", 
    "<strong>Sign Stimulus (or releaser) – stimulus that sets FAP in motion.</strong>", 
    1
));

t3_2.addBlock(new ListBlock([
    "<strong>Male Siamese Fighting Fish (Betta splendens):</strong> Encountering another male acts as a sign stimulus that elicits aggressive postures.",
    "<strong>Sticklebacks:</strong> The releaser is the red underbelly of a male within its territory. If the red is covered, intruders aren't attacked, but an inanimate piece of wood with a red patch will be attacked."
]));
ch3.addTopic(t3_2);


const t3_3 = new Topic("ch3-t3", "Habituation & Sensitization");
t3_3.addBlock(new ParagraphBlock("Repeated presentation of an eliciting stimulus can alter the strength of the elicited behavior."));
t3_3.addBlock(new DefinitionBlock("Habituation", "A decrease in the strength of an elicited behavior following repeated presentation of the eliciting stimulus. It allows the organism to focus on more important aspects of the environment (e.g., ignoring a ticking clock)."));
t3_3.addBlock(new DefinitionBlock("Sensitization", "An increase in the strength of an elicited behavior following repeated presentation of the eliciting stimulus. This is an arousing phenomenon (e.g., soldiers under attack startling more to gunfire). Sensitization is often measured via electrodermal activity (skin conductivity)."));
t3_3.addBlock(new ListBlock([
    "<span class='definition-term'>Intensity factor:</span> Low intensity stimuli usually lead to habituation, while high intensity stimuli lead to sensitization.",
    "<span class='definition-term'>Stimulus Specificity:</span> Habituation to one event does not cause habituation to every other stimulus in the same sensory modality."
]));

// HIGHLIGHTED: Dishabituation
t3_3.addBlock(new DefinitionBlock(
    "Dishabituation", 
    "In some cases, presenting a novel stimulus can lead to the recovery of responses after an individual has habituated to familiar stimuli. <strong>This renewal of responding after a new stimulus has been presented is called dishabituation.</strong>", 
    1
));

t3_3.addBlock(new DefinitionBlock("Spontaneous Recovery", "A stimulus-evoked response that has been weakened by habituation increases in strength or reappears after a period of no stimulus presentation."));
t3_3.addBlock(new ParagraphBlock("<strong>Short-term vs. Long-term:</strong> Short-term effects build up quickly and disappear quickly (like a loud car stereo). Long-term effects build up slowly and disappear slowly with intermittent exposure over a long period."));
ch3.addTopic(t3_3);


const t3_4 = new Topic("ch3-t4", "Theories of Repeated Exposure");

// HIGHLIGHTED: Dual Process Theory
t3_4.addBlock(new DefinitionBlock(
    "Dual Process Theory", 
    "<strong>Dual process theory: theory that habituation and sensitization are independent of each other but operate in parallel.</strong> Both processes occur in response to every stimulus presentation, and it is the summed combination of these two independent processes that determines the actual strength of responding.", 
    1
));

t3_4.addBlock(new DefinitionBlock("Opponent Process Theory of Emotion", "An emotional event elicits two competing processes to maintain homeostasis. Useful for understanding aftereffects of strong emotions (e.g., parachutists, drug addiction withdrawal where repeated use results in less of a 'high' while withdrawal symptoms strengthen)."));
t3_4.addBlock(new ListBlock([
    "<strong>A-process:</strong> The primary process directly elicited by the event. It correlates closely with the presence of the emotional event (e.g., rapid heart rate when shocked).",
    "<strong>B-process:</strong> The opponent process elicited by and counteracting the a-process to return the body to homeostasis. It is slow to increase and slow to decrease. With repetitions, the b-process increases in strength and duration."
]));
ch3.addTopic(t3_4);


const t3_5 = new Topic("ch3-t5", "What and Where of Learning from Exposure");

// HIGHLIGHTED: Novel Objects
t3_5.addBlock(new DefinitionBlock(
    "Novel Objects", 
    "<strong>Novel object recognition task: organism's detection of and response to unfamiliar objects during exploratory behavior are used to measure memories of past experiences with those objects.</strong>", 
    1
));

// HIGHLIGHTED: Priming
t3_5.addBlock(new DefinitionBlock(
    "Priming", 
    "A phenomenon in which prior exposure to a stimulus can improve the ability to recognize that stimulus later. It can occur even in the absence of any feelings of familiarity. (Often tested in humans via Word-stem completion tasks). An example from the literature includes <strong>Priming in Blue Jays</strong>.", 
    1
));

// HIGHLIGHTED: Perceptual Learning
t3_5.addBlock(new DefinitionBlock(
    "Perceptual Learning", 
    "Learning in which repeated experiences with a set of stimuli make those stimuli easier to distinguish. Perceptual learning without explicit training is sometimes called <strong>statistical learning</strong> because percepts that individuals learn the most about are those experienced most frequently and consistently.", 
    1
));

t3_5.addBlock(new DefinitionBlock("Spatial Learning", "The acquisition of information about one's surroundings. When exploring, animals learn how to get from place to place and what to expect."));

// HIGHLIGHTED: Use of Landmarks
t3_5.addBlock(new ParagraphBlock(
    "<strong>Use of Landmarks by Wasps - Tinbergen</strong> <br><br>Studies with digger wasps showed that they respond to the arrangement of landmarks around their nest rather than the specific type of landmark. Neuropsychological studies show rats and humans rely on the hippocampus and surrounding cortical regions to recognize these familiar objects and landmarks.", 
    1
));
ch3.addTopic(t3_5);

psy347.addChapter(ch3);