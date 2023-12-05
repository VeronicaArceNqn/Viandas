import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import icoUser from "../images/iconos/Usuario.png";
import PerfilEditar from "./PerfilEditar";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import LineChart from "./LinesChart";

const InformesViandero = () => {
  const [editing, setEditing] = useState(false);
  const { user, SERVER } = useContext(GlobalContext);
  //console.log("Valor de user:", user);

  const handleEditClick = () => {
    setEditing(true);
  };
  return (
    <>
      <Nav />

      <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen  dark:bg-gray-400 text-black">
        <Sidebar />
        <div className="lg:col-span-3 xl:col-span-5 p-8 h-[100vh] overflow-y-scroll bg-gray-700 dark:bg-gray-400">
          <div className=" bg-gray-200 shadow-md rounded-lg mb-8 flex flex-col dark:bg-gray-300 dark:border-gray-700 ">
            <article className=" bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center md:gap-4 gap-8 overflow-hidden shadow-xl">
              <section className="col-span-1 flex items-center justify-center p-8 ">
                <img
                  src={icoUser}
                  className="mt-8 md:mt-0 w-40 h-40 object-cover rounded-full p-1 bg-indigo-500 ring-8 ring-white"
                />
              </section>
              <section className="md:col-span-1 lg:col-span-2 p-8 ">
                <div className="absolute right-0 top-0 flex items-center gap-2 p-2 font-medium bg-gradient-to-r from-[#f69220] to-[#f9be40] text-white uppercase text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h5>Mi perfil</h5>
                </div>

                <div className=" mt-4 before:absolute before:w-[150px] before:h-[1px] before:bg-[#f7a82f] before:left-0 before:-bottom-2 after:absolute after:w-2 after:h-2 after:bg-[#f7a82f] after:left-[148px] after:-bottom-[11.5px] after:rounded-full">
                  <h1 className="text-gray-900 uppercase font-extrabold text-xl">
                    {user.user.nombre} {user.user.apellido}
                  </h1>
                  <p className="text-gray-500 text-sm"></p>
                </div>
                <ul className="ml-2 mt-10 text-gray-500 border-l-2 border-[#f5a72d]">
                  <li className="flex items-center gap-2 text-xs mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 p-1 bg-indigo-800 text-white rounded-full -ml-[11px]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>+54 {user.user.telefono}</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 p-1 bg-indigo-800 text-white rounded-full -ml-[11px]"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                    <span>{user.user.email}</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 p-1 bg-indigo-800 text-white rounded-full -ml-[11px]"
                    >
                      <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
                    </svg>
                    <span>Fecha de nac. {user.user.fechaNac}</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 p-1 bg-indigo-800 text-white rounded-full -ml-[11px]"
                    >
                      <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
                    </svg>
                    <span>{user.user.genero}</span>
                  </li>
                </ul>
              </section>
            </article>
            {/* <div>  
                        {editing && <PerfilEditar usuario={user} setEditing={setEditing} />}
                        {!editing && <button className="text-white w-52 bg-indigo-700 p-2 rounded-full hover:bg-indigo-800 m-5  transition-colors " onClick={handleEditClick}>Editar mi perfil</button>}
                    </div> */}
          </div>
          <div>
            <article className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center md:gap-4 gap-8 overflow-hidden shadow-xl">
              <LineChart />
            </article>
          </div>
          <div className="mt-8">
            <article className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center md:gap-4 gap-8 overflow-hidden shadow-xl">
              
            </article>
          </div>
        </div>
      </div>
      {/* </div> */}

      <Footer />
    </>
  );
};

export default InformesViandero;
