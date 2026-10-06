# DEVFEST-Sazid_Hasan

# Tender Document Package Builder

**AI DevFest 2026: AI Vibe-Coding Contest (Solo)**

## Participant

- **Name:** Sazid Hasan
- **Registration number:** Not issued
- **Live website (HTTPS):** https://sazid53956.github.io/DEVFEST-Sazid_Hasan/

## About

A frontend-only web app that helps office staff turn a set of PDF files into one complete, checked and correctly ordered tender package. Everything runs in the browser. No file is uploaded to any server.

## How to run

**Online:** open the live link above in the latest Google Chrome. No login or installation is needed.

**Locally:** download or clone this repository and open `index.html` in Chrome. There is no build step.

## How to use

1. Load `requirements.json`.
2. Upload the PDF files (many at once, or drag and drop).
3. Match each file to a required document and enter expiry dates where asked.
4. When no blocking problems remain, click Generate and download `<tender_id>_Package.pdf`.

## Main features done

- Load `requirements.json` and show tender details and the required documents sorted by order
- Upload many PDFs, show file name and page count, reject non-PDF files, remove files
- Match files to documents (one file per document, one document per file), change or clear matches at any time
- Expiry date entry for documents that have an expiry
- Live status for every document: Missing, Expiry date needed, Expired, Not provided, OK
- Duplicate detection by file content (SHA-256), even when file names differ
- Generate button disabled while blocking problems exist, with the reasons shown
- Package PDF: English cover page, documents in order, footer `<tender_id> | Page X of Y` on every page without covering the content
- Download as `<tender_id>_Package.pdf`
- Full Bangla and English language switch

## Bonus features

None.

## Known problems

None known.

## AI tools used

- [Chat GPT & Claude]

## Most useful prompt

```text
Build a frontend-only web app using plain HTML, CSS and JavaScript (no build step, no backend, no framework). Files: index.html, style.css, app.js. It must run on GitHub Pages and in the latest Google Chrome.

Load pdf-lib from a CDN with a pinned version:
https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js

APP: "Tender Document Package Builder". It helps office staff turn uploaded PDFs into one checked, correctly ordered PDF package.

INPUT FORMAT (requirements.json):
{ "tender": { "tender_id", "title", "procuring_entity", "bidder", "submission_deadline" (YYYY-MM-DD) },
  "requirements": [ { "id", "order", "title_en", "title_bn", "mandatory", "has_expiry" } ] }
Never hardcode any tender data. Everything comes from the loaded JSON, because the app will be tested with a different pack.

FEATURES:
1. Load requirements: a file input to open requirements.json. Show tender details and the requirement list sorted by "order". Show an invalid-file message if the JSON is malformed.
2. Upload PDFs: multiple file input plus drag and drop. Show file name and page count for each file. Reject non-PDF files with a clear message. Each file has a Remove button. If a PDF is damaged or password protected, show a clear message and do not crash.
3. Matching: for each requirement, a dropdown listing the uploaded files. One requirement gets at most one file and one file goes to at most one requirement. The user can change or clear a match at any time. Removing a file clears its match.
4. Expiry date: if a requirement has has_expiry = true and a file is matched, show a date input for the expiry date.
5. Status for every requirement, recomputed instantly after every change: Missing, Expiry date needed, Expired, Not provided, OK. A document expiring on the same day as the deadline is OK.
6. Duplicates: compute SHA-256 of each uploaded file. Files with identical content are marked "Duplicate". Duplicate files cannot be matched to different requirements.
7. Generate button: disabled while any requirement has a blocking status, with a visible list explaining why.
8. Package PDF (pdf-lib): English cover page, then all pages of each matched file in requirement order, with a footer "<tender_id> | Page X of Y" on every page placed in an added strip so it never covers content.
9. Download as <tender_id>_Package.pdf.
10. Two languages: Bangla / English switch, all UI strings in one translations object.
11. UI: simple, clean, responsive, with step-by-step instructions for a non-technical office worker.
```