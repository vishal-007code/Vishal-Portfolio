import React from "react";
// import navbar from "../assets/portfolio/navbar.jpg";
import movieapp from "../assets/portfolio/Movie-app.png";
import whiteboard from "../assets/portfolio/Whiteboard.png";
import { BiLinkExternal } from "react-icons/bi";

const Portfolio = () => {
  
  return (
    <>
      <div
        name="portfolio"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
            <p className="py-6">Check out some of my work right here</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
              <div className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={movieapp}
                  className="rounded-md duration-200 hover:scale-105"
                />
                <a href="https://63e5f79553d1e563f142ca03--vishal-007code.netlify.app/">
                  <BiLinkExternal className="absolute left-45% top-44% "/>
                </a>
              </div>
              <div className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={whiteboard}
                  className="rounded-md duration-200 hover:scale-105"
                />
                <a href="https://63e0dfd8b44d304e0e2334ca--whiteboard-007.netlify.app/">
                  <BiLinkExternal className=""/>
                </a>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
