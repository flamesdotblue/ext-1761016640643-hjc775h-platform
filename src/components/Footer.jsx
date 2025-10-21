import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/70 py-10 text-sm text-slate-600 backdrop-blur-md dark:border-slate-800/60 dark:bg-slate-950/50 dark:text-slate-400">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Deluxe Chat. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white px-3 py-2 text-slate-700 transition hover:-translate-y-0.5 hover:shadow-sm dark:border-slate-800/60 dark:bg-slate-900 dark:text-slate-200"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
