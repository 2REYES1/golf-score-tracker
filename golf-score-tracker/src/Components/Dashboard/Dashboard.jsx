import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import LogoutButton from "../LogoutButton/LogoutButton.jsx";

function Dashboard() {
  const { user } = useContext(AuthContext);
  const centerClasses = "w-full flex items-center justify-center";

  return (
    <div id="dash-header" className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="font-semibold text-lg">
          {user?.email}
        </div>
        <LogoutButton/>
      </div>
    </div>
  );
}

export default Dashboard;