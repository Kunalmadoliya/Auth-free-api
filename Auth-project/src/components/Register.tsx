import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type Inputs = {
  email: string;
  password: string;
  role?: string;
  username: string;
};

/**
 * TECHNICAL COMPONENT: CELL
 * Replaces the soft BentoBox with a sharp, industrial container.
 */
const TechnicalCell = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-[#0c0d0e] border border-white/5 relative overflow-hidden ${className}`}>
    {/* Inner Dotted Overlay for the cell */}
    <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
    <div className="relative z-10 p-8 md:p-10">
      {children}
    </div>
  </div>
);

const FormInput = ({ label, id, error, children }: { label: string; id: string; error?: string; children: React.ReactNode }) => (
  <div className="w-full">
    <div className="flex justify-between items-end mb-2">
      <label htmlFor={id} className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">
        {label}
      </label>
      {error && <span className="text-[9px] font-mono text-red-500 uppercase tracking-tighter">{error}</span>}
    </div>
    <div className="relative group">
      {children}
      <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-blue-500 transition-all duration-300 group-focus-within:w-full" />
    </div>
  </div>
);

export default function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    try {
      const res = await fetch("https://api.freeapi.app/api/v1/users/register", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      });

      const response = await res.json();

      if (res.ok) {
        navigate("/login");
      } else {
        window.alert(response.message || "Access Denied: Registration Failed");
      }
    } catch (error) {
      window.alert("System Error: Connectivity Lost");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = 
    "w-full px-0 py-3 bg-transparent border-b border-white/10 outline-none transition-all text-sm text-white placeholder:text-zinc-700 font-mono";

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-[#a1a1aa] font-mono selection:bg-blue-500 selection:text-white flex flex-col lg:flex-row relative">
      
      {/* GLOBAL GRID BACKGROUND */}
      <div className="fixed inset-0 z-0 opacity-20 [background-image:radial-gradient(#444_1px,transparent_1.5px)] [background-size:32px_32px]" />

      {/* LEFT: VISUAL/NARRATIVE SIDE */}
      <div className="hidden lg:flex flex-1 relative flex-col justify-between p-16 border-r border-white/5 z-10">
        <div>
          <div className="flex items-center gap-2 text-[10px] text-blue-500 font-bold tracking-[0.3em] uppercase mb-12">
            <span className="w-4 h-[1px] bg-blue-500" /> System_Access_Point
          </div>
          <h2 className="text-5xl font-bold text-white tracking-tighter leading-[0.9] max-w-sm">
            Initialize <br /> 
            <span className="text-zinc-700 italic underline underline-offset-8 decoration-zinc-800">New_Profile</span>
          </h2>
        </div>

        <div className="space-y-4">
          <div className="p-4 border border-dashed border-white/5 bg-white/[0.01] max-w-xs">
            <p className="text-[10px] leading-relaxed">
              Standard encryption protocols active. All sessions are monitored for security compliance.
            </p>
          </div>
          <p className="text-[9px] uppercase tracking-widest font-black text-zinc-600">
            © 2026 FreeAPI Core Systems
          </p>
        </div>
      </div>

      {/* RIGHT: FORM SIDE */}
      <div className="w-full lg:w-[55%] flex flex-col justify-center items-center z-10 p-6 md:p-12 lg:p-24 bg-[#0c0d0e]/50 backdrop-blur-sm">
        <div className="w-full max-w-lg">
          
          <TechnicalCell>
            <div className="mb-12">
              <div className="text-[10px] font-mono text-zinc-600 mb-2">AUTH_GATE // CREATE_ACCOUNT</div>
              <h1 className="text-2xl font-bold text-white tracking-tight">System Registration</h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                <FormInput label="Username" id="username" error={errors.username?.message}>
                  <input
                    {...register("username", { required: "Required" })}
                    placeholder="user_v1"
                    className={inputStyle}
                  />
                </FormInput>

                <FormInput label="Role_Identity" id="role">
                  <input
                    defaultValue="ADMIN"
                    {...register("role")}
                    className={`${inputStyle} text-blue-500/50 cursor-not-allowed`}
                    readOnly
                  />
                </FormInput>

                <div className="md:col-span-2">
                  <FormInput label="Network_Email" id="email" error={errors.email?.message}>
                    <input
                      type="email"
                      {...register("email", { required: "Required" })}
                      placeholder="node@network.com"
                      className={inputStyle}
                    />
                  </FormInput>
                </div>

                <div className="md:col-span-2">
                  <FormInput label="Secure_Passphrase" id="password" error={errors.password?.message}>
                    <input
                      type="password"
                      {...register("password", {
                        required: "Required",
                        minLength: { value: 6, message: "Min 6" },
                      })}
                      placeholder="********"
                      className={inputStyle}
                    />
                  </FormInput>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full overflow-hidden bg-white text-black py-4 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-blue-600 hover:text-white transition-all disabled:opacity-30"
                >
                  <span className="relative z-10">{loading ? "Processing_Request..." : "Execute_Registration"}</span>
                </button>
              </div>
            </form>

            <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[10px] text-zinc-500">
                EXISTING_USER?
              </p>
              <a 
                href="/login" 
                className="text-[10px] font-bold text-white hover:text-blue-500 transition-colors border-b border-white/20 pb-0.5"
              >
                ACCESS_PORTAL →
              </a>
            </div>
          </TechnicalCell>

          {/* STATUS INDICATOR */}
          <div className="mt-6 flex justify-center items-center gap-6 text-[8px] font-black tracking-widest text-zinc-700">
            <span className="flex items-center gap-2">
              <div className="w-1 h-1 bg-emerald-500 rounded-full" /> SSL_ENCRYPTED
            </span>
            <span className="flex items-center gap-2">
              <div className="w-1 h-1 bg-blue-500 rounded-full" /> ENDPOINT: api.freeapi.app
            </span>
          </div>
          
        </div>
      </div>
    </div>
  );
}