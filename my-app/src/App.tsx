import "./App.css";

function MyButtonA() {
  return <button>I'm a button A</button>;
}

function MyButtonB() {
  return <button>I'm a button B</button>;
}

function AlertButton() {
  const handleClick = () => alert("You clicked me!");

  return <button onClick={handleClick}>Click me!</button>;
}

import { useState } from "react";
function CountButton() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);

  return <button onClick={handleClick}>Count: {count}</button>;
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

  const isA = false;

  type Product = {
    title: string;
    id: number;
  };

  const products: Product[] = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
  ];

  const listItems = products.map((product) => (
    <li key={product.id} style={{ color: product.isFruit ? "magenta" : "darkgreen" }}>
      {product.title}
    </li>
  ));

  return (
    <>
      {isA ? <MyButtonA /> : <MyButtonB />}
      {isA && <MyButtonA />}
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt="avatar"
        style={{ width: `${user.imageSize}px`, height: `${user.imageSize}px` }}
      />
      <ul>{listItems}</ul>
      <AlertButton />
      <CountButton />
      <CountButton />
    </>
  );
}

export default App;
