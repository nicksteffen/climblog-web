/**
 * Single source of truth for landing-page copy and links.
 * Edit here rather than in markup.
 *
 * NOTE: the EAS build URL is a placeholder — replace it once you have a real
 * `eas build --profile preview` link (see README.md).
 */

export const site = {
  name: 'VertX',
  tagline: 'Session tracking for climbers.',
  description:
    'Log a whole session in seconds, then see exactly what you climbed and how much. Quick logs for warm-ups and flashes, a dedicated logbook entry for the project you keep coming back to. Local-first bouldering tracking and analytics.',
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

/** The core loop: log fast during the session, understand it afterwards. */
export const features = [
  {
    icon: '⚡',
    title: 'Quick log the warm-ups',
    body: 'Warm-up and flash it in seconds. Grade, hold colour, and how it went — straight into the logbook, without using one of your three project slots.',
  },
  {
    icon: '🎯',
    title: 'Work your projects',
    body: 'Give the problem that keeps beating you a name and a photo. Log every attempt, note the beta, and watch a route go from falling to sent.',
  },
  {
    icon: '📈',
    title: 'See the whole session',
    body: 'Grade volume, send efficiency, total height climbed, daily breakdowns. Everything you logged, turned into what you actually did today.',
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
    caption: 'Everything you climbed today',
  },
  {
    src: shotRouteDetail,
    alt: 'Route detail screen showing a project with its grade, height, notes and every logged attempt.',
    caption: 'Every attempt on your project',
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
  { value: 'Two ways to log', label: 'Quick entries and full projects' },
  { value: 'Grade analytics', label: 'Volume, efficiency and streaks' },
] as const;

/**
 * Smaller capabilities, shown as a compact strip below the main loop. Sketching
 * lives here deliberately: it is a genuinely useful extra, but the thing people
 * actually reach for mid-session is fast logging.
 */
export const moreFeatures = [
  {
    icon: '📸',
    title: 'Photo your projects',
    body: 'Snap the problem so you recognise it next session.',
  },
  {
    icon: '✍️',
    title: 'Sketch the beta',
    body: 'Draw the sequence onto your photo when a problem needs planning.',
  },
  {
    icon: '🏆',
    title: 'Flash and onsight',
    body: 'Track how you sent it, not just whether you did.',
  },
  {
    icon: '📶',
    title: 'Works offline',
    body: 'Basement gyms and no signal are not a problem.',
  },
] as const;
