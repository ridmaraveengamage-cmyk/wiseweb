(()=>{const R=String.raw;window.WW_LESSONS=Object.assign(window.WW_LESSONS||{},{
s1:{id:'s1',day:1,slot:0,track:'S',hours:4,title:'How computers run programs',
lead:'Before writing code, you need a clear picture of what a computer actually does when it "runs" something. Today you follow a program from the keyboard down to electrical switches, set up your own coding workspace, and write your first lines of Python.',
goals:['Explain what a computer is in terms of input, processing, memory and output','Count in binary and explain why computers use it','Describe how text, colours and sounds become numbers','Walk through the fetch–decode–execute cycle of a CPU','Explain what an operating system and a programming language do','Install Python and VS Code, and run your first program'],
parts:[
{h:'The big idea: a machine that follows instructions',nav:'Big idea',time:'25 min',body:R`
<p>A computer is a machine that <b>follows instructions on numbers, very fast</b>. That's the whole idea. Everything else, from WhatsApp to ChatGPT, is built from that one ability.</p>
<p>Every computer, from a calculator to a data centre, has the same four parts:</p>
<div class="tbl-wrap"><table><thead><tr><th>Part</th><th>What it does</th><th>Examples</th></tr></thead><tbody>
<tr><td><b>Input</b></td><td>Brings information in</td><td>Keyboard, mouse, touchscreen, microphone, camera, sensors</td></tr>
<tr><td><b>Processing</b></td><td>Carries out instructions</td><td>The CPU (central processing unit), and the GPU for graphics and AI</td></tr>
<tr><td><b>Memory and storage</b></td><td>Holds instructions and data</td><td>RAM (fast, temporary), SSD or hard disk (slower, permanent)</td></tr>
<tr><td><b>Output</b></td><td>Sends results out</td><td>Screen, speakers, printer, network messages</td></tr>
</tbody></table></div>
<p>A <b>program</b> is simply a list of instructions written for the processor. Think of a recipe: the recipe is the program, the cook is the CPU, the kitchen counter is RAM, and the cupboard is storage. The cook takes one instruction at a time and does exactly what it says. Nothing more, nothing less.</p>
<p>The difference from a human cook is speed. A typical laptop CPU ticks at around 3 GHz: about <b>3 billion clock ticks every second</b>, carrying out one or more simple steps on each tick. Each step is tiny ("add these two numbers", "copy this number there"), but billions per second add up to video calls and AI.</p>
<div class="note"><b>Hardware vs software:</b> hardware is the physical machine you can touch. Software is the instructions (programs) that tell it what to do. This bootcamp teaches both: the Hardware track goes down to the transistors, the Software track goes up to full apps.</div>`},
{h:'From Babbage to your laptop',nav:'History',time:'25 min',body:R`<p>Computers were imagined long before they could be built. Tap through the ten moments below; you'll meet many of these people again later in the bootcamp.</p>`,
timeline:[
{y:'1837',short:'Charles Babbage',title:'The Analytical Engine',who:'Charles Babbage · English mathematician',story:'Babbage designed a steam-powered mechanical computer with a "mill" (processor) and a "store" (memory), programmed with punched cards borrowed from the Jacquard weaving loom. It was never fully built, because 19th-century engineering couldn\'t make the parts precisely enough.',why:'It already had the four parts of every modern computer: input, processing, memory and output.'},
{y:'1843',short:'Ada Lovelace',title:'The first published program',who:'Ada Lovelace · English mathematician',story:'Translating an article about the Analytical Engine, Lovelace added notes three times longer than the original. Note G contains a step-by-step method for the machine to calculate Bernoulli numbers. She also predicted machines could one day work with music and symbols, not just numbers.',why:'She is widely called the first computer programmer. The programming language Ada is named after her.'},
{y:'1936',short:'Alan Turing',title:'The universal machine',who:'Alan Turing · English mathematician',story:'In his paper "On Computable Numbers", Turing described an imaginary machine that reads and writes symbols on a tape following simple rules, and proved that one "universal" machine could carry out any procedure that can be written down.',why:'Every computer you use is a universal machine: the same hardware runs any program.'},
{y:'1945',short:'ENIAC & von Neumann',title:'Electronic computers and the stored program',who:'J. Presper Eckert, John Mauchly; John von Neumann',story:'ENIAC, finished in 1945 and unveiled in 1946, used about 18,000 vacuum tubes and filled a room. It was programmed by rewiring cables, work done largely by six women programmers. In 1945 von Neumann wrote up the idea of storing the program in memory alongside the data.',why:'The "stored-program" or von Neumann design is still how almost every computer works.'},
{y:'1947',short:'The transistor',title:'A switch with no moving parts',who:'John Bardeen, Walter Brattain, William Shockley · Bell Labs',story:'The transistor replaced fragile, hot vacuum tubes with a tiny, reliable electronic switch. Its inventors shared the 1956 Nobel Prize in Physics.',why:'Transistors are the 0s and 1s of every chip. You\'ll study them in depth in the Hardware track.'},
{y:'1958–59',short:'Integrated circuit',title:'Many transistors on one chip',who:'Jack Kilby (Texas Instruments), Robert Noyce (Fairchild)',story:'Working separately, Kilby and Noyce found ways to build many transistors and their connections on a single piece of semiconductor: the integrated circuit, or microchip.',why:'Chips could now shrink and get faster year after year.'},
{y:'1965',short:'Moore\'s law',title:'Doubling, again and again',who:'Gordon Moore · co-founder of Intel',story:'Moore observed that the number of transistors on a chip was doubling at a steady rate, later settled at roughly every two years.',why:'This steady doubling made computers about a million times more powerful in 50 years.'},
{y:'1971',short:'Intel 4004',title:'The first commercial microprocessor',who:'Federico Faggin, Ted Hoff, Masatoshi Shima · Intel',story:'The 4004 put a whole CPU on one chip with about 2,300 transistors. It was designed for a Japanese calculator company, Busicom.',why:'Today\'s phone chips hold tens of billions of transistors, but they descend from this one.'},
{y:'1981',short:'IBM PC',title:'Computers on every desk',who:'IBM, with Microsoft\'s MS-DOS',story:'The IBM Personal Computer, following the Apple II (1977), made computers normal office equipment. Its open design let other companies make compatible PCs, the ancestors of most Windows laptops.',why:'Software became a huge industry once millions of people owned the same kind of machine.'},
{y:'2007',short:'Smartphone era',title:'A computer in every pocket',who:'Apple iPhone (2007), Android (2008)',story:'Touchscreen smartphones put a powerful, always-connected computer in billions of pockets, including most people in Sri Lanka.',why:'Most of the apps and marketing you work with today run on these pocket computers.'}]},
{h:'Binary: why computers count in 0s and 1s',nav:'Binary',time:'35 min',body:R`
<p>Inside a chip, each transistor is a switch that is either <b>off or on</b>. Telling two states apart (low voltage vs high voltage) is far more reliable than telling ten apart, so computers store everything using just two digits: <b>0 and 1</b>. This is the <b>binary</b> number system.</p>
<p><b>Who worked it out:</b> Gottfried Leibniz published binary arithmetic in 1703. George Boole created an algebra of true/false logic in 1854. Then in 1937, a 21-year-old MIT student, <b>Claude Shannon</b>, showed in his master's thesis that Boole's logic could design circuits of switches. That thesis is often called the most important master's thesis of the 20th century. The word <b>bit</b> (binary digit) appeared in Shannon's 1948 paper, credited to his colleague John Tukey.</p>
<h3>How binary counting works</h3>
<p>In everyday decimal, each place is worth 10 times the one to its right (1, 10, 100). In binary, each place is worth <b>2 times</b> the one to its right:</p>
<pre class="ex">Place value:  128  64  32  16   8   4   2   1
Bits:           0   1   0   0   0   0   0   1
Value:          0 + 64 + 0 + 0 + 0 + 0 + 0 + 1 = 65</pre>
<ul><li><b>Bit:</b> one 0 or 1.</li><li><b>Byte:</b> 8 bits, which can hold 2<sup>8</sup> = 256 different values (0 to 255).</li><li><b>Kilobyte (KB)</b> ≈ a thousand bytes, <b>megabyte (MB)</b> ≈ a million, <b>gigabyte (GB)</b> ≈ a billion, <b>terabyte (TB)</b> ≈ a trillion.</li></ul>
<p><b>Try it below:</b> click the bits to switch them on and off. Make 65 (the letter A), then 97 (lowercase a), then 255 (all eight bits on).</p>`,widget:'binary',after:R`<div class="note"><b>Hexadecimal</b> is a shorthand programmers use: each hex digit (0–9, then A–F) stands for 4 bits, so one byte is always exactly two hex digits. 255 is FF. You'll see hex in colour codes like #FF0000 (pure red) and in memory addresses.</div>`},
{h:'Everything is numbers: text, colour and sound',nav:'Encoding',time:'25 min',body:R`
<p>If a computer only stores numbers, how does it hold your name, a photo or a song? By agreeing on a <b>code</b> that turns each thing into numbers.</p>
<ul>
<li><b>Text:</b> ASCII (1963) gave each English letter, digit and symbol a number from 0 to 127. "A" is 65, "a" is 97, a space is 32. <b>Unicode</b> (1991) extended this to every writing system: Sinhala letters live in the range U+0D80 to U+0DFF. <b>UTF-8</b>, designed by Ken Thompson and Rob Pike in 1992, is how most of the web stores Unicode today.</li>
<li><b>Images:</b> a picture is a grid of <b>pixels</b>. Each pixel is three numbers for red, green and blue light (0–255 each), so 3 bytes per pixel. A 12-megapixel phone photo is about 36 MB raw, which is why formats like JPEG compress it.</li>
<li><b>Sound:</b> a microphone's signal is measured thousands of times per second. CD audio takes 44,100 samples every second, each stored as a number.</li>
</ul>
<p><b>Try it:</b> mix a colour from three numbers. Each slider is one byte.</p>`,widget:'rgb'},
{h:'Inside the machine: the fetch–decode–execute cycle',nav:'The CPU',time:'35 min',body:R`
<p>The <b>CPU</b> has three key parts:</p>
<ul><li><b>Control unit:</b> reads instructions and directs everything else.</li><li><b>ALU (arithmetic logic unit):</b> does the maths and comparisons.</li><li><b>Registers:</b> a handful of super-fast storage slots inside the CPU itself.</li></ul>
<p>Programs and data both sit in <b>RAM</b> (memory), each in a numbered slot called an <b>address</b>. This is von Neumann's stored-program design from 1945. RAM is fast but loses everything when power goes off; your SSD keeps files permanently but is slower, so programs are copied from the SSD into RAM to run.</p>
<p>The CPU then repeats one loop, billions of times per second:</p>
<ol><li><b>Fetch:</b> read the next instruction from memory, at the address held in the <b>program counter (PC)</b>, and add 1 to the PC.</li><li><b>Decode:</b> work out what the instruction means.</li><li><b>Execute:</b> do it: load a number, add, store, compare or jump.</li></ol>
<p><b>Try it:</b> step through a real (simplified) program that adds 5 and 7. Watch the program counter, the registers and memory cell 7.</p>`,widget:'cpu',after:R`<div class="note"><b>Why this matters for coding:</b> when you write <code>total = 5 + 7</code> in Python, it is eventually turned into instructions very like the ones above. Python hides the details so you can think about your problem instead of registers.</div>`},
{h:'The operating system: the manager',nav:'Operating systems',time:'20 min',body:R`
<p>You never talk to the CPU directly. The <b>operating system (OS)</b> sits between your apps and the hardware. Its jobs:</p>
<ul><li><b>Run programs:</b> each running program is a <b>process</b>. The OS switches the CPU between them so fast that they all seem to run at once.</li><li><b>Manage memory:</b> give each process its own space in RAM, and stop them reading each other's.</li><li><b>Manage files:</b> folders, file names and permissions on the SSD.</li><li><b>Drive devices:</b> small programs called <b>drivers</b> talk to the keyboard, Wi-Fi card, printer and screen.</li><li><b>Security:</b> user accounts, passwords and permissions.</li></ul>
<p><b>History:</b> Ken Thompson and Dennis Ritchie created <b>Unix</b> at Bell Labs in 1969, and Ritchie created the C language (1972) to rewrite it. Microsoft's MS-DOS arrived in 1981 and Windows 1.0 in 1985. In 1991 a Helsinki student, <b>Linus Torvalds</b>, released <b>Linux</b>, which now runs most web servers, supercomputers and every Android phone.</p>
<div class="note"><b>Try it now (2 minutes):</b> on Windows press <code>Ctrl + Shift + Esc</code> to open Task Manager. The Processes tab lists every running program with its CPU and memory use. The Performance tab shows your CPU's speed and how much RAM you have.</div>`},
{h:'Programming languages: talking to the machine',nav:'Languages',time:'20 min',body:R`
<p>CPUs only understand <b>machine code</b>: binary instructions like <code>10110000 01100001</code>. Writing that by hand is slow and error-prone, so people built layers of languages on top:</p>
<ol><li><b>Assembly language</b> (Kathleen Booth, 1947) gives each machine instruction a short name, such as <code>ADD</code> or <code>MOV</code>.</li><li><b>High-level languages</b> read more like English and maths. <b>Grace Hopper</b> built one of the first compilers in 1952 and helped create COBOL. <b>John Backus</b> led FORTRAN at IBM in 1957.</li><li>A <b>compiler</b> translates a whole program into machine code before it runs (C, Rust, Go). An <b>interpreter</b> runs it step by step (Python, JavaScript), which is slower but quicker to experiment with.</li></ol>
<div class="tbl-wrap"><table><thead><tr><th>Language</th><th>Created</th><th>Used for</th><th>In this bootcamp</th></tr></thead><tbody>
<tr><td><b>Python</b></td><td>1991, Guido van Rossum</td><td>Data, AI, automation, back ends</td><td>Software, Data, AI, Cyber</td></tr>
<tr><td><b>JavaScript</b></td><td>1995, Brendan Eich</td><td>Websites and web apps</td><td>Software, Blockchain</td></tr>
<tr><td><b>SQL</b></td><td>1974, Chamberlin and Boyce at IBM</td><td>Querying databases</td><td>Data</td></tr>
<tr><td><b>C / C++</b></td><td>1972 / 1985</td><td>Operating systems, devices, games</td><td>Hardware (Arduino)</td></tr>
<tr><td><b>Solidity</b></td><td>2014, Gavin Wood</td><td>Smart contracts</td><td>Blockchain</td></tr>
</tbody></table></div>
<p>We start with <b>Python</b> because it reads almost like English, has the biggest toolkit for data and AI, and you can be productive in it within days.</p>`},
{h:'Lab: set up your coding workspace',nav:'Lab: setup',time:'60 min',body:R`
<p>Set up the tools you'll use every day for 90 days. Tick each step as you finish it. If you can't install software right now, use the in-browser Python runner in the next part and come back to this later.</p>
<ol>
<li>In File Explorer, create a folder called <code>wiseweb</code> in your Documents folder, and inside it a folder called <code>day01</code>.</li>
<li>Go to <b>python.org/downloads</b> and install the latest Python 3. On the first installer screen, <b>tick "Add python.exe to PATH"</b>. This is the step most people miss.</li>
<li>Open <b>Command Prompt</b> (press the Windows key, type <code>cmd</code>, press Enter) and type <code>python --version</code>. You should see something like <code>Python 3.13.x</code>. If Windows says it can't find python, try <code>py --version</code>, or reinstall with the PATH box ticked.</li>
<li>Install <b>VS Code</b> from code.visualstudio.com. Open it, click the Extensions icon (four squares) and install <b>Python</b> by Microsoft.</li>
<li>In VS Code choose <b>File → Open Folder</b> and open your <code>day01</code> folder.</li>
<li>Create a new file called <code>hello.py</code> and type <code>print("Hello, WiseWeb!")</code>. Save it, then click the ▶ Run button at the top right. The message appears in the terminal at the bottom.</li>
<li>In the terminal, type <code>python</code> and press Enter to open the interactive shell. Try <code>2 + 3</code>, then <code>2 ** 100</code>. Type <code>exit()</code> to leave.</li>
<li>Install <b>Anki</b> from apps.ankiweb.net for your daily flashcards, and make a deck called WiseWeb.</li></ol>`,
check:['Created the wiseweb\\day01 folder','Installed Python with "Add to PATH" ticked','python --version shows Python 3','Installed VS Code and the Python extension','Ran hello.py and saw the message','Used the interactive shell and exit()','Installed Anki and created a WiseWeb deck']},
{h:'Your first programs',nav:'First code',time:'30 min',body:R`<p>These exercises run real Python right here in the page. Type your code in the dark box, press <b>Run</b>, and read the output. The page checks your answer. The first run takes a few seconds while the Python engine loads.</p>`,
code:[
{task:R`<b>Say hello.</b> Make the program print exactly: <code>Hello, WiseWeb!</code>`,starter:R`print("Hello")`,expect:'Hello, WiseWeb!',hint:'Text goes inside quotes, inside the brackets: print("your text").',solution:R`print("Hello, WiseWeb!")`},
{task:R`<b>About you.</b> Print three lines: your name, your city, and the word <code>Python</code>.`,starter:R`print("Ridma")
`,contains:['python'],hint:'Use three print() lines, one under the other.',solution:R`print("Ridma")
print("Colombo")
print("Python")`},
{task:R`<b>Python as a calculator.</b> Print the number of seconds in one day. Use <code>*</code> to multiply: 60 seconds × 60 minutes × 24 hours.`,starter:R`print(60 * 60)`,expect:'86400',solution:R`print(60 * 60 * 24)`},
{task:R`<b>Binary in Python.</b> <code>int("01000001", 2)</code> turns a binary string into a number, and <code>chr()</code> turns a number into its character. Print both results: the number on the first line, the letter on the second.`,starter:R`number = int("01000001", 2)
print(number)
`,expect:'65\nA',hint:'Add a second line: print(chr(number))',solution:R`number = int("01000001", 2)
print(number)
print(chr(number))`}]},
{h:'Check yourself',nav:'Quiz',time:'15 min',quiz:[
{q:'Which part of a computer carries out instructions?',o:['RAM','The CPU','The SSD','The monitor'],a:1,e:'The CPU (processor) fetches, decodes and executes instructions. RAM and the SSD store them.'},
{q:'What is 00001010 in decimal?',o:['8','10','12','1010'],a:1,e:'8 + 2 = 10.'},
{q:'How many different values can one byte hold?',o:['8','128','255','256'],a:3,e:'8 bits give 2⁸ = 256 values: 0 to 255.'},
{q:'Who wrote the first published computer program?',o:['Alan Turing','Charles Babbage','Ada Lovelace','Grace Hopper'],a:2,e:'Ada Lovelace\'s Note G (1843) described an algorithm for the Analytical Engine.'},
{q:'What happens to RAM when you switch the computer off?',o:['It is saved to the cloud','It is erased','It moves to the CPU','Nothing changes'],a:1,e:'RAM is volatile. Files survive only if they are saved to storage such as an SSD.'},
{q:'In the fetch–decode–execute cycle, what does the program counter hold?',o:['The result of the last sum','The address of the next instruction','The number of programs running','The CPU temperature'],a:1,e:'The PC points to the next instruction in memory and moves forward after each fetch.'},
{q:'Which of these is an operating system?',o:['Python','Linux','VS Code','Chrome'],a:1,e:'Linux is an operating system. Python is a language, VS Code an editor, Chrome a browser.'},
{q:'Python is usually described as…',o:['A compiled language only','An interpreted language','Machine code','An operating system'],a:1,e:'Python code is run by an interpreter, which makes it quick to experiment with.'}]},
{h:'Flashcards',nav:'Flashcards',time:'10 min',body:R`<p>Go through these, then add any you missed to your Anki deck. You'll see them again in tomorrow's warm-up.</p>`,widget:'flash',cfg:{cards:[['Bit','One binary digit: 0 or 1.'],['Byte','8 bits; 256 possible values (0–255).'],['CPU','The processor: control unit + ALU + registers. Executes instructions.'],['RAM','Fast, temporary memory that holds running programs and data. Erased when powered off.'],['Fetch–decode–execute','The CPU\'s loop: read the next instruction, work out what it means, do it.'],['Operating system','Software that manages processes, memory, files, devices and security.'],['Compiler vs interpreter','A compiler translates the whole program first; an interpreter runs it step by step.'],['Von Neumann architecture','Programs and data are stored together in the same memory (1945).'],['ASCII / Unicode','Codes that turn characters into numbers. "A" = 65.']]}}],
homework:['In your own words, explain to a non-technical friend what happens inside a computer when they press a key and a letter appears on the screen.','Convert these to binary: 5, 13, 100. Then convert 11111111 and 10000000 to decimal. Show your working.','Open Task Manager. Write down your CPU name and speed, how much RAM you have, and the three processes using the most memory.']},

s2:{id:'s2',day:2,slot:0,track:'S',hours:4,title:'Python I: variables, types, operators and strings',
lead:'Today you learn the building blocks every Python program uses: storing values in variables, the main data types, doing calculations, working with text, and talking to the user with input and output. By the end you will write small programs that solve real marketing sums.',
goals:['Create and update variables with good names','Use the core types int, float, str and bool, and convert between them','Calculate with arithmetic, comparison and logical operators','Slice and format strings, including f-strings','Read input from a user and print clear output','Read a Python error message and fix the bug'],
parts:[
{h:'Meet Python',nav:'Meet Python',time:'15 min',body:R`
<p>In December 1989, a Dutch programmer called <b>Guido van Rossum</b> was looking for a hobby project over the Christmas holidays at CWI, a research institute in Amsterdam. He started writing a new language that would be easy to read and fun to use, and named it after the British comedy show <i>Monty Python's Flying Circus</i>. Python 0.9 was released in February 1991, Python 2 in 2000 and Python 3, the version you will use, in 2008.</p>
<p>Python's guiding ideas were written down in 1999 by Tim Peters as <i>The Zen of Python</i>. Three of its lines explain why beginners love it:</p>
<pre class="ex">Beautiful is better than ugly.
Simple is better than complex.
Readability counts.</pre>
<p>Today Python is one of the most used languages in the world, and the main language of data science and AI.</p>`},
{h:'Variables: names for values',nav:'Variables',time:'35 min',body:R`
<p>A <b>variable</b> is a name that points to a value, like a label stuck on a box. You create one with <code>=</code>, which in Python means <b>"store this"</b>, not "equals".</p>
<pre class="ex">event = "Colombo Jazz Night"
tickets_sold = 340
ticket_price = 2500
tickets_sold = tickets_sold + 10   # update: now 350</pre>
<p>Python works out the right-hand side first, then stores the result under the name on the left. That's why <code>tickets_sold = tickets_sold + 10</code> makes sense.</p>
<h3>Naming rules</h3>
<ul><li>Use letters, digits and underscores; don't start with a digit (<code>2nd_event</code> fails).</li><li>Names are case-sensitive: <code>Price</code> and <code>price</code> are different.</li><li>Python style is <b>snake_case</b>: lowercase words joined by underscores.</li><li>Choose names that explain themselves: <code>ticket_price</code> beats <code>tp</code> or <code>x</code>.</li><li>Don't use Python's reserved words such as <code>if</code>, <code>for</code>, <code>class</code> or <code>print</code>.</li></ul>
<p>The <code>#</code> symbol starts a <b>comment</b>: text Python ignores, written for humans.</p>`,
code:[{task:R`Create variables <code>event</code> (your favourite event name), <code>tickets_sold</code> (340) and <code>ticket_price</code> (2500). Then print all three, one per line.`,starter:R`event = "Colombo Jazz Night"
`,contains:['340','2500'],solution:R`event = "Colombo Jazz Night"
tickets_sold = 340
ticket_price = 2500
print(event)
print(tickets_sold)
print(ticket_price)`}]},
{h:'Data types',nav:'Types',time:'30 min',body:R`
<p>Every value has a <b>type</b>, which decides what you can do with it.</p>
<div class="tbl-wrap"><table><thead><tr><th>Type</th><th>Meaning</th><th>Examples</th></tr></thead><tbody>
<tr><td><code>int</code></td><td>Whole numbers</td><td><code>340</code>, <code>-5</code>, <code>0</code></td></tr>
<tr><td><code>float</code></td><td>Numbers with a decimal point</td><td><code>2.5</code>, <code>99.99</code>, <code>3.0</code></td></tr>
<tr><td><code>str</code></td><td>Text (a "string" of characters)</td><td><code>"Galle"</code>, <code>'hello'</code>, <code>"42"</code></td></tr>
<tr><td><code>bool</code></td><td>True or false</td><td><code>True</code>, <code>False</code></td></tr>
<tr><td><code>NoneType</code></td><td>"No value yet"</td><td><code>None</code></td></tr>
</tbody></table></div>
<p><code>type(x)</code> tells you a value's type. You convert between types with <code>int()</code>, <code>float()</code> and <code>str()</code>: <code>int("42")</code> gives the number 42, and <code>str(42)</code> gives the text "42".</p>
<div class="note"><b>A surprise worth knowing:</b> <code>0.1 + 0.2</code> prints <code>0.30000000000000004</code>. Floats are stored in binary, and 0.1 can't be written exactly in binary, just as 1/3 can't be written exactly in decimal. For money, round your results, or count in whole cents.</div>`,
code:[{task:R`Print the type of each value: <code>340</code>, <code>2500.0</code>, <code>"Kandy"</code> and <code>True</code>, one per line.`,starter:R`print(type(340))
`,expect:"<class 'int'>\n<class 'float'>\n<class 'str'>\n<class 'bool'>",solution:R`print(type(340))
print(type(2500.0))
print(type("Kandy"))
print(type(True))`}]},
{h:'Operators: doing calculations',nav:'Operators',time:'35 min',body:R`
<div class="tbl-wrap"><table><thead><tr><th>Operator</th><th>Meaning</th><th>Example</th><th>Result</th></tr></thead><tbody>
<tr><td><code>+ - *</code></td><td>Add, subtract, multiply</td><td><code>340 * 2500</code></td><td>850000</td></tr>
<tr><td><code>/</code></td><td>Divide (always gives a float)</td><td><code>7 / 2</code></td><td>3.5</td></tr>
<tr><td><code>//</code></td><td>Whole-number division</td><td><code>7 // 2</code></td><td>3</td></tr>
<tr><td><code>%</code></td><td>Remainder (modulo)</td><td><code>7 % 2</code></td><td>1</td></tr>
<tr><td><code>**</code></td><td>Power</td><td><code>2 ** 10</code></td><td>1024</td></tr>
<tr><td><code>== != &lt; &gt; &lt;= &gt;=</code></td><td>Comparisons (give True or False)</td><td><code>340 &gt; 300</code></td><td>True</td></tr>
<tr><td><code>and or not</code></td><td>Combine True/False values</td><td><code>True and False</code></td><td>False</td></tr>
</tbody></table></div>
<p><b>Order of operations</b> works as in school maths: brackets, then <code>**</code>, then <code>* / // %</code>, then <code>+ -</code>. When in doubt, add brackets.</p>
<p><b>Shortcuts:</b> <code>total += 10</code> means <code>total = total + 10</code>. There are also <code>-=</code>, <code>*=</code> and <code>/=</code>.</p>
<p><b>Why <code>%</code> matters:</b> it answers "is this number divisible?". <code>n % 2 == 0</code> is True for even numbers. You'll use it constantly.</p>`,
code:[
{task:R`An event sold 340 tickets at Rs. 2,500 each, and the venue takes a 15% commission. Print the total revenue on line 1, the venue's commission on line 2, and what's left on line 3. Use <code>int()</code> so they print as whole numbers.`,starter:R`tickets = 340
price = 2500
revenue = tickets * price
`,expect:'850000\n127500\n722500',hint:'commission = revenue * 15 / 100. Wrap each value in int() when you print it.',solution:R`tickets = 340
price = 2500
revenue = tickets * price
commission = revenue * 15 / 100
print(int(revenue))
print(int(commission))
print(int(revenue - commission))`},
{task:R`A post got 2,400 clicks from 120,000 impressions. Print the click-through rate as a percentage, rounded to 2 decimal places with <code>round(value, 2)</code>.`,starter:R`clicks = 2400
impressions = 120000
`,expect:'2.0',hint:'CTR = clicks / impressions * 100. round(2.0, 2) prints 2.0.',solution:R`clicks = 2400
impressions = 120000
print(round(clicks / impressions * 100, 2))`}]},
{h:'Strings: working with text',nav:'Strings',time:'45 min',body:R`
<p>Strings go in single or double quotes. Each character has a position called an <b>index</b>, starting from <b>0</b>, and negative indexes count from the end:</p>
<pre class="ex"> C  o  l  o  m  b  o
 0  1  2  3  4  5  6
-7 -6 -5 -4 -3 -2 -1</pre>
<ul>
<li><code>city[0]</code> → <code>"C"</code>, <code>city[-1]</code> → <code>"o"</code></li>
<li><b>Slicing</b> <code>city[0:3]</code> → <code>"Col"</code> (from 0 up to, but not including, 3). <code>city[:3]</code> and <code>city[3:]</code> leave a side open.</li>
<li><code>+</code> joins strings, <code>*</code> repeats them: <code>"ha" * 3</code> → <code>"hahaha"</code>.</li>
<li><code>len(city)</code> → 7.</li>
<li>Methods: <code>.upper()</code>, <code>.lower()</code>, <code>.title()</code>, <code>.strip()</code> (removes spaces at the ends), <code>.replace("a", "b")</code>, <code>.split(",")</code> (makes a list), <code>.count("o")</code>.</li>
<li>Strings can't be changed in place (they're <b>immutable</b>). Methods return a new string, so store it: <code>name = name.strip()</code>.</li></ul>
<h3>f-strings: the best way to build text</h3>
<p>Since Python 3.6 (2016), you can put an <code>f</code> before the quotes and drop variables straight into the text with curly brackets:</p>
<pre class="ex">name = "Ridma"
sold = 340
print(f"{name} sold {sold} tickets")       # Ridma sold 340 tickets
print(f"CTR: {2400 / 120000 * 100:.2f}%")  # CTR: 2.00%</pre>
<p>The <code>:.2f</code> part means "2 decimal places".</p>`,
code:[
{task:R`Given <code>city = "  colombo  "</code>, print it with the spaces removed and in title case (<code>Colombo</code>), then print its first three letters in capitals (<code>COL</code>).`,starter:R`city = "  colombo  "
clean = city.strip()
`,expect:'Colombo\nCOL',hint:'clean.title() and clean[:3].upper()',solution:R`city = "  colombo  "
clean = city.strip()
print(clean.title())
print(clean[:3].upper())`},
{task:R`Use an f-string to print exactly: <code>Colombo Jazz Night: 340 tickets, Rs. 850000</code>`,starter:R`event = "Colombo Jazz Night"
tickets = 340
price = 2500
`,expect:'Colombo Jazz Night: 340 tickets, Rs. 850000',solution:R`event = "Colombo Jazz Night"
tickets = 340
price = 2500
print(f"{event}: {tickets} tickets, Rs. {tickets * price}")`}]},
{h:'Input and output',nav:'Input',time:'25 min',body:R`
<p><code>print()</code> can take several values, separated by commas; it puts a space between them. <code>print("a", "b", sep="-")</code> changes the separator.</p>
<p><code>input("Question? ")</code> shows a question and waits for the user to type. <b>It always returns a string</b>, so to do maths with the answer you must convert it:</p>
<pre class="ex">age = int(input("Your age? "))
print(f"Next year you will be {age + 1}")</pre>
<p>In this page, type the user's answers in the <b>Program input</b> box before you press Run, one per line.</p>`,
code:[{task:R`Ask for the user's name and the number of tickets they want (Rs. 2,500 each). Print <code>Thank you, NAME. Your total is Rs. TOTAL</code>. The input box already contains <code>Ridma</code> and <code>3</code>.`,starter:R`name = input("Your name? ")
`,inputs:'Ridma\n3',contains:['Thank you, Ridma. Your total is Rs. 7500'],hint:'qty = int(input("How many tickets? ")), then total = qty * 2500.',solution:R`name = input("Your name? ")
qty = int(input("How many tickets? "))
total = qty * 2500
print(f"Thank you, {name}. Your total is Rs. {total}")`}]},
{h:'Reading errors like a programmer',nav:'Errors',time:'25 min',body:R`
<p>Errors are normal: professionals see dozens a day. The skill is reading them calmly. Python's message ends with the <b>error type</b> and a description, and it names the <b>line number</b>. Read the last line first.</p>
<div class="tbl-wrap"><table><thead><tr><th>Error</th><th>Usually means</th><th>Example cause</th></tr></thead><tbody>
<tr><td><code>SyntaxError</code></td><td>Python can't understand the line</td><td>A missing quote or bracket</td></tr>
<tr><td><code>NameError</code></td><td>A name isn't defined</td><td>A typo: <code>pirnt</code>, or using a variable before creating it</td></tr>
<tr><td><code>TypeError</code></td><td>Wrong type for the operation</td><td><code>"Total: " + 5</code> (text plus a number)</td></tr>
<tr><td><code>ValueError</code></td><td>Right type, impossible value</td><td><code>int("abc")</code></td></tr>
<tr><td><code>IndentationError</code></td><td>Spaces at the start of a line are wrong</td><td>An accidental space before a line</td></tr>
</tbody></table></div>`,
code:[{task:R`<b>Fix the bugs.</b> This program has three errors. Run it, read each error, fix it, and run again until it prints <code>Total for 4 tickets: Rs. 10000</code>.`,starter:R`tickets = "4"
price = 2500
total = tickets * price
pirnt("Total for " + tickets + " tickets: Rs. " + total)`,expect:'Total for 4 tickets: Rs. 10000',hint:'tickets should be a number (4, not "4"); print is misspelled; and you can\'t add a number to text, so use str(), or better, an f-string.',solution:R`tickets = 4
price = 2500
total = tickets * price
print(f"Total for {tickets} tickets: Rs. {total}")`}]},
{h:'Check yourself',nav:'Quiz',time:'15 min',quiz:[
{q:'What does = do in Python?',o:['Checks whether two values are equal','Stores a value under a name','Prints a value','Compares types'],a:1,e:'= assigns. To compare, use ==.'},
{q:'What is 17 // 5?',o:['3.4','3','2','4'],a:1,e:'// is whole-number division: 5 goes into 17 three times.'},
{q:'What is 17 % 5?',o:['2','3','3.4','0'],a:0,e:'% gives the remainder: 17 = 3 × 5 + 2.'},
{q:'What type does input() always return?',o:['int','float','str','bool'],a:2,e:'Always a string; convert it with int() or float() for maths.'},
{q:'If word = "Python", what is word[1:4]?',o:['Pyt','yth','ytho','tho'],a:1,e:'From index 1 up to, but not including, 4: y, t, h.'},
{q:'Which name follows Python style?',o:['TicketPrice','ticketprice','ticket_price','2ticket'],a:2,e:'snake_case: lowercase words joined with underscores.'},
{q:'"Total: " + 5 causes which error?',o:['NameError','SyntaxError','TypeError','ValueError'],a:2,e:'You can\'t add a str and an int. Use an f-string or str(5).'},
{q:'Who created Python?',o:['Dennis Ritchie','Guido van Rossum','Brendan Eich','Linus Torvalds'],a:1,e:'Guido van Rossum started it in December 1989; it was released in 1991.'}]},
{h:'Flashcards',nav:'Flashcards',time:'10 min',widget:'flash',cfg:{cards:[['Variable','A name that points to a value. Created with =.'],['int / float / str / bool','Whole number / decimal number / text / True or False.'],['//  and  %','Whole-number division, and remainder.'],['Index','A character\'s position in a string, starting at 0. -1 is the last.'],['Slice  s[a:b]','Characters from index a up to, but not including, b.'],['f-string','f"Hello {name}": puts variables straight into text.'],['input()','Asks the user a question; always returns a string.'],['TypeError','You used a value of the wrong type, e.g. text + number.']]}}],
homework:['Write a program (paste the code here) that asks for an event name, the number of tickets sold and the ticket price, then prints the total revenue with an f-string.','Explain the difference between "5" and 5 in Python, and give one bug it can cause.','What do these print? (a) "Galle"[::-1]  (b) 2 ** 3 ** 2  (c) 10 / 4  (d) 10 // 4. Run them to check, then explain any that surprised you.']}
});})();
