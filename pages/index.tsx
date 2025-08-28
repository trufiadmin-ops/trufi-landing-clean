import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Head>
        <title>TruFi — Web3 Growth Engine</title>
        <meta name="description" content="TruFi is operational. Let’s build together." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="TruFi — Web3 Growth Engine" />
        <meta property="og:description" content="TruFi is operational. Let’s build together." />
        <meta property="og:image" content="/og.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TruFi — Web3 Growth Engine" />
        <meta name="twitter:description" content="TruFi is operational. Let’s build together." />
        <meta name="twitter:image" content="/og.png" />
      </Head>

      {/* soft glow backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60rem 60rem at 50% -10%, rgba(57,255,20,.12), transparent 40%), radial-gradient(40rem 40rem at 90% 120%, rgba(0,240,255,.10), transparent 40%)",
        }}
      />

      <main className="relative z-10 min-h-screen grid place-items-center px-6">
        <div className="text-center max-w-2xl mx-auto">
          {/* Logo — put your file in /public and match the name below */}
          <img
            src="/trufi-logo.png"
            alt="TruFi logo"
            className="w-40 md:w-56 mx-auto drop-shadow-[0_0_28px_rgba(0,240,255,0.35)]"
          />

          <h1 className="mt-8 text-4xl md:text-5xl font-semibold tracking-tight">
            TruFi — Web3 Growth Engine
          </h1>
          <p className="mt-3 text-base md:text-lg opacity-80">
            We’re operational. If you’re building something ambitious, let’s talk.
          </p>

          <div className="mt-8 flex items-center justify-center">
            <a
              href="mailto:team@trufidao.com?subject=TruFi%20Inquiry"
              className="rounded-full bg-lime-400 text-black font-semibold px-6 py-3 shadow hover:scale-105 transition"
            >
              Work with us
            </a>
          </div>

          <p className="mt-6 text-xs opacity-50">
            © {new Date().getFullYear()} TruFi. All rights reserved.
          </p>
        </div>
      </main>
    </div>
  );
}

