export default function App() {
  // this is a funtion called getAdvice that calls an api to return the advice
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    console.log(data.slip.advice);
  }
  return (
    <div>
      <h1>Hello World!</h1>
      <button onClick={getAdvice}>Get Some Killer Advice</button>
    </div>
  );
}
