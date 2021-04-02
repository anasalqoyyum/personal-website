import React from "react";
import Typical from "react-typical";
import avatar from "../assets/images/avatar.jpeg";

const Home = () => {
  return (
    <>
      <section>
        <div className="text-white flex flex-col justify-center items-center text-center min-h-screen">
          <img className="w-64 h-64 rounded-full mx-auto" src={avatar} alt="" />{" "}
          <h1 className="mt-6 text-4xl font-bold">Hi, I'm Anas Alqoyyum</h1>
          <p className="my-6 text-xl">
            {" "}
            I'm a{" "}
            <Typical
              steps={["Full Stack Web Developer💻", 2000, "Graphic Designer🎨", 2000]}
              loop={Infinity}
              wrapper="b"
            />
          </p>
          <div>
            <a
              href="https://twitter.com/sanaalqoyyum"
              target="_blank"
              rel="noreferrer"
              className="mx-2"
            >
              {" "}
              <i class="fab fa-twitter fa-lg"></i>
            </a>
            <a
              href="https://instagram.com/anasalqoyyum"
              target="_blank"
              rel="noreferrer"
              className="mx-2"
            >
              {" "}
              <i class="fab fa-instagram fa-lg"></i>
            </a>
            <a
              href="https://open.spotify.com/user/21vfo6nqsmcckxkyjit66ahoy?si=FunQIghAQcq2NHOhNTECnQ"
              target="_blank"
              rel="noreferrer"
              className="mx-2"
            >
              {" "}
              <i class="fab fa-spotify fa-lg"></i>
            </a>
            <a
              href="https://github.com/anasalqoyyum/"
              target="_blank"
              rel="noreferrer"
              className="mx-2"
            >
              {" "}
              <i class="fab fa-github fa-lg"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/anasalqoyyum/"
              target="_blank"
              rel="noreferrer"
              className="mx-2"
            >
              {" "}
              <i class="fab fa-linkedin-in fa-lg"></i>
            </a>
            <a
              href="mailto:muhanasalqoyyum@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="mx-2"
            >
              {" "}
              <i class="fas fa-envelope fa-lg"></i>
            </a>
            <a
              href="https://wa.me/+6281327720079"
              target="_blank"
              rel="noreferrer"
              className="mx-2"
            >
              {" "}
              <i class="fas fa-phone-alt fa-lg"></i>
            </a>
          </div>
          <h1 className="mt-6 text-sm font-bold underline"><a href="https://darknowns.s-ul.eu/XkAjYbif">Download my Resume</a></h1>
        </div>
      </section>
    </>
  );
};

export default Home;
