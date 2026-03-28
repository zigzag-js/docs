import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { TabbedCode } from '@/components/tabbed-code';

function CodeBlock({
  code,
  filename,
}: {
  code: string;
  filename: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-[#0c0c0e]">
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-2.5">
        <div className="flex gap-1.5">
          <div className="size-2.5 rounded-full bg-white/10" />
          <div className="size-2.5 rounded-full bg-white/10" />
          <div className="size-2.5 rounded-full bg-white/10" />
        </div>
        <span className="ml-2 font-mono text-xs text-white/30">{filename}</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
        <code dangerouslySetInnerHTML={{ __html: code }} />
      </pre>
    </div>
  );
}

const serverCode = `<span class="text-[#E6007A]">import</span> <span class="text-white/90">{ betterAuth }</span> <span class="text-[#E6007A]">from</span> <span class="text-[#a8e6a1]">'better-auth'</span>;
<span class="text-[#E6007A]">import</span> <span class="text-white/90">{ siwp }</span> <span class="text-[#E6007A]">from</span> <span class="text-[#a8e6a1]">'@zig-zag/better-siwp'</span>;

<span class="text-[#E6007A]">export const</span> <span class="text-white/90">auth</span> = <span class="text-[#dda0f7]">betterAuth</span>({
  <span class="text-white/60">plugins:</span> [<span class="text-[#dda0f7]">siwp</span>()],
});`;

const clientCode = `<span class="text-[#E6007A]">import</span> <span class="text-white/90">{ createAuthClient }</span> <span class="text-[#E6007A]">from</span> <span class="text-[#a8e6a1]">'better-auth/client'</span>;
<span class="text-[#E6007A]">import</span> <span class="text-white/90">{ siwpClient }</span> <span class="text-[#E6007A]">from</span> <span class="text-[#a8e6a1]">'@zig-zag/better-siwp/client'</span>;

<span class="text-[#E6007A]">export const</span> <span class="text-white/90">authClient</span> = <span class="text-[#dda0f7]">createAuthClient</span>({
  <span class="text-white/60">plugins:</span> [<span class="text-[#dda0f7]">siwpClient</span>()],
});`;

const chainsCode = `<span class="text-[#E6007A]">import</span> <span class="text-white/90">{ polkadot, moonbeam }</span> <span class="text-[#E6007A]">from</span> <span class="text-[#a8e6a1]">'@zig-zag/chains'</span>;

<span class="text-white/60">polkadot</span>.<span class="text-white/90">name</span>          <span class="text-white/30">// "Polkadot"</span>
<span class="text-white/60">polkadot</span>.<span class="text-white/90">rpcs.Dwellir</span>  <span class="text-white/30">// "wss://polkadot-rpc.dwellir.com"</span>
<span class="text-white/60">polkadot</span>.<span class="text-white/90">chainIconUrl</span>  <span class="text-white/30">// base64 SVG data URI</span>
<span class="text-white/60">polkadot</span>.<span class="text-white/90">genesisHash</span>   <span class="text-white/30">// "0x91b171bb..."</span>
<span class="text-white/60">moonbeam</span>.<span class="text-white/90">decimals</span>      <span class="text-white/30">// 18</span>`;

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#09090b] text-white selection:bg-[#E6007A]/30">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-[40%] left-1/2 h-[800px] w-[1200px] -translate-x-1/2 rounded-full bg-[#E6007A]/[0.03] blur-[150px]" />
        <div className="absolute -bottom-[20%] right-0 h-[600px] w-[800px] rounded-full bg-[#552BBF]/[0.04] blur-[150px]" />
      </div>

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-6 pb-32 pt-28 md:pt-36">
        <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold leading-[1.08] tracking-tight md:text-7xl lg:text-8xl">
          Build on Polkadot
          <br />
          <span className="text-white/40">without the friction</span>
        </h1>

        <div className="mt-10 grid gap-16 md:grid-cols-2 md:items-start">
          <div>
            <p className="max-w-md text-lg leading-relaxed text-white/50">
              Typed chain data, wallet auth, React hooks — the developer
              experience Polkadot has been missing. Install and ship.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/docs"
                className="group inline-flex items-center gap-2 rounded-lg bg-[#E6007A] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#CC006C] hover:shadow-[0_0_30px_-5px_#E6007A80]"
              >
                Get started
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="https://github.com/zigzag-js"
                className="inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white/70"
              >
                View on GitHub
                <ChevronRight className="size-3.5" />
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-6 text-sm text-white/30">
              <div className="flex items-center gap-2">
                <div className="size-1.5 rounded-full bg-emerald-500/80" />
                <span>TypeScript-first</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-1.5 rounded-full bg-[#E6007A]/80" />
                <span>20+ chains supported</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-1.5 rounded-full bg-[#552BBF]/80" />
                <span>Works with any wallet</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-b from-[#E6007A]/[0.06] to-transparent blur-xl" />
            <TabbedCode
              tabs={[
                { label: 'Server', filename: 'lib/auth.ts', code: serverCode },
                { label: 'Client', filename: 'lib/auth-client.ts', code: clientCode },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      {/* The problem */}
      <section className="relative mx-auto max-w-6xl px-6 py-32">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-sm font-medium uppercase tracking-[0.15em] text-white/30">
              The Problem
            </h2>
            <p className="mt-6 text-[22px] leading-relaxed text-white/70">
              Ethereum has wagmi, viem, and RainbowKit. Solana has
              wallet-adapter and Anchor. Polkadot developers have been
              left to piece together their own tooling from scattered,
              untyped libraries.
            </p>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-sm font-medium uppercase tracking-[0.15em] text-white/30">
              ZigZag
            </h2>
            <p className="mt-6 text-[22px] leading-relaxed text-white/70">
              A growing ecosystem of typed, tested, ready-to-use packages
              that make Polkadot development feel as smooth as any other
              chain. Install a package, read the types, build your app.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      {/* Packages */}
      <section className="relative mx-auto max-w-6xl px-6 py-32">
        <h2 className="font-[family-name:var(--font-display)] text-sm font-medium uppercase tracking-[0.15em] text-white/30">
          Packages
        </h2>

        {/* chains */}
        <div className="mt-16 grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <div className="flex items-baseline gap-3">
              <h3 className="font-[family-name:var(--font-display)] text-3xl font-bold">
                @zig-zag/chains
              </h3>
              <span className="rounded-full border border-white/10 px-2.5 py-0.5 font-mono text-xs text-white/30">
                v1.1.0
              </span>
            </div>
            <p className="mt-4 max-w-md leading-relaxed text-white/50">
              Typed chain registry for the Polkadot ecosystem. 20+ chains with
              logos, named RPC providers, genesis hashes, Subscan URLs, light
              client specs, and network topology. Tree-shakeable.
            </p>
            <Link
              href="/docs/chains"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#E6007A] transition-colors hover:text-[#ff1a8c]"
            >
              Read docs <ArrowRight className="size-3.5" />
            </Link>
          </div>
          <CodeBlock filename="app.ts" code={chainsCode} />
        </div>

        {/* better-siwp */}
        <div className="mt-24 grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <div className="flex items-baseline gap-3">
              <h3 className="font-[family-name:var(--font-display)] text-3xl font-bold">
                @zig-zag/better-siwp
              </h3>
              <span className="rounded-full border border-white/10 px-2.5 py-0.5 font-mono text-xs text-white/30">
                v0.1.2
              </span>
            </div>
            <p className="mt-4 max-w-md leading-relaxed text-white/50">
              Sign In With Polkadot for{' '}
              <a
                href="https://better-auth.com"
                className="text-white/70 underline decoration-white/20 underline-offset-2 transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Better Auth
              </a>
              . Nonce generation, signature verification, session management,
              cookie-based auth — all handled. Works with Talisman, SubWallet,
              Polkadot.js, or any compatible extension.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Link
                href="/docs/better-siwp"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#E6007A] transition-colors hover:text-[#ff1a8c]"
              >
                Read docs <ArrowRight className="size-3.5" />
              </Link>
              <a
                href="https://better-siwp.vercel.app"
                className="text-sm text-white/30 transition-colors hover:text-white/50"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live demo
              </a>
            </div>
          </div>
          <TabbedCode
            tabs={[
              { label: 'Server', filename: 'lib/auth.ts', code: serverCode },
              { label: 'Client', filename: 'lib/auth-client.ts', code: clientCode },
            ]}
          />
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      {/* Coming next */}
      <section className="relative mx-auto max-w-6xl px-6 py-32">
        <h2 className="font-[family-name:var(--font-display)] text-sm font-medium uppercase tracking-[0.15em] text-white/30">
          Coming next
        </h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.03] md:grid-cols-2">
          <div className="border-b border-white/[0.06] p-8 md:border-b-0 md:border-r">
            <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold">
              @zig-zag/core
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/40">
              Framework-agnostic utilities extracted from production apps.
              SS58 address formatting, denomination conversions (toPlanck/fromPlanck),
              address display helpers. Zero framework dependencies.
            </p>
          </div>
          <div className="p-8">
            <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold">
              @zig-zag/react
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/40">
              React hooks and providers for Dedot and LunoKit. Headless
              connect button, chain selector, wallet selector. Create your
              config, wrap your app, use the hooks.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      {/* Install CTA */}
      <section className="relative mx-auto max-w-6xl px-6 py-32 text-center">
        <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold md:text-5xl">
          Start building
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-white/40">
          Two packages, zero config, full TypeScript. Polkadot development
          that just works.
        </p>
        <div className="mx-auto mt-10 max-w-lg">
          <div className="rounded-xl border border-white/[0.06] bg-[#0c0c0e] px-6 py-4 font-mono text-sm">
            <span className="text-white/30">$</span>{' '}
            <span className="text-white/60">npm i</span>{' '}
            <span className="text-white/90">@zig-zag/chains @zig-zag/better-siwp</span>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/docs"
            className="group inline-flex items-center gap-2 rounded-lg bg-[#E6007A] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#CC006C] hover:shadow-[0_0_30px_-5px_#E6007A80]"
          >
            Read the docs
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="https://github.com/zigzag-js"
            className="inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white/70"
          >
            GitHub
            <ChevronRight className="size-3.5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.04] py-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-white/50">
            ZigZag
          </span>
          <div className="flex items-center gap-6 text-sm text-white/25">
            <a
              href="https://github.com/zigzag-js"
              className="transition-colors hover:text-white/50"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.npmjs.com/org/zig-zag"
              className="transition-colors hover:text-white/50"
              target="_blank"
              rel="noopener noreferrer"
            >
              npm
            </a>
            <a
              href="https://x.com/itsyogesh18"
              className="transition-colors hover:text-white/50"
              target="_blank"
              rel="noopener noreferrer"
            >
              @itsyogesh18
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
