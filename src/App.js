export default function App() {
  // this is a funtion called getAdvice that calls an api to return the advice
  async function getAdvice() {
    const res = await fetch("https://api.adiceslip.com/advice");
    const data = await res.json();
    console.log(data);
  }
  return (
    <div>
      <h1>Hello World!</h1>
      <button>Get Some Killer Advice</button>
    </div>
  );
}
