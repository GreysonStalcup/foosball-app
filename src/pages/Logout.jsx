import { useAuth } from "../context/AuthContext";

const Logout = () => {
  const { currentUser, logout } = useAuth();

  if (currentUser) {
    logout();
  }

  return (
    <div>
      <h1>Sign out</h1>
    </div>
  );
};

export default Logout;
