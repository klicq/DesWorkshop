# Verification and design review

Verified on 14 November 2026 using installed Chromium through the design-taste browser helper. No cloud deployment was performed.

## Automated and manual checks

- JavaScript syntax check passed.
- Design-taste source lint: **0 failures, 0 warnings**.
- Final rendered inspection at **1440, 768 and 390 px: 0 failures, 2 warnings**.
- Every final fold and full-page screenshot at those three widths was opened and reviewed.
- Additional responsive checks: **320, 390, 768, 1440 and 1920 px**, with all case studies expanded. No horizontal overflow or broken images.
- All referenced assets returned HTTP 200; all internal navigation anchors resolved.
- Case studies open with the Enter key and work without JavaScript.
- All campaign formats update the image, alt text, live status and pressed state. Rapid format changes respect the last request.
- Copy-address success and denied-permission fallback passed.
- The original motion study loaded and played; it never autoplays.
- Reduced-motion mode runs no page animation.
- Directly opening `index.html` loads local images and fonts.
- No runtime JavaScript exceptions were recorded.

These checks use Chromium viewport emulation, not a physical phone or exhaustive testing in every browser. Contact email delivery is not tested because the address is a deliberate placeholder.

## Inspector warnings retained

1. **Size count:** optical display sizes, the oversized contact address, controls and icons exceed the skill's five-size preference. The hierarchy is consistent in the reviewed render; this is a visual-style tradeoff, not a layout failure.
2. **No footage:** the inspector measures the collapsed page and does not count the video inside the closed Assemble case study. A working original motion study is present, verified separately, and intentionally plays only on request.

## Visual critique

ROUND 1

Seen in one second: Alex Morgan, with a large green campaign composition.
Idea (one sentence): A cross-format campaign system becomes the evidence for a visual designer's ability to make technical communication understandable.
Live thing: Website, Social and Poster artwork switcher.
Layout words by section: hero=monument / work=alternating editorial spreads / approach=filled panels / about=picture and biography / experience=ledger / contact=display email.
Scores: design 6.0 · usability 6.5 · creativity 7.0 · content 8.0 → overall 6.0 (failure cap).
Caps applied: first inspection had headline-wrapping and small-label failures.
Top three problems (most visible first), each with the screenshot it shows in and the fix:
1. Mobile hero crops away the campaign headline (mobile-fold). Create a dedicated portrait composition.
2. The giant name clips the descender (desktop-fold). Increase the line box and baseline space.
3. Tablet collaboration heading wraps to three lines (tablet-page-01). Shorten it to “Remote, together.”

ROUND 2 — FINAL

Seen in one second: a distinctive designer name, clear specialism and original campaign artwork.
Idea (one sentence): Alex's fictional technical-brand work is demonstrated as a consistent visual system across a site, publication and event.
Live thing: a keyboard-accessible campaign format switcher, plus an on-demand motion study.
Layout words by section: hero=monument / work=editorial spreads / approach=filled panels / about=picture and biography / experience=ledger / contact=display email.
Scores: design 6.5 · usability 8.5 · creativity 7.0 · content 8.0 → overall 7.4.
Caps applied: the strict rubric caps design at 6.5 for using original drawn artwork rather than four photographs; creativity is capped at 7 because the visual-system idea can also suit another technical designer. These limits do not indicate functional failures.
Top three remaining limitations (most visible first), each with the screenshot it shows in and the potential improvement:
1. The work uses flat original concept compositions (desktop-page-01), not documented commissioned applications. Replace with real project evidence when available.
2. The approach section is deliberately orderly and less distinctive than the name and work (desktop-page-02). Actual process artefacts would add personal specificity.
3. The profile remains fictional (mobile-page-01). Real experience, a real address and verified results are the largest improvements to application credibility.

## Direction and assets

“The name as a monument”, seed **471762079**. Hero and work redraw reasons are recorded in `DESIGN.md`. No found photographs, stock portraits or third-party portfolio assets were used; no external photo credits are needed. The green Orbit launch, pink Fieldguide publication, orange/blue Assemble event and silent video are original concept artefacts. Fonts are credited in `README.md` with their license in `assets/FONT-LICENSE.txt`.
