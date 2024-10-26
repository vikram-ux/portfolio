import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <div id="home" className="main h-auto">
        <div className="first-section  h-screen w-screen flex flex-col justify-around items-center bg-gray-950 text-white bg-cover bg-center pt-28">
          <div className="leftsection justify-center text-3xl text-center m-11">
            Hello, My name is {""}
            <span className="purple text-purple-400">Vikram</span>
            <div>and I am a pasionate Web developer</div>
            <a href="#projects">
              <button
                id="#projects"
                className="bg-black text-white text-xl p-1 pb-2 pl-8 pr-8 font-bold border-2 rounded-3xl mt-6 mb-1 shadow-2xl hover:bg-white hover:text-black duration-300"
              >
                projects
              </button>
            </a>
          </div>

          {/* <div className="rightsection">
            <img
              src="./public/image/developer.png"
              alt="developer-image"
              className="w-3/4"
            />
          </div> */}

          <div className="animation w-7 h-12  border-2 rounded-2xl flex justify-center pt-7 mt-14">
            <div className="circle w-2 h-2 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>

        {/* about section  */}
        <div className="about  w-screen h-full bg-gray-950 p-40 ">
          <div className="about-content">
            <h1
              id="about"
              className=" text-white text-center font-bold text-5xl "
            >
              ABOUT ME
            </h1>
            <div className="border-2 border-gray-100 m-auto mt-7 w-9 font-extrabold rounded-full" ></div>
            <p className="about-para text-white text-center w-1/2  m-auto p-9">
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology
            </p>
          </div>

          <div className="aboutskills-section bg-gray-950 w-full flex flex-wrap justify-between">
            <div className="left-section text-white w-2/5 flex flex-col gap-9 mt-20">
              <h1 className="text-3xl font-bold">Get To Know Me!</h1>
              <p>
                A basic web developer specializes in creating and maintaining
                websites using HTML, CSS, and JavaScript. They focus on
                responsive design, user experience, and ensuring website
                functionality across different browsers and devices.
              </p>

              <p>
                I also like sharing content related to the stuff that I have
                learned over the years in Web Development so it can help other
                people of the Dev Community. Feel free to Connect or Follow me
                on my Linkedin and Instagram where I post useful content related
                to Web Development and Programmingp
              </p>

              <p>
                I'm open to Job opportunities where I can contribute, learn and
                grow. If you have a good opportunity that matches my skills and
                experience then don't hesitate to contact me.
              </p>

              <div className="button">
                <button
                  id="#projects-button"
                  className="bg-black text-white text-xl p-1 pb-2 pl-8 pr-8 font-bold border-2 rounded-3xl mt-6 mb-24 shadow-2xl hover:bg-white hover:text-black duration-300 "
                >
                  Contact
                </button>
              </div>
            </div>

            <div className="right-section text-white w-2/5 mt-20">
              <h1 className="skills-heading text-3xl font-bold">My Skills</h1>
              <div className="skills-section mt-10 flex flex-wrap gap-5">
                <div className="skills bg-white text-black border-1 rounded-md font-semibold w-20 text-center p-2">
                  HTML
                </div>
                <div className="skills bg-white text-black border-1 rounded-md font-semibold w-20 text-center p-2">
                  CSS
                </div>
                <div className="skills bg-white text-black border-1 rounded-md font-semibold w-24 text-center p-2">
                  JavaScript
                </div>
                <div className="skills bg-white text-black border-1 rounded-md font-semibold w-24 text-center p-2">
                  React
                </div>
                <div className="skills bg-white text-black border-1 rounded-md font-semibold w-24 text-center p-2">
                  Node.js
                </div>
                <div className="skills bg-white text-black border-1 rounded-md font-semibold w-24 text-center p-2">
                  Express.Js
                </div>
                <div className="skills bg-white text-black border-1 rounded-md font-semibold w-32 text-center p-2">
                  Mongo-DB
                </div>
                <div className="skills bg-white text-black border-1 rounded-md font-semibold w-32 text-center p-2">
                  Tailwind
                </div>
                <div className="skills bg-white text-black border-1 rounded-md font-semibold w-32 text-center p-2">
                  Bootstrap
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* porojects */}

        {/* <div id="projects" className="projects w-screen h-full"> */}
        <div
          id="projects"
          className="projects-content w-screen h-full bg-gray-950 p-10"
        >
          <div className="projects-header">
            <h1 className="bg-gray-950 text-white text-center font-bold text-5xl">
              PROJECTS
            </h1>
            <div className="border-2 border-gray-100 m-auto mt-7 w-9 font-extrabold rounded-full" ></div>
            <p
              id="projects-para"
              className="text-white text-center bg-gray-950 w-1/2  m-auto p-9"
            >
              Here you will find some of the personal and clients projects that
              I created with each project containing its own case study
            </p>
          </div>

          <div className="projects-img-section bg-gray-950-400 w-full flex flex-wrap justify-between">
            <div className="projects-left text-white w-2/5 mt-20">
              <div className="left-image w-4/5 h-2/3 bg-gray-950 relative mt-10 border border-gray-600 rounded-md m-auto  transition-transform duration-500 hover:scale-105 ">
                {/* <img src="./public/image/laptop.png" alt="" /> */}
                <img
                  src="./public/image/portfolio.png"
                  alt=""
                  className=" w-80 h-52 m-auto mt-7  transition-transform duration-500 transform hover:scale-110 "
                />
              </div>
            </div>

            <div className="projects-right text-white w-2/5 flex flex-col gap-9 mt-32">
              <h1 className="text-2xl font-bold">PORTFOLIO</h1>
              <p>
                Dopefolio is a successful Open-Source project that I created
                which have been featured on some of the biggest tech sites like
                CSS-Tricks, Hostinger, etc & used by thousands of developers
                globally.
              </p>

              <div className="button">
                {/* <a href=""> */}
                <button
                  id="#projects"
                  className="bg-black text-white text-xl p-1 pb-2 pl-8 pr-8 font-bold border-2 rounded-3xl mt-6 shadow-2xl hover:bg-white hover:text-black duration-300 "
                >
                  Case Study
                </button>
                {/* </a> */}
              </div>
            </div>
          </div>

          {/* second */}

          <div className="projects-img-section bg-gray-950-400 w-full flex flex-wrap justify-between">
            <div className="projects-left text-white w-2/5 mt-20">
              <div className="left-image w-4/5 h-2/3 bg-gray-950 relative mt-10 border border-gray-600 rounded-md m-auto  transition-transform duration-500 hover:scale-105">
                {/* <img src="./public/image/laptop.png" alt="" /> */}
                <img
                  src="./public/image/portfolio.png"
                  alt=""
                  className="w-80 h-52 m-auto mt-7  transition-transform duration-500 transform hover:scale-110"
                />
              </div>
            </div>

            <div className="projects-right text-white w-2/5 flex flex-col gap-9 mt-32">
              <h1 className="text-2xl font-bold">Tic Tac Toe</h1>
              <p>
                A Tic Tac Toe game developed with HTML, CSS, and JavaScript
                features an interactive grid for player moves. It incorporates
                logic for winning conditions, allowing users to play against
                each other or the computer.
              </p>

              <div className="button">
                <a href="">
                  <button
                    id="#projects"
                    className="bg-black text-white text-xl p-1 pb-2 pl-8 pr-8 font-bold border-2 rounded-3xl mt-6 shadow-2xl hover:bg-white hover:text-black duration-300 "
                  >
                    Case Study
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* third */}

          <div className="projects-img-section bg-gray-950-400 w-full flex flex-wrap justify-between">
            <div className="projects-left text-white w-2/5 mt-20">
              <div className="left-image w-4/5 h-2/3 bg-gray-950 relative mt-10 border border-gray-600 rounded-md m-auto  transition-transform duration-500 hover:scale-105">
                {/* <img src="./public/image/laptop.png" alt="" /> */}
                <img
                  src="./public/image/portfolio.png"
                  alt=""
                  className="w-80 h-52 m-auto mt-7  transition-transform duration-500 transform hover:scale-110"
                />
              </div>
            </div>

            <div className="projects-right text-white w-2/5 flex flex-col gap-9 mt-32">
              <h1 className="text-2xl font-bold">Amazon Clone</h1>
              <p>
                A Amazon clone created using HTML and CSS mimics the e-commerce
                platform's layout and design. It includes features like product
                listings, navigation, and demonstrating foundational web
                development skills.
              </p>

              
                <div className="" href="">
                  <button
                    id="#projects"
                    className="bg-black text-white text-xl p-1 pb-2 pl-8 pr-8 font-bold border-2 rounded-3xl mt-6 mb-24 shadow-2xl hover:bg-white hover:text-black duration-300"
                  >
                    Case Study
                  </button>
                </div>
          
            </div>
          </div>
        </div>
        {/* </div> */}

        {/* CONTACT  */}
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
