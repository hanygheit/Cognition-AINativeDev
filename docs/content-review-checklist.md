# Content Review Checklist

Run this per slide before declaring content work complete. Source of truth for the narrative is [presentation-brief.md](presentation-brief.md).

## Per-slide gate

- [ ] **Five-second test** — the core message is readable from the back of the room in five seconds.
- [ ] **One idea** — the slide makes exactly one argument. A second argument means a second slide or a cut.
- [ ] **Word budget** — headline ≤ 8 words, pull line ≤ 16 words, body item ≤ 10 words, ≤ ~60 words visible in total.
- [ ] **No exaggeration** — no "always", "never", "10x", "replaces engineers", "proves". Conditions travel with claims.
- [ ] **Thesis support** — the slide advances "the engineer owns direction, constraints, verification, outcomes".
- [ ] **Both audiences** — a junior engineer understands the words; a senior engineer does not find it naive.
- [ ] **Register** — enterprise, declarative, calm. No jokes, no hype, no vendor names as endorsements.
- [ ] **Sources** — a source label appears only on a slide that shows a number or a research claim.
- [ ] **Notes alignment** — `notes` in `src/data/slides.ts` says what the speaker adds, not what is already on screen.
- [ ] **No orphan lists** — every list of terms has a label explaining what the list is.

## Deck-level gate

- [ ] Terminology is consistent: *mode*, *loop*, *layer*, *artifact*, *evidence*, *delegation contract*, *change assurance*. One term per concept, deck-wide.
- [ ] The walkthrough (10 → 11 → 12) uses one continuous example: session capacity and waitlist.
- [ ] Slide 2 reads as a release scenario, not as sourced productivity evidence.
- [ ] Slide 15 actions are all doable by one engineer in one week.
- [ ] Slide 16 restates the thesis verbatim in spirit, then stops.
- [ ] Total spoken duration in `durationSeconds` sums to the session length.

## Banned phrasing

| Avoid | Use |
| --- | --- |
| "AI replaces developers" | "AI generates implementation" |
| "10x productivity" | "leverage moved outward" |
| "studies prove" | "in that study" |
| "the future of coding" | "how the work is changing" |
| "just prompt it" | "specify, constrain, verify" |
| "AI writes the tests so you don't have to" | "define the evidence first" |
