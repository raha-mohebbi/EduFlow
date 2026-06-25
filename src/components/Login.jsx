import { useState } from "react";
import { supabase } from "../lib/supabase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState("email"); // email | otp
  const [otp, setOtp] = useState("");

  // sending code to email
const sendOtp = async () => {
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: true,
    },
  });

  if (error) return toast.error(error.message);

  toast.success("Code sent to email");
  setStep("otp");
};

  // verifying code
  const verifyOtp = async () => {
  const { data, error } = await supabase.auth.verifyOtp({
    email,
    token: otp,
    type: "email",
  });

  if (error) {
    toast.error(error.message);
    return;
  }

  const user = data?.user;
  if (!user) return;

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (!profile) {
    toast.success("Welcome! Create your profile");
    window.location.href = "/create-profile";
  } else {
    toast.success("Login successful");
    window.location.href = "/dashboard";
  }
};

  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-black-900 to-gray-700 p-4">
    <ToastContainer />

    <div className="w-full max-w-md rounded-3xl border border-gray-700/50 bg-white/10 backdrop-blur-xl shadow-2xl p-8">
      {step === "email" && (
        <>
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            Login or Create Account
          </h2>

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-black/30 border border-gray-600 text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all"
          />

          <button
            onClick={sendOtp}
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/30"
          >
            Send Code
          </button>
        </>
      )}

      {step === "otp" && (
        <>
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            Enter OTP
          </h2>

          <input
            type="text"
            placeholder="OTP Code"
            onChange={(e) => setOtp(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-black/30 border border-gray-600 text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all"
          />

          <button
            onClick={verifyOtp}
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/30"
          >
            Verify
          </button>
        </>
      )}
    </div>
  </div>
);
};

export default Login;