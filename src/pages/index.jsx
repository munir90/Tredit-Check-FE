import {apiPost} from "../utils/api"; // Adjust the import path as necessary
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [useApiKey, setUseApiKey] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      let response;
      if (useApiKey) {
        response = await apiPost("/auth/apikey-login", { apiKey });
      } else {
        response = await apiPost("/auth/login", { email, password });
      }

      if (response?.token) {
        localStorage.setItem("verit_token", response.token);
        localStorage.setItem("verit_user", JSON.stringify(response.user));
        navigate("/dashboard");
      } else {
        toast.error("Login failed", { position: "top-right" });
      }
    } catch (error) {
      console.error("Login error:", error);
      if (error?.message) {
        toast.error(error.message, { position: "top-right" });
      } else {
        toast.error("An unexpected error occurred.", { position: "top-right" });
      }
    }
  };

  return (
    <div className="w-full h-screen flex flex-col lg:flex-row">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 bg-emerald-400 text-white flex items-center justify-center p-10">
        <div className="max-w-md text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-4">Welcome to Verit 🌿</h1>
          <p className="text-lg opacity-90">
            Securely manage your Tredit access using your Verit credentials.
            Enter your secret key or login to begin your due diligence journey.
          </p>
          <div className="mt-6">
            <button
              type="button"
              onClick={() => setUseApiKey(false)}
              className={`btn mr-2 ${!useApiKey ? "btn-primary" : "btn-outline"}`}
            >
              Login with Email
            </button>
            <button
              type="button"
              onClick={() => setUseApiKey(true)}
              className={`btn ${useApiKey ? "btn-primary" : "btn-outline"}`}
            >
              Use Secret Key
            </button>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-base-100 p-6">
        <form onSubmit={handleLogin} className="w-full max-w-sm">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-6 shadow-lg">
            <legend className="fieldset-legend text-xl font-bold">
              {useApiKey ? "Enter API Key" : "Login"}
            </legend>

            {useApiKey ? (
              <>
                <label className="label mt-2">API Key</label>
                <input
                  type="text"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="input input-bordered w-full"
                  placeholder="Your Verit API Key"
                />
              </>
            ) : (
              <>
                <label className="label mt-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered w-full"
                  placeholder="Email"
                />

                <label className="label mt-4">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input input-bordered w-full"
                  placeholder="Password"
                />
              </>
            )}

            <button className="btn btn-neutral mt-6 w-full">
              {useApiKey ? "Continue" : "Login"}
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}