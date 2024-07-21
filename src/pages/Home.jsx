import React, { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

function Home() {
  //TODO: refactorizar el cambio de theme para que utilice un context y agregar persistencia con local store
  // HOOKS personalizados ----
  // LocalStorage ----
  
  const [theme, setTheme] = useState("ligth")

  function changeTheme (){
    setTheme("dark");
    if (theme === "dark"){
      setTheme("ligth");
      }
  }

  return (
    <div data-mode = {theme}>
      <Header changeTheme = {changeTheme}/>
      <Main />
      <Footer/>
    </div>
  );
}

export default Home;
