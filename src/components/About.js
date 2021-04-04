import React from "react";
import Typical from "react-typical";
import avatar from "../assets/images/avatar.jpeg";

const Home = () => {
  return (
    <>
      <section>
        <div className="text-white flex flex-col justify-center items-center text-center min-h-screen">
          <img className="w-64 h-64 rounded-full mx-auto" src={avatar} alt="" />{" "}
          <h1 className="mt-6 text-4xl font-bold">This is my Portofolio</h1>
          <h1 className="mt-6 text-sm font-bold underline"><a href="https://darknowns.s-ul.eu/XkAjYbif">Download my Resume</a></h1>
        </div>
      </section>
    </>
  );
};

export default Home;
