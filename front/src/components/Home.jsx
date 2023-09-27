import HomeSearchBar from "./HomeSearchBar";
import Card from "./Card";
import Card2 from "./Card2";
import Footer from "./Footer";
import Nav from "./Nav";
import { useContext, useEffect, useState } from "react";
import "../index.css";
// import "../App.css";
import axios from "axios";
import { GlobalContext } from "../context/GlobalContext";

function App() {
  const [viandas, setViandas] = useState([]);
  const { SERVER } = useContext(GlobalContext);
  const fetchViandas = async () => {
    await axios.get(`${SERVER}viandas`).then((res) => {
      console.log(res.data);
      setViandas(res.data);
    });
  };
  useEffect(() => {
    fetchViandas();
  }, []);

  // console.log(viandas)
  return (
    <>
      {/* <Header /> */}
      {/* <div className="text-3xl bg-black">Hola francisco</div> */}
      <Nav />
      <div className="flex flex-col justify-center w-full p-1 bg-gray-50 dark:bg-gray-400 text-black  ">
        <HomeSearchBar />
        <div className="  mt-10 flex flex-wrap justify-evenly duration-300 gap-5 lg:gap-4 w-full lg:px-5">
          {/* <div className="hidden xl:block"><Card /></div> */}
          {/* <div className="hidden xl:block"></div> */}
          {viandas.map((vianda) => (
            <Card2
              key={vianda.id}
              nombre={vianda.nombre}
              precio={vianda.precio}
              img={vianda.urlFoto}
            />
          ))}

          {/* <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 /> */}
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
