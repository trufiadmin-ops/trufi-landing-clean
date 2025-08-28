import Head from 'next/head';

export default function Home() {
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
          background: '#ffffff',
          color: '#111',
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: 720, padding: 24 }}>
          {/* Logo (hides itself if the image isn’t present yet) */}
          <img
            src="/trufi-logo.png"
            alt="TruFi"
            style={{ height: 64, margin: '0 auto 20px', objectFit: 'contain' }}
            onError={(e) => ((e.currentTarget).style.display = 'none')}
          />

          <h1 style={{ fontSize: 28, margin: '0 0 8px' }}>
            TruFi — Web3 Growth Engine
          </h1>
          <p style={{ fontSize: 16, opacity: 0.8, margin: '0 0 24px' }}>
            We’re operational. Let’s talk.
          </p>

          {/* Change this link to Calendly/Typeform later if you want */}
          <a
            href="mailto:hello@trufidao.com?subject=TruFi%20Inquiry"
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
