import { useEffect, useRef, useState } from 'react';
import { Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function MessageBubble({ role, content, index }) {
  const isUser = role === 'user';
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30, delay: Math.min(index * 0.02, 0.2) }}
      className={`group relative max-w-[82%] rounded-2xl px-4 py-3 shadow-sm ${
        isUser
          ? 'ml-auto bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white'
          : 'mr-auto bg-white/70 ring-1 ring-slate-200/70 backdrop-blur dark:bg-slate-900/60 dark:ring-slate-800/60'
      }`}
    >
      <p className={`whitespace-pre-wrap text-[15px] leading-relaxed ${isUser ? '' : 'text-slate-800 dark:text-slate-100'}`}>{content}</p>
    </motion.div>
  );
}

function TypingBubble() {
  return (
    <div className="mr-auto flex items-center gap-2 rounded-2xl bg-white/70 px-4 py-3 ring-1 ring-slate-200/70 backdrop-blur dark:bg-slate-900/60 dark:ring-slate-800/60">
      <div className="flex items-center gap-1">
        <span className="h-2 w-2 animate-bounce rounded-full bg-slate-500 [animation-delay:-0.2s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-slate-500 [animation-delay:-0.1s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-slate-500" />
      </div>
      <span className="text-xs text-slate-500">AI is typing…</span>
    </div>
  );
}

export default function Chat() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Welcome to Deluxe Chat. Ask me anything or say hi!' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    setMessages((m) => [...m, { role: 'user', content: text }]);
    setInput('');
    setLoading(true);

    // Simulate AI response
    const reply = await mockResponse(text);
    setMessages((m) => [...m, { role: 'assistant', content: reply }]);
    setLoading(false);
  };

  return (
    <div id="chat" className="relative">
      <div className="absolute inset-0 -z-0 rounded-3xl bg-gradient-to-b from-transparent via-fuchsia-500/5 to-indigo-500/5 blur-2xl" />
      <div className="relative z-10 overflow-hidden rounded-3xl border border-slate-200/70 bg-white/60 shadow-lg backdrop-blur-xl transition-colors dark:border-slate-800/60 dark:bg-slate-900/50">
        <div className="border-b border-slate-200/70 p-4 dark:border-slate-800/60">
          <h2 className="text-lg font-semibold tracking-tight">Your AI Assistant</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Chat in real-time with a sleek, animated interface.</p>
        </div>

        <div ref={listRef} className="h-[460px] space-y-3 overflow-y-auto px-4 py-4 sm:px-6">
          <AnimatePresence initial={false}>
            {messages.map((m, i) => (
              <MessageBubble key={i + m.content.slice(0, 6)} index={i} role={m.role} content={m.content} />
            ))}
          </AnimatePresence>
          {loading && <TypingBubble />}
        </div>

        <div className="border-t border-slate-200/70 p-3 sm:p-4 dark:border-slate-800/60">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
            className="flex items-end gap-2"
          >
            <div className="relative w-full">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
                rows={1}
                placeholder="Send a message…"
                className="max-h-40 w-full resize-none rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 text-[15px] shadow-inner outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200/60 dark:border-slate-800/60 dark:bg-slate-900/70 dark:placeholder:text-slate-500 dark:focus:border-fuchsia-400 dark:focus:ring-fuchsia-300/20"
              />
            </div>
            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 text-sm font-medium text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-slate-900"
              disabled={loading}
              aria-label="Send"
            >
              <Send size={18} />
              <span className="hidden sm:inline">Send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

async function mockResponse(input) {
  // Simple, friendly mock behavior
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  await delay(700);
  const starters = [
    "That's fascinating!",
    'Great question!',
    'Absolutely.',
    'Here\'s a quick thought:',
  ];
  const bodies = [
    'This deluxe chat supports light and dark themes, animated messages, and a glassmorphic design for a modern feel.',
    'You can press Shift+Enter for a new line, and Enter to send your message.',
    'The hero features a 3D Spline scene with a futuristic vibe.',
    'Everything is built with React, Tailwind, and Framer Motion for smooth interactions.',
  ];
  const starter = starters[Math.floor(Math.random() * starters.length)];
  const body = bodies[Math.floor(Math.random() * bodies.length)];
  return `${starter} ${body}`;
}
