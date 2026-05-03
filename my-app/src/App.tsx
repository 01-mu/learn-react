import "./App.css";

function MyButton() {
  return <button>I'm a button</button>;
}

function App() {
  type User = {
    name: string;
    imageUrl: string;
    imageSize: number;
  };

  const user: User = {
    name: "mu",
    imageUrl: "https://placehold.jp/150x150.png",
    imageSize: 90,
  };

  return (
    <>
      <MyButton />
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt="avatar"
        style={{ width: `${user.imageSize}px`, height: `${user.imageSize}px` }}
      />
    </>
  );
}

export default App;
