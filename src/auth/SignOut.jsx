import { getAuth, signOut } from "firebase/auth";
import { useNavigate, redirect } from "react-router-dom";
function SignOut() {
  const auth = getAuth();
  if(auth.currentUser) {
    signOut(auth).then(() => {
      console.log("signed out");
      return redirect("/");


    }).catch((error) => {
     console.log(error);
    });
  }
  return (
    <div>
      <h1>Sign Out</h1>
    </div>
  );
}

export default SignOut;