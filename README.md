# WiseWeb

A 90-day, full-time tech bootcamp in six tracks, built as a single interactive web page.

**Live site:** https://ridmaraveengamage-cmyk.github.io/wiseweb/

**Start any day:** you choose your Day 1 in the page, and every date, today's plan and the countdown follow from it. You can change it later.
**Load:** 8 hours on days 1–5 of each week, a 7-hour project on day 6, a 6-hour test and review on day 7 (about 682 hours)

| Track | Teaching hours |
| --- | --- |
| Software engineering | 85 |
| AI and machine learning | 85 |
| Data analytics and big data | 75 |
| Cyber security | 65 |
| Hardware and electronics | 55 |
| Blockchain and crypto | 55 |
| Projects, tests, review and capstone | 262 |

## What's in the page

- **Sign in:** continue with Google, or create an account with email and password (with password reset). Each learner's progress is saved to their own account with Firebase (Authentication + Cloud Firestore, project `wiseweb-7c15a`), so it follows them to any device. Security rules let each user read and write only their own record.
- **Home:** choose your start date, today's sessions, the daily timetable, progress across the six tracks, the four phases
- **Calendar:** all 90 days, filterable by phase and track, with a tick box for each day; unbuilt lessons are labelled "Not built yet"
- **Tracks:** all 120 sessions with their hours and day
- **Lessons:** Week 1 is fully built, with 12 lessons across Days 1–7:
  - Day 1: How computers run programs · Electricity
  - Day 2: Python I · Data thinking
  - Day 3: Spreadsheets in depth · Security foundations
  - Day 4: Python II · What AI is
  - Day 5: Circuits · Python III
  - Day 6: Project 1 (security audit, KPI spreadsheet, Python unit converter)
  - Day 7: Week 1 test, spaced review and catch-up

Each lesson includes history timelines, explanations, interactive tools (binary, CPU, circuit and energy simulators, a working spreadsheet, a risk matrix and more), Python exercises that run in the browser with automatic checking, quizzes, flashcards and homework.

Progress is saved in your browser (localStorage). Python runs in the page through [Skulpt](https://skulpt.org), loaded from jsDelivr. Open `index.html` in any modern browser; there is no build step.
