# CYBERNEXUS — Cybersecurity Portfolio

A responsive, dark-mode cybersecurity portfolio template built with **HTML, CSS and vanilla JavaScript**. It includes project showcases, CTF/writeup sections, skills, contact links and a browser-only password-strength learning demo.

> **Ethics note:** This portfolio is for ethical hacking and defensive security learning. Only test systems you own or have explicit permission to assess.

## Features

- Responsive layout for mobile, tablet and desktop
- Premium dark UI with terminal-inspired visual details
- About, skills, projects, CTF/writeups and contact sections
- Interactive password-strength estimator (runs locally in the browser)
- No framework, build step, backend or API keys required
- GitHub Pages compatible

## Run locally

1. Download or clone this repository.
2. Open `index.html` in your browser.

Optional local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Personalize before publishing

Search the project for placeholders and replace them:

- `[YOUR NAME]` — your display name
- `your.email@example.com` — your public contact email
- `YOUR-USERNAME` — your GitHub username
- `YOUR-PROFILE` — your LinkedIn profile slug
- `ADD REPOSITORY LINK` — link each card to your real project repository
- `[CTF / LAB NAME]` — real labs/challenges and links

Also edit skill descriptions and visual skill-bar widths to represent your **actual** experience. Remove any tool, certification or achievement you cannot demonstrate. Do not claim certifications or CTF results you have not earned.

## Publish with GitHub Pages

1. Create a GitHub repository, for example `cybernexus-portfolio`.
2. Upload `index.html`, `styles.css`, `script.js` and this README to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then click **Save**.
6. Wait for the deployment workflow to finish. GitHub will show your live URL in the Pages section.

Your site will typically be available at:

`https://YOUR-USERNAME.github.io/cybernexus-portfolio/`

For a user/organization site repository named `YOUR-USERNAME.github.io`, the URL is:

`https://YOUR-USERNAME.github.io/`

## Suggested hackathon presentation

- Explain the problem your portfolio solves: it documents hands-on learning in a verifiable way.
- Demo the responsive site and the local password-strength estimator.
- Open one real project repository and explain its scope, setup, screenshots and lessons learned.
- Be transparent about what is a learning lab versus a production security tool.

## Project structure

```text
cybernexus/
├── index.html
├── styles.css
├── script.js
└── README.md
```

## License

MIT — see [LICENSE](LICENSE).
