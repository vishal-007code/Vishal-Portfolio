import React from "react";
// import NavBar from "./NavBar";

const About = () => {
  return (
    <>
      <div
        name="about"
        className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              About
            </p>
          </div>

          <p className="text-xl mt-20">
            My name is Vishal Vats, and I am a college student currently
            pursuing my B.Tech at Maharshi Dayanand University. Ever since I was
            young, I have been fascinated by the world around me and how it
            works. This curiosity led me to pursue a degree in Computer Science,
            where I have been able to explore my interests in Web Technologies,
            Mobile Application, and Area Related to new Technologies. In
            addition to my studies, I am also actively involved in
            extracurricular activities on campus. I ama member of Football Club,
            where I have had the opportunity to develop my leadership and
            teamwork skills while working with others who share similar
            interests. I am also involved in , which allows me to give back to
            the community and make a positive impact on the world around me.
            When I'm not studying or participating in extracurricular
            activities, you can usually find me Reading Novel,Books and Watching Anime. I love
            My hobby because it allows me to relax and unwind while also
            challenging myself to learn and grow. In the future, I hope to
            Become a Good Developer. I believe that my education and experiences at
            Maharshi Dayanand University have prepared me well for this career
            path, and I am excited to see where my journey will take me.
          </p>

          <br />

          <p className="text-xl">
            Thank you for taking the time to read my about page. I look forward
            to connecting with you and learning more about your own interests
            and experiences.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
