# Toothfairy Dental Clinic — Static Demo

This is a small static demo website for Toothfairy Dental Clinic (placeholder content). Open `index.html` in a browser to view the homepage.

Files
- `index.html` — the homepage
- `css/style.css` — styling
- `assets/logo.svg` — clinic logo
- `assets/dentist-placeholder.jpg` — placeholder image (empty file)
 - `assets/operation.svg` — stylized tooth icon (SVG)
 - `assets/operation_scene.svg` — flat vector scene: female dentist and masked patient (SVG)

To view locally, open `index.html` in your browser or run a simple static server (Python 3):

```powershell
python -m http.server 8000 --directory .
```

Then open http://localhost:8000 in your browser.

Converting the scene SVG to JPG (optional)

If you need a raster JPG (`assets/operation.jpg`) you can create it locally:

Using ImageMagick (if installed):

```powershell
magick convert assets/operation_scene.svg -background white -flatten assets/operation.jpg
```

Or open `assets/operation_scene.svg` in a browser, right-click the image and "Save image as..." or use the browser's print-to-PDF/Save-as-image tools.
