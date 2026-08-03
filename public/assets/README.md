# Presentation Assets

The checked-in placeholders keep every layout deterministic and offline. Run `npm run assets:generate` to recreate them.

## Replace When Available

1. `hany-saad-portrait.png` — preferred real speaker portrait. Update slides 2 and 16 only after it is supplied; do not generate or retouch the speaker's face.
2. `cognitionx-event-reference.png` — optional event reference.
3. `microsoft-egypt-venue.png` — optional venue image.
4. Optional CognitionX logo — use only an approved local file.
5. Optional ITWorx logo — use only an approved local file.

## Generated Files

- `speaker-placeholder.png` — abstract `HS` placeholder, not a generated face.
- `cognitionx-placeholder.png` — local nested-loop event placeholder.
- `linkedin-qr.png` — points to `https://www.linkedin.com/in/hanysaad/`; generation decodes and verifies the payload.

Do not add remote or expiring image URLs.