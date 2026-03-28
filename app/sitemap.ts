import type { MetadataRoute } from 'next';
import { source } from '@/lib/source';

const baseUrl = 'https://zig-zag.js.org';

export const revalidate = false;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = (path: string): string => new URL(path, baseUrl).toString();

  return [
    {
      url: url('/'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: url('/docs'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...source.getPages().map((page) => ({
      url: url(page.url),
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    })),
  ];
}
