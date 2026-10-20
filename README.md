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

1. Push this repo to GitHub.
2. In Vercel: **New Project → Import** this repo.
3. Framework preset **Astro** is detected automatically; leave the defaults
   (`npm run build` → `dist`). `vercel.json` pins the build command, output
   directory, and immutable caching for hashed assets.

No environment variables and no serverless functions are required — the output
is fully static.

## Editing content

Almost all copy and links live in **`src/data/site.ts`**:

| Field | Purpose |
|---|---|
| `downloadUrl` | The beta download link (see below) |
| `downloadReady` | `false` renders a "get notified" form; `true` renders the download button |
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

Until then the page shows the "get notified" state.

### Why not Vercel Blob?

Hosting a raw `.ipa`/`.apk` in blob storage and gating it behind a link does not
work well on iOS — installing requires an OTA manifest and valid provisioning,
not just a download. EAS already solves this. If you later want an email-gated
reveal, keep the gate on the site but have it hand out the **EAS URL**.

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
cp /path/to/climblog/screenshots/04-sketch-beta.png   src/assets/shots/
cp /path/to/climblog/screenshots/06-lab-volume.png    src/assets/shots/
cp /path/to/climblog/screenshots/07-lab-efficiency.png src/assets/shots/
cp /path/to/climblog/screenshots/08-community.png     src/assets/shots/
cp /path/to/climblog/screenshots/10-lab-overview.png  src/assets/shots/
```

Images are imported from `src/data/site.ts`, which lets Astro emit responsive
WebP variants. The source PNGs are ~2.8 MB each; the built WebP versions are
8–60 KB.

### Known gaps in the current screenshot set

- **`04-sketch-beta.png`** was verified only by its header text. The drawing
  toolbar is rendered by Skia with no accessibility nodes, so it could not be
  confirmed programmatically. **Eyeball this one.**
- **Not yet captured:** the sign-in screen, the Quick Log sheet, and Profile.
  Add them here once captured, with `alt` text and a caption.
- Route cards fall back to the `SentinelRock` SVG placeholder because the seed
  data has no real wall photos. This is on-brand, but confirm you are happy with
  it before a public launch.
