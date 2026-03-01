function AddRoundButton() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <button
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
  );
}

export default AddRoundButton;