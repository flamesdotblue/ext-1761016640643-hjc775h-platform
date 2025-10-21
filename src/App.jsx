import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Chat from './components/Chat.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <section className="relative mx-auto w-full max-w-5xl px-4 pb-28 pt-10 sm:px-6 lg:px-8">
          <Chat />
        </section>
      </main>
      <Footer />
    </div>
  );
}
