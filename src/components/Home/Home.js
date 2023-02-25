import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Todo from "../Todo/Todo";

const Home = () => {
  return (
    <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
      <Navbar></Navbar>
      <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
        {/* <!-- header --> */}
        <Header></Header>
        {/* <!-- todo list --> */}
        <Todo></Todo>
        {/* <!-- footer --> */}
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
