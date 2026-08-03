# Presentation Assets

The checked-in placeholders keep every layout deterministic and offline. Run `npm run assets:generate` to recreate them.

## Replace When Available

1. `hany-saad-portrait.png` — preferred real speaker portrait. Update slides 1 and 18 only after it is supplied; do not generate or retouch the speaker's face.
2. `cognitionx-event-reference.png` — optional event reference.
3. `microsoft-egypt-venue.png` — optional venue image.
4. Optional CognitionX logo — use only an approved local file.
5. Optional ITWorx logo — use only an approved local file.

## Generated Files

- `speaker-placeholder.png` — abstract `HS` placeholder, not a generated face.
- `cognitionx-placeholder.png` — local nested-loop event placeholder.
- `qr-linkedin-hany-saad.svg` — points to `https://www.linkedin.com/in/hanysaad/`.
- `qr-presentation-repo.svg` — points to `https://github.com/hanygheit/Cognition-AINativeDev`.

Both QR codes use high error correction and a four-module quiet zone. Asset generation decodes and verifies both payloads; `npm run test:pdf` also decodes every QR placement rendered on `/pdf-render`.

Do not add remote or expiring image URLs.
