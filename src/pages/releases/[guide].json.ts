import type { APIRoute, GetStaticPaths } from 'astro';
import { CHANGELOG, guideReleases, guides, pagePath, type Guide } from '../../data/guides';
import { LOCALES, localePath } from '../../i18n';

// Read by each product's Unity editor to tell the user a new version is on BOOTH.
// Shaped for Unity's JsonUtility: no dictionaries, so localized text is an array in `locales` order.
export const getStaticPaths = (() =>
  guides.filter(g => guideReleases(g).length).map(guide => ({ params: { guide: guide.slug }, props: { guide } }))) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props, site }) => {
  const guide = (props as { guide: Guide }).guide;
  const releases = guideReleases(guide);
  const url = (path: string) => new URL(path, site).href;
  const body = {
    schema: 1,
    product: guide.slug,
    latest: releases[0].version,
    booth: guide.booth ?? '',
    locales: LOCALES,
    changelog: LOCALES.map(l => url(localePath(l, pagePath(guide.slug, CHANGELOG)))),
    releases: releases.map(r => ({
      version: r.version,
      date: r.date,
      edition: r.edition ?? '',
      changes: r.changes.map(c => ({ kind: c.kind ?? '', text: LOCALES.map(l => c.text[l]) })),
    })),
  };
  return new Response(JSON.stringify(body, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
