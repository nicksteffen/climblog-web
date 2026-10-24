# VertX — landing page

Static marketing site for the VertX bouldering app. Astro, deployed on Vercel.

Kept as its own repo (separate from the Expo app) so the screenshot assets are
committed deliberately and there is no collision with the app's `node_modules`,
Metro/Babel config, or root `package.json`.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview  # serve the built output
```

## Deploy to Vercel

**Live:** https://climblog-web.vercel.app
**Repo:** https://github.com/nicksteffen/climblog-web (public)

The project is linked to Vercel's Git integration, so **pushing to `main`
deploys to production automatically** — no manual step needed.

To deploy manually:

```bash
vercel --prod
```

Framework preset **Astro** is auto-detected. `vercel.json` pins the build
command, output directory, and immutable caching for hashed assets.

No environment variables and no serverless functions are required — the output
is fully static.

### Web Analytics

Vercel Web Analytics is enabled on the project and rendered by the
`<Analytics />` component in `src/layouts/Base.astro`. There is no extra
configuration, but note that the dashboard must have Analytics **enabled** for
the project (`vercel project web-analytics enable climblog-web`) — otherwise the
component loads and silently sends nothing.

Data appears in **Vercel → Project → Analytics** a few minutes after traffic
arrives. It only records production traffic, so `npm run dev` produces no
events.

### If a custom domain is added

Update `site` in `astro.config.mjs` to match, otherwise canonical tags and
social preview URLs will point at the wrong host:

```js
site: 'https://climblog-web.vercel.app',  // or your domain
```

## Editing content

Almost all copy and links live in **`src/data/site.ts`**:

| Field | Purpose |
|---|---|
| `downloadUrl` | The beta download link (see below) |
| `downloadReady` | `false` renders a "beta coming soon" note; `true` renders the download button |
| `features` | The three-step "how it works" cards |
| `screens` | Gallery items (image import + alt text + caption) |
| `highlights` | The three hero stats |

To change the palette or typography, edit `src/styles/global.css`. Those tokens
are copied from the app's own `constants/theme.ts` — keep them in sync if the
app's brand colours change.

## Wiring up the beta download

This site does **not** host build artifacts. Builds are distributed through
**EAS internal distribution**, which handles signing and the iOS/Android install
flow that a plain file link cannot.

```bash
# in the app repo
eas build --profile preview --platform ios
```

EAS prints an install URL. Put it in `src/data/site.ts`:

```ts
downloadUrl: 'https://expo.dev/accounts/<you>/projects/climblog/builds/<id>',
downloadReady: true,
```

Until then the page reads "the beta is on the way".

### Why not Vercel Blob?

Hosting a raw `.ipa`/`.apk` in blob storage and gating it behind a link does not
work well on iOS — installing requires an OTA manifest and valid provisioning,
not just a download. EAS already solves this. If you later want the reveal gated,
keep the gate on the site but have it hand out the **EAS URL**.

## Refreshing the screenshots

The screenshots originate from the app repo's `screenshots/` directory, which is
**git-ignored there** — hence the copies checked into `src/assets/shots/` here.

Re-capture and copy them across:

```bash
cd /path/to/climblog
bash .screenshot-kit/capture.sh          # writes ./screenshots/*.png

cd /path/to/climblog-web
cp /path/to/climblog/screenshots/02-logbook.png       src/assets/shots/
cp /path/to/climblog/screenshots/03-route-detail.png  src/assets/shots/
cp /path/to/climblog/screenshots/05-quick-log.png     src/assets/shots/
cp /path/to/climblog/screenshots/06-lab-volume.png    src/assets/shots/
cp /path/to/climblog/screenshots/07-lab-efficiency.png src/assets/shots/
cp /path/to/climblog/screenshots/08-community.png     src/assets/shots/
cp /path/to/climblog/screenshots/10-lab-overview.png  src/assets/shots/
```

`capture.sh` signs in first, because several screens gate their content on a
session — the Quick Log grade chips in particular. See `screenshots/PLAN.md` in
the app repo for the traps involved.

Images are imported from `src/data/site.ts`, which lets Astro emit responsive
WebP variants. The source PNGs are ~2.8 MB each; the built WebP versions are
8–60 KB.

The logbook and route-detail shots show real wall photos. Those come from files
placed in the simulator's app container — see the "Route photos" section of
`screenshots/PLAN.md` in the app repo. If the photos are missing, both shots fall
back to a sage-green SVG placeholder, which is easy to spot when reviewing.

### Known gaps in the current screenshot set

- **Not yet captured:** the sign-in screen and Profile. Add them once captured,
  with `alt` text and a caption.
- **Sketch Beta is not in the gallery.** The screen works, but its drawing
  toolbar is rendered by Skia with no accessibility nodes or OCR text, so the
  capture could not be verified programmatically. The landing copy still
  advertises sketching (it is a real feature), so add a screenshot here once one
  can be confirmed by eye.
