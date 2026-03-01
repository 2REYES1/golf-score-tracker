import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import LogoutButton from "../LogoutButton/LogoutButton.jsx";
import PastRoundCard from "../PastRoundCard/PastRoundCard.jsx";
import AddRoundButton from "../AddRoundButton/AddRoundButton.jsx";
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useEffect, useState } from "react";

function Dashboard() {
  const { user } = useContext(AuthContext);
  const [rounds, setRounds] = useState([]);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (!user) return;

    const roundsRef = collection(db, "users", user.uid, "rounds");

    const unsubscribe = onSnapshot(roundsRef, (snapshot) => {
      const roundsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setRounds(roundsData);
    }, (error) => {
      console.error("Error fetching rounds:", error);
    });

    // Clean up listener when component unmounts
    return () => unsubscribe();

  }, [user]);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) return;

      try {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          setUserData(userSnap.data());
        } else {
          console.log("No such user document!");
        }

      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [user]);

  return (
    <>
      {/* HEADER*/}
      <div id="dash-header" className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="font-semibold text-lg">
            {userData 
            ? `${userData.firstName} ${userData.lastName}` 
            : "Loading..."}
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
      <main className="pt-[calc(4rem+33vh)] pb-28">
        <div className="max-w-6xl mx-auto px-6 space-y-4">
        {rounds.map(round => (
          <PastRoundCard
            key={round.id}
            courseName={round.courseName}
            date={round.date}
            performanceColor={round.tempoColorVal}
          />
        ))}
      </div>
      </main>

      <AddRoundButton/>
    </>
    

  );
}

export default Dashboard;