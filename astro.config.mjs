// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Canonical URL for the deployed site. Update this if a custom domain is
  // added, otherwise canonicals and social previews point at the wrong host.
  site: 'https://climblog-web.vercel.app',
  // Fully static output; Vercel serves `dist/` directly with no serverless runtime.
  output: 'static',
  image: {
    // Screenshots are 1206x2622 @3x; let Astro emit optimized responsive variants.
    responsiveStyles: true,
  },
});
