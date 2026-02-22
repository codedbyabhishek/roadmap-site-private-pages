# Private Roadmap Website (GitHub Pages)

A static roadmap website with a login gate, ready to deploy from a private GitHub repository.

## What is included

- `login.html`: password entry page
- `index.html`: protected roadmap page
- `assets/js/auth.js`: SHA-256 password check + session handling
- `assets/js/roadmap.js`: roadmap content data
- `.github/workflows/deploy.yml`: automatic GitHub Pages deployment from `main`

## Password

Current password configured in this starter:

- `gobaby go`

Important: GitHub Pages does not support server-side password protection by default. This project uses a client-side gate and should not be used for highly sensitive data.

## Run locally

From this folder:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080/login.html`.

## Change password

1. Generate a SHA-256 hash for the new password.

```bash
printf 'new password here' | shasum -a 256
```

2. Replace `PASSWORD_HASH` in `/assets/js/auth.js`.

## Deploy in a private repo

1. Create a **private** GitHub repository.
2. Push this folder to the `main` branch.
3. In GitHub repo settings, open **Pages** and set source to **GitHub Actions**.
4. Push changes to `main`; workflow deploys site.

## Suggested stronger protection

For real access control, place the site behind Cloudflare Access (or equivalent identity proxy) and require login before serving pages.
