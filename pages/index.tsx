import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Head>
        <title>TruFi — Web3 Growth Engine</title>
        <meta
          name="description"
          content="TruFi helps Web3 teams grow with clarity, speed, and trust."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Social */}
        <meta property="og:title" content="TruFi — Web3 Growth Engine" />
        <meta
          property="og:description"
          content="TruFi is live. Let’s build together."
        />
        <meta property="og:image" content="/og.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TruFi — Web3 Growth Engine" />
        <meta
          name="twitter:description"
          content="TruFi is live. Let’s build together."
        />
        <meta name="twitter:image" content="/og.png" />
      </Head>

      {/* subtle gradient glow backdrop */}
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
          {/* Logo with neon ring */}
          <div className="inline-flex items-center justify-center rounded-full p-4 ring-2 ring-lime-400/70 shadow-[0_0_80px_rgba(57,255,20,0.25)]">
            {/* Put your logo at /public/trufi-logo.png */}
            <img
              src="/trufi-logo.png"
              alt="TruFi logo"
              className="w-40 md:w-56 drop-shadow-[0_0_28px_rgba(0,240,255,0.35)]"
            />
          </div>

          <h1 className="mt-8 text-4xl md:text-5xl font-semibold tracking-tight">
            TruFi — Web3 Growth Engine
          </h1>
          <p className="mt-3 text-base md:text-lg opacity-80">
            We’re live. If you’re building something ambitious, let’s talk.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            {/* Primary CTA — email compose. Swap the email or link to Calendly/Typeform if you prefer */}
            <a
              href="mailto:hello@trufi.xyz?subject=TruFi%20—%20Let%27s%20talk&body=Hi%20TruFi%20team%2C%0A%0AWe%27re%20interested%20in%20working%20with%20you.%20Here%27s%20a%20quick%20overview%20of%20our%20project%3A%0A"
              className="rounded-full bg-lime-400 text-black font-semibold px-6 py-3 shadow hover:scale-105 transition"
            >
              Get in touch
            </a>

            {/* Optional secondary: swap href with your deck / one-pager / Calendly */}
            <a
              href="#"
              className="rounded-full border border-white/30 px-6 py-3 hover:border-white/60 transition"
            >
              Learn more
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
