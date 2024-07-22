import Button from "./components/Button";

function App() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="w-[50%] grid grid-cols-4 gap-1 rounded-3xl text-5xl font-semibold text-center">
        <div className="col-span-4 bg-slate-500 rounded-sm p-5 text-white text-right">
          40
        </div>
        <Button type="operator">AC</Button>
        <Button type="operator">
          <span className="material-symbols-outlined text-5xl">backspace</span>
        </Button>
        <Button type="operator">%</Button>
        <Button type="operator">/</Button>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button type="operator">x</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button type="operator">-</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button type="operator">+</Button>
        <Button>+/-</Button>
        <Button>0</Button>
        <Button>.</Button>
        <Button type="operator">=</Button>
      </div>
    </div>
  );
}

export default App;
