import { Sun, Moon, MessageCircle } from 'lucide-react';

export default function Header({ theme, setTheme }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/50 bg-white/70 backdrop-blur-md transition-colors dark:border-slate-800/60 dark:bg-slate-950/60">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-white shadow-md shadow-fuchsia-500/20">
            <MessageCircle size={18} />
          </div>
          <span className="font-semibold tracking-tight">Deluxe Chat</span>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </header>
  );
}

function ThemeToggle({ theme, setTheme }) {
  const isDark = theme === 'dark';
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="group relative inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white px-3 py-2 text-sm transition hover:shadow-sm dark:border-slate-800/70 dark:bg-slate-900"
    >
      <div className="relative h-5 w-10 rounded-full bg-slate-200 transition-colors dark:bg-slate-800">
        <div
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all dark:bg-slate-700 ${
            isDark ? 'right-0.5' : 'left-0.5'
          }`}
        />
      </div>
      <span className="hidden sm:block text-slate-600 dark:text-slate-300">
        {isDark ? 'Dark' : 'Light'}
      </span>
      {isDark ? (
        <Moon size={16} className="text-slate-300" />
      ) : (
        <Sun size={16} className="text-amber-500" />
      )}
    </button>
  );
}
