import Head from 'next/head';

export default function Home() {
  // ---- Email CTA (edit these anytime) ----
  const email = 'trufiadmin@trufidao.com';
  const subject = encodeURIComponent('TruFi inquiry');
  const body = encodeURIComponent(
    `Hi TruFi Team,

My name:
Company:
What we need help with:

— sent from trufidao.com`
  );
  const mailtoHref = `mailto:${email}?subject=${subject}&body=${body}`;
  // ----------------------------------------

  // Logo & background tweaks
  const LOGO_HEIGHT = 128; // 2x the previous 64px
  const BACKGROUND = '#f5f6f8'; // light gray; keeps dark text readable

  return (
    <>
      <Head>
        <title>TruFi — Web3 Growth Engine</title>
        <meta name="description" content="We’re operational. Let’s talk." />
      </Head>

      <main
        style={{
          minHeight: '100vh',
          display: 'grid',
          placeItems: 'center',
          background: BACKGROUND,
          color: '#111',
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: 720, padding: 24 }}>
          {/* Logo (hides itself if the image isn’t present yet) */}
          <img
            src="/trufi-logo.png"
            alt="TruFi"
            style={{ height: LOGO_HEIGHT, margin: '0 auto 24px', objectFit: 'contain' }}
            onError={(e) => ((e.currentTarget).style.display = 'none')}
          />

          <h1 style={{ fontSize: 28, margin: '0 0 8px' }}>
            TruFi — Web3 Growth Engine
          </h1>
          <p style={{ fontSize: 16, opacity: 0.8, margin: '0 0 24px' }}>
            We’re operational. Let’s talk.
          </p>

          {/* CTA — opens email client */}
          <a
            href={mailtoHref}
            style={{
              display: 'inline-block',
              padding: '12px 20px',
              borderRadius: 8,
              background: '#111',
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            Work with us
          </a>
        </div>
      </main>
    </>
  );
}

