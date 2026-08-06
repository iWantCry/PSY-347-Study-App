const ch10 = new Chapter("ch10", "Chapter 10: Biological and Emotional Influences on Learning");

// ==========================================
// CONDITIONED TASTE AVERSIONS (CTA)
// ==========================================
const t10_1 = new Topic("ch10-t1", "Conditioned Taste Aversions (CTA)");

t10_1.addBlock(new ParagraphBlock(
    "<strong>What is a Conditioned Taste Aversion?</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 10px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>Animals quickly learn to reject food flavors that are associated with gastric illness, protecting them from poisons. Highly common (affects 65% of undergrads).</li>" +
    "<li style='margin-bottom: 10px;'><em>Experiment:</em> Rat is given sweet water (NS), made sick via drug/radiation (US &rarr; UR). Sweet water becomes a conditioned aversive stimulus (CS) eliciting nausea (CR).</li>" +
    "</ul>"
));

// EXAM FOCUS (Red)
t10_1.addBlock(new ParagraphBlock(
    "<strong>Similar to other forms of CC:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Stimulus generalization:</strong> Food items similar to the aversive item are also avoided.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Extinction:</strong> Decreases if aversive item is repeatedly ingested without illness.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Overshadowing:</strong> More likely to develop aversion to stronger tasting food (onions) than milder food (potatoes) eaten at the same meal.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Blocking:</strong> If you already have a pea aversion, eating peas and fish and getting sick won't cause a new fish aversion.</li>" +
    "</ul>", 1
));

// EXAM FOCUS (Red)
t10_1.addBlock(new ParagraphBlock(
    "<strong>Latent inhibition &ndash; also important in taste aversion conditioning</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>More likely to associate a <em>novel</em> item with sickness than a more <em>familiar</em> item.</li>" +
    "<li style='margin-bottom: 10px;'>Accounts for why it is often difficult to poison a rat:</li>" +
    "<ul style='margin-left: 20px; list-style-type: circle;'>" +
    "<li style='margin-bottom: 5px;'>Encounters with novel bait result only in small amounts eaten.</li>" +
    "<li style='margin-bottom: 5px;'>Rat gets ill later, associates it with novel item and avoids it in future.</li>" +
    "</ul>" +
    "</ul>", 1
));

// EXAM FOCUS (Red)
t10_1.addBlock(new ParagraphBlock(
    "<strong>Garcia and Koelling (1966) &ndash; first study of CS-US relevance:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>Rats drank sweet water paired with light and noise &ndash; \"bright, noisy, sweet water\".</li>" +
    "<li style='margin-bottom: 10px;'>After consuming water, some rats received foot shock, others received x-ray irradiation.</li>" +
    "<li style='margin-bottom: 10px;'><em>Results:</em> Nauseous rats strongly avoided sweet water (taste). Shocked rats avoided the bright/noisy water (visual/auditory).</li>" +
    "</ul>", 1
));

// EXAM FOCUS (Red)
t10_1.addBlock(new ParagraphBlock(
    "<strong>Specificity of associations:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>If you feel nauseous after a meal, you don't associate your tv program with nausea.</li>" +
    "<li style='margin-bottom: 10px;'>Strong inherited tendency to associate gastrointestinal illness with food or drink than other items.</li>" +
    "<li style='margin-bottom: 10px;'>Called <strong>CS-US relevance:</strong> innate tendency to more readily associate certain types of stimuli with each other.</li>" +
    "</ul>", 1
));

t10_1.addBlock(new ParagraphBlock(
    "<strong>5 Unique Characteristics of Taste Aversion:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 10px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>1. One-Trial Learning:</strong> Many flavor aversions can be learned in a single trial.</li>" +
    "<li style='margin-bottom: 10px;'><strong>2. Long-Delay Learning:</strong> Revusky noted that aversions develop even if illness occurs hours later because there are no other relevant stimuli to interfere.</li>" +
    "<li style='margin-bottom: 10px;'><strong>3. Learned Safety:</strong> If a food is eaten safely once, later illness yields a weaker aversion (safety acts as conditioned inhibition).</li>" +
    "<li style='margin-bottom: 10px;'><strong>4. Hedonic Shift:</strong> The actual pleasantness of the flavor changes.</li>" +
    "<li style='margin-bottom: 10px;'><strong>5. Compound Potentiation:</strong> More conditioning to a weak CS if combined with a strong CS (exact opposite of overshadowing, contradicting Rescorla-Wagner). Occurs via within-compound associations.</li>" +
    "</ul>"
));

// EXAM FOCUS (Red)
t10_1.addBlock(new ParagraphBlock(
    "<strong>1. One-Trial Learning</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>One-trial learning in flavor aversions suggests VERY salient CS and US.</li>" +
    "<li style='margin-bottom: 10px;'>Faster learning with higher saliences.</li>" +
    "</ul>", 1
));

// EXAM FOCUS (Red)
t10_1.addBlock(new ParagraphBlock(
    "<strong>4. Hedonic Shift</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>In taste aversion learning, flavor CS actually becomes unpleasant.</li>" +
    "<li style='margin-bottom: 10px;'>Garcia and others suggest main result of aversion learning is shift in hedonic properties of flavor.</li>" +
    "<li style='margin-bottom: 10px;'>Palatability goes from pleasant to noxious.</li>" +
    "</ul>", 1
));

t10_1.addBlock(new ImageBlock("images/Screenshot 2026-08-06 090637.png", "Taste-Reactivity graphs measuring chin rubs, gapes, and paw shakes to demonstrate hedonic shift"));

t10_1.addBlock(new ParagraphBlock(
    "<strong>Practical Applications:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 10px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Predation Control:</strong> LiCl-laced sheep meat conditions coyotes to avoid hunting sheep.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Cancer Patients:</strong> Given highly familiar foods after chemo, and explicitly novel foods before chemo to act as an aversion decoy.</li>" +
    "</ul>"
));
ch10.addTopic(t10_1);

// ==========================================
// BIOLOGICAL PREPAREDNESS
// ==========================================
const t10_2 = new Topic("ch10-t2", "Biological Preparedness");
t10_2.addBlock(new ParagraphBlock("Garcia's studies fundamentally challenged the traditional behaviorist idea that all stimuli and responses are inherently equal and associable. Learning mechanisms evolved to help animals survive real problems in the wild."));

// EXAM FOCUS (Red)
t10_2.addBlock(new ParagraphBlock(
    "<strong>So does that mean we cannot generalize the laws of learning?</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Seligman</strong> &ndash; some examples of learning are \"prepared\", some are \"unprepared\" and some are \"contraprepared\".</li>" +
    "<li style='margin-bottom: 10px;'>Rats &ndash; associate taste w/ illness (prepared).</li>" +
    "<li style='margin-bottom: 10px;'>Rats do not associate taste w/ shock (contraprepared).</li>" +
    "<li style='margin-bottom: 10px;'>You can generalize w/in but not across categories.</li>" +
    "</ul>", 1
));

t10_2.addBlock(new ParagraphBlock(
    "<strong>Preparedness in Operant Conditioning:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 10px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Chaffinches (Stevenson-Hinde):</strong> Biologically prepared to associate perching with hearing a song, and pecking with obtaining food.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Rats (Bolles):</strong> Easier to train lever-pressing for food. Freezing/running is their biologically prepared response to shock.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Pigeons (Bedford & Anger):</strong> Quickly learn to fly to avoid shock, but will not learn to peck a key to avoid shock.</li>" +
    "</ul>"
));
ch10.addTopic(t10_2);

// ==========================================
// OPERANT-RESPONDENT INTERACTIONS
// ==========================================
const t10_3 = new Topic("ch10-t3", "Operant-Respondent Interactions & Sign Tracking");

t10_3.addBlock(new ParagraphBlock(
    "<strong>Anomalous Behaviors during Operant Conditioning:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 10px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Species-Specific Defense Reactions (SSDR):</strong> Bolles proposed avoidance responses are not operants controlled by consequences, but innate elicited behaviors triggered by warning stimuli.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Instinctive Drift:</strong> Genetically based Fixed Action Patterns gradually emerge and displace operantly conditioned behavior (e.g., raccoons washing coins, pigs rooting coins).</li>" +
    "<li style='margin-bottom: 10px;'><strong>Sign Tracking:</strong> An organism approaches a stimulus that signals an appetitive event (e.g., Pavlov's dog licking the light).</li>" +
    "</ul>"
));

t10_3.addBlock(new ImageBlock("images/Screenshot 2026-08-06 090620.png", "Overhead map showing a dog on a mat, a light, and a food dish to demonstrate sign tracking"));

// EXAM FOCUS (Red)
t10_3.addBlock(new ParagraphBlock(
    "<strong>Sign Tracking (Autoshaping):</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Autoshaping</strong> &ndash; sign tracking in which pigeon comes to automatically peck at a key because key light has been associated with response-independent delivery of food (Brown & Jenkins, 1968).</li>" +
    "<li style='margin-bottom: 10px;'>Once key pecking is established, make food <em>contingent</em> upon pecking.</li>" +
    "</ul>", 1
));

// EXAM FOCUS (Red)
t10_3.addBlock(new ParagraphBlock(
    "<strong>Sign Tracking & Classical Conditioning:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>Autoshaping is a type of CC fitting with Pavlov's <u>stimulus-substitution theory</u>.</li>" +
    "<li style='margin-bottom: 10px;'>b/c of association with food, light becomes substitute for food, with bird attempting to consume it.</li>" +
    "<li style='margin-bottom: 10px;'>Causes <strong>Negative Automaintenance:</strong> Pigeon compulsively pecks key even if pecking actively prevents food delivery.</li>" +
    "</ul>", 1
));
ch10.addTopic(t10_3);

// ==========================================
// ADJUNCTIVE BEHAVIOR
// ==========================================
const t10_4 = new Topic("ch10-t4", "Adjunctive Behavior");
t10_4.addBlock(new DefinitionBlock("Adjunctive Behavior", "An excessive pattern of behavior that emerges as a byproduct of an intermittent schedule of reinforcement for some completely different behavior. (Also known as schedule-induced behavior)."));

// EXAM FOCUS (Red)
t10_4.addBlock(new ParagraphBlock(
    "<strong>Adjunctive Behavior - Basic Procedures and Defining Characteristics:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Falk (1961) &ndash; first to study in animals:</strong></li>" +
    "<ul style='margin-left: 20px; list-style-type: circle;'>" +
    "<li style='margin-bottom: 5px;'>Hungry rats trained to lever-press for food on intermittent schedule of reinforcement.</li>" +
    "<li style='margin-bottom: 5px;'>Began drinking excessive amounts of water.</li>" +
    "<li style='margin-bottom: 5px;'>In 3-hr session, drank 3 &frac12; times daily water.</li>" +
    "<li style='margin-bottom: 5px;'><strong>\"Schedule-induced polydipsia\"</strong>.</li>" +
    "</ul>" +
    "</ul>", 1
));

t10_4.addBlock(new ParagraphBlock(
    "<strong>Key Features & Examples:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 10px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>Occurs during the post-reinforcement pause/waiting interval.</li>" +
    "<li style='margin-bottom: 10px;'>Affected by deprivation level (greater deprivation = stronger adjunctive behavior).</li>" +
    "<li style='margin-bottom: 10px;'>There is an optimal interval duration (e.g., 180 seconds).</li>" +
    "<li style='margin-bottom: 10px;'><strong>In Humans:</strong> Manifests during enforced waiting as nail-biting, snacking, coffee drinking, or cigarette/beer consumption (Doyle & Samson, 1988; Cherek, 1982).</li>" +
    "<li style='margin-bottom: 10px;'><strong>Displacement Activity:</strong> Falk argued these evolved to release pent-up energy, diversify behavior, and help the animal tolerate the frustration of waiting.</li>" +
    "</ul>"
));
ch10.addTopic(t10_4);

// ==========================================
// EMOTIONS & THE BRAIN
// ==========================================
const t10_5 = new Topic("ch10-t5", "Emotions & Brain Substrates");

// EXAM FOCUS (Red)
t10_5.addBlock(new ParagraphBlock(
    "<strong>What Is Emotion?</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Emotion:</strong> cluster of three distinct but interrelated sets of phenomena: Physiological responses, Overt behaviors, and Conscious feelings produced in response to an affecting situation.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Fear response:</strong> cluster of physiological changes, overt behaviors, and conscious reactions that accompany emotion of fear.</li>" +
    "</ul>", 1
));

t10_5.addBlock(new ParagraphBlock(
    "<strong>Universality vs. Culture:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 10px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>Paul Ekman suggested distinct emotions (happiness, sadness, anger, fear, disgust, surprise) are hardwired universally in humans.</li>" +
    "<li style='margin-bottom: 10px;'>While cultural rules about emotion display differ, the physiological responses are innate.</li>" +
    "</ul>"
));

t10_5.addBlock(new ImageBlock("images/Screenshot 2026-08-06 091358.png", "Ekman and Matsumoto's grid of Japanese and Caucasian facial expressions showing universal emotions"));

// EXAM FOCUS (Red)
t10_5.addBlock(new ParagraphBlock(
    "<strong>Autonomic Arousal and the Fight-or-Flight Response:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Arousal (fight-or-flight response):</strong> collection of bodily responses (including increased blood flow to muscles, increased respiration, and depressed digestion and immune function) that prepare the body to face threat.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Physiological components of arousal are mediated by autonomic nervous system (ANS).</strong></li>" +
    "<li style='margin-bottom: 10px;'>ANS signals adrenal glands to release epinephrine and cortisol.</li>" +
    "<li style='margin-bottom: 10px;'><em>Alternative:</em> <strong>Tend-and-Befriend response</strong> (Taylor) involves tending to offspring and seeking social support.</li>" +
    "</ul>", 1
));

// EXAM FOCUS (Red)
t10_5.addBlock(new ParagraphBlock(
    "<strong>Theories of Emotion:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>James-Lange Theory:</strong> Conscious feelings of emotion occur <em>when</em> the mind senses the physiological responses associated with arousal.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Cannon-Bard Theory:</strong> Conscious feelings and bodily responses occur simultaneously and independently.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Two-Factor Theory:</strong> A combination of cognitive appraisal and perception of biological changes together determines conscious feelings.</li>" +
    "</ul>", 1
));

t10_5.addBlock(new ImageBlock("images/Screenshot 2026-08-06 090402.png", "Flowcharts illustrating the James-Lange, Cannon-Bard, and Two-factor theories of emotion"));

// EXAM FOCUS (Red)
t10_5.addBlock(new ParagraphBlock(
    "<strong>Fear Responses Across Species:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Piloerection:</strong> fear response in mammals in which body hair stands on end, making the animal look bigger and more threatening than it is.</li>" +
    "</ul>", 1
));

// EXAM FOCUS (Red)
t10_5.addBlock(new ParagraphBlock(
    "<strong>Brain Substrates:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>The Papez Circuit:</strong> Includes the hippocampus (episodic memory), thalamus (sensory entry), and hypothalamus (regulates body response).</li>" +
    "<li style='margin-bottom: 10px;'><strong>Amygdala:</strong> Triggers both physiological arousal and behavioral responses. Lesions of the central nucleus of the amygdala disrupt the ability to learn and display new emotional responses. The degree of amygdala activation during an event helps determine how effectively the information is encoded into memory, and whether it gets stored as an episodic or semantic memory.</li>" +
    "</ul>", 1
));

t10_5.addBlock(new ImageBlock("images/Screenshot 2026-08-06 091425.png", "Scatterplot graphs showing the correlation between amygdala activation and the number of emotional versus neutral films recalled"));
ch10.addTopic(t10_5);

// ==========================================
// ESCAPE, AVOIDANCE & HELPLESSNESS
// ==========================================
const t10_6 = new Topic("ch10-t6", "Escape, Avoidance & Learned Helplessness");

// EXAM FOCUS (Red)
t10_6.addBlock(new ParagraphBlock(
    "<strong>Conditioned Emotional Responses:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Conditioned emotional response:</strong> classically conditioned response (CR), such as physiological arousal, produced in response to CS paired with an emotion-evoking US.</li>" +
    "</ul>", 1
));

t10_6.addBlock(new ParagraphBlock(
    "<strong>Negative Reinforcement Behaviors:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 10px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Escape Behavior:</strong> Performance terminates the aversive stimulus (e.g., escaping rain by going inside).</li>" +
    "<li style='margin-bottom: 10px;'><strong>Avoidance Behavior:</strong> Performance prevents the aversive stimulus from occurring (e.g., avoiding rain by staying inside).</li>" +
    "</ul>"
));

t10_6.addBlock(new ImageBlock("images/Screenshot 2026-08-06 090427.png", "8-panel diagram showing the physical differences between escape and avoidance behaviors in a shuttle box"));

t10_6.addBlock(new ParagraphBlock(
    "<strong>Two Theories of Avoidance:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 10px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Two-Factor Theory:</strong> Interaction between CC (warning signal paired with shock) and OC (lever press terminates the CS).</li>" +
    "<li style='margin-bottom: 10px;'><strong>Cognitive Expectancy Theory:</strong> Animals form cognitive expectancies and decide between behaviors based on expected outcomes.</li>" +
    "</ul>"
));

t10_6.addBlock(new ImageBlock("images/Screenshot 2026-08-06 090442.png", "Flowchart mapping out the Two-factor theory versus Cognitive expectancy theory of avoidance learning"));

// EXAM FOCUS (Red)
t10_6.addBlock(new ParagraphBlock(
    "<strong>Learned Helplessness:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>A phenomenon in which prior exposure to an inescapable, uncontrollable punisher teaches an animal that their responses are ineffectual, stripping them of the motivation to attempt any new avoidance responses.</li>" +
    "</ul>", 1
));

t10_6.addBlock(new ImageBlock("images/Screenshot 2026-08-06 090501.png", "Diagram of a dog in a partitioned shuttle box with an electric shock grid and warning buzzer to demonstrate learned helplessness"));
ch10.addTopic(t10_6);

// ==========================================
// CLINICAL APPLICATIONS
// ==========================================
const t10_7 = new Topic("ch10-t7", "Clinical Applications: Phobias & PTSD");

// EXAM FOCUS (Red)
t10_7.addBlock(new ParagraphBlock(
    "<strong>Emotion and Retrieval of Memories:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Mood congruency of memory:</strong> principle that it is easiest to retrieve memories that match current mood or emotional state.</li>" +
    "</ul>", 1
));

t10_7.addBlock(new ImageBlock("images/Screenshot 2026-08-06 090518.png", "Graph comparing the number of positive, neutral, and negative memories recalled based on happy versus sad moods"));

t10_7.addBlock(new ParagraphBlock(
    "<strong>Phobias & PTSD:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 10px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Flashbulb Memories:</strong> Formed under extreme emotions; vivid and long-lasting, but background details aren't necessarily more accurate.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Phobias vs Lab:</strong> In the lab, animals avoid the US (shock). In phobias, humans avoid the CS (elevator). Phobias can establish in 1 trial or via social transmission.</li>" +
    "<li style='margin-bottom: 10px;'><strong>PTSD:</strong> Individuals fail to experience standard extinction (resilience), leaving fear reactions to persist for years.</li>" +
    "</ul>"
));

// EXAM FOCUS (Red)
t10_7.addBlock(new ParagraphBlock(
    "<strong>Therapy for Phobias & PTSD:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Systematic desensitization: therapy for phobias in which successive approximations of fear-evoking stimulus are presented while patient learns to remain relaxed; eventually, even presentation of stimulus itself does not elicit fear reaction.</strong></li>" +
    "<li style='margin-bottom: 10px;'>Virtual reality therapy, particularly in combination with relaxation training and cognitive therapy, can be very effective in treating phobias.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Extinction therapy (PTSD):</strong> Exposing patients to triggers without actual danger.</li>" +
    "</ul>", 1
));
ch10.addTopic(t10_7);

psy347.addChapter(ch10);