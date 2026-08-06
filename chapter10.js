const ch10 = new Chapter("ch10", "Chapter 10: Biological and Emotional Influences on Learning");

// ==========================================
// CONDITIONED TASTE AVERSIONS (CTA)
// ==========================================
const t10_1 = new Topic("ch10-t1", "Conditioned Taste Aversions (CTA)");
t10_1.addBlock(new ParagraphBlock("Taste aversion studies in the 1960s by Garcia and colleagues were highly valuable for showing biological exceptions to traditional learning laws. Rats (and humans) quickly learn to reject food flavors that are associated with gastric illness. This functions to help animals stay away from poisonous foods and is incredibly common (affecting 65% of undergraduates)."));

t10_1.addBlock(new ParagraphBlock("In a typical rat experiment, the rat is given a preferred sweet water (NS), then made to feel sick via a drug or X-ray irradiation (US &rarr; UR). After recovery, the sweet water has become a conditioned aversive stimulus (CS) that elicits nausea/avoidance (CR)."));

// EXAM FOCUS (Red)
t10_1.addBlock(new ParagraphBlock(
    "<strong>Similar to other forms of CC:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Stimulus generalization</strong> &ndash; food items similar to aversive item are also aversive (fish types).</li>" +
    "<li style='margin-bottom: 10px;'><strong>Extinction</strong> &ndash; if aversive item is repeatedly ingested without illness.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Overshadowing</strong> &ndash; more likely to develop aversion to stronger tasting food (onions) than milder food (potatoes) consumed at same meal.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Blocking</strong> &ndash; if you've acquired a taste aversion to peas, then force yourself to eat them along with fish and get sick, you probably won't acquire aversion to fish.</li>" +
    "</ul>", 1
));

// EXAM FOCUS (Red)
t10_1.addBlock(new ParagraphBlock(
    "<strong>Latent inhibition &ndash; also important in taste aversion conditioning</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>More likely to associate novel item with sickness than more familiar item.</li>" +
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
    "</ul>", 1
));

t10_1.addBlock(new ParagraphBlock("The results of this study showed that rats made nauseous strongly avoided the sweet water (predisposed to associate nausea with taste), while rats that were shocked avoided the bright/noisy water (predisposed to associate peripheral pain with visual/auditory stimuli)."));

// EXAM FOCUS (Red)
t10_1.addBlock(new ParagraphBlock(
    "<strong>Specificity of associations:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>If you feel nauseous after a meal, you don't associate your tv program with nausea.</li>" +
    "<li style='margin-bottom: 10px;'>Strong inherited tendency to associate gastrointestinal illness with food or drink than other items.</li>" +
    "<li style='margin-bottom: 10px;'>Called <strong>CS-US relevance:</strong> innate tendency to more readily associate certain types of stimuli with each other.</li>" +
    "</ul>", 1
));

t10_1.addBlock(new ParagraphBlock("Further evidence for CS-US relevance was found when quail and rats were given dark blue, sour water and then made ill. The rats (who eat at night and rely on taste/smell) avoided the sour water, while the quail (who are daytime eaters and rely on vision) avoided the dark blue water."));

t10_1.addBlock(new ParagraphBlock("Taste Aversion has 5 unique characteristics that set it apart from other learning:"));
t10_1.addBlock(new ListBlock([
    "<strong>1. One-Trial Learning:</strong> Many flavor aversions can be learned in a single trial.",
    "<strong>2. Long-Delay Learning:</strong> Revusky noted that flavor aversions develop even if illness occurs hours after consumption because there is no other relevant stimuli to interfere.",
    "<strong>3. Learned Safety:</strong> If an animal eats a food and is safe, a later illness will yield a weaker aversion. Safety acts as conditioned inhibition.",
    "<strong>4. Hedonic Shift:</strong> The actual pleasantness of the flavor changes. Measured by the taste-reactivity test (Yum = lick paws; Yuck = gape, paw shakes, chin rub).",
    "<strong>5. Compound Potentiation:</strong> More conditioning to a weak CS if combined with a strong CS. This is the exact <em>opposite</em> of overshadowing, contradicting the Rescorla-Wagner model. It occurs via <strong>within-compound associations</strong>, meaning conditioning to the taste is transferred to the odor."
]));

// EXAM FOCUS (Red)
t10_1.addBlock(new ParagraphBlock(
    "<strong>1. One-Trial Learning</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>One-trial learning in flavor aversions suggests VERY salient CS and US.</li>" +
    "<li style='margin-bottom: 10px;'>Faster learning with higher saliences.</li>" +
    "<li style='margin-bottom: 10px;'>So, possibly not all that different from other examples of conditioning...</li>" +
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

t10_1.addBlock(new ParagraphBlock("Practical Applications of Taste Aversion:"));
t10_1.addBlock(new ListBlock([
    "<strong>Predation Control:</strong> Sheep meat laced with LiCl and covered with sheepskin makes coyotes sick, conditioning them to avoid hunting sheep.",
    "<strong>Cancer Patients:</strong> Because chemotherapy causes nausea, patients are given highly familiar foods after chemo, and explicitly novel foods before chemo (to act as a decoy for the taste aversion)."
]));
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

t10_2.addBlock(new ParagraphBlock("Preparedness plays a role in Classical Conditioning (e.g., people are more readily afraid of evolutionary threats like spiders than modern threats like electrical outlets) and Operant Conditioning:"));
t10_2.addBlock(new ListBlock([
    "<strong>Chaffinches (Stevenson-Hinde, 1973):</strong> Biologically prepared to associate perching with hearing a song, and pecking with obtaining food.",
    "<strong>Rats (Bolles, 1970):</strong> Easier to train to press a lever for food. Freezing or running is their biologically prepared response to shock.",
    "<strong>Pigeons (Bedford & Anger):</strong> Will quickly learn to fly to avoid shock, but will not learn to peck a key to avoid shock because flying is how they naturally avoid danger."
]));
ch10.addTopic(t10_2);

// ==========================================
// OPERANT-RESPONDENT INTERACTIONS
// ==========================================
const t10_3 = new Topic("ch10-t3", "Operant-Respondent Interactions & Sign Tracking");
t10_3.addBlock(new ParagraphBlock("Bolles proposed that some avoidance responses are not actually operants controlled by consequences, but are elicited behaviors called <strong>Species-Specific Defense Reactions (SSDR)</strong> controlled by the stimuli preceding them."));

t10_3.addBlock(new DefinitionBlock("Instinctive Drift", "When a genetically based Fixed Action Pattern gradually emerges and displaces a behavior being operantly conditioned. Breland and Breland noted the utter failure of OC in some cases: dancing chickens couldn't stand still on a platform, raccoons repeatedly washed coins instead of depositing them, and pigs rooted coins in the dirt."));

t10_3.addBlock(new DefinitionBlock("Sign Tracking", "When an organism approaches a stimulus that signals the presentation of an appetitive event (e.g., Pavlov's dog approaching and licking the light that signaled food delivery)."));

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
    "</ul>", 1
));

t10_3.addBlock(new ParagraphBlock("Autoshaping exerts such powerful control that a pigeon will compulsively peck a key associated with food even if doing so actively prevents the delivery of the food (\"negative automaintenance\")."));
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

t10_4.addBlock(new ParagraphBlock("Features of Adjunctive Behavior:"));
t10_4.addBlock(new ListBlock([
    "Typically occurs in the period immediately following the consumption of the intermittent reinforcer.",
    "Affected by the level of deprivation (greater deprivation = stronger adjunctive behaviors).",
    "Adjunctive behaviors can function as reinforcers for other behaviors (e.g., electrical brain stimulation can act as a reinforcer producing the adjunctive behavior of eating).",
    "There is an optimal interval between reinforcers for it to develop (e.g., 180 seconds)."
]));

t10_4.addBlock(new ParagraphBlock("Adjunctive Behavior in Humans:"));
t10_4.addBlock(new ListBlock([
    "Falk (1977) noted it manifests during periods of enforced waiting as nail-biting, snacking, talking, or coffee drinking.",
    "Doyle and Samson (1988) found humans playing a game on a 90-sec monetary reinforcement schedule engaged in twice as much water/beer sipping compared to a 30-sec schedule.",
    "Cherek (1982) found high rates of cigarette smoking when monetary payment for button pushing was placed on a 120-sec schedule."
]));

t10_4.addBlock(new DefinitionBlock("Displacement Activity", "Falk (1977) argued that adjunctive behaviors evolved as displacement activities—seemingly irrelevant actions displayed when an animal is in conflict or waiting (first noted by Tinbergen, 1951). This serves two purposes: it releases pent-up energy/diversifies behavior (which might accidentally uncover a tool or food), and it helps the animal tolerate the aversiveness of waiting so they stay in the situation long enough to get the delayed reinforcer."));
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

t10_5.addBlock(new ParagraphBlock("Paul Ekman suggested that a small set of distinct emotions are hardwired universally in humans from birth: Happiness, sadness, anger, fear, disgust, and surprise. While cultural rules about emotion display differ, the physiological responses and conscious feelings seem to be innate and universal. Furthermore, laughter-like vocalizations in rats, dogs, and apes appear to be a social expression of joy, activating the same brain regions as human laughter."));

// Added Ekman Faces Image
t10_5.addBlock(new ImageBlock("images/Screenshot 2026-08-06 091358.png", "Ekman and Matsumoto's grid of Japanese and Caucasian facial expressions showing universal emotions"));

// EXAM FOCUS (Red)
t10_5.addBlock(new ParagraphBlock(
    "<strong>Autonomic Arousal and the Fight-or-Flight Response:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Arousal (fight-or-flight response):</strong> collection of bodily responses (including increased blood flow to muscles, increased respiration, and depressed digestion and immune function) that prepare the body to face threat.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Physiological components of arousal are mediated by autonomic nervous system (ANS).</strong></li>" +
    "</ul>", 1
));

t10_5.addBlock(new ParagraphBlock("The ANS signals the adrenal glands to release stress hormones like epinephrine and glucocorticoids (cortisol). Alternatively, Shelley Taylor proposes the <strong>Tend-and-Befriend response</strong> to threat, involving tending to offspring and seeking social support for stress relief."));

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

// Added Amygdala Activation Graphs
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

t10_6.addBlock(new ParagraphBlock("Negative reinforcement leads to two types of behavior:"));
t10_6.addBlock(new ListBlock([
    "<strong>Escape Behavior:</strong> Performance of behavior terminates the aversive stimulus (e.g., escaping the rain by going inside).",
    "<strong>Avoidance Behavior:</strong> Performance of behavior prevents the aversive stimulus from occurring (e.g., avoiding the rain by staying inside)."
]));

t10_6.addBlock(new ParagraphBlock("In the Shuttle Avoidance Procedure, rats learn to cross a barrier to escape a shock. Once a warning light is introduced before the shock, the rat learns to cross the barrier early to avoid the shock entirely."));

t10_6.addBlock(new ImageBlock("images/Screenshot 2026-08-06 090427.png", "8-panel diagram showing the physical differences between escape and avoidance behaviors in a shuttle box"));

t10_6.addBlock(new ParagraphBlock("Two theories explain this:"));
t10_6.addBlock(new ListBlock([
    "<strong>Two-Factor Theory of Avoidance:</strong> Avoidance learning involves an interaction between classical conditioning (warning signal paired with shock) and operant conditioning (lever press terminates the CS and reduces fear).",
    "<strong>Cognitive Expectancy Theory:</strong> Animals form cognitive expectancies and decide between competing possible behaviors based on those expectancies."
]));

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

t10_7.addBlock(new DefinitionBlock("Flashbulb Memories", "Memories formed under extreme emotions that seem vivid and long-lasting. They are experienced with great confidence, but are not necessarily more accurate regarding background details."));

t10_7.addBlock(new ParagraphBlock("Phobias are classified primarily into specific phobias and agoraphobia. Mineka (1985) noted that lab avoidance differs from human phobias: animals in the lab avoid the US (the shock), while humans with phobias avoid the CS (the elevator). Lab animals require multiple pairings, whereas human phobias often establish in 1 trial. Additionally, phobias can be acquired through <strong>social transmission</strong> (e.g., two-thirds of people with dog phobias recall a dog-related trauma, but so do two-thirds of people with NO fear of dogs, suggesting direct trauma isn't the only cause). During panic attacks, large amounts of epinephrine trigger the fight-or-flight response."));

// EXAM FOCUS (Red)
t10_7.addBlock(new ParagraphBlock(
    "<strong>Therapy for Phobias:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Systematic desensitization: therapy for phobias in which successive approximations of fear-evoking stimulus are presented while patient learns to remain relaxed; eventually, even presentation of stimulus itself does not elicit fear reaction.</strong></li>" +
    "<li style='margin-bottom: 10px;'>Virtual reality therapy, particularly in combination with relaxation training and cognitive therapy, can be very effective in treating phobias.</li>" +
    "</ul>", 1
));

t10_7.addBlock(new ParagraphBlock("<strong>Posttraumatic Stress Disorder (PTSD):</strong> A psychological syndrome where an individual fails to experience standard 'resilience' (fear reactions subsiding with time) after a traumatic event. Instead, they experience a failure of extinction, where fear reactions persist for years alongside emotional numbing and intrusive flashbacks. Treatment often involves extinction therapy, where patients are exposed to triggers in the absence of actual danger, though its effectiveness may be limited to the context in which the extinction occurred."));
ch10.addTopic(t10_7);

psy347.addChapter(ch10);