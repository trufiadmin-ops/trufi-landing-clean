import Head from "next/head";
import { useEffect, useMemo, useState } from "react";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Home() {
  // Target = next 11:00 AM local time (adjust in the code if you want ET explicitly)
  const target = useMemo(() => {
    const d = new Date();
    d.setHours(11, 0, 0, 0);
    if (Date.now() > d.getTime()) d.setDate(d.getDate() + 1); // if past 11:00 today, use tomorrow
    return d;
  }, []);

  const [remainingMs, setRemainingMs] = useState(0);

  useEffect(() => {
    const update = () => setRemainingMs(Math.max(target.getTime() - Date.now(), 0));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [target]);

  const totalSeconds = Math.floor(remainingMs / 1000);
  const secs = totalSeconds % 60;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600);

  return (
    <>
      <Head>
        <title>Victus Global — Live at 11:00</title>
        <meta
          name="description"
          content="Join the Victus Global session — streaming live at 11:00. Powered by TruFi."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content="Victus Global — Live at 11:00" />
        <meta
          property="og:description"
          content="Countdown is on. See you at 11:00."
        />
        <meta property="og:image" content="/og.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Victus Global — Live at 11:00" />
        <meta
          name="twitter:description"
          content="Countdown is on. See you at 11:00."
        />
        <meta name="twitter:image" content="/og.png" />
      </Head>

      <main className="min-h-screen grid place-items-center bg-black text-white">
        <div className="text-center px-6">
          <h1 className="text-3xl md:text-5xl font-bold">
            Victus Global — Live at 11:00
          </h1>
          <p className="mt-3 opacity-80">
            This is the clean, deploy-ready build — powered by TruFi.
          </p>

          <div className="mt-8 font-mono text-4xl md:text-6xl tracking-widest">
            {pad(hours)}:{pad(mins)}:{pad(secs)}
          </div>

          <p className="mt-4 text-sm opacity-70">
            Starts at 11:00 (your local time). Want ET instead? I can switch it.
          </p>

          <a
            href="#"
            className="mt-8 inline-block rounded-full bg-lime-400 text-black font-semibold px-6 py-3 shadow hover:scale-105 transition"
          >
            Get a reminder
          </a>
        </div>
      </main>
    </>
  );
}
