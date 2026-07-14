const ch1 = new Chapter("ch1", "Chapter 1: Intro & History");

const t1 = new Topic("ch1-t1", "What is Learning?");
t1.addBlock(new ParagraphBlock("Learning researchers create experimental situations where internal learning processes are externalized and reflected in behavior. Changes in animals that learn are internal, meaning there are no outward differences aside from behavior."));

// HIGHLIGHTED: Learning vs. Conditioning
t1.addBlock(new DefinitionBlock(
    "Learning vs. Conditioning", 
    "Learning = general term to describe <strong>changes in behavior</strong> resulting from experience. <br>Conditioning = <strong>procedures</strong> that can modify behavior (e.g., Classical or Operant conditioning).", 
    1 
));

// HIGHLIGHTED: Stimulus
t1.addBlock(new DefinitionBlock(
    "Stimulus", 
    "<strong>Sensory event that provides information about the outside world.</strong>", 
    1
));

t1.addBlock(new DefinitionBlock("Classical Conditioning", "A process where certain inborn involuntary behaviors come to be produced in new situations (e.g., Dogs salivating to a bell). This underlies many emotional responses and contributes to the development of dislikes."));
t1.addBlock(new DefinitionBlock("Operant (Instrumental) Conditioning", "The strengthening or weakening of voluntary, goal-directed behavior as a result of consequences (e.g., Rats learning to press a lever to obtain a food pellet)."));
ch1.addTopic(t1);


const t2 = new Topic("ch1-t2", "Historical Background");

// HIGHLIGHTED: Aristotle & Empiricism
t2.addBlock(new DefinitionBlock(
    "Aristotle (384-322 B.C.)", 
    "Greek philosopher who argued that knowledge is not inborn, but acquired through experience. He is an early example of an <strong>Empiricist (perspective assumes that a person's characteristics are mostly learned)</strong>.",
    1
));

// HIGHLIGHTED: Aristotle's 4 Laws
t2.addBlock(new ParagraphBlock("<strong>Aristotle's Four Laws of Association:</strong>", 1));
t2.addBlock(new ListBlock([
    "<strong>Law of Similarity:</strong> similar events are readily associated.",
    "<strong>Law of Contrast:</strong> opposite events are readily associated.",
    "<strong>Law of Contiguity:</strong> events in close proximity in time or space are readily associated.",
    "<strong>Law of Frequency:</strong> the more frequently two items occur together, the more strongly the association."
], 1));

t2.addBlock(new DefinitionBlock("Descartes (1596-1650)", "Proposed a dualistic model of human nature. The body functions like a machine producing involuntary reflexes, while the mind has free will producing voluntary behaviors. He believed animal behavior was entirely reflexive."));
t2.addBlock(new DefinitionBlock("British Empiricists (e.g., John Locke)", "Believed almost all knowledge is a function of experience. The conscious mind is composed of a finite set of basic elements gathered from experience and combined through principles of association (influenced by contiguity, intensity, similarity, recency, and frequency)."));
t2.addBlock(new DefinitionBlock("Structuralism (Wundt & Titchener)", "The experimental study of consciousness. Aimed to determine the structure of the mind by identifying its basic elements using the method of introspection (describing conscious thoughts, emotions, and sensory experiences)."));
t2.addBlock(new DefinitionBlock("Functionalism (William James)", "Argued the mind evolved to help us adapt to the world around us. Psychology should focus on these adaptive processes (cause and effect). He proposed that memory acts as a network of multiple connections (e.g., a dinner party connects to taste, smell, and clothing)."));
t2.addBlock(new DefinitionBlock("Ivan Pavlov (1849-1936)", "Developed methods for studying animal learning still used today. Demonstrated classical conditioning, extinction, and generalization. Modern studies report his findings as a learning curve (Independent variable on horizontal axis, Dependent variable on vertical axis)."));

// HIGHLIGHTED: Law of Effect
t2.addBlock(new DefinitionBlock(
    "Edward Thorndike", 
    "Studied how cats learn to escape from puzzle boxes. He observed that the probability of a particular behavioral response increased or decreased depending on consequences that followed; he called this the <strong>law of effect</strong>.", 
    1
));
ch1.addTopic(t2);


const t3 = new Topic("ch1-t3", "The 5 Schools of Behaviorism");
t3.addBlock(new ParagraphBlock("Behaviorism (established by John Watson in 1913) is a natural science approach that emphasizes the study of environmental influences on observable behavior. It adheres strictly to the Law of Parsimony."));
t3.addBlock(new DefinitionBlock("Morgan's Canon", "Whenever possible, one should interpret an animal's behavior in terms of lower, more primitive processes (reflex or habit) rather than higher, more mentalistic processes."));

t3.addBlock(new DefinitionBlock("1. Watson's Methodological Behaviorism", "Psychologists should only study behaviors that can be directly observed. All behavior is reflexive, and learning involves the development of simple connections between environmental events (S) and specific behaviors (R). Internal events are ignored."));
t3.addBlock(new DefinitionBlock("2. Hull's Neobehaviorism", "Challenged Watson's rejection of unobservable events. Uses intervening variables (physiological reactions like hunger and fatigue) to mediate between the environment and behavior. It assumes learning consists of establishing connections between specific stimuli and responses."));

// HIGHLIGHTED: Tolman
t3.addBlock(new DefinitionBlock(
    "3. Tolman's Cognitive Behaviorism", 
    "A molar (broader) approach that views behavior as a goal-directed attempt (e.g., a rat in a maze seeking food). It utilizes mentalistic intervening variables like cognitive maps (mental representations of spatial surroundings). <br><br><strong>Latent learning – learning occurs despite the absence of any observable demonstration of learning and only becomes apparent under a different set of conditions</strong>.", 
    1
));

t3.addBlock(new DefinitionBlock("4. Bandura's Social Learning Theory", "A cognitive-behavioral approach emphasizing the importance of observational learning and cognitive variables. Introduces Reciprocal Determinism: environmental events, observable behavior, and internal events all mutually influence each other."));

// HIGHLIGHTED: Skinner
t3.addBlock(new DefinitionBlock(
    "5. Skinner's Radical Behaviorism", 
    "Emphasizes the influence of the environment on overt behavior and rejects the use of internal events to <em>explain</em> behavior. Instead, thoughts and feelings are viewed as private behaviors subject to the same laws as public ones.<br><br><strong>Principles of operant conditioning resemble principles of natural selection</strong> (adaptive behaviors increase, nonadaptive behaviors decrease).", 
    1
));
ch1.addTopic(t3);

psy347.addChapter(ch1);