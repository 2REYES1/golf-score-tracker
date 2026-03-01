import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import LogoutButton from "../LogoutButton/LogoutButton.jsx";
import PastRoundCard from "../PastRoundCard/PastRoundCard.jsx";
import AddRoundButton from "../AddRoundButton/AddRoundButton.jsx";

function Dashboard() {
  const { user } = useContext(AuthContext);
  const centerClasses = "w-full flex items-center justify-center";

  return (
    <>
      {/* HEADER*/}
      <div id="dash-header" className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="font-semibold text-lg">
            {user?.email}
          </div>
          <LogoutButton/>
        </div>
      </div>

      {/* STATS BOARD */}
      <div className="fixed top-16 left-0 w-full h-[33vh] bg-gray-50 border-b z-40">
        <div className="max-w-6xl mx-auto h-full flex flex-col">

          {/* ROW 1 — 80% */}
          <div className="flex justify-between items-center h-[80%] px-8">
            
            {/* Total Rounds */}
            <div>
              <p className="text-sm uppercase tracking-wide text-gray-500">
                Total Rounds
              </p>
              <p className="text-4xl font-bold">
                12
              </p>
            </div>

            {/* Avg Score */}
            <div className="text-right">
              <p className="text-sm uppercase tracking-wide text-gray-500">
                Avg Score
              </p>
              <p className="text-4xl font-bold">
                2.4
              </p>
            </div>

          </div>

          {/* ROW 2 — 20% */}
          <div className="h-[20%] w-full bg-green-500">
            {/* This will become your performance color bar */}
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="pt-[calc(64px+33vh)] px-6 max-w-6xl mx-auto space-y-4">
        <PastRoundCard 
          courseName="Pebble Beach"
          date="Feb 12, 2026"
          performanceColor="#22c55e"
        />
        <PastRoundCard 
          courseName="Pebble Beach"
          date="Feb 12, 2026"
          performanceColor="#22c55e"
        />
        <PastRoundCard 
          courseName="Pebble Beach"
          date="Feb 12, 2026"
          performanceColor="#22c55e"
        />
        <PastRoundCard 
          courseName="Pebble Beach"
          date="Feb 12, 2026"
          performanceColor="#22c55e"
        />
        <PastRoundCard 
          courseName="Pebble Beach"
          date="Feb 12, 2026"
          performanceColor="#22c55e"
        />
        <PastRoundCard 
          courseName="Pebble Beach"
          date="Feb 12, 2026"
          performanceColor="#22c55e"
        />
        <PastRoundCard 
          courseName="Pebble Beach"
          date="Feb 12, 2026"
          performanceColor="#22c55e"
        />
      </div>

      <AddRoundButton/>
    </>
    

  );
}

export default Dashboard;