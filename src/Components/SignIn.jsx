import React, { useState } from "react";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
function SignIn() {
  const auth = getAuth();
  // get username and email from form
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleSignIn = (email, pass) => {
    signInWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      console.log("User has signed in.");
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
    }
    );
  }
  return (
    <div className="grid h-screen place-items-center bg-gray-100">
      <div className="text-center mx-8 my-8 w-3/4 h-auto bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
        <form className="grid grid-cols-1 gap-4 w-1/2 text-center mx-auto">
          <div className="flex flex-row items-center justify-between">
            <div className="w-1/3">
              <h3 className="text-lg font-bold">Email</h3>
            </div>
            <div className="w-1/2 text-center">
              <input
                type="text"
                className="w-full border-2 border-gray-300 p-2 rounded-lg"
                placeholder="Email"
                onChange={ (e) => {setEmail(e.target.value)} }
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
                className="w-full border-2 border-gray-300 p-2 rounded-lg"
                placeholder="Password"
                onChange={ (e) => {setPass(e.target.value)} }
              />
            </div>
          </div>
        </form>
        <div className="flex justify-center my-8">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleSignIn(email, pass)}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
} 
export default SignIn;
