import Head from 'next/head';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}>
      <Head><title>TruFi — Landing</title></Head>
      <div className="text-center">
        <h1 className="text-4xl font-bold">TruFi — Web3 Growth Engine</h1>
        <p className="mt-3 text-slate-300">This is the clean, deploy-ready build.</p>
      </div>
    </main>
  );
}
