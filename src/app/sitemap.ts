import { MetadataRoute } from 'next';
import { dispensariesByState } from '@/lib/dispensaries';
import { states } from '@/lib/states';

const URL = 'https://dispensary-13773344-54196.web.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    {
      url: URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
     {
      url: `${URL}/careers`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
     {
      url: `${URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
     {
      url: `${URL}/foundation/companies`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ] satisfies MetadataRoute.Sitemap;

  const stateRoutes = states
    .filter(state => state.name.toLowerCase() !== 'hawaii') // Exclude Hawaii as it's handled by foundation
    .map((state) => ({
      url: `${URL}/state/${encodeURIComponent(state.name)}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
  }));

  const allDispensaries = dispensariesByState.flatMap(state => state.dispensaries);
  const dispensaryRoutes = allDispensaries.map((dispensary) => ({
    url: `${URL}/menu/${dispensary.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }) satisfies MetadataRoute.Sitemap[0]);

  return [...staticRoutes, ...stateRoutes, ...dispensaryRoutes];
}
