import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const loginHandler = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("* Both fields are required");
      return;
    }
    setError("");
    setIsLoading(true);

    setTimeout(() => {
      console.log("logged in with", email, password);
      setIsLoading(false);
    }, 1500);

    console.log(email, password);
  };
  return (
    <div className="m-8 flex flex-col items-center">
      <form
        onSubmit={(e) => {
          loginHandler(e);
        }}
        className="flex flex-col gap-4  bg-gray-900 p-4 rounded-2xl shadow-md w-80"
      >
        <input
          className={`p-3 rounded-xl text-white placeholder-gray-300 bg-gray-700 ${
            error ? "border-2 border-red-500" : "border-2 border-transparent"
          }`}
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          //   className={p-3 rounded-xl text-white placeholder-gray-300 bg-gray-700 ${error ? "border-2 border-red-500" : "border-2 border-transparent" } }
          className={`p-3 rounded-xl text-white placeholder-gray-300 bg-gray-700 ${
            error ? "border-2 border-red-500" : "border-2 border-transparent"
          }`}
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          //   className="px-5 py-2 bg-emerald-500 rounded-xl text-xl text-white active:bg-emerald-700 active:scale-110"
          className={`px-5 py-2 rounded-xl text-xl text-white transition-all ${
            email && password
              ? "bg-emerald-500 active:bg-emerald-700"
              : "bg-gray-500 cursor-not-allowed"
          }`}
          disabled={!email || !password || isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
        {/* {isLoading ? (
          <img
            className="w-50"
            src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif"
            alt=""
          />
        ) : null} */}
      </form>
      <p className="text-red-600 text-2xl p-4">{error}</p>
    </div>
  );
}

export default Login;
