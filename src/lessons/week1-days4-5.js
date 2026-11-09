(()=>{const R=String.raw;window.WW_LESSONS=Object.assign(window.WW_LESSONS||{},{
s3:{id:'s3',day:4,slot:0,track:'S',hours:4,title:'Python II: decisions, loops and debugging',
lead:'Programs become useful when they can decide and repeat. Today you learn if/elif/else, while and for loops, and the debugging mindset professionals rely on, then use them to build pricing rules, reports and the famous FizzBuzz.',
goals:['Write decisions with if, elif and else, and combine conditions with and, or and not','Repeat work with for loops and range(), and with while loops','Use the accumulator and counter patterns','Control loops with break and continue','Debug systematically: read, reproduce, isolate, fix, test'],
parts:[
{h:'Three building blocks are enough',nav:'The idea',time:'15 min',body:R`
<p>In 1966, Italian computer scientists <b>Corrado Böhm</b> and <b>Giuseppe Jacopini</b> proved that any computable procedure can be written with just three structures:</p>
<ol><li><b>Sequence:</b> do steps in order (what you did yesterday).</li><li><b>Selection:</b> choose between paths (<code>if</code>).</li><li><b>Iteration:</b> repeat (<code>for</code>, <code>while</code>).</li></ol>
<p>Two years later, Dutch pioneer <b>Edsger Dijkstra</b> published his famous letter "Go To Statement Considered Harmful", arguing programs should be built only from these clear blocks rather than jumping around. Modern languages, including Python, follow that advice. Master today's lesson and you can, in principle, write any program.</p>`},
{h:'Decisions with if, elif and else',nav:'if / elif / else',time:'40 min',body:R`
<pre class="ex">age = 17
if age &lt; 12:
    price = 0
elif age &lt; 18:
    price = 1500
else:
    price = 2500
print(price)        # 1500</pre>
<ul>
<li>The condition is followed by a <b>colon</b>, and the code that belongs to it is <b>indented by 4 spaces</b>. Indentation isn't decoration in Python: it defines the blocks.</li>
<li>Python checks conditions top to bottom and runs only the <b>first</b> one that's True.</li>
<li><code>elif</code> and <code>else</code> are optional.</li>
<li>Combine conditions with <code>and</code>, <code>or</code>, <code>not</code>: <code>if age &gt;= 18 and has_ticket:</code></li>
<li><b>Truthiness:</b> <code>0</code>, <code>""</code>, empty lists and <code>None</code> count as False; most other values count as True. So <code>if name:</code> means "if name isn't empty".</li></ul>`,
code:[
{task:R`<b>Ticket pricing.</b> Children under 12 enter free, ages 12–17 pay Rs. 1,500, adults pay Rs. 2,500, and anyone 60 or over pays Rs. 1,000. Print the price for each age in the input box (one per run is fine; the box has <code>65</code>).`,starter:R`age = int(input("Age? "))
`,inputs:'65',contains:['1000'],hint:'Check the 60+ case before the adult case, because Python stops at the first True condition.',solution:R`age = int(input("Age? "))
if age < 12:
    price = 0
elif age < 18:
    price = 1500
elif age >= 60:
    price = 1000
else:
    price = 2500
print(price)`},
{task:R`<b>Campaign verdict.</b> Given <code>roas</code>, print <code>Scale up</code> if it's 3 or more, <code>Keep testing</code> if it's at least 1, and <code>Pause</code> otherwise. The starter sets roas to 2.4.`,starter:R`roas = 2.4
`,expect:'Keep testing',solution:R`roas = 2.4
if roas >= 3:
    print("Scale up")
elif roas >= 1:
    print("Keep testing")
else:
    print("Pause")`}]},
{h:'for loops and range()',nav:'for loops',time:'45 min',body:R`
<p>A <code>for</code> loop repeats a block once for each item in a sequence:</p>
<pre class="ex">for city in ["Colombo", "Kandy", "Galle"]:
    print("Tickets on sale in", city)

for i in range(5):      # 0, 1, 2, 3, 4
    print(i)</pre>
<ul><li><code>range(5)</code> → 0 to 4. <code>range(1, 6)</code> → 1 to 5. <code>range(0, 20, 5)</code> → 0, 5, 10, 15.</li><li>You can loop over a string's characters: <code>for ch in "Galle":</code></li></ul>
<h3>Two patterns you'll use forever</h3>
<pre class="ex">total = 0                    # accumulator
for sale in [2500, 3000, 1500]:
    total += sale
print(total)                 # 7000

count = 0                    # counter
for sale in [2500, 3000, 1500]:
    if sale &gt;= 2500:
        count += 1
print(count)                 # 2</pre>`,
code:[
{task:R`Use a loop to add up all the whole numbers from 1 to 100 and print the total.`,starter:R`total = 0
`,expect:'5050',hint:'for n in range(1, 101): total += n',solution:R`total = 0
for n in range(1, 101):
    total += n
print(total)`},
{task:R`Print the 7 times table from <code>7 x 1 = 7</code> to <code>7 x 10 = 70</code>, one line each, exactly in that format.`,starter:R`for i in range(1, 11):
`,expect:Array.from({length:10},(_,i)=>`7 x ${i+1} = ${7*(i+1)}`).join('\n'),solution:R`for i in range(1, 11):
    print(f"7 x {i} = {7 * i}")`},
{task:R`Given the list of daily ticket sales, print the total, then the number of days with more than 100 sales.`,starter:R`daily = [45, 120, 98, 210, 160, 75, 300]
`,expect:'1008\n4',solution:R`daily = [45, 120, 98, 210, 160, 75, 300]
total = 0
big_days = 0
for d in daily:
    total += d
    if d > 100:
        big_days += 1
print(total)
print(big_days)`}]},
{h:'while loops, break and continue',nav:'while loops',time:'30 min',body:R`
<p>A <code>while</code> loop repeats as long as its condition is True. Use it when you don't know in advance how many repeats you need.</p>
<pre class="ex">seats = 5
while seats &gt; 0:
    print("Seats left:", seats)
    seats -= 1
print("Sold out!")</pre>
<ul><li><b>break</b> leaves the loop immediately.</li><li><b>continue</b> skips to the next repeat.</li><li><b>Infinite loop warning:</b> if the condition never becomes False, the loop never ends. Always make sure something inside the loop moves it towards stopping. This page stops runaway code after a few seconds.</li></ul>`,
code:[{task:R`A savings goal: you save Rs. 15,000 a month towards a Rs. 100,000 laptop. Use a while loop to count the months needed, and print <code>Months: 7</code>.`,starter:R`saved = 0
months = 0
`,expect:'Months: 7',solution:R`saved = 0
months = 0
while saved < 100000:
    saved += 15000
    months += 1
print(f"Months: {months}")`}]},
{h:'FizzBuzz: the classic test',nav:'FizzBuzz',time:'25 min',body:R`
<p>FizzBuzz began as a children's counting game and became a famous programming interview question in 2007, when developers noticed many applicants couldn't solve it. It checks exactly what you learned today: loops, <code>%</code> and if/elif ordering.</p>
<p><b>Rules:</b> for the numbers 1 to 15, print <code>Fizz</code> if the number is divisible by 3, <code>Buzz</code> if divisible by 5, <code>FizzBuzz</code> if divisible by both, and otherwise the number itself.</p>`,
code:[{task:R`Write FizzBuzz for 1 to 15.`,starter:R`for n in range(1, 16):
`,expect:'1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz',hint:'Check "divisible by both" (n % 15 == 0) first. Otherwise 15 would print just Fizz.',solution:R`for n in range(1, 16):
    if n % 15 == 0:
        print("FizzBuzz")
    elif n % 3 == 0:
        print("Fizz")
    elif n % 5 == 0:
        print("Buzz")
    else:
        print(n)`}]},
{h:'The debugging mindset',nav:'Debugging',time:'35 min',body:R`
<p>On 9 September 1947, operators of the Harvard Mark II computer found a moth trapped in a relay and taped it into the logbook with the note "First actual case of bug being found". <b>Grace Hopper</b> loved telling this story. Engineers had called faults "bugs" since Edison's time, but the moth made "debugging" famous.</p>
<h3>A process that always works</h3>
<ol><li><b>Read</b> the error message: last line first, then the line number.</li><li><b>Reproduce</b> the bug reliably with the smallest input that causes it.</li><li><b>Isolate:</b> add <code>print()</code> lines to see what your variables really contain at each step. Assumptions are where bugs hide.</li><li><b>Fix</b> one thing at a time.</li><li><b>Test</b> again, including normal cases and edge cases (0, empty, very large).</li></ol>
<p><b>Rubber duck debugging:</b> explain your code line by line, out loud, to a rubber duck or any object. The idea comes from the book <i>The Pragmatic Programmer</i> (1999), and it works surprisingly often: you hear your own wrong assumption.</p>
<p><b>Common loop bugs:</b> off-by-one ranges (<code>range(1, 10)</code> stops at 9), forgetting to update the counter, resetting an accumulator inside the loop, and wrong indentation.</p>`,
code:[{task:R`<b>Debug this.</b> It should print the average of the scores (<code>78.0</code>) but gives a wrong answer. Find the two bugs.`,starter:R`scores = [72, 85, 90, 65]
for s in scores:
    total = 0
    total += s
average = total / 3
print(average)`,expect:'78.0',hint:'Where is total reset? And how many scores are there? Use len(scores).',solution:R`scores = [72, 85, 90, 65]
total = 0
for s in scores:
    total += s
average = total / len(scores)
print(average)`}]},
{h:'Check yourself',nav:'Quiz',time:'15 min',quiz:[
{q:'What does range(2, 8, 2) produce?',o:['2, 4, 6, 8','2, 4, 6','2, 3, 4, 5, 6, 7','0, 2, 4, 6'],a:1,e:'Start at 2, step 2, stop before 8.'},
{q:'In an if/elif chain, how many blocks run?',o:['All that are True','Only the first True one','Only the last True one','None'],a:1,e:'Python stops at the first True condition.'},
{q:'What does break do?',o:['Skips to the next repeat','Leaves the loop immediately','Stops the whole program','Causes an error'],a:1,e:'break exits the loop; continue skips to the next repeat.'},
{q:'Which value counts as False?',o:['"0"','[0]','0','"False"'],a:2,e:'The number 0 is falsy; "0", [0] and "False" are non-empty, so truthy.'},
{q:'Who proved that sequence, selection and iteration are enough to write any program?',o:['Dijkstra','Böhm and Jacopini','Turing','Hopper'],a:1,e:'Böhm and Jacopini, 1966.'},
{q:'Your loop never ends. The most likely cause is…',o:['A missing colon','The condition never becomes False','Too many print statements','Using range()'],a:1,e:'Something inside the loop must move it towards stopping.'}]},
{h:'Flashcards',nav:'Flashcards',time:'10 min',widget:'flash',cfg:{cards:[['if / elif / else','Runs the first block whose condition is True.'],['Indentation','4 spaces that define which lines belong to a block.'],['for loop','Repeats once for each item in a sequence.'],['range(a, b, s)','From a up to (not including) b, in steps of s.'],['while loop','Repeats as long as a condition is True.'],['Accumulator','A variable that builds up a total inside a loop.'],['break / continue','Leave the loop / skip to the next repeat.'],['Rubber duck debugging','Explain your code out loud, line by line, to find the bug.']]}}],
homework:['Write a program (paste it here) that asks for a number of tickets and prints the price with these rules: Rs. 2,500 each, 10% off for 5 or more tickets, 20% off for 10 or more.','Write FizzBuzz for 1 to 100 in VS Code on your laptop, run it, and paste your code.','Describe a bug you hit today (in any exercise), how you found it, and how you fixed it.']},

h2:{id:'h2',day:5,slot:0,track:'H',hours:4,title:'Circuits: series, parallel, power and Kirchhoff\'s laws',
lead:'On Day 1 you met voltage, current, resistance and Ohm\'s law in a single loop. Real circuits have many parts connected in series, in parallel, or both. Today you learn the two laws that let you analyse any of them, how to calculate power and energy, and what your electricity bill is really measuring.',
goals:['Calculate total resistance, current and voltage in series circuits','Do the same for parallel circuits','Apply Kirchhoff\'s current and voltage laws','Calculate power with P = V × I and its variations','Turn watts and hours into kWh and a cost','Design a voltage divider'],
parts:[
{h:'The people behind today\'s laws',nav:'History',time:'20 min',body:R`<p>Three 19th-century scientists gave us the tools of this lesson.</p>`,timeline:[
{y:'1776',short:'James Watt',title:'The unit of power',who:'James Watt · Scottish engineer',story:'Watt\'s improved steam engine (patented 1769) powered the Industrial Revolution. To sell it, he compared its output to horses, inventing "horsepower". In 1882 the unit of power was named the watt in his honour.',why:'Every appliance label in your home is rated in watts.'},
{y:'1841',short:'James Joule',title:'Electricity makes heat',who:'James Prescott Joule · English brewer and physicist',story:'Joule measured that the heat produced by a current is proportional to the current squared times the resistance (I²R). He went on to show that heat and work are forms of the same thing: energy.',why:'Joule\'s law explains why wires heat up, why fuses blow and how kettles work. The joule is the unit of energy.'},
{y:'1845',short:'Gustav Kirchhoff',title:'Two laws for every circuit',who:'Gustav Kirchhoff · German physicist',story:'While still a student in Königsberg, aged 21, Kirchhoff published two laws describing how current and voltage behave at junctions and around loops of any circuit, generalising Ohm\'s work.',why:'Every circuit simulator and every electrical engineer still uses them.'}]},
{h:'Series circuits',nav:'Series',time:'40 min',body:R`
<p>In a <b>series</b> circuit, components are connected one after another in a single loop, like beads on a string. Old fairy lights worked this way: when one bulb failed, the whole string went dark.</p>
<ul><li><b>Current is the same everywhere.</b> There's only one path, so every electron passes through every part.</li><li><b>Resistances add:</b> R<sub>total</sub> = R1 + R2 + R3.</li><li><b>Voltages add up to the battery's voltage.</b> Each resistor "uses" a share in proportion to its resistance: V = I × R for each.</li></ul>
<pre class="ex">9 V battery, R1 = 100 Ω, R2 = 200 Ω
R_total = 100 + 200 = 300 Ω
I = 9 ÷ 300 = 0.03 A  (30 mA), the same in both
V1 = 0.03 × 100 = 3 V,  V2 = 0.03 × 200 = 6 V
Check: 3 + 6 = 9 V ✓</pre>
<h3>The voltage divider</h3>
<p>Two series resistors split a voltage in a fixed ratio: V<sub>out</sub> = V<sub>in</sub> × R2 ÷ (R1 + R2). It's used everywhere, for example to read sensors with an Arduino in Week 9.</p>`},
{h:'Parallel circuits',nav:'Parallel',time:'40 min',body:R`
<p>In a <b>parallel</b> circuit, each component has its own branch between the same two points. Your home is wired in parallel: every socket gets the full 230 V, and switching off one lamp doesn't affect the others.</p>
<ul><li><b>Voltage is the same across every branch.</b></li><li><b>Currents add:</b> the total current is the sum of the branch currents.</li><li><b>Total resistance is lower than the smallest branch:</b> 1 ÷ R<sub>total</sub> = 1 ÷ R1 + 1 ÷ R2 + 1 ÷ R3. For two resistors: R<sub>total</sub> = (R1 × R2) ÷ (R1 + R2).</li></ul>
<pre class="ex">9 V battery, R1 = 100 Ω, R2 = 200 Ω in parallel
I1 = 9 ÷ 100 = 0.09 A,  I2 = 9 ÷ 200 = 0.045 A
I_total = 0.135 A
R_total = (100 × 200) ÷ 300 = 66.7 Ω   (less than 100!)</pre>
<div class="note danger"><b>Why overloading a power strip is dangerous:</b> every appliance you add in parallel adds its current. Total current through the strip and its wire rises until the wire overheats (Joule's I²R heating). That's what fuses and circuit breakers are for.</div>`},
{h:'Kirchhoff\'s two laws',nav:'Kirchhoff',time:'25 min',body:R`
<ol><li><b>Current law (KCL):</b> at any junction, the current flowing in equals the current flowing out. Charge doesn't pile up or vanish. In the parallel example, 0.135 A in = 0.09 + 0.045 A out.</li>
<li><b>Voltage law (KVL):</b> around any closed loop, the voltage rises equal the voltage drops. Energy is conserved. In the series example, the 9 V battery = 3 V + 6 V across the resistors.</li></ol>
<p>With Ohm's law and these two laws you can solve any circuit of resistors, however complicated, by writing one equation per junction and per loop.</p>`},
{h:'Simulator: build series and parallel circuits',nav:'Simulator',time:'45 min',body:R`<p>Switch between series and parallel, change the battery and resistors, and watch the table. Check Kirchhoff's laws in the line underneath. Try these:</p>
<ol><li>In series, double R2. What happens to the current, and to the voltage across R1?</li><li>In parallel, add R3. Does the total resistance go up or down? Why?</li><li>Find settings where every resistor in parallel draws the same current.</li></ol>`,widget:'circuit'},
{h:'Power and energy',nav:'Power',time:'35 min',body:R`
<p><b>Power</b> is how fast energy is used, measured in <b>watts (W)</b>: one watt is one joule per second.</p>
<pre class="ex">P = V × I       (watts = volts × amps)
P = I² × R      (Joule heating)
P = V² ÷ R</pre>
<p><b>Energy</b> is power × time. Your electricity bill counts <b>kilowatt-hours (kWh)</b>: 1 kWh is 1,000 watts used for one hour. A 1,200 W kettle used for 2 hours uses 2.4 kWh.</p>
<p>Components have power ratings too. A small ¼ W resistor carrying more than 0.25 W will overheat and can burn out, which is why you check power in Week 3's component lessons.</p>
<p><b>Try it:</b> estimate what an appliance costs to run. Enter the rate per kWh printed on your own electricity bill.</p>`,widget:'energy'},
{h:'Practice problems',nav:'Practice',time:'30 min',body:R`<p>Solve these with Python as your calculator. Each one prints a single number.</p>`,
code:[
{task:R`Three resistors of 220 Ω, 330 Ω and 470 Ω are in series on a 12 V battery. Print the current in milliamps, rounded to 1 decimal place.`,starter:R`V = 12
R_total = 220 + 330 + 470
`,expect:'11.8',hint:'I = V / R_total gives amps; multiply by 1000 for mA, then round(..., 1).',solution:R`V = 12
R_total = 220 + 330 + 470
print(round(V / R_total * 1000, 1))`},
{task:R`Two resistors, 100 Ω and 400 Ω, are in parallel. Print their combined resistance.`,starter:R`R1 = 100
R2 = 400
`,expect:'80.0',solution:R`R1 = 100
R2 = 400
print(R1 * R2 / (R1 + R2))`},
{task:R`A voltage divider has V_in = 9 V, R1 = 1000 Ω, R2 = 2000 Ω. Print V_out.`,starter:R`Vin = 9
R1 = 1000
R2 = 2000
`,expect:'6.0',solution:R`Vin = 9
R1 = 1000
R2 = 2000
print(Vin * R2 / (R1 + R2))`},
{task:R`A 25 mA current flows through a 220 Ω resistor. Print the power in watts, rounded to 3 decimals. Is a ¼ W resistor safe?`,starter:R`I = 0.025
R = 220
`,expect:'0.138',hint:'P = I ** 2 * R. 0.138 W is under 0.25 W, so yes.',solution:R`I = 0.025
R = 220
print(round(I ** 2 * R, 3))`}]},
{h:'Check yourself',nav:'Quiz',time:'15 min',quiz:[
{q:'In a series circuit, what is the same through every component?',o:['Voltage','Current','Power','Resistance'],a:1,e:'There\'s one path, so the current is the same everywhere.'},
{q:'Two 100 Ω resistors in parallel have a total resistance of…',o:['200 Ω','100 Ω','50 Ω','0 Ω'],a:2,e:'(100 × 100) ÷ 200 = 50 Ω: always less than the smallest branch.'},
{q:'Kirchhoff\'s current law says…',o:['Voltages around a loop add to zero','Current in = current out at a junction','V = I × R','Power = V × I'],a:1,e:'Charge is conserved at junctions.'},
{q:'Why does your house use parallel wiring?',o:['It uses less copper','Each appliance gets the full voltage and works independently','It lowers the voltage','It is cheaper to bill'],a:1,e:'Every socket gets 230 V; one lamp off doesn\'t affect the rest.'},
{q:'A 2,000 W heater running for 3 hours uses…',o:['6 kWh','600 kWh','0.6 kWh','2,003 kWh'],a:0,e:'2 kW × 3 h = 6 kWh.'},
{q:'The unit of power is named after…',o:['James Joule','James Watt','Georg Ohm','Gustav Kirchhoff'],a:1,e:'The watt honours James Watt.'}]},
{h:'Flashcards',nav:'Flashcards',time:'10 min',widget:'flash',cfg:{cards:[['Series','One path: same current; resistances and voltages add.'],['Parallel','Separate branches: same voltage; currents add; total R falls.'],['Two resistors in parallel','R = (R1 × R2) ÷ (R1 + R2)'],['KCL','Current into a junction = current out.'],['KVL','Voltage rises = voltage drops around any loop.'],['Power','P = V × I = I²R = V²/R, in watts.'],['kWh','1,000 watts for 1 hour: the unit on your electricity bill.'],['Voltage divider','V_out = V_in × R2 ÷ (R1 + R2)']]}}],
homework:['Draw (on paper, then photograph it) a circuit with one resistor in series followed by two in parallel. Choose values, calculate every current and voltage, and check both of Kirchhoff\'s laws.','List five appliances at home with their wattage (from the labels), estimate daily hours, and calculate a monthly kWh total and cost using your own bill\'s rate.','In Tinkercad Circuits (free, tinkercad.com), build the series example from this lesson and measure the voltages with the virtual multimeter. Did they match your calculation?']},

s4:{id:'s4',day:5,slot:1,track:'S',hours:3,title:'Python III: functions, scope, modules and documentation',
lead:'Functions let you name a piece of logic once and reuse it everywhere. Today you write your own functions, understand where variables live, use Python\'s huge standard library through modules, and learn to read documentation, a skill you will use every working day.',
goals:['Define functions with parameters, default values and return values','Explain the difference between return and print','Describe local and global scope','Import and use modules from the standard library, such as math and random','Read official documentation and help() output to learn new tools on your own'],
parts:[
{h:'Why functions exist',nav:'Why functions',time:'15 min',body:R`
<p>In 1951, <b>David Wheeler</b>, working on the EDSAC computer at Cambridge, invented a way to jump into a reusable piece of code and come back again, known as the "Wheeler jump". It was the first <b>subroutine</b>, the ancestor of every function. Wheeler earned the first PhD in computer science (1951) and is also credited with the saying "All problems in computer science can be solved by another level of indirection."</p>
<p>Functions give you three things:</p>
<ul><li><b>Reuse:</b> write the CTR calculation once, call it a thousand times.</li><li><b>Readability:</b> <code>if is_strong(password):</code> reads like English.</li><li><b>Fewer bugs:</b> fix the logic in one place. This is the <b>DRY</b> principle: Don't Repeat Yourself, from <i>The Pragmatic Programmer</i> (1999).</li></ul>`},
{h:'Defining functions',nav:'def',time:'40 min',body:R`
<pre class="ex">def ctr(clicks, impressions):
    """Return the click-through rate as a percentage."""
    return clicks / impressions * 100

rate = ctr(2400, 120000)
print(round(rate, 2))      # 2.0</pre>
<ul><li><code>def</code> starts a function, followed by its name, its <b>parameters</b> in brackets and a colon.</li><li>The indented body runs only when the function is <b>called</b>.</li><li>The text in triple quotes is a <b>docstring</b>: documentation that <code>help(ctr)</code> displays.</li><li><b>Default values:</b> <code>def price_with_tax(price, rate=0.1):</code> lets callers leave the rate out.</li><li><b>Keyword arguments:</b> <code>price_with_tax(price=2500, rate=0.18)</code> makes calls self-explanatory.</li></ul>
<h3>return vs print: the key difference</h3>
<p><code>print</code> shows something on screen and gives nothing back. <code>return</code> hands a value back to whoever called the function, so it can be stored or used in more calculations. A function without <code>return</code> gives back <code>None</code>. Most functions should return, and leave printing to the caller.</p>`,
code:[
{task:R`Write a function <code>celsius_to_fahrenheit(c)</code> that <b>returns</b> c × 9 ÷ 5 + 32. Hidden tests will call it with several values.`,starter:R`def celsius_to_fahrenheit(c):
    pass
`,tests:R`assert celsius_to_fahrenheit(0) == 32, "0°C should be 32°F"
assert celsius_to_fahrenheit(100) == 212, "100°C should be 212°F"
assert round(celsius_to_fahrenheit(30), 1) == 86.0, "30°C should be 86°F"
print("ALL TESTS PASSED")`,hint:'Replace pass with: return c * 9 / 5 + 32',solution:R`def celsius_to_fahrenheit(c):
    return c * 9 / 5 + 32`},
{task:R`Write <code>price_after_discount(price, qty, discount=0)</code> that returns the total for <code>qty</code> tickets after a percentage discount. For example <code>price_after_discount(2500, 4, 10)</code> returns 9000.`,starter:R`def price_after_discount(price, qty, discount=0):
    pass
`,tests:R`assert price_after_discount(2500, 4, 10) == 9000, "4 x 2500 with 10% off should be 9000"
assert price_after_discount(2500, 2) == 5000, "Without a discount, 2 x 2500 = 5000"
assert price_after_discount(1000, 10, 25) == 7500, "10 x 1000 with 25% off = 7500"
print("ALL TESTS PASSED")`,solution:R`def price_after_discount(price, qty, discount=0):
    total = price * qty
    return total - total * discount / 100`},
{task:R`Write <code>campaign_verdict(spend, revenue)</code> that returns <code>"Scale up"</code> if ROAS is 3 or more, <code>"Keep testing"</code> if at least 1, otherwise <code>"Pause"</code>. Return <code>"No spend"</code> if spend is 0, to avoid dividing by zero.`,starter:R`def campaign_verdict(spend, revenue):
    pass
`,tests:R`assert campaign_verdict(100000, 400000) == "Scale up"
assert campaign_verdict(100000, 150000) == "Keep testing"
assert campaign_verdict(100000, 50000) == "Pause"
assert campaign_verdict(0, 5000) == "No spend"
print("ALL TESTS PASSED")`,hint:'Check spend == 0 first and return early. Then compute roas = revenue / spend.',solution:R`def campaign_verdict(spend, revenue):
    if spend == 0:
        return "No spend"
    roas = revenue / spend
    if roas >= 3:
        return "Scale up"
    elif roas >= 1:
        return "Keep testing"
    return "Pause"`}]},
{h:'Scope: where variables live',nav:'Scope',time:'25 min',body:R`
<p>Variables created inside a function are <b>local</b>: they exist only while the function runs and can't be seen outside. Variables created at the top level of the file are <b>global</b>.</p>
<pre class="ex">rate = 0.1                 # global

def add_tax(price):
    tax = price * rate      # can READ the global rate
    return price + tax

print(add_tax(1000))       # 1100.0
print(tax)                 # NameError: tax only existed inside add_tax</pre>
<p>Python looks up names in the order <b>L</b>ocal, <b>E</b>nclosing, <b>G</b>lobal, <b>B</b>uilt-in (the LEGB rule). Best practice: pass values in as parameters and get results out with <code>return</code>, rather than relying on global variables. It makes functions predictable and easy to test.</p>`},
{h:'Modules and the standard library',nav:'Modules',time:'30 min',body:R`
<p>A <b>module</b> is a file of ready-made functions. Python ships with a large standard library ("batteries included"), and hundreds of thousands more packages are on PyPI, which you install with <code>pip</code> on Day 15.</p>
<pre class="ex">import math
print(math.sqrt(144))        # 12.0
print(math.pi)               # 3.141592653589793

import random
print(random.randint(1, 6))  # a dice roll

from math import ceil
print(ceil(10.2))            # 11: round up, e.g. buses needed for guests</pre>
<p>Other standard modules you'll meet: <code>datetime</code> (dates and times), <code>csv</code> and <code>json</code> (files), <code>statistics</code> (mean, median), <code>os</code> (files and folders).</p>`,
code:[
{task:R`An event has 523 guests and each shuttle bus seats 40. Use <code>math.ceil</code> to print how many buses are needed.`,starter:R`import math
guests = 523
`,expect:'14',solution:R`import math
guests = 523
print(math.ceil(guests / 40))`},
{task:R`Write <code>lucky_draw(names)</code> that returns one random name from a list, using <code>random.choice</code>. The test checks the winner is always one of the entrants.`,starter:R`import random

def lucky_draw(names):
    pass
`,tests:R`entrants = ["Amal", "Nimali", "Kasun", "Dilini"]
for _ in range(20):
    assert lucky_draw(entrants) in entrants, "The winner must be one of the entrants"
print("ALL TESTS PASSED")`,solution:R`import random

def lucky_draw(names):
    return random.choice(names)`}]},
{h:'Reading documentation',nav:'Docs',time:'20 min',body:R`
<p>No developer memorises everything. What they do is <b>read documentation quickly</b>. This is the most transferable skill in the bootcamp.</p>
<ol><li><b>help() in Python:</b> <code>help(len)</code> or <code>help(str.replace)</code> prints the docstring.</li><li><b>The official docs</b> at docs.python.org: the Library Reference lists every standard module. Read the signature line first, for example <code>round(number, ndigits=None)</code>, then the examples.</li><li><b>Read errors as documentation:</b> <code>TypeError: ctr() missing 1 required positional argument: 'impressions'</code> tells you exactly what's wrong.</li><li><b>Use AI assistants wisely:</b> ask them to explain code or documentation, then check against the official docs. Never paste code you don't understand.</li></ol>
<div class="note"><b>Practice now (10 minutes):</b> open docs.python.org, find the <code>statistics</code> module and read about <code>statistics.median</code>. Then in VS Code, run <code>import statistics</code> and <code>print(statistics.median([45, 120, 98, 210]))</code>.</div>`},
{h:'Check yourself',nav:'Quiz',time:'15 min',quiz:[
{q:'What does a function return if it has no return statement?',o:['0','An empty string','None','An error'],a:2,e:'Python returns None by default.'},
{q:'Why prefer return over print inside most functions?',o:['return is faster','A returned value can be stored and reused; printed text can\'t','print doesn\'t work in functions','return shows colours'],a:1,e:'Return values can feed other calculations.'},
{q:'A variable created inside a function is…',o:['Global','Local to that function','Visible everywhere','Saved to disk'],a:1,e:'It exists only while the function runs.'},
{q:'Which line imports only ceil from math?',o:['import ceil','from math import ceil','import math.ceil()','using math.ceil'],a:1,e:'from module import name.'},
{q:'In def greet(name, greeting="Hello"), greeting is…',o:['A required parameter','A parameter with a default value','A global variable','A return value'],a:1,e:'Callers may leave it out.'},
{q:'DRY stands for…',o:['Do Run Yourself','Don\'t Repeat Yourself','Debug, Run, Yield','Define Return Yield'],a:1,e:'From The Pragmatic Programmer (1999).'}]},
{h:'Flashcards',nav:'Flashcards',time:'10 min',widget:'flash',cfg:{cards:[['def','Defines a function: def name(params):'],['return','Sends a value back to the caller and ends the function.'],['Parameter vs argument','Name in the definition vs value passed in the call.'],['Default value','def f(x, rate=0.1): rate is optional.'],['Docstring','The """text""" under def, shown by help().'],['Local scope','Variables inside a function exist only there.'],['Module','A file of reusable code: import math.'],['DRY','Don\'t Repeat Yourself: put repeated logic in a function.']]}}],
homework:['Write three functions for marketing maths, cpa(spend, conversions), roas(revenue, spend) and conversion_rate(conversions, clicks), with docstrings. Paste them here, with a few lines that call them.','Explain return vs print to a beginner in your own words, with a short example.','Read the documentation for the datetime module and write a program that prints how many days are left until a date you choose.']}
});})();
