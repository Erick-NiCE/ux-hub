# NiCE UX Hub

One page linking every site built by the NiCE UX team. Built with the Lynn UI stylesheet (`assets/lynn-ui.css`), so it uses the same native components as the NiCE Designer site.

## Add a site
Edit `assets/sites.js`, copy an entry, and open a pull request. GitHub Pages redeploys on merge. No build step.

## Run locally
```bash
python3 -m http.server 8000
```
Then open http://localhost:8000.

## Updating Lynn
`assets/lynn-ui.css` is a copy of `lynn-ui/dist/lynn-ui.css` from the NiCE Designer site. Replace it to pick up new components.
