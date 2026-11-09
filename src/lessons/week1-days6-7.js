(()=>{const R=String.raw;
const CAMP=[['Campaign','Channel','Impressions','Clicks','Spend','Sales','Revenue','ROAS'],['Jazz Night FB','Facebook',150000,3000,60000,120,300000],['Jazz Night Search','Google',80000,2400,72000,90,225000],['Rock Fest TikTok','TikTok',300000,4500,90000,60,240000],['Rock Fest FB','Facebook',200000,2000,80000,40,160000],['Comedy IG','Instagram',90000,1800,45000,15,22500]];
const cd={};CAMP.forEach((r,i)=>r.forEach((v,j)=>{cd['ABCDEFGH'[j]+(i+1)]=v}));cd.A7='TOTAL';cd.A9='Overall CTR %';cd.A10='Overall CPA (Rs.)';cd.A11='Facebook revenue';cd.A12='Campaigns ROAS 3+';
const C=CAMP.slice(1),sum=j=>C.reduce((s,r)=>s+r[j],0);
const close=(a,b,t=0.01)=>typeof a==='number'&&Math.abs(a-b)<=t;
window.WW_LESSONS=Object.assign(window.WW_LESSONS||{},{
p1:{id:'p1',day:6,slot:0,track:'P',hours:7,title:'Project 1: security audit, KPI sheet and unit converter',
lead:'Today you put Week 1 to work on three small but real deliverables: an audit of your own digital security, a campaign KPI spreadsheet with a recommendation, and a tested Python unit converter. Professionals build portfolios from pieces like these.',
goals:['Audit and improve the security of your own accounts and devices','Build a KPI spreadsheet from raw campaign data and turn numbers into a decision','Write, test and run a small Python program made of functions','Present your work clearly in writing'],
parts:[
{h:'The brief',nav:'Brief',time:'15 min',body:R`
<p>A project day has no new theory. You use what you learned on Days 1–5. Work through the three parts in order, and take a 10-minute break between them.</p>
<div class="tbl-wrap"><table><thead><tr><th>Part</th><th>Deliverable</th><th>Uses</th><th>Time</th></tr></thead><tbody>
<tr><td><b>A</b></td><td>Personal security audit and an action list</td><td>Day 3 Security foundations</td><td>2 h</td></tr>
<tr><td><b>B</b></td><td>Campaign KPI spreadsheet and a 5-sentence recommendation</td><td>Day 2 Data thinking, Day 3 Spreadsheets</td><td>2 h 30</td></tr>
<tr><td><b>C</b></td><td>Python unit converter with tested functions</td><td>Days 1, 2, 4 and 5 Python</td><td>2 h 15</td></tr>
<tr><td></td><td>Write-up and submission</td><td>All</td><td>15 min</td></tr></tbody></table></div>
<div class="note warn"><b>Ground rule:</b> never paste a real password, PIN or recovery code anywhere on this page or in our chat. The audit records <i>what</i> you changed, never the secrets themselves.</div>`},
{h:'Part A: your personal security audit',nav:'A · Security audit',time:'2 h',body:R`
<p>You will audit the accounts and devices you use every day, fix the biggest risks first, and write down what you did. Start with your <b>email account</b>: whoever controls your email can reset every other password.</p>
<ol><li>List your 10 most important accounts (email, banking app, social media, work tools, cloud storage).</li><li>For each, score the risk with the matrix below (likelihood × impact).</li><li>Fix the high-risk ones today using the checklist.</li></ol>`,widget:'risk',
check:['My main email has a unique, long password (12+ characters, or a 4–5 word passphrase)','Multi-factor authentication (MFA) is on for my email, using an authenticator app rather than SMS where possible','MFA is on for my banking and social media accounts','I installed a password manager (for example Bitwarden, which has a free plan) and saved my main accounts in it','I checked my email address at haveibeenpwned.com and changed any password from a listed breach','My phone and laptop have a screen lock and automatic updates turned on','My laptop has the operating system\'s built-in disk encryption on (BitLocker on Windows, FileVault on Mac)','I reviewed which apps can access my Google or Microsoft account and removed ones I don\'t use','My important files have a backup copy in a second place (the 3-2-1 rule: 3 copies, 2 kinds of storage, 1 off-site)','I wrote my action list: what I fixed today and what I will fix this week']},
{h:'Part B: the campaign KPI spreadsheet',nav:'B · KPI sheet',time:'2 h 30',body:R`
<p>You're the marketer for an events company. Five ad campaigns ran last month. Your manager asks: <b>"Where should next month's budget go?"</b> Build the analysis below, then answer in five sentences in the homework.</p>
<p>Click a cell, type a formula in the bar, press <b>Enter</b>. Remember ROAS = revenue ÷ spend, CTR = clicks ÷ impressions × 100, CPA = spend ÷ sales.</p>`,widget:'sheet',cfg:{data:cd,rows:12,tasks:[
['In H2 to H6, calculate each campaign\'s ROAS: <code>=G2/E2</code>, then =G3/E3 and so on.',v=>[2,3,4,5,6].every((r,i)=>close(v('H'+r),C[i][6]/C[i][4]))],
['In C7 to G7, total each column with SUM, for example <code>=SUM(C2:C6)</code>.',v=>[2,3,4,5,6].every(j=>close(v('CDEFG'[j-2]+'7'),sum(j)))],
['In H7, the overall ROAS (total revenue ÷ total spend), rounded to 2 decimals.',v=>close(v('H7'),Math.round(sum(6)/sum(4)*100)/100,0.006)],
['In B9, the overall CTR as a percentage, rounded to 2 decimals.',v=>close(v('B9'),Math.round(sum(3)/sum(2)*10000)/100,0.006)],
['In B10, the overall cost per sale (CPA), rounded to 0 decimals.',v=>close(v('B10'),Math.round(sum(4)/sum(5)),0.5)],
['In B11, total revenue from Facebook campaigns with SUMIF.',v=>close(v('B11'),C.filter(r=>r[1]==='Facebook').reduce((s,r)=>s+r[6],0))],
['In B12, count the campaigns with a ROAS of 3 or more: <code>=COUNTIF(H2:H6,">=3")</code>',v=>close(v('B12'),C.filter(r=>r[6]/r[4]>=3).length)]]},
after:R`<p><b>Think before you write:</b> which campaign earns the most per rupee? Which loses money? Is the TikTok campaign weak because of the ad (CTR) or because of what happens after the click (conversion rate = sales ÷ clicks)? A good recommendation names numbers, makes a decision and says what you'd test next.</p>`},
{h:'Part C: the Python unit converter',nav:'C · Converter',time:'2 h 15',body:R`
<p>You'll build a converter one function at a time. Each function has hidden tests, exactly as professional code does. When all four pass, you combine them into a program that talks to the user.</p>
<p>Useful facts: 1 km = 0.621371 miles. °F = °C × 9 ÷ 5 + 32. 1 kg = 2.20462 lb. Energy cost = watts × hours ÷ 1000 × rate.</p>`,
code:[
{task:R`<b>Step 1.</b> Write <code>km_to_miles(km)</code> returning the distance in miles, rounded to 2 decimals.`,starter:R`def km_to_miles(km):
    pass
`,tests:R`assert km_to_miles(10) == 6.21, "10 km should be 6.21 miles"
assert km_to_miles(0) == 0, "0 km should be 0"
assert km_to_miles(42.195) == 26.22, "A marathon is 26.22 miles"
print("ALL TESTS PASSED")`,solution:R`def km_to_miles(km):
    return round(km * 0.621371, 2)`},
{task:R`<b>Step 2.</b> Write <code>c_to_f(c)</code> and <code>f_to_c(f)</code>, both rounded to 1 decimal.`,starter:R`def c_to_f(c):
    pass

def f_to_c(f):
    pass
`,tests:R`assert c_to_f(30) == 86.0, "30°C should be 86.0°F"
assert c_to_f(-40) == -40.0, "-40 is the same in both scales"
assert f_to_c(212) == 100.0, "212°F should be 100.0°C"
assert f_to_c(98.6) == 37.0, "98.6°F should be 37.0°C"
print("ALL TESTS PASSED")`,hint:'f_to_c is the reverse: (f - 32) * 5 / 9.',solution:R`def c_to_f(c):
    return round(c * 9 / 5 + 32, 1)

def f_to_c(f):
    return round((f - 32) * 5 / 9, 1)`},
{task:R`<b>Step 3.</b> Write <code>energy_cost(watts, hours, rate)</code> returning the cost in rupees, rounded to 2 decimals. Return 0 if any value is negative.`,starter:R`def energy_cost(watts, hours, rate):
    pass
`,tests:R`assert energy_cost(1200, 2, 50) == 120.0, "1200 W for 2 h at Rs. 50 = Rs. 120"
assert energy_cost(60, 5, 32.5) == 9.75, "60 W for 5 h at Rs. 32.5 = Rs. 9.75"
assert energy_cost(-5, 2, 50) == 0, "Negative input should return 0"
print("ALL TESTS PASSED")`,solution:R`def energy_cost(watts, hours, rate):
    if watts < 0 or hours < 0 or rate < 0:
        return 0
    return round(watts * hours / 1000 * rate, 2)`},
{task:R`<b>Step 4.</b> Write <code>convert(value, kind)</code> that uses your functions: kind <code>"km"</code> gives miles, <code>"c"</code> gives °F, <code>"f"</code> gives °C, <code>"kg"</code> gives pounds (rounded to 2). Any other kind returns <code>None</code>. Paste your earlier functions above it.`,starter:R`# paste km_to_miles, c_to_f and f_to_c here

def convert(value, kind):
    pass
`,tests:R`assert convert(10, "km") == 6.21
assert convert(30, "c") == 86.0
assert convert(212, "f") == 100.0
assert convert(70, "kg") == 154.32, "70 kg should be 154.32 lb"
assert convert(5, "parsec") is None, "Unknown kinds return None"
print("ALL TESTS PASSED")`,hint:'Use if/elif on kind. For kg: round(value * 2.20462, 2).',solution:R`def km_to_miles(km):
    return round(km * 0.621371, 2)

def c_to_f(c):
    return round(c * 9 / 5 + 32, 1)

def f_to_c(f):
    return round((f - 32) * 5 / 9, 1)

def convert(value, kind):
    if kind == "km":
        return km_to_miles(value)
    elif kind == "c":
        return c_to_f(value)
    elif kind == "f":
        return f_to_c(value)
    elif kind == "kg":
        return round(value * 2.20462, 2)
    return None`},
{task:R`<b>Step 5: the finished program.</b> Ask the user for a kind and a value (the input box has <code>km</code> and <code>21.1</code>), call <code>convert</code>, and print <code>Result: 13.11</code>. If the kind is unknown, print <code>Sorry, I can't convert that.</code>`,starter:R`# paste your functions here, then:
kind = input("Convert what (km, c, f, kg)? ")
value = float(input("Value? "))
`,inputs:'km\n21.1',contains:['Result: 13.11'],solution:R`def km_to_miles(km):
    return round(km * 0.621371, 2)

def c_to_f(c):
    return round(c * 9 / 5 + 32, 1)

def f_to_c(f):
    return round((f - 32) * 5 / 9, 1)

def convert(value, kind):
    if kind == "km":
        return km_to_miles(value)
    elif kind == "c":
        return c_to_f(value)
    elif kind == "f":
        return f_to_c(value)
    elif kind == "kg":
        return round(value * 2.20462, 2)
    return None

kind = input("Convert what (km, c, f, kg)? ")
value = float(input("Value? "))
result = convert(value, kind)
if result is None:
    print("Sorry, I can't convert that.")
else:
    print(f"Result: {result}")`}],
after:R`<div class="note"><b>Stretch goal:</b> copy the finished program into VS Code on your laptop, save it as <code>converter.py</code>, and wrap the questions in a <code>while True:</code> loop so it keeps converting until the user types <code>quit</code> (use <code>break</code>).</div>`},
{h:'How your project is marked',nav:'Rubric',time:'15 min',body:R`
<p>Paste your homework into our chat and I'll mark it against this rubric, out of 20.</p>
<div class="tbl-wrap"><table><thead><tr><th>Criterion</th><th>Excellent (5)</th><th>Developing (2–3)</th></tr></thead><tbody>
<tr><td><b>Security</b></td><td>All high risks fixed, with a clear action list for the rest</td><td>Some fixes, no plan</td></tr>
<tr><td><b>Analysis</b></td><td>All 7 sheet tasks correct; numbers explained</td><td>Some formulas wrong or unexplained</td></tr>
<tr><td><b>Recommendation</b></td><td>A clear decision backed by 2–3 numbers and a next test</td><td>Opinion without numbers</td></tr>
<tr><td><b>Code</b></td><td>All tests pass; clear names and docstrings</td><td>Works partly; hard to read</td></tr></tbody></table></div>`,
check:['Part A checklist done and action list written','All 7 spreadsheet tasks ticked','All 5 converter steps pass','Homework answers written below, then copied into our chat']}],
homework:['Security audit summary (no passwords): what did you fix today, and what is on your list for this week?','Your recommendation to the manager in 5 sentences: where should next month\'s budget go, and why? Use at least two numbers from your sheet.','Paste your final converter program.','What was the hardest part of today, and how did you get past it?']},

t1:{id:'t1',day:7,slot:0,track:'T',hours:6,title:'Week 1 test, spaced review and catch-up',
lead:'Testing yourself is one of the most effective ways to learn, because recalling something strengthens the memory far more than re-reading it. Today you take the Week 1 test, review the cards you missed, and close any gaps before Week 2.',
goals:['Recall the key ideas from all six Week 1 lessons','Solve practical Python, circuit and KPI problems without help','Find your weak spots and fix them','Plan the week ahead'],
parts:[
{h:'How today works',nav:'How it works',time:'10 min',body:R`
<ol><li><b>Section A: 25 questions</b> (45 minutes). No notes, no going back to lessons. Answer from memory, then read every explanation.</li><li><b>Section B: practical tasks</b> (90 minutes). Coding and calculation problems. You may use the hint button, but try for 10 minutes first.</li><li><b>Break</b> (30 minutes).</li><li><b>Spaced review</b> (45 minutes). Flashcards from every lesson.</li><li><b>Catch-up</b> (the rest of the day). Revisit anything below 80%, finish missed homework, and plan Week 2.</li></ol>
<p><b>Why this works:</b> in 1885 German psychologist <b>Hermann Ebbinghaus</b> measured how quickly we forget, a pattern now called the <b>forgetting curve</b>. He found that reviewing at increasing intervals (a day, a few days, a week) keeps knowledge for much longer. This bootcamp's Day 7 reviews are built on his finding, and modern studies on <b>retrieval practice</b> show self-testing beats re-reading.</p>
<p><b>Target:</b> 20 out of 25 or more (80%). Below that, spend the catch-up time on the topics you missed.</p>`},
{h:'Section A: 25 questions',nav:'A · Quiz',time:'45 min',quiz:[
{q:'What are the three steps a CPU repeats billions of times per second?',o:['Input, process, output','Fetch, decode, execute','Load, save, print','Read, write, delete'],a:1,e:'The fetch–decode–execute cycle (Day 1).'},
{q:'What is 1010 in binary as a decimal number?',o:['8','10','12','1010'],a:1,e:'8 + 0 + 2 + 0 = 10.'},
{q:'How many different values can one byte (8 bits) hold?',o:['8','128','255','256'],a:3,e:'2⁸ = 256 values, from 0 to 255.'},
{q:'Which part of a computer loses its contents when the power goes off?',o:['SSD','RAM','Hard disk','USB drive'],a:1,e:'RAM is fast, temporary working memory.'},
{q:'What does print(type(3.0)) show?',o:["<class 'int'>","<class 'float'>","<class 'str'>","<class 'bool'>"],a:1,e:'Any number with a decimal point is a float.'},
{q:'What does 17 // 5 give in Python?',o:['3.4','3','2','4'],a:1,e:'// is floor division: the whole part only.'},
{q:'input() always returns…',o:['An int','A float','A string','Whatever the user typed'],a:2,e:'Convert it with int() or float() when you need a number.'},
{q:'What is the output of: for i in range(3): print(i)',o:['1 2 3','0 1 2','0 1 2 3','3'],a:1,e:'range(3) produces 0, 1 and 2.'},
{q:'Which statement leaves a loop immediately?',o:['continue','pass','break','return'],a:2,e:'break exits; continue skips to the next repeat.'},
{q:'A function without a return statement gives back…',o:['0','None','An empty string','The last printed value'],a:1,e:'Python returns None by default.'},
{q:'Ohm\'s law is…',o:['P = V × I','V = I × R','R = V × I','I = V × R'],a:1,e:'Voltage = current × resistance.'},
{q:'A 9 V battery drives 30 mA through a resistor. What is the resistance?',o:['30 Ω','270 Ω','300 Ω','3,000 Ω'],a:2,e:'R = V ÷ I = 9 ÷ 0.03 = 300 Ω.'},
{q:'Two 200 Ω resistors in series give a total of…',o:['100 Ω','200 Ω','400 Ω','40,000 Ω'],a:2,e:'Series resistances add.'},
{q:'Two 200 Ω resistors in parallel give a total of…',o:['100 Ω','200 Ω','400 Ω','0 Ω'],a:0,e:'(200 × 200) ÷ 400 = 100 Ω.'},
{q:'A 1,500 W iron is used for 2 hours. How much energy is that?',o:['3 kWh','750 kWh','0.75 kWh','3,000 kWh'],a:0,e:'1.5 kW × 2 h = 3 kWh.'},
{q:'What is the safe voltage range for every hands-on lab in this bootcamp?',o:['5–12 V','12–48 V','110–230 V','Any voltage with gloves'],a:0,e:'Mains electricity (230 V) can kill. We only use 5–12 V.'},
{q:'Customer reviews written as free text are which kind of data?',o:['Structured','Semi-structured','Unstructured','Metadata'],a:2,e:'Free text has no fixed rows and columns.'},
{q:'A campaign spent Rs. 50,000 and earned Rs. 200,000. Its ROAS is…',o:['0.25×','4×','150,000','25%'],a:1,e:'ROAS = revenue ÷ spend = 4×.'},
{q:'Which formula adds up Revenue (F2:F8) only for rows whose Venue (C2:C8) is "Galle"?',o:['=SUM(F2:F8,"Galle")','=SUMIF(C2:C8,"Galle",F2:F8)','=COUNTIF(C2:C8,"Galle")','=IF(C2="Galle",SUM(F2:F8))'],a:1,e:'SUMIF(criteria range, criterion, sum range).'},
{q:'A pivot table is used to…',o:['Draw charts only','Summarise and group data quickly','Protect a sheet with a password','Remove duplicates'],a:1,e:'It groups rows and calculates totals, averages or counts.'},
{q:'The CIA triad in security stands for…',o:['Control, Inspection, Audit','Confidentiality, Integrity, Availability','Cyber, Internet, Access','Code, Identity, Authentication'],a:1,e:'The three goals of information security (Day 3).'},
{q:'A website is knocked offline by a flood of traffic. Which part of the CIA triad is hit?',o:['Confidentiality','Integrity','Availability','None'],a:2,e:'A denial-of-service attack targets availability.'},
{q:'Which is the strongest choice for most people?',o:['A short complex password reused everywhere','A long unique passphrase in a password manager, plus MFA','Their pet\'s name and birth year','The same password with a different number on each site'],a:1,e:'Length, uniqueness and MFA matter most.'},
{q:'An email says your bank account will close in 1 hour unless you click a link. This is most likely…',o:['A real warning','Phishing','A software update','Spam you can safely click'],a:1,e:'Urgency plus a link is the classic phishing pattern. Go to the bank\'s app or website directly instead.'},
{q:'Which of these is a task AI is good at today?',o:['Guaranteeing facts are true','Recognising patterns in large amounts of data','Understanding the world exactly as humans do','Making decisions with no human oversight'],a:1,e:'AI finds patterns in data; it can still be confidently wrong (Day 4).'}]},
{h:'Section B: practical tasks',nav:'B · Practical',time:'90 min',body:R`<p>Five problems covering the whole week. Try each for at least 10 minutes before using the hint.</p>`,
code:[
{task:R`<b>B1. Ticket summary.</b> Using a loop, print the total tickets sold, then the name of the best-selling event.`,starter:R`events = ["Jazz Night", "Sunset Beats", "Comedy Live", "Rock Fest"]
sold = [340, 520, 180, 1200]
`,expect:'2240\nRock Fest',hint:'Track the best index as you loop: for i in range(len(sold)): …',solution:R`events = ["Jazz Night", "Sunset Beats", "Comedy Live", "Rock Fest"]
sold = [340, 520, 180, 1200]
total = 0
best = 0
for i in range(len(sold)):
    total += sold[i]
    if sold[i] > sold[best]:
        best = i
print(total)
print(events[best])`},
{task:R`<b>B2. Grade function.</b> Write <code>grade(score)</code> returning <code>"A"</code> for 80 and over, <code>"B"</code> for 65–79, <code>"C"</code> for 50–64 and <code>"F"</code> below 50.`,starter:R`def grade(score):
    pass
`,tests:R`assert grade(92) == "A"
assert grade(80) == "A", "80 is an A"
assert grade(79) == "B"
assert grade(65) == "B"
assert grade(50) == "C"
assert grade(49) == "F"
print("ALL TESTS PASSED")`,solution:R`def grade(score):
    if score >= 80:
        return "A"
    elif score >= 65:
        return "B"
    elif score >= 50:
        return "C"
    return "F"`},
{task:R`<b>B3. LED resistor.</b> A red LED needs about 2 V and 20 mA. On a 9 V battery the resistor must drop the rest. Print the resistance needed (R = (9 − 2) ÷ 0.02).`,starter:R`supply = 9
led_v = 2
current = 0.02
`,expect:'350.0',solution:R`supply = 9
led_v = 2
current = 0.02
print((supply - led_v) / current)`},
{task:R`<b>B4. Password checker.</b> Write <code>is_strong(pw)</code> returning <code>True</code> only if the password is at least 12 characters long and is not in the list of common passwords given.`,starter:R`COMMON = ["password1234", "qwertyuiop12", "123456789012"]

def is_strong(pw):
    pass
`,tests:R`assert is_strong("correct horse battery") is True
assert is_strong("short") is False, "Too short"
assert is_strong("password1234") is False, "Common password"
assert is_strong("Galle-Sunset-Rice-42") is True
print("ALL TESTS PASSED")`,hint:'return len(pw) >= 12 and pw not in COMMON',solution:R`COMMON = ["password1234", "qwertyuiop12", "123456789012"]

def is_strong(pw):
    return len(pw) >= 12 and pw not in COMMON`},
{task:R`<b>B5. Campaign report.</b> For each campaign print a line like <code>FB: CTR 2.0%, ROAS 5.0</code>, with both numbers rounded to 1 decimal.`,starter:R`names = ["FB", "Search", "TikTok"]
impressions = [150000, 80000, 300000]
clicks = [3000, 2400, 4500]
spend = [60000, 72000, 90000]
revenue = [300000, 230000, 240000]
`,expect:'FB: CTR 2.0%, ROAS 5.0\nSearch: CTR 3.0%, ROAS 3.2\nTikTok: CTR 1.5%, ROAS 2.7',hint:'Inside a for i in range(len(names)) loop, use round(..., 1) and an f-string.',solution:R`names = ["FB", "Search", "TikTok"]
impressions = [150000, 80000, 300000]
clicks = [3000, 2400, 4500]
spend = [60000, 72000, 90000]
revenue = [300000, 230000, 240000]
for i in range(len(names)):
    ctr = round(clicks[i] / impressions[i] * 100, 1)
    roas = round(revenue[i] / spend[i], 1)
    print(f"{names[i]}: CTR {ctr}%, ROAS {roas}")`}]},
{h:'Spaced review: Week 1 flashcards',nav:'Review',time:'45 min',body:R`<p>Go through every card. Mark "Again" honestly; those cards come back. Aim to finish with all of them known.</p>`,widget:'flash',cfg:{cards:[
['Fetch–decode–execute','The cycle every CPU repeats for each instruction.'],['Bit and byte','A bit is a 0 or 1; a byte is 8 bits (256 values).'],['RAM vs storage','RAM is fast and temporary; SSDs and disks keep data with the power off.'],['Operating system','Software that manages hardware and runs programs: Windows, macOS, Linux, Android.'],['Variable','A name that refers to a value: price = 2500.'],['int, float, str, bool','Whole number, decimal number, text, True/False.'],['f-string','f"Total: {total}" puts values inside text.'],['if / elif / else','Runs the first block whose condition is True.'],['for vs while','for: once per item; while: as long as a condition holds.'],['def and return','Define a function; send a value back.'],['Ohm\'s law','V = I × R'],['Series vs parallel','Series: same current, R adds. Parallel: same voltage, currents add.'],['Power','P = V × I, in watts.'],['kWh','1,000 W for 1 hour.'],['Structured data','Rows and columns, like a spreadsheet.'],['KPI','A metric tied directly to a goal.'],['ROAS','Revenue ÷ ad spend.'],['SUMIF','Adds values that meet a condition.'],['CIA triad','Confidentiality, Integrity, Availability.'],['Phishing','A fake message designed to steal logins or money.'],['MFA','A second proof of identity beyond your password.'],['AI vs ML','AI is the goal of smart machines; ML learns patterns from data.']]}},
{h:'Catch-up and planning',nav:'Catch-up',time:'Rest of day',body:R`<p>Use the rest of the day to close gaps. Tick each item when it's done.</p>`,
check:['I scored 20/25 or more on Section A, or I re-studied every topic I got wrong','All five Section B tasks pass','Every Week 1 lesson\'s quiz is complete','All Week 1 homework is copied into our chat for marking','My Day 6 project is submitted','I\'ve looked at the Week 2 calendar and blocked the time in my diary']}],
homework:['Your Section A score out of 25, and the three topics you found hardest.','Explain one idea from this week (your choice) as if teaching a friend with no tech background, in 5–8 sentences.','What will you do differently in Week 2 (study times, breaks, note-taking)?']}
});})();
