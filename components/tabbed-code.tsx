'use client';

import { useState } from 'react';

interface Tab {
  label: string;
  filename: string;
  code: string;
}

export function TabbedCode({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-[#0c0c0e]">
      <div className="flex items-center border-b border-white/[0.06]">
        <div className="flex gap-1.5 px-4 py-2.5">
          <div className="size-2.5 rounded-full bg-white/10" />
          <div className="size-2.5 rounded-full bg-white/10" />
          <div className="size-2.5 rounded-full bg-white/10" />
        </div>
        <div className="flex">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActive(i)}
              className={`relative px-4 py-2.5 font-mono text-xs transition-colors ${
                active === i
                  ? 'text-white/80'
                  : 'text-white/30 hover:text-white/50'
              }`}
            >
              {tab.label}
              {active === i && (
                <span className="absolute inset-x-0 bottom-0 h-px bg-[#E6007A]" />
              )}
            </button>
          ))}
        </div>
        <span className="ml-auto pr-4 font-mono text-xs text-white/20">
          {tabs[active].filename}
        </span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
        <code dangerouslySetInnerHTML={{ __html: tabs[active].code }} />
      </pre>
    </div>
  );
}
