import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const AdminVianda = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-col justify-center w-full p-1 bg-gray-50 dark:bg-gray-400 text-black  ">
          <div>
            <Sidebar />
          </div>
        </div>
        <Footer />
        <div className="  mt-10 flex flex-wrap justify-evenly duration-300 gap-5 lg:gap-4 w-full lg:px-5">
      </div>
    </>
  );
};
export default AdminVianda;
