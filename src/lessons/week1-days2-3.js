(()=>{const R=String.raw;
const SALES=[['Event','Category','Venue','Tickets','Price','Revenue'],['Jazz Night','Concert','Colombo',340,2500,''],['Sunset Beats','Concert','Galle',520,3000,''],['Comedy Live','Comedy','Colombo',180,1500,''],['Kandy Perahera Tour','Tour','Kandy',95,7500,''],['Rock Fest','Concert','Colombo',1200,4000,''],['Stand-up Sunday','Comedy','Kandy',150,1200,''],['Food Fair','Festival','Galle',800,500,'']];
const sheetData={};SALES.forEach((r,i)=>r.forEach((v,j)=>{if(v!=='')sheetData['ABCDEF'[j]+(i+1)]=v}));sheetData.H1='Results';
const PIV=SALES.slice(1).map(r=>({Event:r[0],Category:r[1],Venue:r[2],Tickets:r[3],Price:r[4],Revenue:r[3]*r[4]}));
const near=(a,b)=>typeof a==='number'&&Math.abs(a-b)<0.5;
window.WW_LESSONS=Object.assign(window.WW_LESSONS||{},{
d1:{id:'d1',day:2,slot:1,track:'D',hours:3,title:'Data thinking: types, the data lifecycle and KPIs',
lead:'Before any tool or formula comes a way of thinking: what data is, what kind it is, how it flows through an organisation, and which numbers actually matter. Marketers who think this way stop drowning in dashboards and start making decisions.',
goals:['Tell structured, semi-structured and unstructured data apart','Classify any column as numerical (discrete or continuous) or categorical (nominal or ordinal)','Describe the seven stages of the data lifecycle','Choose KPIs that drive decisions instead of vanity metrics','Calculate the core marketing KPIs: CTR, conversion rate, CPC, CPA and ROAS'],
parts:[
{h:'Data before computers',nav:'History',time:'20 min',body:R`<p>Data-driven decisions are older than computers. Three stories show the habits you'll practise all bootcamp: map the data, show it clearly, and automate the counting.</p>`,timeline:[
{y:'1854',short:'John Snow',title:'The cholera map',who:'John Snow · London physician',story:'During a cholera outbreak in Soho, Snow marked each death on a street map and saw them clustered around one water pump on Broad Street. He persuaded officials to remove the pump handle, and cases fell.',why:'He went from data to a decision that saved lives: the core of analytics.'},
{y:'1858',short:'Florence Nightingale',title:'Charts that changed policy',who:'Florence Nightingale · nurse and statistician',story:'Nightingale showed with her "rose diagrams" that far more British soldiers in the Crimean War died from preventable disease than from battle wounds. The charts persuaded the government to reform army hospitals.',why:'A clear chart can move people who would never read a table.'},
{y:'1890',short:'Herman Hollerith',title:'Machines that count',who:'Herman Hollerith · American inventor',story:'Hollerith\'s punched-card tabulating machines processed the 1890 US census in a fraction of the time the previous census had taken by hand. His company later became part of IBM.',why:'The start of automated data processing.'},
{y:'1950s',short:'W. Edwards Deming',title:'Measure to improve',who:'W. Edwards Deming · American statistician',story:'Deming taught Japanese manufacturers to use statistics to measure and steadily improve quality, which helped Japan\'s post-war industrial rise.',why:'KPIs are only useful when they lead to action and improvement.'},
{y:'2008',short:'"Data scientist"',title:'A new job title',who:'DJ Patil (LinkedIn) and Jeff Hammerbacher (Facebook)',story:'The two are credited with popularising the title "data scientist" for people who combine statistics, coding and business sense.',why:'This bootcamp\'s Data and AI tracks lead towards roles like these.'}]},
{h:'What data is, and its shapes',nav:'Data shapes',time:'25 min',body:R`
<p><b>Data</b> is recorded facts: a ticket sale, a click, a temperature reading, a review. On its own it's raw material; <b>information</b> is data organised to answer a question, and <b>insight</b> is information that changes what you do.</p>
<div class="tbl-wrap"><table><thead><tr><th>Shape</th><th>What it looks like</th><th>Examples</th></tr></thead><tbody>
<tr><td><b>Structured</b></td><td>Rows and columns with fixed types</td><td>Spreadsheets, sales databases, CRM records</td></tr>
<tr><td><b>Semi-structured</b></td><td>Labelled but flexible</td><td>JSON from an API, emails (headers + body), web logs</td></tr>
<tr><td><b>Unstructured</b></td><td>No fixed format</td><td>Photos, videos, voice notes, social media comments</td></tr>
</tbody></table></div>
<p>Industry estimates commonly put around 80% of the world's data in the unstructured group, which is why AI tools that read text and images matter so much.</p>
<p>In a structured table, each <b>row</b> is one record (one sale, one customer) and each <b>column</b> is one variable (date, price, city). Getting this right is called <b>tidy data</b>, a term popularised by statistician Hadley Wickham in 2014: one variable per column, one observation per row.</p>`},
{h:'Types of data',nav:'Data types',time:'30 min',body:R`
<p>The type of a column decides which maths and charts make sense. You can average ages, but not cities.</p>
<div class="tbl-wrap"><table><thead><tr><th>Type</th><th>Sub-type</th><th>Meaning</th><th>Examples</th></tr></thead><tbody>
<tr><td rowspan="2"><b>Numerical</b> (quantitative)</td><td>Discrete</td><td>Counted, whole numbers</td><td>Tickets sold, number of clicks, followers</td></tr>
<tr><td>Continuous</td><td>Measured, any value in a range</td><td>Revenue, temperature, time on page</td></tr>
<tr><td rowspan="2"><b>Categorical</b> (qualitative)</td><td>Nominal</td><td>Labels with no order</td><td>City, payment method, ticket category</td></tr>
<tr><td>Ordinal</td><td>Labels with a natural order</td><td>Rating (poor → excellent), ticket tier (General, VIP, VVIP)</td></tr>
<tr><td><b>Date/time</b></td><td></td><td>Points or spans in time</td><td>Purchase date, event start time</td></tr>
</tbody></table></div>
<p><b>A trap:</b> numbers aren't always numerical. A phone number or postal code is a label, so it's categorical. Averaging postal codes is meaningless.</p>
<p><b>Sort these real columns from a ticketing database:</b></p>`,widget:'classify',cfg:{opts:['Discrete','Continuous','Nominal','Ordinal','Date/time'],items:[['Tickets sold per order',0,'Counted in whole numbers.'],['Order value (Rs.)',1,'Money is measured and can take any value.'],['Customer city',2,'Labels with no natural order.'],['Seat tier: General / VIP / VVIP',3,'Labels with a clear order.'],['Purchase timestamp',4,'A point in time.'],['Customer phone number',2,'Digits, but it\'s a label: you can\'t average it.'],['Satisfaction: 1–5 stars',3,'Ordered categories. Averages are common, but strictly it\'s ordinal.'],['Minutes spent on the event page',1,'Measured time, any value.']]}},
{h:'The data lifecycle',nav:'Lifecycle',time:'20 min',body:R`
<p>Data flows through seven stages. Problems at an early stage poison everything after it, which is summed up in the old computing saying <b>"garbage in, garbage out"</b>.</p>
<ol><li><b>Collect:</b> forms, ticket sales, website tracking, surveys, sensors.</li><li><b>Store:</b> spreadsheets, databases, cloud warehouses.</li><li><b>Clean:</b> fix typos, duplicates, missing values, inconsistent formats ("Colombo", "colombo", "CMB").</li><li><b>Analyse:</b> calculate, compare, find patterns.</li><li><b>Visualise:</b> charts and dashboards people can read at a glance.</li><li><b>Act:</b> make a decision, change a campaign, test something new.</li><li><b>Govern:</b> keep it secure, legal and accurate. In Sri Lanka, personal data falls under the Personal Data Protection Act No. 9 of 2022.</li></ol>
<div class="note"><b>Real-world rule of thumb:</b> analysts commonly report spending most of their time collecting and cleaning, not on the analysis itself. Week 4's pandas lessons are mostly about cleaning for exactly this reason.</div>`},
{h:'Metrics, KPIs and asking good questions',nav:'KPIs',time:'30 min',body:R`
<p>A <b>metric</b> is anything you can measure. A <b>KPI (key performance indicator)</b> is one of the few metrics tied directly to a goal. A good analyst starts with the decision, not the data:</p>
<ol><li><b>Business goal:</b> sell out the Rock Fest (1,200 tickets) by 15 March.</li><li><b>Question:</b> which channel brings buyers most cheaply?</li><li><b>KPI:</b> cost per ticket sold, by channel.</li><li><b>Decision:</b> move budget to the cheapest channel weekly.</li></ol>
<h3>Vanity vs actionable</h3>
<p><b>Vanity metrics</b> look good but don't guide decisions: total page views, follower counts, impressions on their own. <b>Actionable metrics</b> change what you do: conversion rate, cost per acquisition, repeat-purchase rate.</p>
<h3>Leading vs lagging</h3>
<p><b>Lagging</b> indicators report results after the fact (monthly revenue). <b>Leading</b> indicators predict them (add-to-cart rate this week, early-bird sign-ups). Track both.</p>
<h3>The core marketing KPIs</h3>
<div class="tbl-wrap"><table><thead><tr><th>KPI</th><th>Formula</th><th>Tells you</th></tr></thead><tbody>
<tr><td><b>CTR</b> (click-through rate)</td><td>clicks ÷ impressions × 100</td><td>Is the ad grabbing attention?</td></tr>
<tr><td><b>Conversion rate</b></td><td>conversions ÷ clicks × 100</td><td>Does the landing page persuade?</td></tr>
<tr><td><b>CPC</b> (cost per click)</td><td>spend ÷ clicks</td><td>How expensive is traffic?</td></tr>
<tr><td><b>CPA</b> (cost per acquisition)</td><td>spend ÷ conversions</td><td>What does each customer cost?</td></tr>
<tr><td><b>ROAS</b> (return on ad spend)</td><td>revenue ÷ spend</td><td>Do the ads pay for themselves?</td></tr>
<tr><td><b>CLV</b> (customer lifetime value)</td><td>average order × orders per year × years</td><td>How much may you spend to win a customer?</td></tr>
</tbody></table></div>
<p><b>Try it:</b> change the campaign numbers and watch every KPI and the verdict update.</p>`,widget:'kpi'},
{h:'Practice: KPIs in Python',nav:'Practice',time:'25 min',body:R`<p>You learned Python variables this morning. Use them to calculate KPIs, the way analysts automate reports.</p>`,
code:[{task:R`A Facebook campaign for Sunset Beats had 85,000 impressions, 1,700 clicks, 68 ticket sales, spend of Rs. 102,000 and revenue of Rs. 204,000. Print CTR (%), conversion rate (%), CPA (Rs.) and ROAS, each rounded to 2 decimals, one per line.`,starter:R`impressions = 85000
clicks = 1700
sales = 68
spend = 102000
revenue = 204000
`,expect:'2.0\n4.0\n1500.0\n2.0',hint:'round(clicks / impressions * 100, 2) and so on. CPA = spend / sales; ROAS = revenue / spend.',solution:R`impressions = 85000
clicks = 1700
sales = 68
spend = 102000
revenue = 204000
print(round(clicks / impressions * 100, 2))
print(round(sales / clicks * 100, 2))
print(round(spend / sales, 2))
print(round(revenue / spend, 2))`}]},
{h:'Check yourself',nav:'Quiz',time:'15 min',quiz:[
{q:'A customer\'s postcode is which type of data?',o:['Discrete numerical','Continuous numerical','Nominal categorical','Ordinal categorical'],a:2,e:'It\'s a label made of digits; maths on it is meaningless.'},
{q:'Which is a vanity metric for a ticket campaign on its own?',o:['Cost per ticket sold','Total impressions','Conversion rate','Repeat-purchase rate'],a:1,e:'Impressions alone don\'t tell you whether to change anything.'},
{q:'ROAS of 0.8 means…',o:['80% of visitors bought','The ads earned less than they cost','The campaign is very profitable','The CTR is 0.8%'],a:1,e:'Revenue ÷ spend = 0.8: each Rs. 1 of ads brought back Rs. 0.80.'},
{q:'Which stage of the data lifecycle fixes "Colombo" vs "colombo"?',o:['Collect','Clean','Visualise','Govern'],a:1,e:'Cleaning makes values consistent before analysis.'},
{q:'Who mapped cholera deaths around a water pump in 1854?',o:['Florence Nightingale','John Snow','Herman Hollerith','W. Edwards Deming'],a:1,e:'John Snow\'s map led to the Broad Street pump handle being removed.'},
{q:'Early-bird sign-ups this week are best described as…',o:['A lagging indicator','A leading indicator','Unstructured data','A vanity metric'],a:1,e:'They predict future ticket sales, so they lead.'}]},
{h:'Flashcards',nav:'Flashcards',time:'10 min',widget:'flash',cfg:{cards:[['Structured data','Rows and columns with fixed types, like a spreadsheet.'],['Discrete vs continuous','Counted whole numbers vs measured values on a scale.'],['Nominal vs ordinal','Labels with no order vs labels with a natural order.'],['KPI','A key metric tied directly to a business goal.'],['CTR','Clicks ÷ impressions × 100.'],['CPA','Spend ÷ conversions: the cost of each customer.'],['ROAS','Revenue ÷ ad spend.'],['Leading indicator','A metric that predicts future results.']]}}],
homework:['Pick a real event or product you know. Write its business goal, one question, one KPI and the decision that KPI would drive.','List 8 columns you would collect for an event-ticketing database and classify each as discrete, continuous, nominal, ordinal or date/time.','Find one vanity metric you have seen reported at work or online. Suggest an actionable metric to replace it, and explain why.']},

d2:{id:'d2',day:3,slot:0,track:'D',hours:4,title:'Spreadsheets in depth',
lead:'Spreadsheets are still the most used data tool in the world, and the fastest way to learn how analysts think. Today you master references, the key functions, lookups, cleaning and pivot tables, practising in a real spreadsheet built into this page.',
goals:['Write formulas with relative and absolute references','Use SUM, AVERAGE, COUNT, MIN, MAX and ROUND','Make decisions in a cell with IF, AND and OR','Summarise by condition with SUMIF, COUNTIF and AVERAGEIF','Look up values with XLOOKUP or INDEX/MATCH','Clean messy data and build a pivot table'],
parts:[
{h:'How the spreadsheet changed business',nav:'History',time:'15 min',body:R`
<p>In 1978, Harvard Business School student <b>Dan Bricklin</b> watched a professor erase and recalculate a whole financial table on a blackboard after changing one number. He imagined a "magic blackboard" that recalculated itself. With programmer <b>Bob Frankston</b> he built <b>VisiCalc</b> (1979) for the Apple II. It was so useful that businesses bought Apple computers just to run it, making it arguably the first "killer app".</p>
<p><b>Lotus 1-2-3</b> took over on IBM PCs in 1983. Microsoft <b>Excel</b> arrived on the Mac in 1985 and on Windows in 1987, and became the standard. <b>Google Sheets</b> (2006) brought live collaboration in the browser. Everything you learn today works in both Excel and Google Sheets.</p>`},
{h:'Cells, formulas and references',nav:'References',time:'35 min',body:R`
<p>Every cell has an address: column letter + row number, like <code>B3</code>. A <b>formula</b> starts with <code>=</code>: <code>=D2*E2</code> multiplies two cells and updates automatically when either changes.</p>
<h3>Relative vs absolute references</h3>
<p>When you copy <code>=D2*E2</code> from row 2 down to row 3, it becomes <code>=D3*E3</code>: <b>relative</b> references move with the formula. Usually that's what you want.</p>
<p>Sometimes one cell must stay fixed, such as a tax rate in <code>H2</code>. Add dollar signs: <code>=F2*$H$2</code>. The <code>$</code> locks the column, the row, or both (<code>$H2</code>, <code>H$2</code>, <code>$H$2</code>). In Excel, press <b>F4</b> to cycle through them.</p>
<h3>Operators</h3>
<p><code>+ - * /</code>, <code>^</code> for powers, <code>&amp;</code> to join text (<code>=A2&amp;" - "&amp;C2</code>), and comparisons <code>= &lt;&gt; &gt; &lt; &gt;= &lt;=</code>, which return TRUE or FALSE.</p>`},
{h:'The essential functions',nav:'Functions',time:'40 min',body:R`
<div class="tbl-wrap"><table><thead><tr><th>Function</th><th>Does</th><th>Example</th></tr></thead><tbody>
<tr><td><code>SUM</code></td><td>Adds a range</td><td><code>=SUM(F2:F8)</code></td></tr>
<tr><td><code>AVERAGE</code></td><td>Mean of the numbers</td><td><code>=AVERAGE(E2:E8)</code></td></tr>
<tr><td><code>COUNT</code> / <code>COUNTA</code></td><td>Counts numbers / non-empty cells</td><td><code>=COUNTA(A2:A8)</code></td></tr>
<tr><td><code>MIN</code> / <code>MAX</code></td><td>Smallest / largest</td><td><code>=MAX(D2:D8)</code></td></tr>
<tr><td><code>ROUND</code></td><td>Rounds to n decimals</td><td><code>=ROUND(F2/D2, 2)</code></td></tr>
<tr><td><code>IF</code></td><td>Chooses between two results</td><td><code>=IF(D2&gt;=500, "Big", "Small")</code></td></tr>
<tr><td><code>AND</code> / <code>OR</code></td><td>Combine conditions</td><td><code>=IF(AND(D2&gt;100, E2&lt;3000), "Hit", "")</code></td></tr>
<tr><td><code>SUMIF</code></td><td>Adds values whose row matches a condition</td><td><code>=SUMIF(B2:B8, "Concert", F2:F8)</code></td></tr>
<tr><td><code>COUNTIF</code></td><td>Counts matching cells</td><td><code>=COUNTIF(C2:C8, "Colombo")</code></td></tr>
<tr><td><code>AVERAGEIF</code></td><td>Averages matching rows</td><td><code>=AVERAGEIF(B2:B8, "Comedy", D2:D8)</code></td></tr>
</tbody></table></div>
<p>Conditions can use operators in quotes: <code>=COUNTIF(D2:D8, "&gt;500")</code> counts events that sold more than 500 tickets. <code>SUMIFS</code> and <code>COUNTIFS</code> (Excel and Sheets) take several conditions at once.</p>`},
{h:'Hands-on: the ticket-sales sheet',nav:'Live sheet',time:'60 min',body:R`<p>This is a working spreadsheet. Click a cell, type in the formula bar, press <b>Enter</b>. Complete each task; the checklist ticks itself when the answer is right.</p>`,widget:'sheet',cfg:{data:sheetData,rows:10,tasks:[
['In F2, calculate revenue: <code>=D2*E2</code>. Then fill F3 to F8 the same way (=D3*E3 and so on).',v=>['F2','F3','F4','F5','F6','F7','F8'].every((c,i)=>near(v(c),SALES[i+1][3]*SALES[i+1][4]))],
['In F9, the total revenue: <code>=SUM(F2:F8)</code>',v=>near(v('F9'),PIV.reduce((s,r)=>s+r.Revenue,0))],
['In H2, the average ticket price, rounded to 0 decimals: <code>=ROUND(AVERAGE(E2:E8),0)</code>',v=>near(v('H2'),Math.round(PIV.reduce((s,r)=>s+r.Price,0)/7))],
['In H3, count the events held in Colombo with COUNTIF.',v=>near(v('H3'),3)],
['In H4, total Concert revenue with SUMIF.',v=>near(v('H4'),PIV.filter(r=>r.Category==='Concert').reduce((s,r)=>s+r.Revenue,0))],
['In G2, use IF to label Jazz Night "Big" if it sold 500 or more tickets, else "Small". Fill G3 to G8.',v=>['G2','G3','G4','G5','G6','G7','G8'].every((c,i)=>String(v(c)).toLowerCase()===(SALES[i+1][3]>=500?'big':'small'))],
['In H5, the largest number of tickets sold at one event with MAX.',v=>near(v('H5'),1200)]]}},
{h:'Lookups: finding values in another table',nav:'Lookups',time:'25 min',body:R`
<p>Lookups pull a value from another table by matching a key, such as finding a customer's city by their ID.</p>
<ul><li><b>VLOOKUP</b> (1980s classic): <code>=VLOOKUP(key, table, column_number, FALSE)</code>. It only looks to the right, and breaks if someone inserts a column. Always use <code>FALSE</code> for an exact match.</li>
<li><b>XLOOKUP</b> (Excel 2019 onward, and Google Sheets): <code>=XLOOKUP(key, lookup_range, return_range, "Not found")</code>. It looks in any direction and is the modern choice.</li>
<li><b>INDEX + MATCH</b>: <code>=INDEX(return_range, MATCH(key, lookup_range, 0))</code>. It works in every version and is very fast on big sheets.</li></ul>
<pre class="ex">Price of Rock Fest:
=XLOOKUP("Rock Fest", A2:A8, E2:E8)          → 4000
=INDEX(E2:E8, MATCH("Rock Fest", A2:A8, 0))  → 4000</pre>`},
{h:'Cleaning messy data',nav:'Cleaning',time:'25 min',body:R`
<p>Real exports are messy. These functions fix the most common problems:</p>
<div class="tbl-wrap"><table><thead><tr><th>Problem</th><th>Fix</th></tr></thead><tbody>
<tr><td>Extra spaces: "  Colombo "</td><td><code>=TRIM(A2)</code></td></tr>
<tr><td>Inconsistent case: "COLOMBO", "colombo"</td><td><code>=PROPER(A2)</code>, <code>=UPPER()</code>, <code>=LOWER()</code></td></tr>
<tr><td>Numbers stored as text</td><td><code>=VALUE(A2)</code>, or multiply by 1</td></tr>
<tr><td>Duplicates</td><td>Data → Remove duplicates (Sheets: Data → Data cleanup)</td></tr>
<tr><td>Combining columns</td><td><code>=CONCAT(A2," ",B2)</code> or <code>&amp;</code></td></tr>
<tr><td>Splitting "Galle, Southern"</td><td>Data → Split text to columns</td></tr>
<tr><td>Mixed date formats</td><td>Format → Number → Date, then check that DATE values sort correctly</td></tr>
</tbody></table></div>
<div class="note"><b>Golden rule:</b> never clean the original. Copy the raw data into a new sheet, or add cleaned columns next to the raw ones, so you can always check your work.</div>`},
{h:'Pivot tables: summaries in seconds',nav:'Pivot tables',time:'30 min',body:R`
<p>A <b>pivot table</b> groups rows by a category and summarises a value (sum, average, count), with no formulas. Lotus Improv (1991) introduced the idea, and Excel made it famous as PivotTable in 1993. In Excel or Sheets: select the data → Insert → Pivot table → choose <b>Rows</b> and <b>Values</b>.</p>
<p><b>Try it:</b> change the grouping and the value to answer: which venue brings the most revenue? Which category sells the most tickets?</p>`,widget:'pivot',cfg:{groups:['Venue','Category'],rows:PIV},after:R`<p><b>Choosing charts:</b> bar charts compare categories, line charts show change over time, and pie charts only work for a few parts of one whole. You'll go much deeper in the visualisation lessons.</p>`},
{h:'Check yourself',nav:'Quiz',time:'15 min',quiz:[
{q:'You copy =D2*$H$2 from row 2 to row 3. What do you get?',o:['=D3*$H$3','=D3*$H$2','=D2*$H$2','=D3*H3'],a:1,e:'D2 is relative so it becomes D3; $H$2 is absolute and stays fixed.'},
{q:'Which formula counts events that sold more than 500 tickets?',o:['=COUNT(D2:D8>500)','=COUNTIF(D2:D8,">500")','=SUMIF(D2:D8,">500")','=IF(D2>500)'],a:1,e:'COUNTIF with the condition in quotes.'},
{q:'Why is XLOOKUP preferred over VLOOKUP?',o:['It\'s older','It can look in any direction and doesn\'t break when columns move','It only works in Excel 2007','It doesn\'t need a key'],a:1,e:'VLOOKUP uses a fixed column number and only looks right.'},
{q:'Who created VisiCalc?',o:['Bill Gates','Dan Bricklin and Bob Frankston','Steve Jobs','Mitch Kapor'],a:1,e:'In 1979, for the Apple II.'},
{q:'What does =TRIM("  Galle  ") return?',o:['"  Galle"','"Galle"','"GALLE"','An error'],a:1,e:'TRIM removes extra spaces.'},
{q:'A pivot table is best for…',o:['Typing new data','Summarising values by category without formulas','Drawing maps','Sending emails'],a:1,e:'Group by rows, summarise values.'}]},
{h:'Flashcards',nav:'Flashcards',time:'10 min',widget:'flash',cfg:{cards:[['Relative reference','A2: changes when the formula is copied.'],['Absolute reference','$A$2: stays fixed when copied. F4 toggles it in Excel.'],['SUMIF','=SUMIF(range, condition, sum_range)'],['COUNTIF','=COUNTIF(range, condition)'],['XLOOKUP','=XLOOKUP(key, lookup_range, return_range): the modern lookup.'],['INDEX/MATCH','=INDEX(return, MATCH(key, lookup, 0)): works everywhere.'],['Pivot table','Groups rows by a category and summarises values.'],['TRIM / PROPER','Remove extra spaces / Capitalise Each Word.']]}}],
homework:['Recreate the ticket-sales table in Google Sheets or Excel. Add a column for VAT at a rate kept in one cell (use an absolute reference). Paste your formulas here.','Write the formula to find the price of "Comedy Live" with XLOOKUP, and again with INDEX/MATCH.','Build a pivot table of tickets by venue in your own sheet. Which venue sells the most, and what would you do with that insight as a marketer?']},

c1:{id:'c1',day:3,slot:1,track:'C',hours:3,title:'Security foundations',
lead:'Cyber security starts with a simple set of ideas: what we protect, who attacks, how risk is judged, and the habits that stop most attacks. Today you learn the vocabulary every security professional uses and secure your own accounts.',
goals:['Explain the CIA triad with real examples','Describe the main threat actors and what motivates them','Tell vulnerabilities, threats and risks apart, and score a risk','Name the most common attacks','Apply personal security hygiene: passphrases, password managers, MFA, updates and backups'],
parts:[
{h:'A short history of attacks',nav:'History',time:'20 min',body:R`<p>Every major attack taught defenders a lesson they still use.</p>`,timeline:[
{y:'1971',short:'Creeper',title:'The first self-copying program',who:'Bob Thomas · BBN Technologies',story:'Creeper moved between computers on ARPANET, the ancestor of the internet, displaying "I\'m the creeper, catch me if you can!". Ray Tomlinson then wrote Reaper to chase and delete it.',why:'The first worm, and the first antivirus.'},
{y:'1988',short:'Morris worm',title:'The internet\'s first big outage',who:'Robert Tappan Morris · Cornell student',story:'A worm meant to measure the internet spread far faster than intended, slowing or crashing thousands of machines, a large share of the internet at the time. Morris became the first person convicted under the US Computer Fraud and Abuse Act.',why:'It led to the first CERT, the computer emergency response team model that Sri Lanka also uses.'},
{y:'2000',short:'ILOVEYOU',title:'Social engineering at scale',who:'An email worm from the Philippines',story:'An email titled "ILOVEYOU" with an attachment called LOVE-LETTER-FOR-YOU spread to millions of computers in days, overwriting files.',why:'It proved that tricking people is often easier than breaking technology.'},
{y:'2006',short:'Sri Lanka CERT',title:'A national response team',who:'Sri Lanka CERT|CC',story:'Sri Lanka set up its national Computer Emergency Readiness Team to coordinate responses to cyber incidents. The Computer Crime Act No. 24 of 2007 followed, making unauthorised access a criminal offence.',why:'Know where incidents are reported and what the law says before you ever practise hacking.'},
{y:'2010',short:'Stuxnet',title:'Code that broke machines',who:'Widely attributed to state actors',story:'Stuxnet targeted industrial controllers and physically damaged centrifuges in Iran, the first widely known cyber weapon to cause physical destruction.',why:'Cyber attacks can affect the physical world: power, water, factories.'},
{y:'2017',short:'WannaCry',title:'Ransomware goes global',who:'Ransomware worm',story:'WannaCry encrypted files on hundreds of thousands of computers in about 150 countries, disrupting hospitals in the UK, using a Windows flaw that already had a patch available.',why:'Many victims had simply not installed updates. Patching matters.'}]},
{h:'The CIA triad',nav:'CIA triad',time:'25 min',body:R`
<p>Security protects three properties of information, known as the <b>CIA triad</b> (nothing to do with the spy agency):</p>
<div class="tbl-wrap"><table><thead><tr><th>Property</th><th>Means</th><th>Broken when…</th><th>Protected by</th></tr></thead><tbody>
<tr><td><b>Confidentiality</b></td><td>Only the right people can see it</td><td>Customer list leaked</td><td>Passwords, MFA, encryption, permissions</td></tr>
<tr><td><b>Integrity</b></td><td>It is accurate and unaltered</td><td>Someone changes bank details on an invoice</td><td>Hashes, signatures, audit logs, backups</td></tr>
<tr><td><b>Availability</b></td><td>It works when needed</td><td>Ticketing site down on launch day</td><td>Backups, redundancy, DDoS protection</td></tr>
</tbody></table></div>
<p><b>Sort these incidents</b> by the property they mainly attack:</p>`,widget:'classify',cfg:{opts:['Confidentiality','Integrity','Availability'],items:[['A hacker downloads your customer email list',0,'Data was exposed to the wrong people.'],['Ransomware locks all office files',2,'You can\'t use your data. Ransomware gangs now often steal it too, which also hits confidentiality.'],['A fake email changes the bank account on a supplier invoice',1,'The information was altered.'],['A flood of traffic takes the ticket site offline',2,'A denial-of-service attack stops people using the service.'],['An intern reads salary files they shouldn\'t access',0,'Wrong person, wrong data.'],['Someone edits event prices on your website',1,'Unauthorised change to information.']]}},
{h:'Threat actors, vulnerabilities and risk',nav:'Risk',time:'30 min',body:R`
<h3>Who attacks</h3>
<div class="tbl-wrap"><table><thead><tr><th>Threat actor</th><th>Motivation</th><th>Typical attack</th></tr></thead><tbody>
<tr><td>Cyber criminals</td><td>Money</td><td>Ransomware, phishing, card fraud</td></tr>
<tr><td>Hacktivists</td><td>A political or social cause</td><td>Defacing websites, leaking data</td></tr>
<tr><td>Nation-state groups</td><td>Espionage, disruption</td><td>Long, stealthy intrusions</td></tr>
<tr><td>Insiders</td><td>Revenge, money, or simple mistakes</td><td>Data theft, accidental leaks</td></tr>
<tr><td>Unskilled attackers ("script kiddies")</td><td>Curiosity, bragging</td><td>Running ready-made attack tools</td></tr>
</tbody></table></div>
<h3>Three words people mix up</h3>
<ul><li><b>Vulnerability:</b> a weakness, such as an unpatched laptop or a reused password.</li><li><b>Threat:</b> something that could exploit it, such as a ransomware gang.</li><li><b>Risk:</b> the chance and the cost of it happening. A simple score is <b>risk = likelihood × impact</b>.</li></ul>
<p>Your <b>attack surface</b> is every way in: email inboxes, social media logins, the website, laptops, phones, Wi-Fi, suppliers and people.</p>
<p><b>Try it:</b> score a risk, for example "the brand's Instagram account has no MFA".</p>`,widget:'risk'},
{h:'Common attacks in one page',nav:'Attacks',time:'20 min',body:R`
<ul>
<li><b>Phishing:</b> fake messages that trick you into clicking, paying or typing a password. The most common way in, and tomorrow's deep-dive topic.</li>
<li><b>Malware:</b> harmful software. <b>Ransomware</b> encrypts files and demands payment.</li>
<li><b>Credential stuffing:</b> attackers try passwords leaked from one site on many other sites. This is why reused passwords are dangerous.</li>
<li><b>Brute force:</b> guessing passwords at huge speed. Weak or short passwords fall quickly.</li>
<li><b>Man-in-the-middle:</b> intercepting traffic, for example on fake public Wi-Fi.</li>
<li><b>Denial of service (DoS/DDoS):</b> flooding a service until it can't respond.</li>
<li><b>Social media account takeover:</b> common against brands, influencers and event pages, often through fake "copyright violation" messages.</li></ul>`},
{h:'Personal security hygiene',nav:'Hygiene',time:'30 min',body:R`
<p>A handful of habits stop the large majority of everyday attacks:</p>
<ol>
<li><b>Long passphrases:</b> four or five random words ("mango-tuktuk-river-violin") beat short complex passwords. Length matters most.</li>
<li><b>A password manager</b> (Bitwarden, 1Password, or the one built into your browser or phone) so every account gets a different password. You remember one strong master passphrase.</li>
<li><b>MFA (multi-factor authentication)</b> everywhere it's offered. Best: <b>passkeys</b> or security keys; good: authenticator apps; weakest: SMS codes, because SIM-swap fraud can steal them.</li>
<li><b>Updates:</b> turn on automatic updates for Windows, your phone, browser and apps. WannaCry spread through an already-patched flaw.</li>
<li><b>Backups (3-2-1 rule):</b> 3 copies, on 2 kinds of storage, 1 offline or off-site.</li>
<li><b>Check before you click:</b> unexpected attachments, urgent payment requests and login links in messages deserve a second look.</li>
<li><b>Lock screens and encrypt devices:</b> BitLocker on Windows, and a strong PIN on your phone.</li></ol>
<p><b>Try it:</b> test how strong different passwords are. Nothing you type leaves this page.</p>`,widget:'password'},
{h:'Lab: secure your own accounts',nav:'Lab',time:'25 min',body:R`<p>Do these now, on your real accounts. They feed directly into the Day 6 Project 1 security audit.</p>`,check:['Listed my 10 most important accounts (email, banking, social media, work tools)','Checked my main email at haveibeenpwned.com for past breaches','Installed or opened a password manager','Changed my main email password to a unique passphrase','Turned on MFA (authenticator app or passkey) for my main email','Turned on MFA for my main social media accounts','Turned on automatic updates for Windows and my phone','Checked I have a recent backup of important files']},
{h:'Check yourself',nav:'Quiz',time:'15 min',quiz:[
{q:'An attacker changes the bank details on an invoice. Which part of the CIA triad is attacked?',o:['Confidentiality','Integrity','Availability','None'],a:1,e:'The data was altered.'},
{q:'Risk is usually scored as…',o:['Threat + vulnerability','Likelihood × impact','Cost ÷ time','Number of attacks per year'],a:1,e:'How likely, times how bad.'},
{q:'Which MFA method is weakest?',o:['Passkey','Hardware security key','Authenticator app','SMS code'],a:3,e:'SMS codes can be stolen through SIM-swap fraud. They are still far better than no MFA.'},
{q:'Why is reusing one password on many sites dangerous?',o:['It\'s slower to type','A leak on one site opens the others (credential stuffing)','It breaks MFA','It isn\'t dangerous'],a:1,e:'Attackers automatically try leaked passwords everywhere.'},
{q:'What did WannaCry (2017) mostly exploit?',o:['Weak Wi-Fi','Computers missing an available Windows update','Fake websites','Stolen phones'],a:1,e:'A patch already existed; unpatched machines were hit.'},
{q:'Which Sri Lankan law makes unauthorised computer access a crime?',o:['Personal Data Protection Act 2022','Computer Crime Act No. 24 of 2007','Electronic Transactions Act','Telecommunications Act'],a:1,e:'The Computer Crime Act No. 24 of 2007.'}]},
{h:'Flashcards',nav:'Flashcards',time:'10 min',widget:'flash',cfg:{cards:[['CIA triad','Confidentiality, Integrity, Availability.'],['Vulnerability','A weakness that could be exploited.'],['Threat','Someone or something that could exploit a weakness.'],['Risk','Likelihood × impact.'],['Attack surface','Every possible way into a system or organisation.'],['Credential stuffing','Trying leaked passwords on many other sites.'],['MFA','A second proof of identity: passkey, app code, or (weakest) SMS.'],['3-2-1 backups','3 copies, 2 kinds of storage, 1 off-site or offline.']]}}],
homework:['Map the attack surface of an events brand: list at least 10 ways an attacker could get in.','Score three risks for that brand with likelihood × impact, and give one fix for each.','Explain the CIA triad to a colleague with one example of each from the events or music business.']}
});})();
