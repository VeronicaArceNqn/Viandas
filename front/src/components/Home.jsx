import HomeSearchBar from "./HomeSearchBar";
import Card from "./Card";
import Footer from "./footer";
import Nav from "./Nav";
import "../index.css";

function App() {
  // const [count, setCount] = useState(100);

  return (
    <>
      {/* <Header /> */}
      {/* <h1 className="text-3xl bg-black">Hola francisco</h1> */}
      <div className=" flex flex-col  w-full p-1 bg-gray-50 dark:bg-gray-300 text-black">
        <Nav />
        <HomeSearchBar />
        <div className="mt-10 flex flex-wrap justify-evenly duration-300 gap-4 lg:gap-8 w-full lg:px-5">
          <div className="hidden xl:block">{/* <Card /> */}</div>
          <div className="hidden xl:block"></div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card bg-white">
        <button onClick={() => setCount((count) => count + 1)}>
          Click nro: {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="bg-gree">Click on the Vite and React logos to learn more</p>
      <h1 className="text-3xl bg-gray-500 font-bold underline">Hello world!</h1> */}
    </>
  );
}

export default App;
