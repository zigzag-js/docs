import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const revalidate = false;

export async function GET() {
  const [spaceGroteskBold, dmSansMedium] = await Promise.all([
    readFile(join(process.cwd(), 'assets/fonts/SpaceGrotesk-Bold.ttf')),
    readFile(join(process.cwd(), 'assets/fonts/DMSans-Medium.ttf')),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px 72px',
          background: '#0c0c12',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '32px' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="26"
            viewBox="0 0 50 30"
            fill="#E6007A"
          >
            <path d="M31.085 19.326L24.615 15l-6.468 4.326L11.677 15 0 22.81 4.811 30l6.866-4.591 6.47 4.325 6.469-4.325 6.469 4.326 6.469-4.326L44.42 30l4.81-7.191L37.555 15zM11.677 10.409l6.47 4.326 6.469-4.326 6.469 4.326 6.469-4.326L44.42 15l4.81-7.191L37.555 0l-6.47 4.326L24.617 0l-6.47 4.326L11.678 0 0 7.81 4.811 15z" />
          </svg>
          <span
            style={{
              fontFamily: 'Space Grotesk',
              fontSize: '30px',
              fontWeight: 700,
              color: '#f5f5f5',
            }}
          >
            ZigZag
          </span>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              fontFamily: 'Space Grotesk',
              fontSize: '72px',
              fontWeight: 700,
              color: '#f5f5f5',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              textAlign: 'center',
            }}
          >
            Developer tools for
          </span>
          <span
            style={{
              fontFamily: 'Space Grotesk',
              fontSize: '72px',
              fontWeight: 700,
              color: '#E6007A',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              textAlign: 'center',
            }}
          >
            Polkadot
          </span>
        </div>

        <span
          style={{
            fontFamily: 'DM Sans',
            fontSize: '26px',
            fontWeight: 500,
            color: '#888',
            marginTop: '24px',
            textAlign: 'center',
          }}
        >
          Chain registry, wallet auth, React hooks — typed and ready to use.
        </span>

        {/* Domain bottom-right */}
        <span
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '60px',
            fontFamily: 'DM Sans',
            fontSize: '20px',
            fontWeight: 500,
            color: '#555',
          }}
        >
          zigzag.js.org
        </span>
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
