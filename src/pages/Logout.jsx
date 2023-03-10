import { useAuth } from "../context/AuthContext";

const Logout = () => {
  const { currentUser, logout } = useAuth();

  if (currentUser) {
    logout();
    // TODO: needs to redirect after logging out
  }

  return (
    <div>
      <h1>Sign out</h1>
    </div>
  );
};

export default Logout;
