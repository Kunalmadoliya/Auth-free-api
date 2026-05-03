import {motion} from "framer-motion";

/**
 * CUSTOM TECHNICAL ICONS
 * Precision-engineered SVGs with 1px stroke for a technical look.
 */
const TechIcons = {
  Github: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
  Command: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
    </svg>
  ),
  Activity: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  Brackets: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
};

const Home = () => {
  const container = {
    show: {transition: {staggerChildren: 0.05}},
  };

  const item = {
    hidden: {opacity: 0, y: 10},
    show: {opacity: 1, y: 0},
  };

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-[#a1a1aa] font-mono selection:bg-[#3b82f6] selection:text-white">
      {/* THE DOTTED GRID BACKGROUND */}
      <div className="fixed inset-0 z-0 opacity-20 [background-image:radial-gradient(#444_1px,transparent_1.5px)] [background-size:32px_32px]" />

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0c0d0e]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4 text-white">
            <div className="w-6 h-6 border border-white/20 flex items-center justify-center text-[10px]">
              AUTH
            </div>
            <span className="text-xs font-bold tracking-widest uppercase">
              FreeAPI // System
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              className="hover:text-white transition-colors"
            >
              <TechIcons.Github />
            </a>
            <a
              href="/login"
              className="text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors"
            >
              Login
            </a>
            <a
              href="/register"
              className="bg-white text-black px-4 py-1.5 text-[10px] font-black uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all"
            >
              Create Account
            </a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-28 pb-20 px-6 max-w-7xl mx-auto">
        {/* HEADER SECTION */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-[10px] text-blue-500 mb-4 font-bold tracking-[0.3em] uppercase">
            <span className="w-2 h-[1px] bg-blue-500" /> Web Dev Cohort 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">
            Module_04: Authentication_Engine
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-500">
            Implementation of a production-ready authentication flow. Utilize
            the FreeAPI module to manage users, sessions, and state persistence.
          </p>
        </header>

        {/* BENTO GRID SYSTEM */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-12 gap-px bg-white/5 border border-white/5"
        >
          {/* 01: Project Timeline (Span 4) */}
          <motion.div
            variants={item}
            className="md:col-span-4 bg-[#0c0d0e] p-8 border-r border-b border-white/5 group"
          >
            <div className="text-[10px] font-bold text-zinc-600 mb-10 tracking-[0.2em]">
              01 // SCHEDULE
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-[9px] uppercase text-zinc-600 mb-1">
                  Start Phase
                </p>
                <p className="text-sm text-white font-bold">
                  May 02, 2026 — 20:00
                </p>
              </div>
              <div className="p-4 border border-dashed border-blue-500/30 bg-blue-500/5">
                <p className="text-[9px] uppercase text-blue-500 mb-1">
                  Deadline
                </p>
                <p className="text-sm text-white font-bold">
                  May 03, 2026 — 23:59
                </p>
              </div>
            </div>
          </motion.div>

          {/* 02: API Endpoints (Span 8) */}
          <motion.div
            variants={item}
            className="md:col-span-8 bg-[#0c0d0e] p-8 border-b border-white/5 overflow-hidden"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="text-[10px] font-bold text-zinc-600 tracking-[0.2em]">
                02 // API_ENDPOINTS
              </div>
              <TechIcons.Command />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-[11px] font-mono leading-tight space-y-4">
                <div className="p-3 bg-white/[0.02] border border-white/5">
                  <p className="text-blue-400 mb-1">POST /register</p>
                  <p className="text-zinc-600">Register a new system user.</p>
                </div>
                <div className="p-3 bg-white/[0.02] border border-white/5">
                  <p className="text-blue-400 mb-1">POST /login</p>
                  <p className="text-zinc-600">
                    Initialize authenticated session.
                  </p>
                </div>
              </div>
              <div className="text-[11px] font-mono leading-tight space-y-4">
                <div className="p-3 bg-white/[0.02] border border-white/5">
                  <p className="text-emerald-400 mb-1">GET /current-user</p>
                  <p className="text-zinc-600">
                    Fetch active session metadata.
                  </p>
                </div>
                <div className="p-3 bg-white/[0.02] border border-white/5">
                  <p className="text-red-400 mb-1">POST /logout</p>
                  <p className="text-zinc-600">Terminate active session.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 03: What To Build (Span 7) */}
          <motion.div
            variants={item}
            className="md:col-span-7 bg-[#0c0d0e] p-8 border-r border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
              <TechIcons.Brackets />
            </div>
            <div className="text-[10px] font-bold text-zinc-600 mb-8 tracking-[0.2em]">
              03 // SYSTEM_REQUIREMENTS
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
              {[
                "User Registration UI",
                "Secure Login Portal",
                "Session Logout Engine",
                "User Profile Dashboard",
                "Dynamic Loading States",
                "Error Handling Matrix",
              ].map((req, i) => (
                <li
                  key={i}
                  className="text-[11px] flex items-center gap-3 text-zinc-400"
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full" /> {req}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 04: Submission (Span 5) */}
          <motion.div
            variants={item}
            className="md:col-span-5 bg-[#0c0d0e] p-8 flex flex-col justify-between"
          >
            <div>
              <div className="text-[10px] font-bold text-zinc-600 mb-6 tracking-[0.2em]">
                04 // SUBMIT
              </div>
              <p className="text-[11px] text-zinc-500 leading-relaxed mb-6">
                Ensure both the Live Link and GitHub Repository are public for
                evaluation.
              </p>
            </div>
            <div className="space-y-2">
              <button className="w-full py-3 border border-dashed border-white/10 hover:border-white/40 hover:bg-white hover:text-black transition-all text-[10px] font-bold uppercase tracking-widest">
                Deploy Project
              </button>
              <button className="w-full py-3 bg-blue-600 text-white hover:bg-blue-500 transition-all text-[10px] font-bold uppercase tracking-widest">
                Submit Links
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* STATUS FOOTER */}
        <footer className="mt-12 flex flex-col md:flex-row justify-between items-center text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-600">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> API:
              ONLINE
            </span>
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> COHORT:
              ACTIVE
            </span>
          </div>
          <div className="mt-4 md:mt-0">DESIGNED_BY // KUNAL_MADOLIYA_2026</div>
        </footer>
      </main>
    </div>
  );
};

export default Home;
