import "./App.css";
import Card from "./components/card";

function App() {
  //! To pass variables as props always use {}
  let myObj = { username: "Ankit", age: 21 };
  let myArr = [1, 2, 3, 4];
  return (
    <>
      <h1 className="bg-green-400 test-black p-4 rounded-xl mb-4">
        TailWind test
      </h1>
      {/* <Card username="chaiaurcode" obj={myObj} arr={myArr} /> */}
      <Card username="Ankit" btnText="Click me" />
      <Card username="chaiaurcode" />
    </>
  );
}

export default App;
