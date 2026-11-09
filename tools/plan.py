import datetime, json
T={'S':[
"How computers run programs: binary, CPU, memory, OS; dev setup (VS Code, Python, terminal)",
"Python I: variables, types, operators, strings, input and output",
"Python II: conditionals, loops, the debugging mindset",
"Python III: functions, scope, modules, reading documentation",
"Problem-solving clinic: 30 Python exercises and solution patterns",
"Data structures I: lists, tuples, dictionaries, sets, comprehensions",
"Files, exceptions, CSV/JSON, virtual environments and pip",
"Command line and Git/GitHub: commits, branches, pull requests",
"Object-oriented programming: classes, inheritance, composition",
"Data structures II: stacks, queues, linked lists, hash maps, trees, graphs",
"Algorithms: recursion, searching, sorting, Big-O",
"Testing and clean code: pytest, refactoring, type hints, code review",
"How the web works: HTTP, DNS, client/server, REST",
"HTML and CSS: semantic HTML, flexbox, grid, responsive design, accessibility",
"JavaScript I: syntax, functions, arrays, objects, the DOM, events",
"JavaScript II: async, promises, fetch, building a dynamic page",
"APIs: consuming REST APIs from Python and JavaScript; keys and rate limits",
"Databases for developers: relational design, PostgreSQL, ORMs",
"Backend with FastAPI: routes, validation, authentication",
"React fundamentals: components, props, state, hooks",
"Full-stack integration: React front end + API + database",
"Deployment and DevOps: Linux servers, Docker, CI/CD with GitHub Actions",
"Software design: design patterns, system design basics, scalability",
"Professional workflow: AI coding assistants, documentation, Agile/Scrum"],
'D':[
"Data thinking: data types, the data lifecycle, KPIs, asking good questions",
"Spreadsheets in depth: formulas, lookups, cleaning, pivot tables, charts",
"Maths refresher: algebra, functions, graphs, percentages, logarithms",
"Descriptive statistics: centre, spread, distributions, outliers",
"Probability: rules, conditional probability, Bayes' theorem",
"Distributions and sampling: normal, binomial, Poisson, central limit theorem",
"NumPy: arrays, vectorisation, broadcasting",
"pandas I: loading, exploring, cleaning, missing data",
"Inferential statistics: confidence intervals, hypothesis tests, p-values",
"A/B testing and experiment design: power, sample size, common pitfalls",
"SQL I: SELECT, filtering, sorting, aggregates, GROUP BY",
"SQL II: JOINs, subqueries, CTEs, window functions",
"pandas II: groupby, merge, reshape, time series",
"Data visualisation: matplotlib, seaborn, Plotly; choosing the right chart",
"Dashboards and storytelling: Power BI and Looker Studio",
"Marketing analytics: funnels, cohorts, RFM, CLV, attribution",
"Data engineering: ETL/ELT, data quality, pipelines, orchestration",
"Big data concepts: the 5 Vs, distributed systems, HDFS, MapReduce",
"Apache Spark: PySpark DataFrames, Spark SQL, performance",
"Cloud data platforms: BigQuery, warehouses, lakes, lakehouses, dbt",
"Streaming and NoSQL: Kafka concepts, MongoDB, Redis; choosing storage"],
'A':[
"What AI is: history from 1950, the four circles, ways machines learn",
"Using AI tools professionally: prompt engineering, limits, checking outputs",
"Linear algebra for ML: vectors, matrices, dot products, transformations",
"Calculus for ML: derivatives, gradients, the chain rule, gradient descent",
"The ML workflow: framing a problem, features, labels, splits, data leakage",
"Linear regression from scratch and in scikit-learn; regression metrics",
"Logistic regression and classification metrics: confusion matrix, ROC-AUC",
"Decision trees, random forests and gradient boosting (XGBoost)",
"Model selection: cross-validation, hyperparameter tuning, bias–variance",
"Feature engineering, pipelines and imbalanced data",
"Unsupervised learning: k-means, hierarchical clustering, PCA; segmentation",
"Recommender systems and time-series forecasting",
"Neural networks from scratch: the perceptron and backpropagation in NumPy",
"Deep learning with PyTorch: tensors, training loops, optimisers, regularisation",
"Computer vision: CNNs, transfer learning, image classification",
"NLP foundations: tokenisation, embeddings, word2vec, sentiment",
"Transformers and attention: how LLMs work, pretraining, fine-tuning, RLHF",
"Building with LLM APIs: prompts in code, structured output, tool calling",
"RAG systems: chunking, vector databases, evaluating retrieval",
"AI agents and automation: tool use, planning, multi-step workflows",
"Generative AI for marketing: image, video and audio generation; brand safety",
"MLOps: experiment tracking, serving models with FastAPI, monitoring, drift",
"Responsible AI: bias, fairness, privacy, explainability (SHAP), regulation",
"AI product thinking: choosing use cases, measuring ROI, presenting work"],
'H':[
"Electricity: charge, voltage, current, resistance, Ohm's law, and their history",
"Circuits: series and parallel, power, Kirchhoff's laws, simulation",
"Components: resistors, capacitors, inductors, diodes, LEDs, the multimeter",
"Semiconductors and transistors: doping, BJTs, MOSFETs, switches and amplifiers",
"Digital logic: Boolean algebra, logic gates, combinational circuits",
"Sequential logic: flip-flops, registers, counters, memory cells",
"Computer architecture: ALU, registers, control unit, fetch–decode–execute, assembly",
"Memory and storage: cache, RAM, SSD/HDD, buses, I/O",
"Operating systems: processes, threads, scheduling, virtual memory, file systems",
"AI hardware: GPUs, TPUs, NPUs, parallel computing, data centres",
"PC building, troubleshooting and peripherals",
"Microcontrollers: Arduino C/C++, GPIO, PWM, timing",
"Sensors, actuators and protocols: I2C, SPI, UART",
"Raspberry Pi and embedded Linux",
"IoT systems: MQTT, cloud dashboards, power and device security",
"Edge AI: TinyML and running models on devices"],
'C':[
"Security foundations: CIA triad, threat actors, attack surface, personal hygiene",
"Social engineering and phishing; securing a marketing team's accounts",
"Networking I: OSI and TCP/IP models, IP addressing, subnetting",
"Networking II: TCP/UDP, DNS, DHCP, HTTP/S, routing, NAT",
"Network analysis: Wireshark, firewalls, VPNs, Wi-Fi security",
"Linux for security: shell, users, permissions, processes, logs, bash scripting",
"Windows security: Active Directory concepts, PowerShell, Event Viewer",
"Cryptography I: hashing, symmetric encryption, password storage",
"Cryptography II: public-key crypto, digital signatures, certificates, TLS",
"Web application security: OWASP Top 10, injection, XSS, CSRF (lab only)",
"Identity and access: MFA, OAuth/SSO, least privilege, IAM",
"Malware and ransomware: types, basic analysis, defences",
"Security operations: logs, SIEM (Splunk/Elastic), detection rules",
"Incident response and basic digital forensics",
"Vulnerability management: Nmap, OpenVAS, CVEs, patching",
"Ethical hacking: recon, exploitation and reporting in a home lab",
"Cloud security: shared responsibility, AWS/Azure basics, misconfigurations",
"Governance, risk and compliance: ISO 27001, NIST, Sri Lankan law",
"Security careers: SOC analyst path, Security+ and other certifications"],
'B':[
"Money, ledgers and trust: the history of money, the double-spend problem",
"Cryptographic foundations: hashes, digital signatures, Merkle trees",
"Bitcoin in depth: UTXOs, transactions, blocks, mining, proof of work",
"Wallets, keys and custody; recognising scams",
"Consensus: proof of work, proof of stake, BFT, forks",
"Ethereum: accounts, the EVM, gas, smart contracts",
"Solidity I: syntax, types, functions, Remix, test networks",
"Solidity II: mappings, events, modifiers, testing with Hardhat",
"Tokens: ERC-20, ERC-721/1155 (NFTs), stablecoins",
"Smart contract security: reentrancy, common exploits, audits",
"DeFi: AMM exchanges, lending, oracles, risks",
"dApp development: ethers.js, connecting a web front end to a contract",
"Scaling and interoperability: layer 2, rollups, bridges",
"Regulation and risk: global rules, Sri Lanka's position, CBDCs, AML",
"Real-world uses: ticketing, loyalty, supply chain, web3 marketing",
"Blockchain build: NFT tickets or a token-gated fan club on a test network"]}
W=[ # (A slots Mon-Fri, B slots Mon-Fri)
("SSDSH","HDCAS"),
("SDSCA","ADHCB"),
("SDHCD","SABCH"),
("SDACH","DSACB"),
("SDAHB","DACHS"),
("DASAC","SDBHA"),
("ASDBA","CSADH"),
("DASCB","ABSCH"),
("ADSHB","CADBS"),
("ADBCH","BACSH"),
("AABCH","SABCD"),
("ASDBC","CDBSH")]
from collections import Counter
ca=Counter(); cb=Counter()
for a,b in W: ca.update(a); cb.update(b)
need={'S':(13,11),'D':(12,9),'A':(13,11),'H':(7,9),'C':(8,11),'B':(7,9)}
for k,(x,y) in need.items(): print(k,'A',ca[k],x,'B',cb[k],y, 'hrs',ca[k]*4+cb[k]*3,'sessions',ca[k]+cb[k],len(T[k]))
start=datetime.date(2026,11,16)
NAMES={'S':'Software','D':'Data','A':'AI','H':'Hardware','C':'Cyber','B':'Blockchain'}
idx={k:0 for k in T}; days=[]; first={k:{} for k in T}
PROJ=["Security audit of your own accounts + a campaign KPI spreadsheet + a Python unit-converter script","Python text-adventure game + LED circuit in a simulator + descriptive statistics of a real dataset","Command-line expense tracker on GitHub + a Wireshark traffic report","Sales-forecast model in pandas + a hardened Linux setup","A/B-test analysis of a campaign + a tested classification model","SQL analysis of an e-commerce database + a responsive portfolio website","Interactive JavaScript page + customer segmentation and neural-network notebook","Marketing dashboard + your first Solidity contract on a test network","LLM-powered API built with FastAPI + an Arduino sensor build","RAG chatbot over a brand's documents with a React front end","IoT sensor station streaming to a cloud dashboard + a pen-test report on your own app","AI marketing agent + NFT ticketing app on a test network"]
for w,(a,b) in enumerate(W):
  for d in range(7):
    n=w*7+d+1; dt=start+datetime.timedelta(days=n-1)
    if d<5:
      row={'n':n,'date':dt,'kind':'learn','blocks':[]}
      for slot,tr,h in (('A',a[d],4),('B',b[d],3)):
        t=T[tr][idx[tr]]; idx[tr]+=1; first[tr].setdefault(idx[tr],n); row['blocks'].append((tr,t,h,idx[tr]))
    elif d==5: row={'n':n,'date':dt,'kind':'proj','text':f"Project {w+1} (7 h): {PROJ[w]}"}
    else: row={'n':n,'date':dt,'kind':'exam','text':("Phase %d exam (6 h): written + practical, then review"%((w+1)//4)) if (w+1)%4==0 else f"Week {w+1} test, spaced review and catch-up (6 h)"}
    days.append(row)
cap=["Capstone: choose, scope and plan; gather data (8 h)","Capstone build day 1 (8 h)","Capstone build day 2 (8 h)","Capstone build day 3 + security and quality review (8 h)","Portfolio day: GitHub write-ups, LinkedIn, CV, mock interview (8 h)","Demo day: present your capstone, final review, Season 2 plan (6 h)"]
for i,c in enumerate(cap):
  n=85+i; days.append({'n':n,'date':start+datetime.timedelta(days=n-1),'kind':'cap','text':c})
assert all(idx[k]==len(T[k]) for k in T), idx
def fd(dt): return dt.strftime('%a ')+str(dt.day)+dt.strftime(' %b')
def cal(lo,hi):
  out="| Day | Date | Session A (4 h) | Session B (3 h) |\n| --- | --- | --- | --- |\n"
  for r in days[lo-1:hi]:
    if r['kind']=='learn':
      (t1,x1,_,_),(t2,x2,_,_)=r['blocks']
      out+=f"| {r['n']} | {fd(r['date'])} | **{NAMES[t1]}:** {x1} | **{NAMES[t2]}:** {x2} |\n"
    else:
      out+=f"| {r['n']} | {fd(r['date'])} | **{r['text']}** | |\n"
  return out
open('cal1.md','w').write(cal(1,28));open('cal2.md','w').write(cal(29,56));open('cal3.md','w').write(cal(57,90))
# sessions with day and hours per track
sess={k:[] for k in T}
for r in days:
  if r['kind']=='learn':
    for tr,x,h,i in r['blocks']: sess[tr].append((i,x,h,r['n']))
json.dump({k:[list(map(str,s)) for s in v] for k,v in sess.items()},open('sess.json','w'),indent=0)
for k in T: print(k, sum(s[2] for s in sess[k]))
print(fd(days[-1]['date']))

# ---- export JS data for the platform ----
JD=[]
for r in days:
  if r['kind']=='learn':
    (t1,x1,_,_),(t2,x2,_,_)=r['blocks']; JD.append([t1,x1,t2,x2])
  elif r['kind']=='proj': JD.append(['P',r['text']])
  elif r['kind']=='exam': JD.append(['T',r['text']])
  else: JD.append(['X',r['text']])
JM={k:[[x,int(h),int(n)] for (i,x,h,n) in [(a,b,c,d) for a,b,c,d in sess[k]]] for k in sess}
open('data.js','w').write('const DAYS='+json.dumps(JD,ensure_ascii=False)+';\nconst MODS='+json.dumps(JM,ensure_ascii=False)+';\n')
