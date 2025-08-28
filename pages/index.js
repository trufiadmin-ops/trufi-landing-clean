import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>TruFi — Web3 Growth Engine</title>
        <meta name="description" content="This is the clean, deploy-ready build." />

        {/* Open Graph */}
        <meta property="og:title" content="TruFi — Web3 Growth Engine" />
        <meta property="og:description" content="This is the clean, deploy-ready build." />
        <meta property="og:image" content="/og.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />

        {/* Twitter/X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TruFi — Web3 Growth Engine" />
        <meta name="twitter:description" content="This is the clean, deploy-ready build." />
        <meta name="twitter:image" content="/og.png" />
      </Head>
      {/* …rest of the page… */}
    </>
  );
}
