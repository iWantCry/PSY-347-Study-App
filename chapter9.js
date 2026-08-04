const ch9 = new Chapter("ch9", "Chapter 9: Learning Skills");

// ==========================================
// IMPLICIT MEMORY
// ==========================================
const t9_1 = new Topic("ch9-t1", "Implicit Memory");
t9_1.addBlock(new ParagraphBlock("Implicit memory involves learning skills and behaviors without conscious awareness. Long-Term Implicit Memory can be broken down into Priming, Procedural Memory, and Conditioning."));

t9_1.addBlock(new ParagraphBlock(
    "<strong>Types of Implicit Memory:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Procedural Memory (Skill Memory):</strong> Memory for actions. There is no memory of where or when it was learned, and procedures are performed without conscious awareness. People who cannot form new LTMs (like Patient H.M.) can still learn new procedural skills.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Classical Conditioning:</strong> Pairing a neutral stimulus with a reflexive response (e.g., a dog salivating to a bell after it is repeatedly paired with food).</li>" +
    "</ul>"
));

t9_1.addBlock(new ParagraphBlock("Warrington and Weiskrantz (1968) demonstrated implicit memory using Korsakoff's syndrome patients (amnesiacs). When shown fragmented pictures, the patients' performance identifying the pictures improved over days of training, even though they did not remember the training itself (indicated by a dropping error score)."));

// Fragmented Airplane Image
t9_1.addBlock(new ImageBlock("images/Screenshot 2026-08-04 084740.png", "Fragmented airplane drawings used in the Warrington and Weiskrantz study to test implicit memory"));

// EXAM FOCUS (Red)
t9_1.addBlock(new ParagraphBlock(
    "<strong>Implicit Memory in Everyday Experience:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>Perfect and Askew (1994) demonstrated the <strong>Propaganda effect: you are more likely to rate statements read or heard before as being true.</strong></li>" +
    "<li style='margin-bottom: 10px;'>This has heavy implications for advertisements.</li>" +
    "</ul>", 1 
));
ch9.addTopic(t9_1);

// ==========================================
// BEHAVIORAL PROCESSES & TYPES OF SKILLS
// ==========================================
const t9_2 = new Topic("ch9-t2", "Behavioral Processes & Types of Skills");

// EXAM FOCUS (Red)
t9_2.addBlock(new ParagraphBlock(
    "<strong>Behavioral Processes Definitions:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Expert: a person who performs a skill better than most.</strong></li>" +
    "<li style='margin-bottom: 10px;'><strong>Skill: an ability that can improve over time through practice.</strong></li>" +
    "<li style='margin-bottom: 10px;'><strong>Perceptual-motor skill: learned movement patterns guided by sensory inputs.</strong></li>" +
    "<li style='margin-bottom: 10px;'><strong>Cognitive skill: a skill that requires problem solving or the application of strategies.</strong></li>" +
    "</ul>", 1 
));

t9_2.addBlock(new ParagraphBlock("Similarities and Differences between Perceptual-Motor and Cognitive Skills:"));
t9_2.addBlock(new ListBlock([
    "Cognitive skills are commonly thought to depend more on intellectual prowess.",
    "Perceptual-motor skills depend more on physical dexterity, speed, and strength.",
    "<strong>Closed skill:</strong> involves performing predefined movements that, ideally, never vary."
]));

// EXAM FOCUS (Red)
t9_2.addBlock(new DefinitionBlock(
    "Open Skill",
    "<strong>Movements are made on the basis of predictions about changing demands of environment.</strong>",
    1 
));

t9_2.addBlock(new ParagraphBlock(
    "<strong>Features of Skill Memories vs. Memories for Events/Facts:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>Skill memories are difficult to convey except by direct demonstration; event memories can be communicated flexibly in different formats.</li>" +
    "<li style='margin-bottom: 10px;'>Skill memories may be acquired without awareness; event memories have content that is consciously accessible.</li>" +
    "<li style='margin-bottom: 10px;'>Skill memories require several repetitions; event memories can be acquired in a single exposure.</li>" +
    "</ul>"
));

// Added Features of Skill Memories Table Image
t9_2.addBlock(new ImageBlock("images/Screenshot 2026-08-04 085650.png", "Table comparing features of skill memories against memories for events and facts"));
ch9.addTopic(t9_2);

// ==========================================
// NONHUMAN COGNITIVE SKILLS & TOOL USE
// ==========================================
const t9_3 = new Topic("ch9-t3", "Cognitive Skills in Nonhumans & Tool Use");
t9_3.addBlock(new ParagraphBlock("Which comes first? Humans learn perceptual-motor skills at younger ages than they learn cognitive skills. Many cognitive skills, including reading and writing, are difficult or impossible to acquire without first learning basic perceptual-motor skills like producing speech or drawing lines. Only a handful of species are able to develop cognitive skills."));

t9_3.addBlock(new ParagraphBlock(
    "<strong>Defining Tool Use:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><em>Merriam-Webster:</em> A handheld device that aids in accomplishing a task or performing an operation.</li>" +
    "<li style='margin-bottom: 10px;'><em>Jane Goodall:</em> The use of an external object as a functional extension of mouth or beak, hand or claw, in the attainment of an immediate goal.</li>" +
    "</ul>"
));

t9_3.addBlock(new ParagraphBlock("In 1965, Jane Goodall shattered the myths that only humans could make/use tools and that chimps were passive vegetarians, by observing chimpanzees using stones as anvils to crack nuts. Tool use has since been observed across many species, including invertebrates (e.g., the Boxer crab detaches small anemones and waves them in front of itself as defense), aquatic animals, birds, monkeys, and apes."));

// EXAM FOCUS (Red)
t9_3.addBlock(new ParagraphBlock(
    "<strong>Acquisition of Tool Behavior:</strong><br><br>" +
    "<strong>A New Caledonian crow was observed extracting a bucket containing meat using a piece of wire she had just bent (Weir et al., 2002).</strong>",
    1 
));

// Crow Tool Use Image
t9_3.addBlock(new ImageBlock("images/Screenshot 2026-08-04 084802.png", "A New Caledonian crow bending a wire to extract a bucket of meat"));
ch9.addTopic(t9_3);

// ==========================================
// PRACTICE AND FEEDBACK
// ==========================================
const t9_4 = new Topic("ch9-t4", "Practice, Feedback, and Skill Performance");
t9_4.addBlock(new ParagraphBlock("More repetition does not guarantee improvement. Feedback about performance (knowledge of results) is critical to effectiveness."));

t9_4.addBlock(new DefinitionBlock("Power Law of Practice", "The degree to which each new practice session improves performance diminishes after a certain point. Learning occurs quickly at first and then slows down."));

// EXAM FOCUS (Red)
t9_4.addBlock(new ParagraphBlock(
    "<strong>Effects of Practice and Feedback on Skill Performance:</strong><br><br>" +
    "Tasks like reading or kicking show dramatic improvements early on, but eventually hit a plateau where further practice yields smaller gains. Feedback (like seeing an instructional film of your performance) can reset the curve and allow for further rapid improvement.",
    1 
));

// Reading/Kicking Practice Graphs Image
t9_4.addBlock(new ImageBlock("images/Screenshot 2026-08-04 084815.png", "Graphs illustrating the effects of practice on a reading task and the effects of feedback on a kicking task"));

t9_4.addBlock(new ParagraphBlock("Timing and sequencing of practice matters:"));
t9_4.addBlock(new ListBlock([
    "<strong>Massed practice:</strong> concentrated, continuous practice. (Yields lower overall performance).",
    "<strong>Spaced practice:</strong> practice spread out over several sessions. (Yields higher overall performance).",
    "<strong>Constant practice:</strong> practice involving a constrained set of materials and skills.",
    "<strong>Variable practice:</strong> practice involving performance of skills in a wide variety of contexts."
]));

// Spaced vs Massed Practice Graph Image
t9_4.addBlock(new ImageBlock("images/Screenshot 2026-08-04 084826.png", "Graph comparing the benefits of spaced practice versus massed practice on correct keystrokes"));
ch9.addTopic(t9_4);

// ==========================================
// BECOMING AN EXPERT
// ==========================================
const t9_5 = new Topic("ch9-t5", "Becoming an Expert");
t9_5.addBlock(new DefinitionBlock("Implicit Learning", "Learning that happens incidentally, without awareness of what has been learned. This is often studied using the Serial Reaction Time Task, where participants learn to press one of four keys corresponding to a visual cue. Evidence suggests conscious awareness may actually be a prerequisite for achieving certain levels of expertise."));

// Added Serial Reaction Time Task Image
t9_5.addBlock(new ImageBlock("images/Screenshot 2026-08-04 085722.png", "Serial Reaction Time Task diagram and response times graph"));

t9_5.addBlock(new ParagraphBlock("Perceptual-motor skills that an organism can perform with minimal attention are called motor programs or habits."));

// EXAM FOCUS (Red)
t9_5.addBlock(new ParagraphBlock(
    "<strong>Paul Fitts proposed that skill learning usually progresses through three stages:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>1. Cognitive stage:</strong> Performance is based on rules that can be verbalized (e.g., using written instructions to set up a tent).</li>" +
    "<li style='margin-bottom: 10px;'><strong>2. Associative stage:</strong> Actions become stereotyped (e.g., setting up a tent in fixed sequence without instructions).</li>" +
    "<li style='margin-bottom: 10px;'><strong>3. Autonomous stage:</strong> Movements seem automatic (e.g., setting up a tent while carrying on a discussion about politics).</li>" +
    "</ul>", 1 
));

t9_5.addBlock(new ParagraphBlock("Talent blossoms with practice. People who master a skill with little effort are often described as having a 'gift'. Researchers frequently use the rotary pursuit task to study perceptual-motor learning, mapping variables like identical vs. fraternal twins to assess genetic influence on skill acquisition."));

// Added Rotary Pursuit Task Image
t9_5.addBlock(new ImageBlock("images/Screenshot 2026-08-04 085732.png", "Rotary Pursuit Task apparatus and graphs showing performance of identical versus fraternal twins"));

t9_5.addBlock(new ParagraphBlock("Retrieving existing memories and when memory fails:"));
t9_5.addBlock(new ListBlock([
    "<strong>Transfer of training:</strong> when skills seem to transfer to novel situations.",
    "<strong>Transfer specificity:</strong> restricted applicability of some learned skills to specific situations.",
    "<strong>Identical elements theory (Thorndike):</strong> transfer of learned abilities to novel situations depends on the number of elements in the new situation identical to those in the encoded situation.",
    "<strong>Learning set formation:</strong> acquiring the ability to learn novel tasks rapidly based on frequent experiences with similar tasks.",
    "<strong>Skill decay:</strong> loss of skill through non-use. As time passes, new skills create memories that potentially interfere with earlier skill memories."
]));

t9_5.addBlock(new ParagraphBlock(
    "The persistence of a skill over time depends on 4 factors:" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>1. Complexity of the skill.</li>" +
    "<li style='margin-bottom: 10px;'>2. How well the skill memory was encoded in the first place.</li>" +
    "<li style='margin-bottom: 10px;'>3. How often the skill was performed.</li>" +
    "<li style='margin-bottom: 10px;'>4. Conditions in which recall is attempted.</li>" +
    "</ul>"
));
ch9.addTopic(t9_5);

// ==========================================
// BRAIN SUBSTRATES
// ==========================================
const t9_6 = new Topic("ch9-t6", "Brain Substrates for Skill Learning");
t9_6.addBlock(new ParagraphBlock("Skill-memory systems in the brain include the basal ganglia, cerebral cortex, and cerebellum. These regions modulate control of movements by circuits in the brainstem and spinal cord."));

// Brain Substrates Anatomy Image
t9_6.addBlock(new ImageBlock("images/Screenshot 2026-08-04 084843.png", "Anatomy of the brain highlighting the cerebral cortex, basal ganglia, and cerebellum"));

t9_6.addBlock(new ParagraphBlock(
    "<strong>Basal Ganglia:</strong> A collection of ganglia at the base of the forebrain that receives large numbers of inputs from cortical neurons. Important functions include:" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>Playing an important role in operant conditioning.</li>" +
    "<li style='margin-bottom: 10px;'>Controlling velocity, direction, and amplitude of movements, and preparing the body to move.</li>" +
    "<li style='margin-bottom: 10px;'>Neuroimaging shows the basal ganglia are also active when humans learn cognitive skills (not just motor skills), though its specific function here is still debated.</li>" +
    "</ul>"
));

// EXAM FOCUS (Red)
t9_6.addBlock(new ParagraphBlock(
    "<strong>Learning Deficits After Lesions:</strong><br><br>" +
    "The basal ganglia are particularly important in perceptual-motor learning that involves generating motor responses based on specific environmental cues (e.g., rats navigating a maze using illuminated arms). Lesions to the basal ganglia heavily disrupt this type of specific skill learning, while enhanced basal ganglia function may facilitate it.",
    1 
));

// Lesion Learning Deficits Graph Image
t9_6.addBlock(new ImageBlock("images/Screenshot 2026-08-04 084853.png", "Graphs showing learning deficits in maze navigation following basal ganglia and hippocampal lesions"));

t9_6.addBlock(new ParagraphBlock(
    "<strong>Cerebral Cortex:</strong> Most animals do not have a cerebral cortex; mammals are the only animals that make extensive use of cortical circuits." +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Cortical Expansion:</strong> Regions involved in performing a particular skill expand in area with practice (proven by measures of blood flow in sensory and motor cortices).</li>" +
    "<li style='margin-bottom: 10px;'>When learning a sequence of finger movements, the motor cortex expands rapidly during the first training session, but much more gradually in later sessions.</li>" +
    "</ul>"
));

t9_6.addBlock(new ParagraphBlock("<strong>Cerebellum:</strong> Probably one of the most basic neural systems involved in encoding and retrieving skill memories."));

// EXAM FOCUS (Red)
t9_6.addBlock(new ParagraphBlock(
    "<strong>Cerebellum is also important for tasks that involve aiming at or tracking target, such as mirror tracing.</strong>",
    1 
));
ch9.addTopic(t9_6);

psy347.addChapter(ch9);