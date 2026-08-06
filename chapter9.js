const ch9 = new Chapter("ch9", "Chapter 9: Learning Skills");

// ==========================================
// IMPLICIT MEMORY
// ==========================================
const t9_1 = new Topic("ch9-t1", "Implicit Memory");

t9_1.addBlock(new ParagraphBlock(
    "<strong>What is Implicit Memory?</strong><br>" +
    "Learning skills and behaviors without conscious awareness. Long-Term Implicit Memory breaks down into:" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 10px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Procedural Memory (Skill Memory):</strong> Memory for actions. No memory of where or when it was learned (performed without awareness). Amnesiacs (like Patient H.M.) can still learn new procedural skills.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Classical Conditioning:</strong> Pairing a neutral stimulus with a reflexive response (e.g., dog salivating to a bell).</li>" +
    "<li style='margin-bottom: 10px;'><strong>Priming:</strong> Prior exposure to a stimulus affects later responses.</li>" +
    "</ul>"
));

t9_1.addBlock(new ParagraphBlock(
    "<strong>Testing Implicit Memory:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 10px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Warrington and Weiskrantz (1968):</strong> Tested Korsakoff's syndrome patients (amnesiacs) using fragmented pictures.</li>" +
    "<li style='margin-bottom: 10px;'>Patients' performance identifying pictures improved over days of training.</li>" +
    "<li style='margin-bottom: 10px;'>Crucially, they improved despite having <em>no conscious memory</em> of the training itself.</li>" +
    "</ul>"
));

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
    "<li style='margin-bottom: 10px;'><strong>Expert:</strong> a person who performs a skill better than most.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Skill:</strong> an ability that can improve over time through practice.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Perceptual-motor skill:</strong> learned movement patterns guided by sensory inputs (depends on physical dexterity, speed, strength).</li>" +
    "<li style='margin-bottom: 10px;'><strong>Cognitive skill:</strong> a skill that requires problem solving or the application of strategies (depends on intellectual prowess).</li>" +
    "</ul>", 1 
));

t9_2.addBlock(new ParagraphBlock(
    "<strong>Types of Skills:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 10px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Closed skill:</strong> Involves performing predefined movements that ideally never vary (e.g., gymnastics routine).</li>" +
    "</ul>"
));

// EXAM FOCUS (Red)
t9_2.addBlock(new DefinitionBlock(
    "Open Skill",
    "<strong>Movements are made on the basis of predictions about changing demands of environment.</strong>",
    1 
));

t9_2.addBlock(new ParagraphBlock(
    "<strong>Features of Skill Memories vs. Memories for Events/Facts:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Communication:</strong> Skill memories are difficult to convey except by direct demonstration; event memories can be communicated flexibly in different formats.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Awareness:</strong> Skill memories may be acquired without awareness; event memories have content that is consciously accessible.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Acquisition:</strong> Skill memories require several repetitions; event memories can be acquired in a single exposure.</li>" +
    "</ul>"
));

t9_2.addBlock(new ImageBlock("images/Screenshot 2026-08-04 085650.png", "Table comparing features of skill memories against memories for events and facts"));
ch9.addTopic(t9_2);

// ==========================================
// NONHUMAN COGNITIVE SKILLS & TOOL USE
// ==========================================
const t9_3 = new Topic("ch9-t3", "Cognitive Skills in Nonhumans & Tool Use");

t9_3.addBlock(new ParagraphBlock(
    "<strong>Skill Development Timeline:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 10px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>Humans learn perceptual-motor skills at younger ages than cognitive skills.</li>" +
    "<li style='margin-bottom: 10px;'>Basic perceptual-motor skills (producing speech, drawing lines) are prerequisites for complex cognitive skills (reading, writing).</li>" +
    "<li style='margin-bottom: 10px;'>Only a handful of nonhuman species can develop cognitive skills.</li>" +
    "</ul>"
));

t9_3.addBlock(new ParagraphBlock(
    "<strong>Defining Tool Use:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><em>Merriam-Webster:</em> A handheld device that aids in accomplishing a task or performing an operation.</li>" +
    "<li style='margin-bottom: 10px;'><em>Jane Goodall:</em> The use of an external object as a functional extension of mouth, beak, hand, or claw to attain an immediate goal.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Goodall's Discovery (1965):</strong> Shattered the myth that only humans use tools by observing chimpanzees using stone anvils to crack nuts.</li>" +
    "<li style='margin-bottom: 10px;'>Tool use is seen in invertebrates (Boxer crabs wielding anemones for defense), aquatic animals, birds, monkeys, and apes.</li>" +
    "</ul>"
));

// EXAM FOCUS (Red)
t9_3.addBlock(new ParagraphBlock(
    "<strong>Acquisition of Tool Behavior:</strong><br><br>" +
    "<strong>A New Caledonian crow was observed extracting a bucket containing meat using a piece of wire she had just bent (Weir et al., 2002).</strong>",
    1 
));

t9_3.addBlock(new ImageBlock("images/Screenshot 2026-08-04 084802.png", "A New Caledonian crow bending a wire to extract a bucket of meat"));
ch9.addTopic(t9_3);

// ==========================================
// PRACTICE AND FEEDBACK
// ==========================================
const t9_4 = new Topic("ch9-t4", "Practice, Feedback, and Skill Performance");

t9_4.addBlock(new ParagraphBlock("More repetition does <em>not</em> guarantee improvement. Feedback about performance (knowledge of results) is critical to effectiveness."));

t9_4.addBlock(new DefinitionBlock("Power Law of Practice", "The degree to which each new practice session improves performance diminishes after a certain point. Learning occurs quickly at first and then slows down."));

// EXAM FOCUS (Red)
t9_4.addBlock(new ParagraphBlock(
    "<strong>Effects of Practice and Feedback on Skill Performance:</strong><br><br>" +
    "Tasks like reading or kicking show dramatic improvements early on, but eventually hit a plateau where further practice yields smaller gains. Feedback (like seeing an instructional film of your performance) can reset the curve and allow for further rapid improvement.",
    1 
));

t9_4.addBlock(new ImageBlock("images/Screenshot 2026-08-04 084815.png", "Graphs illustrating the effects of practice on a reading task and the effects of feedback on a kicking task"));

t9_4.addBlock(new ParagraphBlock(
    "<strong>Timing and Sequencing of Practice:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 10px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Massed practice:</strong> Concentrated, continuous practice. (Yields <em>lower</em> overall performance).</li>" +
    "<li style='margin-bottom: 10px;'><strong>Spaced practice:</strong> Practice spread out over several sessions. (Yields <em>higher</em> overall performance).</li>" +
    "<li style='margin-bottom: 10px;'><strong>Constant practice:</strong> Practice involving a constrained set of materials and skills.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Variable practice:</strong> Practice involving performance of skills in a wide variety of contexts.</li>" +
    "</ul>"
));

t9_4.addBlock(new ImageBlock("images/Screenshot 2026-08-04 084826.png", "Graph comparing the benefits of spaced practice versus massed practice on correct keystrokes"));
ch9.addTopic(t9_4);

// ==========================================
// BECOMING AN EXPERT
// ==========================================
const t9_5 = new Topic("ch9-t5", "Becoming an Expert");

t9_5.addBlock(new DefinitionBlock("Implicit Learning", "Learning that happens incidentally, without awareness of what has been learned. Often studied using the Serial Reaction Time Task (pressing keys corresponding to visual cues). Evidence suggests conscious awareness may actually be a prerequisite for achieving certain levels of expertise."));

t9_5.addBlock(new ImageBlock("images/Screenshot 2026-08-04 085722.png", "Serial Reaction Time Task diagram and response times graph"));

t9_5.addBlock(new ParagraphBlock("Perceptual-motor skills that an organism can perform with minimal attention are called <strong>motor programs</strong> or <strong>habits</strong>."));

// EXAM FOCUS (Red)
t9_5.addBlock(new ParagraphBlock(
    "<strong>Paul Fitts proposed that skill learning usually progresses through three stages:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 15px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>1. Cognitive stage:</strong> Performance is based on rules that can be verbalized (e.g., using written instructions to set up a tent).</li>" +
    "<li style='margin-bottom: 10px;'><strong>2. Associative stage:</strong> Actions become stereotyped (e.g., setting up a tent in fixed sequence without instructions).</li>" +
    "<li style='margin-bottom: 10px;'><strong>3. Autonomous stage:</strong> Movements seem automatic (e.g., setting up a tent while carrying on a discussion about politics).</li>" +
    "</ul>", 1 
));

t9_5.addBlock(new ParagraphBlock(
    "<strong>Talent and Genetics:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 10px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>Talent blossoms with practice. People who master a skill with little effort are often described as having a 'gift'.</li>" +
    "<li style='margin-bottom: 10px;'>Researchers use the <strong>rotary pursuit task</strong> to study perceptual-motor learning.</li>" +
    "<li style='margin-bottom: 10px;'>Mapping identical vs. fraternal twins proves genetics heavily influence skill acquisition trajectories.</li>" +
    "</ul>"
));

t9_5.addBlock(new ImageBlock("images/Screenshot 2026-08-04 085732.png", "Rotary Pursuit Task apparatus and graphs showing performance of identical versus fraternal twins"));

t9_5.addBlock(new ParagraphBlock(
    "<strong>Skill Transfer & Decay:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 10px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'><strong>Transfer of training:</strong> When skills seem to transfer to novel situations.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Transfer specificity:</strong> Restricted applicability of some learned skills to very specific situations.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Identical elements theory (Thorndike):</strong> Transfer of learned abilities to novel situations depends on the number of elements in the new situation identical to those in the encoded situation.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Learning set formation:</strong> Acquiring the ability to learn novel tasks rapidly based on frequent experiences with similar tasks.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Skill decay:</strong> Loss of skill through non-use. New skills can also create memories that interfere with earlier skill memories.</li>" +
    "</ul>"
));

t9_5.addBlock(new ParagraphBlock(
    "<strong>The persistence of a skill over time depends on 4 factors:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 10px; margin-bottom: 5px;'>" +
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
t9_6.addBlock(new ParagraphBlock("Skill-memory systems in the brain include the <strong>basal ganglia</strong>, <strong>cerebral cortex</strong>, and <strong>cerebellum</strong>. These regions modulate control of movements by circuits in the brainstem and spinal cord."));

t9_6.addBlock(new ImageBlock("images/Screenshot 2026-08-04 084843.png", "Anatomy of the brain highlighting the cerebral cortex, basal ganglia, and cerebellum"));

t9_6.addBlock(new ParagraphBlock(
    "<strong>Basal Ganglia:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 10px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>A collection of ganglia at the base of the forebrain receiving massive cortical inputs.</li>" +
    "<li style='margin-bottom: 10px;'>Plays a vital role in <strong>operant conditioning</strong>.</li>" +
    "<li style='margin-bottom: 10px;'>Controls velocity, direction, and amplitude of movements, and prepares the body to move.</li>" +
    "<li style='margin-bottom: 10px;'>Also active when humans learn <em>cognitive</em> skills, though its specific function here is debated.</li>" +
    "</ul>"
));

// EXAM FOCUS (Red)
t9_6.addBlock(new ParagraphBlock(
    "<strong>Learning Deficits After Lesions:</strong><br><br>" +
    "The basal ganglia are particularly important in perceptual-motor learning that involves generating motor responses based on specific environmental cues (e.g., rats navigating a maze using illuminated arms). Lesions to the basal ganglia heavily disrupt this type of specific skill learning, while enhanced basal ganglia function may facilitate it.",
    1 
));

t9_6.addBlock(new ImageBlock("images/Screenshot 2026-08-04 084853.png", "Graphs showing learning deficits in maze navigation following basal ganglia and hippocampal lesions"));

t9_6.addBlock(new ParagraphBlock(
    "<strong>Cerebral Cortex:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 10px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>Mammals are the only animals that make extensive use of cortical circuits.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Cortical Expansion:</strong> Regions involved in performing a particular skill expand in area with practice (proven by fMRI blood flow).</li>" +
    "<li style='margin-bottom: 10px;'>When learning a sequence of finger movements, the motor cortex expands rapidly during the first training session, but much more gradually later on.</li>" +
    "</ul>"
));

// EXAM FOCUS (Red)
t9_6.addBlock(new ParagraphBlock(
    "<strong>Cerebellum:</strong>" +
    "<ul class='content-list' style='margin-left: 40px; margin-top: 10px; margin-bottom: 5px;'>" +
    "<li style='margin-bottom: 10px;'>One of the most basic neural systems involved in encoding and retrieving skill memories.</li>" +
    "<li style='margin-bottom: 10px;'><strong>Important for tasks that involve aiming at or tracking a target, such as mirror tracing.</strong></li>" +
    "</ul>", 1 
));
ch9.addTopic(t9_6);

psy347.addChapter(ch9);