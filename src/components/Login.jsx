import { useState } from "react";
import { supabase } from "../lib/supabase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState("email");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Send OTP
  const sendOtp = async () => {
    if (!email) return toast.error("Email is required",{
          style: {
    background: "rgba(239,68,68,0.15)",
    border: "1px solid rgba(239,68,68,0.4)",
    color: "#f87171",
  },
    });

    setLoading(true);

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: true,
      },
    });

    setLoading(false);

    if (error) return toast.error(error.message,{
          style: {
    background: "rgba(239,68,68,0.15)",
    border: "1px solid rgba(239,68,68,0.4)",
    color: "#f87171",
  },
  });

    toast.success("Check your email for the code",{

    
          style: {
    background: "rgba(16,185,129,0.15)",
    border: "1px solid rgba(16,185,129,0.4)",
    color: "#34d399",}
  },
    );
    setStep("otp");
  };

  // verify OTP
  const verifyOtp = async () => {
    if (!otp) return toast.error("Enter OTP code",
        {
              style: {
    background: "rgba(239,68,68,0.15)",
    border: "1px solid rgba(239,68,68,0.4)",
    color: "#f87171",
  },
        }
    );

    setLoading(true);

    const { data, error } = await supabase.auth.verifyOtp({
      email,
      token: otp,
      type: "email",
    });

    setLoading(false);

    if (error) return toast.error(error.message,{
          style: {
    background: "rgba(239,68,68,0.15)",
    border: "1px solid rgba(239,68,68,0.4)",
    color: "#f87171",
  },
    });

    const user = data?.user;
    if (!user) return;

    const { data: profile } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    toast.success("Login successful",{
          style: {
    background: "rgba(16,185,129,0.15)",
    border: "1px solid rgba(16,185,129,0.4)",
    color: "#34d399",
  },
    });

    navigate("/", { replace: true });
  };

  return (
    <>
    <ToastContainer
  position="bottom-right"
  autoClose={2000}
  hideProgressBar={false}
  closeOnClick
  pauseOnHover
  draggable
  theme="dark"
  toastStyle={{
    background: "rgba(20,20,20,0.9)",
    color: "#fff",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
    fontSize: "14px",
  }}
  progressStyle={{
    background: "#3b82f6",
  }}
  
/>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
      {step === "email" && (
        <div className="w-full max-w-md rounded-2xl border border-gray-700/40 bg-black/40 backdrop-blur-xl shadow-2xl p-8">


          <h2 className="text-3xl font-bold text-white text-center mb-6">
            Login / Sign up
          </h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-600 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all"
          />

          <button
            onClick={sendOtp}
            disabled={loading}
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-3 rounded-xl transition-all shadow-lg shadow-blue-500/20"
          >
            {loading ? "Sending..." : "Send Code"}
          </button>
        </div>
      )}

      {step === "otp" && (
        <div className="w-full max-w-md rounded-2xl border border-gray-700/40 bg-black/40 backdrop-blur-xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            Enter OTP
          </h2>

          <p className="text-white px-6">
            An email sent to{" "}
            <span className="font-semibold text-white">{email}</span>
          </p>
          {/* <input
          type="text"
          placeholder="OTP Code"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-600 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all"
        /> */}

          {/* <button
          onClick={verifyOtp}
          disabled={loading}
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-3 rounded-xl transition-all shadow-lg shadow-blue-500/20"
        >
          {loading ? "Verifying..." : "Verify"}
        </button> */}
        </div>
      )}
    </div>
    </>
  );
};

export default Login;
