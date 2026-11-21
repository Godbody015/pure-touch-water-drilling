# PURE-TOUCH Water Drilling

Official website for **PURE-TOUCH Water Drilling**, a subsidiary of Pure Touch Chemicals. The site presents the company's borehole drilling, water siting, pumps and tanks, yield testing, repair and water quality services in South Africa, and lets visitors request a quote by WhatsApp.

## Pages

| Page | File |
|------|------|
| Home | `index.html` |
| About | `about.html` |
| Services | `services.html` |
| Projects | `projects.html` |
| Contact | `contact.html` |

## Project structure

```
├── index.html
├── about.html
├── services.html
├── projects.html
├── contact.html
├── style.css        # all styling
├── main.js          # mobile menu, scroll animations, WhatsApp quote form
├── favicon.png      # browser tab icon
└── images/
    ├── logo-on-dark.png    # used in the header and footer
    └── logo-on-light.png
```

## Tech

Plain HTML, CSS and JavaScript. No build step, no frameworks and no dependencies. Fonts (Inter and Playfair Display) load from Google Fonts. All file paths are relative, so the site works on GitHub Pages, a custom domain or any normal web host.

## Features

- Responsive layout with a mobile hamburger menu
- Floating WhatsApp button on every page
- Quote form that opens WhatsApp with the details pre-filled
- Scroll animations, which respect the "reduce motion" setting

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy on GitHub Pages

1. Push the files to the repository root.
2. Go to **Settings → Pages**.
3. Set the source to the `main` branch and the `/ (root)` folder, then save.
4. The site goes live at `https://<username>.github.io/<repository-name>/`.

To use a custom domain, add it under **Settings → Pages → Custom domain**, point the domain's DNS records to GitHub Pages, and enable **Enforce HTTPS**.

## Updating content

- **Contact details:** edit the phone, email and address in `contact.html` and in the footer of each page. The WhatsApp number is in the `wa.me` links, which appear in every page.
- **Services and text:** edit the relevant `.html` file.
- **Colours:** change the variables at the top of `style.css`.
- **Projects:** replace the placeholder cards in `projects.html` with real photos and details. Put photos in `images/`.

## Credits

Website and logo design by Everydayplug.
