function PastRoundCard({ courseName, date, performanceColor }) {
  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border px-6 py-4 flex justify-between items-center hover:shadow-md transition-all duration-200">
      
      {/* LEFT SIDE */}
      <div>
        <p className="text-lg font-semibold">
          {courseName}
        </p>
        <p className="text-sm text-gray-500">
          {date}
        </p>
      </div>

      {/* RIGHT SIDE - Performance Color */}
      <div
        className="w-14 h-14 rounded-xl"
        style={{ backgroundColor: performanceColor }}
      />

    </div>
  );
}

export default PastRoundCard;