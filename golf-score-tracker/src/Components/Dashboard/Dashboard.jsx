import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex items-center justify-center text-2xl">
      Welcome {user?.email}
    </div>
  );
}

export default Dashboard;