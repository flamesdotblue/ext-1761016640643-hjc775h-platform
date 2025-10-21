import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative isolate">
      <div className="relative h-[70vh] w-full overflow-hidden">
        <Spline
          scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-white/30 to-white dark:from-slate-950/40 dark:via-slate-950/30 dark:to-slate-950" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 drop-shadow-sm sm:text-6xl dark:text-white">
              Animated Deluxe Chat
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-balance text-base text-slate-600 sm:text-lg dark:text-slate-300">
              A modern, glassy chat experience with rich animations, light and dark themes, and a futuristic aesthetic.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a
                href="#chat"
                className="rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:shadow-xl dark:bg-white dark:text-slate-900"
              >
                Start chatting
              </a>
              <a
                href="#features"
                className="rounded-full border border-slate-300/70 bg-white/70 px-5 py-3 text-sm font-medium text-slate-700 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
