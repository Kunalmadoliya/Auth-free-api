import {useForm, SubmitHandler} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

type FormValues = {
  password: string;
  username: string;
};

const TechnicalCell = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`bg-[#0b0c0d] border border-white/5 relative overflow-hidden rounded-2xl ${className}`}
  >
    <div className="absolute inset-0 opacity-[0.025] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px]" />
    <div className="relative z-10 p-8 md:p-10">{children}</div>
  </div>
);

const FormInput = ({
  label,
  id,
  error,
  children,
  extraLabel,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
  extraLabel?: React.ReactNode;
}) => (
  <div className="w-full">
    <div className="flex justify-between items-end mb-2">
      <label
        htmlFor={id}
        className="text-[10px] font-semibold text-zinc-500 uppercase tracking-[0.25em]"
      >
        {label}
      </label>
      {extraLabel}
      {error && (
        <span className="text-[9px] font-mono text-red-500 uppercase tracking-tight">
          Required
        </span>
      )}
    </div>

    <div className="relative group">
      {children}
      <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-focus-within:w-full opacity-60" />
    </div>
  </div>
);

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
   
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (formData) => {
    if (loading) return;

    setLoading(true);
    try {
      const res = await fetch("https://api.freeapi.app/api/v1/users/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData),
      
      });

      const responseData = await res.json();

      console.log(responseData);

      if (!res.ok) {
        window.alert(responseData?.message || "AUTH_FAILURE");
      } else {
        localStorage.setItem("accessToken", responseData.data.accessToken);

        navigate("/get-user");
      }
    } catch {
      window.alert("SYSTEM_ERROR: Connection refused.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle =
    "w-full px-0 py-3 bg-transparent border-b border-white/10 outline-none text-sm text-white placeholder:text-zinc-700 font-mono focus:border-white/40 transition-all";

  return (
    <div className="min-h-screen bg-[#09090b] text-[#a1a1aa] font-mono selection:bg-white selection:text-black flex flex-col lg:flex-row relative">
      <div className="fixed inset-0 z-0 opacity-20 [background-image:radial-gradient(#444_1px,transparent_1.5px)] [background-size:32px_32px]" />

      <div className="hidden lg:flex flex-1 flex-col justify-between p-16 border-r border-white/5 z-10">
        <div>
          <div className="flex items-center gap-2 text-[10px] text-white/60 font-bold tracking-[0.3em] uppercase mb-12">
            <span className="w-4 h-[1px] bg-white/60" /> Secure Session
          </div>

          <h2 className="text-5xl font-bold text-white tracking-tight leading-[1] max-w-sm">
            Welcome Back
            <br />
            <span className="text-zinc-700 italic">Operator</span>
          </h2>
        </div>

        <div className="space-y-4">
          <div className="p-4 border border-white/5 bg-white/[0.02] max-w-xs rounded-xl">
            <p className="text-[10px] leading-relaxed">
              Resume your session securely. Make sure credentials are valid.
            </p>
          </div>

          <p className="text-[9px] uppercase tracking-widest font-black text-zinc-600">
            SYSTEM STATUS: ACTIVE
          </p>
        </div>
      </div>

      <div className="w-full lg:w-[45%] flex justify-center items-center z-10 p-6 md:p-12 lg:p-24 backdrop-blur-sm">
        <div className="w-full max-w-md">
          <TechnicalCell>
            <div className="mb-12">
              <div className="text-[10px] text-zinc-600 mb-2">
                AUTH // LOGIN
              </div>

              <h1 className="text-2xl font-bold text-white tracking-tight">
                Sign In
              </h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
              <FormInput label="Username" id="username">
                <input
                  id="username" // ✅ add this
                  autoComplete="username" // ✅ add this
                  {...register("username", {required: true})}
                  placeholder="operator_id"
                  className={inputStyle}
                />
              </FormInput>

              <FormInput label="Password" id="password">
                <input
                  id="password" // ✅ add this
                  type="password"
                  autoComplete="current-password" // ✅ add this
                  {...register("password", {required: true})}
                  placeholder="********"
                  className={inputStyle}
                />
              </FormInput>

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-white text-black text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-zinc-200 transition-all disabled:opacity-40 rounded-xl"
                >
                  {loading ? "Processing..." : "Login"}
                </button>
              </div>
            </form>

            <div className="mt-10 pt-6 border-t border-white/5 flex justify-between items-center">
              <p className="text-[10px] text-zinc-500">New user?</p>
              <a
                href="/register"
                className="text-[10px] font-bold text-white hover:underline"
              >
                Create account →
              </a>
            </div>
          </TechnicalCell>

          <div className="mt-6 flex justify-between text-[9px] text-zinc-700 uppercase">
            <span>System Ready</span>
            <span>v2.0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
