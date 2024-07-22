function App() {

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="w-[50%] grid grid-cols-4 p-10 gap-2 rounded-3xl text-2xl text-center">
        <div className="col-span-4 bg-slate-500 text-white text-right px-5">
          40
        </div>
        <div className="bg-slate-500 text-white">AC</div>
        <div className="bg-slate-500 text-white flex items-center justify-center">
          <span className="material-symbols-outlined">backspace</span>
        </div>
      </div>
    </div>
  );
}

export default App
