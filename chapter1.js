const ch1 = new Chapter("ch1", "Chapter 1: Intro & History");

// ==========================================
// WHAT IS LEARNING?
// ==========================================

const t1 = new Topic("ch1-t1", "What is Learning?");
t1.addBlock(new ParagraphBlock("Learning involves internal changes in animals; outward differences only reflect the internal learning processes."));

// HIGHLIGHTED: Learning vs. Conditioning
t1.addBlock(new DefinitionBlock(
    "Learning vs. Conditioning", 
    "Learning = general term to describe <strong>changes in behavior</strong> resulting from experience. <br>Conditioning = <strong>procedures</strong> that can modify behavior.", 
    1 
));

// HIGHLIGHTED: Stimulus
t1.addBlock(new DefinitionBlock(
    "Stimulus", 
    "<strong>sensory event that provides information about outside world</strong>", 
    1
));

t1.addBlock(new DefinitionBlock("Classical Conditioning", "A process where certain inborn involuntary behaviors come to be produced in new situations (e.g., Dogs salivating to a bell).", 0));
t1.addBlock(new DefinitionBlock("Operant (Instrumental) Conditioning", "The strengthening or weakening of voluntary/goal-directed behavior as a result of consequences (e.g., Rats pressing a lever for a food pellet).", 0));
ch1.addTopic(t1);

// ==========================================
// HISTORICAL BACKGROUND
// ==========================================

const t2 = new Topic("ch1-t2", "Historical Background");

// HIGHLIGHTED: Aristotle & Empiricism
t2.addBlock(new DefinitionBlock(
    "Aristotle", 
    "Greek philosopher (384-322 B.C.). Early example of <strong>Empiricist (perspective assumes that a person's characteristics are mostly learned)</strong>.",
    1
));

// HIGHLIGHTED: Aristotle's 4 Laws
t2.addBlock(new ParagraphBlock("<strong>Aristotle's Four Laws of Association:</strong>", 1));
t2.addBlock(new ListBlock([
    "<strong>Law of Similarity</strong> – similar events are readily associated",
    "<strong>Law of Contrast</strong> – opposite events are readily associated",
    "<strong>Law of Contiguity</strong> – events in close proximity in time or space are readily associated",
    "<strong>Law of Frequency</strong> – the more frequently two items occur together, the more strongly the association"
], 1));

t2.addBlock(new DefinitionBlock("Descartes", "Proposed a dualistic model. The body functions like a machine (involuntary reflexes), while the mind has free will (voluntary).", 0));
t2.addBlock(new DefinitionBlock("British Empiricists (John Locke)", "Conscious mind is composed of a finite set of basic elements gathered from experience and combined through association.", 0));
t2.addBlock(new DefinitionBlock("Structuralism (Wundt & Titchener)", "Experimental study of consciousness using the method of introspection to find basic elements.", 0));
t2.addBlock(new DefinitionBlock("Functionalism (William James)", "Focused on how the mind evolved to adapt. Proposed memory acts as a network of multiple connections.", 0));
t2.addBlock(new DefinitionBlock("Classical Conditioning (Ivan Pavlov)", "Developed methods for studying animal learning (S-R). Established concepts like the learning curve, extinction, and generalization.", 0));

// HIGHLIGHTED: Law of Effect
t2.addBlock(new DefinitionBlock(
    "Edward Thorndike", 
    "Observed that the probability of a particular behavioral response increased or decreased depending on consequences that followed; he called this the <strong>law of effect</strong>.", 
    1
));
ch1.addTopic(t2);

// ==========================================
// THE 5 SCHOOLS OF BEHAVIORISM
// ==========================================

const t3 = new Topic("ch1-t3", "The 5 Schools of Behaviorism");
t3.addBlock(new ParagraphBlock("Behaviorism (Watson, 1913) is a natural science approach emphasizing environmental influences on observable behavior."));
t3.addBlock(new DefinitionBlock("Morgan's Canon (Law of Parsimony)", "Interpret animal behavior in terms of lower, primitive processes rather than higher mentalistic processes.", 0));

t3.addBlock(new DefinitionBlock("1. Watson's Methodological Behaviorism", "Only study directly observable behaviors. All behavior is reflexive (long S-R chains). Internal events are ignored.", 0));
t3.addBlock(new DefinitionBlock("2. Hull's Neobehaviorism", "Uses intervening variables (physiological reactions like hunger) to mediate environment and behavior.", 0));

// HIGHLIGHTED: Tolman
t3.addBlock(new DefinitionBlock(
    "3. Tolman's Cognitive Behaviorism", 
    "Uses mentalistic intervening variables like cognitive maps. <br><br><strong>Latent learning – learning occurs despite the absence of any observable demonstration of learning and only becomes apparent under a different set of conditions</strong>", 
    1
));

t3.addBlock(new DefinitionBlock("4. Bandura's Social Learning Theory", "Emphasizes observational learning and cognitive variables. Introduces Reciprocal Determinism.", 0));

// HIGHLIGHTED: Skinner
t3.addBlock(new DefinitionBlock(
    "5. Skinner's Radical Behaviorism", 
    "Emphasizes environment on overt behavior. Views thoughts/feelings as private behaviors subject to the same laws as public ones.<br><br><strong>Principles of operant conditioning resemble principles of natural selection</strong>", 
    1
));

ch1.addTopic(t3);

psy347.addChapter(ch1);