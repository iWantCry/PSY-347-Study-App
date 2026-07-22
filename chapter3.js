const ch3 = new Chapter("ch3", "Chapter 3: Learning About Repeated Events");

const t3_1 = new Topic("ch3-t1", "Elicited Behaviors & Reflexes");
t3_1.addBlock(new DefinitionBlock("Elicited Behaviors", "Behaviors automatically drawn out by certain stimuli. They are involuntary (e.g., sneezing at dust)."));
t3_1.addBlock(new ParagraphBlock("A reflex is the most basic elicited behavior."));
t3_1.addBlock(new ListBlock([
    "<span class='definition-term'>Startle Response:</span> A defensive reaction to a sudden stimulus.",
    "<span class='definition-term'>Orienting Response:</span> An automatic positioning to facilitate attending to a novel stimulus.",
    "<span class='definition-term'>Infant Reflexes:</span> Built-in survival actions (sucking, rooting, Babinski reflex)."
]));
t3_1.addBlock(new DefinitionBlock("The Reflex Arc", "The neural structure underlying reflexes (sensory neuron -> interneuron -> motor neuron). It loops through the spinal cord, bypassing the brain."));
ch3.addTopic(t3_1);

const t3_2 = new Topic("ch3-t2", "Fixed Action Patterns (FAPs)");
t3_2.addBlock(new DefinitionBlock("Fixed Action Pattern (FAP)", "A fixed sequence of responses elicited by a specific stimulus. These are species-specific, highly adaptive responses."));
t3_2.addBlock(new DefinitionBlock(
    "Sign Stimulus", 
    "<strong>Sign Stimulus (or releaser) – stimulus that sets FAP in motion.</strong> (e.g., the red underbelly of an invading male Stickleback fish).", 1
));
ch3.addTopic(t3_2);

const t3_3 = new Topic("ch3-t3", "Habituation & Sensitization");
t3_3.addBlock(new DefinitionBlock("Habituation", "A decrease in the strength of an elicited behavior following repeated presentation of the eliciting stimulus."));
t3_3.addBlock(new DefinitionBlock("Sensitization", "An increase in the strength of an elicited behavior following repeated presentation of the eliciting stimulus."));
t3_3.addBlock(new DefinitionBlock(
    "Dishabituation", 
    "In some cases, presenting a novel stimulus can lead to the recovery of responses after an individual has habituated to familiar stimuli. <strong>This renewal of responding after a new stimulus has been presented is called dishabituation.</strong>", 1
));
t3_3.addBlock(new DefinitionBlock("Spontaneous Recovery", "A stimulus-evoked response that has been weakened by habituation increases in strength or reappears after a period of no stimulus presentation."));
ch3.addTopic(t3_3);

const t3_4 = new Topic("ch3-t4", "Theories of Repeated Exposure");
t3_4.addBlock(new DefinitionBlock(
    "Dual Process Theory", 
    "<strong>Dual process theory: theory that habituation and sensitization are independent of each other but operate in parallel.</strong>", 1
));
t3_4.addBlock(new DefinitionBlock("Opponent Process Theory of Emotion", "An emotional event elicits two competing processes to maintain homeostasis."));

// Updated Image Path
t3_4.addBlock(new ImageBlock("images/Screenshot 2026-07-16 093117.png", "Opponent-Process Graph showing the primary a-process and the counteracting b-process"));

t3_4.addBlock(new ListBlock([
    "<strong>A-process:</strong> The primary process directly elicited by the event.",
    "<strong>B-process:</strong> The opponent process elicited by and counteracting the a-process. With repetitions, the b-process increases in strength and duration."
]));
ch3.addTopic(t3_4);

const t3_5 = new Topic("ch3-t5", "What and Where of Learning from Exposure");
t3_5.addBlock(new DefinitionBlock(
    "Novel Objects", 
    "<strong>Novel object recognition task: organism's detection of and response to unfamiliar objects during exploratory behavior are used to measure memories of past experiences with those objects.</strong>", 1
));
t3_5.addBlock(new DefinitionBlock(
    "Priming", 
    "A phenomenon in which prior exposure to a stimulus can improve the ability to recognize that stimulus later. Example: <strong>Priming in Blue Jays</strong>.", 1
));
t3_5.addBlock(new DefinitionBlock(
    "Perceptual Learning", 
    "Learning in which repeated experiences with a set of stimuli make those stimuli easier to distinguish. Perceptual learning without explicit training is sometimes called <strong>statistical learning</strong>.", 1
));

t3_5.addBlock(new ParagraphBlock(
    "<strong>Use of Landmarks by Wasps - Tinbergen</strong> <br><br>Studies with digger wasps showed that they respond to the arrangement of landmarks around their nest rather than the specific type of landmark.", 1
));

// Updated Image Paths
t3_5.addBlock(new ImageBlock("images/Screenshot 2026-07-16 093045.png", "Digger wasp responding to pinecone circle acting as a landmark"));
t3_5.addBlock(new ImageBlock("images/Screenshot 2026-07-16 093055.png", "Digger wasp getting confused when the pinecone landmarks are moved away from the nest"));
ch3.addTopic(t3_5);

psy347.addChapter(ch3);