import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      {...baseOptions()}
      tree={source.getPageTree()}
      sidebar={{
        tabs: {
          transform(option, node) {
            const meta: Record<string, string> = {
              chains: '@zig-zag/chains',
              'better-siwp': '@zig-zag/better-siwp',
            };
            const id = String(node.name ?? '').toLowerCase();
            if (meta[id]) {
              option.title = meta[id];
            }
            return option;
          },
        },
      }}
    >
      {children}
    </DocsLayout>
  );
}
