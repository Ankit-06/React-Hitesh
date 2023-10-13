import Chai from "./chai";

//? NOTE: only JS evaluated exressions can be written in {}, inside a JSX

function App() {
  const username = "chai aur code";
  return (
    //! fragment
    <>
      <Chai />
      <h1>chai aur react | {username}</h1>
      <p>test para</p>
    </>
  );
}

export default App;
