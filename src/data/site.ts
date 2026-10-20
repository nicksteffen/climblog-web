/**
 * Single source of truth for landing-page copy and links.
 * Edit here rather than in markup.
 *
 * NOTE: the EAS build URL is a placeholder — replace it once you have a real
 * `eas build --profile preview` link (see README.md).
 */

export const site = {
  name: 'VertX',
  tagline: 'Session Tracking and Analytics for Climbers.',
  description:
    'Log every climb, sketch the beta straight onto your wall photo, and watch your grade volume grow. Local-first session tracking and training analytics for bouldering.',
  /** Placeholder — replace with your real EAS internal-distribution link. */
  downloadUrl: 'https://expo.dev/accounts/REPLACE_ME/projects/climblog/builds',
  downloadLabel: 'Download the beta',
  /** Set to true once downloadUrl points at a real build; false renders "Coming soon". */
  downloadReady: false,
  contactEmail: 'hello@vertx.app',
} as const;

export const nav = [
  { href: '#features', label: 'Features' },
  { href: '#screens', label: 'Screens' },
  { href: '#download', label: 'Download' },
] as const;

/** The three-step loop that the app is built around. */
export const features = [
  {
    icon: '📸',
    title: 'Log a climb',
    body: 'Shoot the wall problem, or skip the photo entirely. Set the grade and the hold colour, and it is in your logbook in seconds.',
  },
  {
    icon: '✍️',
    title: 'Sketch the beta',
    body: 'Draw straight onto your own route photo. Eight colours, brush and ellipse, undo and clear — map the sequence before you forget it.',
  },
  {
    icon: '📈',
    title: 'Track and analyse',
    body: 'Log each attempt as flash, onsight, send or fell. The Rock Garden turns them into grade-volume charts, send efficiency, height climbed and daily breakdowns.',
  },
] as const;

/**
 * Screenshot set. Images are imported (not referenced by path string) so Astro
 * can read their intrinsic dimensions and emit optimized variants.
 *
 * The screenshots originate from the app repo's git-ignored `screenshots/` dir
 * and are copied into src/assets/shots/ here. See README.md for how to refresh.
 */
import shotLogbook from '../assets/shots/02-logbook.png';
import shotRouteDetail from '../assets/shots/03-route-detail.png';
import shotLabVolume from '../assets/shots/06-lab-volume.png';
import shotLabEfficiency from '../assets/shots/07-lab-efficiency.png';
import shotLabOverview from '../assets/shots/10-lab-overview.png';
import shotCommunity from '../assets/shots/08-community.png';

export const screens = [
  {
    src: shotLogbook,
    alt: 'VertX logbook showing active climbing routes as photo cards with grade badges.',
    caption: 'Every project, one logbook',
  },
  {
    src: shotRouteDetail,
    alt: 'Route detail screen with grade, height, rating, notes and attempt controls.',
    caption: 'The full story of a route',
  },
  {
    src: shotLabVolume,
    alt: 'The Rock Garden analytics showing sends, attempts, total height and a grade volume chart.',
    caption: 'Watch your grade volume grow',
  },
  {
    src: shotLabEfficiency,
    alt: 'Efficiency view showing sends out of total attempts for each grade.',
    caption: 'Am I actually improving?',
  },
  {
    src: shotLabOverview,
    alt: 'Overview grid showing peak grade, sends and flashes, falls and unsent, and height climbed.',
    caption: 'Your season at a glance',
  },
  {
    src: shotCommunity,
    alt: 'Community screen featuring the Pebble the Unstoppable mascot and progress stats.',
    caption: 'A little personality in your data',
  },
];

export const highlights = [
  { value: 'Local-first', label: 'Works with no signal, at any gym' },
  { value: 'iOS & Android', label: 'One logbook across your devices' },
  { value: 'Grade analytics', label: 'Volume, efficiency and streaks' },
] as const;
