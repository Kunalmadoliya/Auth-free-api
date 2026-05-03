import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

type User = {
  username?: string;
  email?: string;
  role?: string;
  _id?: string;
};

/**
 * TECHNICAL COMPONENT: CELL
 * The industrial container used across the entire application.
 */
const TechnicalCell = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`bg-[#0c0d0e] border border-white/5 relative overflow-hidden ${className}`}
  >
    <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
    <div className="relative z-10 p-8 md:p-10">{children}</div>
  </div>
);

export default function GetUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(
          "https://api.freeapi.app/api/v1/users/current-user",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          },
        );

        const data = await res.json();
        if (res.ok) {
          setUser(data?.data);
        } else {
          console.error("AUTH_FAILURE: Redirecting to access portal.");
          navigate("/login");
        }
      } catch (err) {
        console.error("SYSTEM_ERROR", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await fetch("https://api.freeapi.app/api/v1/users/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      localStorage.removeItem("accessToken");
      navigate("/login");
    } finally{
        console.log("done")
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0c0d0e] flex flex-col items-center justify-center font-mono">
        <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-500 animate-[loading_1.5s_infinite]" />
        </div>
        <p className="mt-4 text-[10px] text-zinc-500 tracking-[0.4em] uppercase animate-pulse">
          Syncing_System_Data
        </p>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-[#a1a1aa] font-mono selection:bg-blue-500 selection:text-white relative">
      {/* GLOBAL GRID BACKGROUND */}
      <div className="fixed inset-0 z-0 opacity-20 [background-image:radial-gradient(#444_1px,transparent_1.5px)] [background-size:32px_32px]" />

      <main className="relative z-10 pt-28 pb-20 px-6 max-w-5xl mx-auto">
        {/* DASHBOARD HEADER */}
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-[10px] text-blue-500 font-bold tracking-[0.3em] uppercase mb-4">
              <span className="w-4 h-[1px] bg-blue-500" /> Active_Session_Node
            </div>
            <h1 className="text-4xl font-bold text-white tracking-tighter">
              Operator: {user.username}
            </h1>
          </div>
          <button
            onClick={handleLogout}
            className="text-[9px] font-black uppercase tracking-[0.2em] px-4 py-2 border border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white transition-all"
          >
            Terminate_Session [ESC]
          </button>
        </header>

        {/* BENTO DASHBOARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-white/5 border border-white/5">
          {/* PROFILE METADATA */}
          <TechnicalCell className="md:col-span-8 border-r border-white/5">
            <div className="text-[10px] font-bold text-zinc-600 mb-10 tracking-[0.2em]">
              01 // IDENTITY_DATA
            </div>
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-[9px] uppercase text-zinc-600 mb-2 font-black">
                    Registered_Email
                  </p>
                  <p className="text-sm text-white font-medium border-b border-white/10 pb-2">
                    {user.email}
                  </p>
                </div>
                <div>
                  <p className="text-[9px] uppercase text-zinc-600 mb-2 font-black">
                    Assigned_Role
                  </p>
                  <p className="text-sm text-blue-400 font-medium border-b border-white/10 pb-2 italic">
                    {user.role || "ADMIN"}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[9px] uppercase text-zinc-600 mb-2 font-black">
                  Unique_System_Identifier
                </p>
                <p className="text-[11px] text-zinc-400 font-mono bg-white/[0.02] p-3 border border-white/5">
                  UID-{user._id?.toUpperCase() || "CORE-8291-AUTH"}
                </p>
              </div>
            </div>
          </TechnicalCell>

          {/* STATUS PANEL */}
          <TechnicalCell className="md:col-span-4 flex flex-col justify-between">
            <div className="text-[10px] font-bold text-zinc-600 mb-10 tracking-[0.2em]">
              02 // SYSTEM_STATUS
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-zinc-500">Connection</span>
                <span className="text-emerald-500 font-bold">ENCRYPTED</span>
              </div>
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-zinc-500">Node_Ping</span>
                <span className="text-white font-bold">24ms</span>
              </div>
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-zinc-500">Auth_Level</span>
                <span className="text-white font-bold">L3_RESTRICTED</span>
              </div>
            </div>
            <div className="mt-12 h-1 bg-white/5 overflow-hidden">
              <div className="w-2/3 h-full bg-blue-500" />
            </div>
          </TechnicalCell>

          {/* ACTIVITY PREVIEW (FOOTER ROW) */}
          <TechnicalCell className="md:col-span-12 border-t border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex gap-12">
                <div>
                  <p className="text-[8px] text-zinc-600 uppercase tracking-widest mb-1">
                    Session_Start
                  </p>
                  <p className="text-[10px] text-white">MAY_04_2026_00:02</p>
                </div>
                <div>
                  <p className="text-[8px] text-zinc-600 uppercase tracking-widest mb-1">
                    Module
                  </p>
                  <p className="text-[10px] text-white italic underline underline-offset-4 decoration-zinc-800">
                    AUTH_CORE_V2
                  </p>
                </div>
              </div>
              <div className="px-4 py-2 border border-dashed border-white/10 text-[9px] text-zinc-500 uppercase font-black">
                System Log: All authentication events recorded.
              </div>
            </div>
          </TechnicalCell>
        </div>

        {/* FOOTER NAV */}
        <footer className="mt-12 flex justify-between items-center px-2">
          <div className="text-[9px] font-bold text-zinc-700 tracking-[0.3em] uppercase">
            FreeAPI // Internal_Readout
          </div>
          <div className="flex gap-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[9px] text-zinc-500 font-black uppercase">
              Core_Secure
            </span>
          </div>
        </footer>
      </main>

      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(250%); }
        }
      `}</style>
    </div>
  );
}
