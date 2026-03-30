import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { source } from '@/lib/source';
import { notFound } from 'next/navigation';

export const revalidate = false;

interface RouteProps {
  params: Promise<{ slug: string[] }>;
}

export async function GET(_req: Request, props: RouteProps) {
  const { slug } = await props.params;
  const page = source.getPage(slug);
  if (!page) notFound();

  const [spaceGroteskBold, dmSansMedium] = await Promise.all([
    readFile(join(process.cwd(), 'assets/fonts/SpaceGrotesk-Bold.ttf')),
    readFile(join(process.cwd(), 'assets/fonts/DMSans-Medium.ttf')),
  ]);

  // Determine which package section this belongs to
  const section = slug[0];
  const sectionLabels: Record<string, string> = {
    chains: '@zig-zag/chains',
    'better-siwp': '@zig-zag/better-siwp',
  };
  const sectionLabel = sectionLabels[section] ?? 'ZigZag Docs';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 72px',
          background: '#0c0c12',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Pink glow top-right */}
        <div
          style={{
            position: 'absolute',
            top: '-150px',
            right: '-50px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(230,0,122,0.10) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Top: Logo + wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="22"
            viewBox="0 0 50 30"
            fill="#E6007A"
          >
            <path d="M31.085 19.326L24.615 15l-6.468 4.326L11.677 15 0 22.81 4.811 30l6.866-4.591 6.47 4.325 6.469-4.325 6.469 4.326 6.469-4.326L44.42 30l4.81-7.191L37.555 15zM11.677 10.409l6.47 4.326 6.469-4.326 6.469 4.326 6.469-4.326L44.42 15l4.81-7.191L37.555 0l-6.47 4.326L24.617 0l-6.47 4.326L11.678 0 0 7.81 4.811 15z" />
          </svg>
          <span
            style={{
              fontFamily: 'Space Grotesk',
              fontSize: '24px',
              fontWeight: 700,
              color: '#f5f5f5',
            }}
          >
            ZigZag
          </span>
        </div>

        {/* Center: Section label + Page title */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <span
            style={{
              fontFamily: 'DM Sans',
              fontSize: '22px',
              fontWeight: 500,
              color: '#E6007A',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            {sectionLabel}
          </span>
          <span
            style={{
              fontFamily: 'Space Grotesk',
              fontSize: '64px',
              fontWeight: 700,
              color: '#f5f5f5',
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              maxWidth: '900px',
            }}
          >
            {page.data.title}
          </span>
          {page.data.description && (
            <span
              style={{
                fontFamily: 'DM Sans',
                fontSize: '24px',
                fontWeight: 500,
                color: '#777',
                maxWidth: '800px',
              }}
            >
              {page.data.description}
            </span>
          )}
        </div>

        {/* Bottom: domain */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <span
            style={{
              fontFamily: 'DM Sans',
              fontSize: '20px',
              fontWeight: 500,
              color: '#555',
            }}
          >
            zigzag.js.org
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Space Grotesk',
          data: spaceGroteskBold,
          style: 'normal',
          weight: 700,
        },
        {
          name: 'DM Sans',
          data: dmSansMedium,
          style: 'normal',
          weight: 500,
        },
      ],
    },
  );
}

export async function generateStaticParams() {
  return source
    .getPages()
    .filter((page) => page.slugs.length > 0)
    .map((page) => ({
      slug: page.slugs,
    }));
}
