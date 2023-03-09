import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
function SignUp () {
const auth = getAuth();
const email = "gstalcup@pesc.com";
const pass = "password";

createUserWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  }).catch((error) => { 
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });




  return (
    <div className="grid h-screen place-items-center bg-gray-100">
      <h1>Test</h1>
      <div className="text-center mx-8 my-8 w-3/4 h-auto bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <form className="grid grid-cols-1 gap-4 w-1/2 text-center mx-auto">
          <div className="flex flex-row items-center justify-between">
            <div className="w-1/3">
              <h3 className="text-lg font-bold">Email</h3>
            </div>
            <div className="w-1/3 text-center">
              <input
                type="text"
                className="w-full border-2 border-gray-300 p-2 rounded-lg"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="w-1/3">
              <h3 className="text-lg font-bold">Password</h3>
            </div>
            <div className="w-1/3 text-center">
              <input
                type="text"
                className="w-full border-2 border-gray-300 p-2 rounded-lg"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="w-1/3">
              <h3 className="text-lg font-bold">Confirm Password</h3>
            </div>
            <div className="w-1/3 text-center">
              <input
                type="text"
                className="w-full border-2 border-gray-300 p-2 rounded-lg"
                placeholder="Confirm Password"
              />
            </div>
          </div>
        </form>
        <div className="flex justify-center my-8">
          <button
            className="bg-purple-600 transition ease-in-out text-white py-2 px-4 rounded-lg mr-4"
            onClick={createUserWithEmailAndPassword(auth, email, pass)}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>

  )
}
export default SignUp;