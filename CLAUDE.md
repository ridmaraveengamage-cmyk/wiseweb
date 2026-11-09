# WiseWeb: guide for Claude Code

WiseWeb is a 90-day, full-time tech bootcamp (about 682 hours) delivered as one interactive web page. It covers six tracks: software, data and big data, AI and ML, hardware and electronics, cyber security, and blockchain. The owner and first learner is **Ridma**, a Sri Lanka–based marketer starting from zero in tech, who wants to become a professional.

- Live site: https://ridmaraveengamage-cmyk.github.io/wiseweb/ (GitHub Pages serves `index.html` from `main`)
- Repo: https://github.com/ridmaraveengamage-cmyk/wiseweb
- Approved programme doc (Claude Docs): https://claude.ai/artifact/Sv4xqoKhxk6Z4UK9Ks3XRt
- claude.ai artifact copy (no login, preview only): https://claude.ai/artifact/UDiPhKFE7AN6PiTmXoDELF

## First-time setup (do once, then delete this section)

This folder was copied from a Claude cloud session and is not a git repo yet. The GitHub repo already has 4 commits (only `index.html` and `README.md`). Attach this folder to it without losing that history:

```
git init -b main
git remote add origin https://github.com/ridmaraveengamage-cmyk/wiseweb.git
git fetch origin
git reset --soft origin/main
```

Then:

1. Delete `build.py`, an old Python copy of `build.js`.
2. Run `npm install`, `npx playwright install chromium` and `npm test`.
3. Commit everything ("Add WiseWeb source, build and tests") and push to `main`.

Ridma is new to git. Explain each step in plain words. If GitHub asks her to sign in, Git Credential Manager opens a browser window. Check that `index.html` is unchanged by the build (`git diff --stat origin/main -- index.html` should be empty).

## How Ridma wants to be taught (apply to all content)

- Complete, structured, in-depth material, taught directly. Don't send her to outside courses.
- Explain from the basics and include the history: who discovered each idea, when and how.
- Every session must have real, working content. If something isn't built yet, label it clearly ("Not built yet"); never show dead links or fake interactivity.
- Plain, warm English. No jargon without an explanation. Sri Lankan examples (rupees, Colombo, Kandy, Galle, local events) work well, because she works in music and events marketing.
- Ground rules taught in the course: hands-on electronics at 5–12 V only (Sri Lankan mains is 230 V); hack only systems you own; crypto on test networks only, and never investment advice; no client data in AI tools.

## Layout

```
build.js                 builds index.html and dist/preview.html from src/ (Node, no packages needed)
index.html               BUILT FILE: the live site. Never edit by hand; edit src/ and rebuild
src/page-head.html       <!doctype>, <head>, viewport meta, title
src/auth-head.html       login gate overlay (HTML + CSS)
src/app.html             the app shell: CSS, header, Home/Calendar/Tracks/Lessons views, main script
src/engine.css           lesson UI styles
src/engine.js            lesson engine: Python runner, widgets, lesson renderer (inserted into app's main script)
src/lessons/*.js         lesson content, one file per few days (adds to window.WW_LESSONS)
src/auth-tail.html       Firebase SDK + login, sign-up, password reset and progress sync
tests/lessons.test.js    runs every exercise's model solution, checks overflow and page errors
tests/auth.test.js       checks the login gate and sync against a fake Firebase (offline)
tools/plan.py            Python script that generated the 90-day calendar data (DAYS, MODS) now inside app.html; reference only
firestore.rules          copy of the published database rules
```

`app.html` contains `@@include path@@` lines; `build.js` replaces each with that file's contents.

## Commands

```
npm run build            # rebuild index.html and dist/preview.html (runs node build.js)
npm install              # first time: playwright and skulpt (for tests)
npx playwright install chromium
npm test                 # build + all tests
```

Always run `npm test` before committing. Then commit and push to `main`; GitHub Pages updates the live site in 1–2 minutes. Check it with a cache-busting query, for example `?v=10`.

## The app (src/app.html)

- Single IIFE script. Helpers: `$`, `$$`, `store.get/set` (localStorage with prefix `rtl:`), `toast`, `msg(el, html, cls)`, `award(key)` (records in `GS.ev`, returns true the first time), `partDone`, `timeline`, `quiz`, `homework`.
- Progress state: `GS = store.get('game')` with `GS.start` (the learner's chosen Day 1, `YYYY-MM-DD`) and `GS.ev` (keys such as `bday:N` for a ticked day, `lesson:<id>`, `ex:<lesson>-<part>-<n>`, `q:…`, `sh:…`, `w:…`).
- Course data: `TR` (tracks), `DAYS` (90 entries: `[track, topic, track, topic]` for two-session days, `[P|T|X, text]` for project/test/capstone days), `MODS`, `PH` (phases), `blocks(n)`, `fmtD(n)` (empty until a start date is chosen), `todayN()` (0 until started).
- `LINK` maps day/slot to a lesson URL. It is built automatically from `WW_LESSONS` (`day`, `slot`), plus the two older hand-built lessons `#hw-1` (Day 1 B) and `#ai-1` (Day 4 B).
- Routing by hash: `#roadmap` (Home), `#calendar`, `#tracks`, `#lessons`, `#l-<id>` (any lesson), `#hw-1`, `#ai-1`.
- Weeks: days 1–5 are learning days (Session A 4 h + Session B 3 h); day 6 is a 7 h project; day 7 is a 6 h test and review.

## Writing a lesson (src/lessons/*.js)

```js
(()=>{const R=String.raw;window.WW_LESSONS=Object.assign(window.WW_LESSONS||{},{
 s5:{id:'s5',day:8,slot:0,track:'S',hours:4,title:'…',lead:'…',goals:['…'],
  parts:[
   {h:'Heading',nav:'Short nav label',time:'30 min',
    body:R`<p>HTML prose…</p><pre class="ex">code example</pre>`,
    timeline:[{y:'1966',short:'Name',title:'…',who:'Person · role',story:'…',why:'…'}],
    widget:'circuit', cfg:{…},
    code:[{task:R`…`,starter:R`…`,expect:'exact output' /* or contains:[…] or tests:R`assert …\nprint("ALL TESTS PASSED")` */,
           inputs:'line1\nline2', hint:'…', solution:R`…`}],
    quiz:[{q:'…',o:['a','b','c','d'],a:1,e:'explanation'}],
    check:['checklist item…'],
    after:R`<p>more prose</p>`}],
  homework:['question…']}
});})();
```

- `slot` is 0 for Session A and 1 for Session B; `track` is S, D, A, H, C or B, or P for a project or T for a test. Match `DAYS` in app.html for that day.
- Every graded exercise needs a `solution` that passes: the lesson test runs them all. Python runs in the browser with Skulpt 1.2.0. Keep to the standard basics (no numpy or pandas), and avoid `round()` ties such as 3.125.
- Widgets in engine.js: `binary`, `rgb`, `cpu`, `classify` (cfg: items, opts), `kpi`, `password`, `risk`, `circuit`, `energy`, `flash` (cfg.cards), `pivot` (cfg.groups, rows), `sheet` (a working mini spreadsheet: cfg.data, rows, tasks `[text, (val, cells) => bool]`). Add new widgets to the `WIDGETS` object.
- To add a new lessons file, include it in app.html next to the others: `<script>\n@@include src/lessons/<file>.js@@\n</script>`.
- Lessons index (`renderLessonsIndex` in engine.js) currently lists weeks 1–2. Extend it as weeks are built.

## Design system ("style A, premium light"; don't change the look without asking)

- Fonts: Inter Tight (display), Inter (body), JetBrains Mono (code). White page, grey `#F5F5F7` rounded panels, large rounded corners, generous spacing.
- Colour tokens on `:root`, with dark-mode overrides: `--paper --panel --ink --muted --line --ai --cu --good --bad --warn --sky --on-accent`; track colours `--c-S --c-D --c-A --c-H --c-C --c-B`, applied with `.tk-X` (sets `--tc`).
- Must work at 390 px phone width with no horizontal scroll, in light and dark mode. The tests check overflow.
- Ridma rejected a gamified look (XP, badges); there is a separate kids sample for that.

## Login and progress sync (src/auth-*.html)

- Firebase project `wiseweb-7c15a` (free Spark plan) under Ridma's Google account. Console: https://console.firebase.google.com/project/wiseweb-7c15a
- Sign-in: Google (popup, redirect fallback) and email/password (sign up with name, verification email, password reset). Authorised domain: `ridmaraveengamage-cmyk.github.io`. Add any new domain under Authentication > Settings > Authorised domains.
- Firestore (`asia-south1`): document `users/{uid}` holds `{p: {<every rtl: key without the prefix>: string}, ts, name, email}`. Saved every 5 s when changed and on page hide.
- On sign-in, newer cloud progress replaces the device's. A device's pre-login progress is adopted if the account has none. Signing out saves, then clears the device's `rtl:` keys.
- The Firebase web config in auth-tail.html is a public identifier, not a secret; security comes from `firestore.rules`.
- The login only works on the GitHub site, not inside claude.ai artifacts.

## Status and next steps

- Done: the 90-day calendar, start-any-day, Week 1 fully built (Days 1–7: 12 lessons including Project 1 and the Week 1 test), and login with cloud progress.
- Next: build Week 2 (Days 8–14) ahead of the learner, in the same depth. See `DAYS` entries 8–14 for the topics.
- Ridma has also asked for a **separate in-depth course for each of the six tracks**. Confirm the plan with her before starting it.
