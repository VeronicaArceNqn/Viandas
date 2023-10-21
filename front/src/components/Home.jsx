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
  const [viandas, setViandas] = useState([]); // estado con arreglo vacio
  const { SERVER } = useContext(GlobalContext);

  const fetchViandas = async () => {
    await axios.get(`${SERVER}viandas`)
      .then((res) => {
      // console.log(res.data);
      setViandas(res.data);
    });
  };
  useEffect(() => {
    fetchViandas();
    // console.log("useEssect fetch viandas home");
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
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
