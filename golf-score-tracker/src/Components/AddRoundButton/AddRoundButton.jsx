import { useState, useContext } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { AuthContext } from "../../context/AuthContext";


function AddRoundButton() {
  const { user } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [date, setDate] = useState("");
  const [tempoNumVal, setTempoNumVal] = useState(3);

  // Convert tempo number (1–5) into color
  const getTempoColor = (num) => {
    if (num <= 2) return "#ef4444";      // red
    if (num === 3) return "#facc15";     // yellow
    return "#22c55e";                    // green
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) return;

    try {
      await addDoc(
        collection(db, "users", user.uid, "rounds"),
        {
          courseName,
          date,
          tempoNumVal: Number(tempoNumVal),
          tempoColorVal: getTempoColor(Number(tempoNumVal)),
          createdAt: serverTimestamp()
        }
      );

      // Reset form
      setCourseName("");
      setDate("");
      setTempoNumVal(3);

      setIsOpen(false);

      console.log("Round added!");

    } catch (error) {
      console.error("Error adding round:", error);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="
            w-16 h-16 
            rounded-full 
            bg-emerald-500 
            text-white 
            text-3xl 
            font-light 
            shadow-lg 
            flex 
            items-center 
            justify-center 
            transition 
            hover:bg-emerald-600 
            hover:scale-105 
            active:scale-95
          "
        >
          +
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          
          <div className="bg-white rounded-xl p-6 w-96 shadow-xl">
            <h2 className="text-xl font-semibold mb-4">
              Add New Round
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <input
                type="text"
                placeholder="Course Name"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                required
                className="w-full border rounded-md px-3 py-2"
              />

              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="w-full border rounded-md px-3 py-2"
              />

              <div>
                <label className="block text-sm mb-1">
                  Tempo (1–5)
                </label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={tempoNumVal}
                  onChange={(e) => setTempoNumVal(e.target.value)}
                  required
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-gray-500"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600"
                >
                  Save
                </button>
              </div>

            </form>
          </div>

        </div>
      )}
    </>
  );
}

export default AddRoundButton;