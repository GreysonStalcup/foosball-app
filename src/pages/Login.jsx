import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { useAuth } from "../context/AuthContext";

const Login = (props) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submitLoginForm = async (e) => {
    e.preventDefault();

    if (loading) return;
    setLoading(true);

    login(emailRef.current.value, passwordRef.current.value)
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="grid h-screen place-items-center bg-gray-100">
      <div className="text-center mx-8 my-8 w-3/4 h-auto bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
        <form
          onSubmit={submitLoginForm}
          className="grid grid-cols-1 gap-4 w-1/2 text-center mx-auto"
        >
          <div className="flex flex-row items-center justify-between">
            <div className="w-1/3">
              <h3 className="text-lg font-bold">Email</h3>
            </div>
            <div className="w-1/2 text-center">
              <input
                type="email"
                placeholder="Email"
                ref={emailRef}
                className="w-full border-2 border-gray-300 p-2 rounded-lg"
                required
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="w-1/3">
              <h3 className="text-lg font-bold">Password</h3>
            </div>
            <div className="w-1/2 text-center">
              <input
                type="password"
                placeholder="Enter your password"
                ref={passwordRef}
                className="w-full border-2 border-gray-300 p-2 rounded-lg"
                required
              />
            </div>
          </div>
          <div className="flex justify-center my-8">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign in
            </button>
          </div>
          {error && (
            <div>
              <p className="text-red-500 text-center">{error}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
