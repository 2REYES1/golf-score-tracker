import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import LogoutButton from "../LogoutButton/LogoutButton.jsx";

function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex items-center justify-center text-2xl">
      Welcome {user?.email}
      <LogoutButton/>
    </div>
  );
}

export default Dashboard;