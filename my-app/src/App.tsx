import "./App.css";

function MyButtonA() {
  return <button>I'm a button A</button>;
}

function MyButtonB() {
  return <button>I'm a button B</button>;
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
    { title: "Product 1", id: 1 },
    { title: "Product 2", id: 2 },
    { title: "Product 3", id: 3 },
  ];

  const listItems = products.map((product) => <li key={product.id}>{product.title}</li>);

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
    </>
  );
}

export default App;
