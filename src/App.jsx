import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [currentValue, setCurrentValue] = useState('');
  const [previousValue, setPreviousValue] = useState(0);
  const [operator, setOperator] = useState("");

  const calculate = (v1, op, v2) => {
    const value1 = parseFloat(v1);
    const value2 = parseFloat(v2);
    switch (op) {
      case "+":
        return value1 + value2;
      case "-":
        return value1 - value2;
      case "*":
        return value1 * value2;
      case "/":
        return value1 / value2;
      case "persen":
        // eslint-disable-next-line no-case-declarations
        const val = value1 / 100;
        return val;
      default:
        return value1;
    }
  }
  const result = () => {
    const value = calculate(previousValue, operator, currentValue);
    setCurrentValue(value);
    setPreviousValue(0);
    setOperator("");
    return
  }
  const currentInput = (number) => {
    if(currentValue === 0) {
      setCurrentValue(number);
      return
    }
    const value = `${currentValue}${number}`;
    setCurrentValue(value);
  };
  const nextInput = (opertr) => {
    if(operator.length > 0){
      const value = calculate(previousValue, operator, currentValue);
      setCurrentValue(value);
      return
    }
    if (opertr === "persen") {
      const value = calculate(currentValue, 'persen', 0);
      setCurrentValue(value);
      return;
    }
    setOperator(opertr);
    setPreviousValue(currentValue);
    setCurrentValue(0);
  }
  const clear = () => {
    setCurrentValue(0);
    setPreviousValue(0);
    setOperator("");
    return
  }
  const backspace = () => {
    const value = `${currentValue}`
    setCurrentValue(value.slice(0, -1));
  }
  const decimal = () => {
    if(currentValue.includes('.')) {
      return
    }
    const value = `${currentValue}.`;
    setCurrentValue(value);
    return
  }
// console.log(currentValue, previousValue, operator)
  // console.log(currentValue.length)
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="w-full grid grid-cols-4 gap-1 rounded-3xl text-5xl font-semibold text-center sm:w-[75%] md:w-[60%] md:my-2 lg:w-[50%] lg:my-2">
        <div className="col-span-4  bg-slate-500 rounded-sm p-5 text-white text-right">
          {currentValue.length === 0 ? 0 : currentValue}
        </div>
        <div className="m-0" onClick={() => clear()}>
          <Button type="operator">AC</Button>
        </div>
        <div className="" onClick={() => backspace()}>
          <Button type="operator">
            <span className="material-symbols-outlined text-5xl">
              backspace
            </span>
          </Button>
        </div>
        <div className="" onClick={() => nextInput("persen")}>
          <Button type="operator">%</Button>
        </div>
        <div className="" onClick={() => nextInput("/")}>
          <Button type="operator">/</Button>
        </div>
        <div className="" onClick={() => currentInput(7)}>
          <Button>7</Button>
        </div>
        <div className="" onClick={() => currentInput(8)}>
          <Button>8</Button>
        </div>
        <div className="" onClick={() => currentInput(9)}>
          <Button>9</Button>
        </div>
        <div className="" onClick={() => nextInput("*")}>
          <Button type="operator">x</Button>
        </div>
        <div className="" onClick={() => currentInput(4)}>
          <Button>4</Button>
        </div>
        <div className="" onClick={() => currentInput(5)}>
          <Button>5</Button>
        </div>
        <div className="" onClick={() => currentInput(6)}>
          <Button>6</Button>
        </div>
        <div className="" onClick={() => nextInput("-")}>
          <Button type="operator">-</Button>
        </div>
        <div className="" onClick={() => currentInput(1)}>
          <Button>1</Button>
        </div>
        <div className="" onClick={() => currentInput(2)}>
          <Button>2</Button>
        </div>
        <div className="" onClick={() => currentInput(3)}>
          <Button>3</Button>
        </div>
        <div className="" onClick={() => nextInput("+")}>
          <Button type="operator">+</Button>
        </div>
        <div className="col-span-2" onClick={() => currentInput(0)}>
          <Button>0</Button>
        </div>
        <div className="" onClick={() => decimal()}>
          <Button>.</Button>
        </div>
        <div className="" onClick={() => result()}>
          <Button type="operator">=</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
