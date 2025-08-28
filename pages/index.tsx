import Head from 'next/head';
import { useEffect, useMemo, useState } from 'react';

/** ────────── QUICK SETTINGS ──────────
 * LIVE_URL: where the “Join Live” button should go (Zoom/YouTube/etc)
 * USE_FIXED_DATE: set to true and fill FIXED_DATE for a single event time
 * Otherwise it counts down to the next 11:00 AM in the visitor’s local time.
 */
const LIVE_URL = 'https://victus.global/live'; // <-- change this if you have the real link
const USE_FIXED_DATE = false;
// Example: new Date('2025-08-28T11:00:00-04:00')  // (YYYY-MM-DDTHH:mm:ss±TZ)
const FIXED_DATE = new Date('2025-08-28T11:00:00');

function computeEventDate() {
  if (USE_FIXED_DATE) return FIXED_DATE;
  const now = new Date();
  const event = new Date(now);
  event.setHours(11, 0, 0, 0); // 11:00 local time
  if (event <= now) event.setDate(event.getDate() + 1);
  return event;
}

function toGoogleCalLink(start: Date, mins = 60) {
  const end = new Date(start.getTime() + mins * 60000);
  const pad = (n: number) => String(n).padStart(2, '0');
  const fmt = (d: Date) =>
    `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(
      d.getUTCHours()
    )}${pad(d.getUTCMinutes())}00Z`;
  const title = encodeURIComponent('Victus Global — Live Session');
  const details = encodeURIComponent('Join the Victus Global event.');
  const location = encodeURIComponent(LIVE_URL);
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${fmt(
    start
  )}/${fmt(end)}&details=${details}&location=${location}`;
}

export default function Home() {
  const eventDate = useMemo(() => computeEventDate(), []);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const diff = Math.max(0, eventDate.getTime() - now.getTime());
  const isLive = diff === 0 || now >= eventDate;
  const total = Math.floor(diff / 1000);
  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const mins = Math.floor((total % 3600) / 60);
  const secs = total % 60;

  return (
    <>
      <Head>
        <title>Victus Global — Live at 11:00</title>
        <meta name="description" content="Victus Global — live session at 11:00. Join us!" />
        <meta property="og:title" content="Victus Global — Live at 11:00" />
        <meta property="og:description" content="Victus Global — live session at 11:00. Join us!" />
        <meta property="og:image" content="/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="min-h-screen bg-black text-white grid place-items-center px-6">
        <div className="max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/80">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Victus Global
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight">
            {isLive ? (
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                We’re Live — Join Now
              </span>
            ) : (
              <>
                Live at <span className="text-emerald-400">11:00</span>
              </>
            )}
          </h1>

          {!isLive && (
            <>
              <p className="mt-3 text-white/70">
                Counting down to{' '}
                <span className="font-semibold">
                  {eventDate.toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' })}
                </span>
              </p>

              <div className="mt-6 flex justify-center gap-3 text-2xl font-mono">
