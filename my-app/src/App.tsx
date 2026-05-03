import "./App.css";

function MyButton() {
  return <button>I'm a button</button>;
}

function App() {
  return (
    <>
      <h1>Welcome to my app</h1>
      <MyButton />
      <img className="avatar" src="https://placehold.jp/150x150.png" alt="avatar" />
    </>
  );
}

export default App;
