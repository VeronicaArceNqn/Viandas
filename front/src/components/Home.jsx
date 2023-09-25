import HomeSearchBar from "./HomeSearchBar";
import Card from "./Card";
import Card2 from "./Card2";
import Footer from "./footer";
import Nav from "./Nav";
import "../index.css";
// import "../App.css";

function App() {
  // const [count, setCount] = useState(100);

  return (
    <>
      {/* <Header /> */}
      {/* <div className="text-3xl bg-black">Hola francisco</div> */}
        <Nav />
      <div className="flex  flex-col justify-center w-full p-1 bg-gray-50 dark:bg-gray-400 text-black  ">
        <HomeSearchBar  />
        <div className="  mt-10 flex flex-wrap justify-evenly duration-300 gap-5 lg:gap-4 w-full lg:px-5">
          {/* <div className="hidden xl:block"><Card /></div> */}
          {/* <div className="hidden xl:block"></div> */}
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2/>
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
