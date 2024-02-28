import { useEffect, useState } from "react";
import "./App.css";

// this is the function for diplaying the advice from getAdvice funtion
export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  // this is a function called getAdvice that calls an api to return the advice
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);
  return (
    <div>
      <h1>{advice}</h1>
      {/* this function is called when clicked */}
      <button onClick={getAdvice}>Get Some Killer Advice</button>
      <Message count={count} />
    </div>
  );
}
function Message(props) {
  return (
    <p>
      You have read <strong>{props.count}</strong> pieces of advice
    </p>
  );
}
