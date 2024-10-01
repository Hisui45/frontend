import React, { useEffect } from "react";
import "./App.css";
import "./styles.scss";
import { TfiArrowCircleUp } from "react-icons/tfi";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaHtml5,
  FaPlay,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiCss3,
  SiPhp,
  SiKotlin,
  SiJetpackcompose,
  SiSqlite,
  SiMysql,
  SiTailwindcss,
  SiElectron,
  SiGithub,
} from "react-icons/si";
import { SlArrowDown } from "react-icons/sl";
import { MdOpenInNew } from "react-icons/md";
import logo from "./assets/logo 2-cropped.svg";
import shinyPreview from "./assets/shiny-tooth-preview.PNG";
import cyberPreview from "./assets/cyber-preview.PNG";
import scoddPreview from "./assets/scodd-mockup.png";
import sudokuPreview from "./assets/sudoku-preview.PNG";
import tictactoePreview from "./assets/tictatoe-preview.PNG";
import goldPreview from "./assets/gold-preview.PNG";
import clonePreview from "./assets/clone-preview.PNG";
function App() {
  useEffect(() => {
    const video = document.getElementById("bg-video");
    if (video) {
      video.playbackRate = 0.6; // Change the playback rate as needed (0.5 is half speed)
    }
  }, []);

  const txtType = (el, toRotate, period) => {
    let loopNum = 0;
    let txt = "";
    let isDeleting = false;

    const tick = () => {
      const i = loopNum % toRotate.length;
      const fullTxt = toRotate[i];

      if (isDeleting) {
        txt = fullTxt.substring(0, txt.length - 1);
      } else {
        txt = fullTxt.substring(0, txt.length + 1);
      }

      el.innerHTML = '<span class="wrap">' + txt + "</span>";

      let delta = 200 - Math.random() * 100;

      if (isDeleting) {
        delta /= 2;
      }

      if (!isDeleting && txt === fullTxt) {
        delta = period;
        isDeleting = true;
      } else if (isDeleting && txt === "") {
        isDeleting = false;
        loopNum++;
        delta = 500;
      }

      setTimeout(() => {
        tick();
      }, delta);
    };

    tick();
  };

  const Typewriter = () => {
    useEffect(() => {
      const elements = document.getElementsByClassName("typewrite");
      for (let i = 0; i < elements.length; i++) {
        const toRotate = elements[i].getAttribute("data-type");
        const period = elements[i].getAttribute("data-period");
        if (toRotate) {
          txtType(
            elements[i],
            JSON.parse(toRotate),
            parseInt(period, 10) || 2000
          );
        }
      }
      // INJECT CSS
      const css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
      document.body.appendChild(css);
    }, []);
  };

  return (
    <div className="App">
      <div class="video-container">
        {/* <video autoPlay muted loop playsInline id="bg-video">
          <source src={galaxyImg} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <div class="content min-h-[100vh] flex flex-col justify-between">
          <div className="nav flex justify-between items-start mt-4 ml-5 mr-8">
            <img src={logo} alt="" width="50" />
            <div className="flex gap-4 text-right">
              <a href="#" className="">
                Home
              </a>
              <a href="#projects" className="">
                Projects
              </a>
              <a href="#contact" className="">
                Contact
              </a>
              <a className="text-white">Hire me</a>
            </div>
          </div>
          <div className="flex flex-col items-center intro text-7xl text-center mt-32">
            <h2 className="anton-regular">Looking for a ...</h2>
            <span className="dynamic anton-regular "></span>
            <p className="desc text-lg text-center mt-32">
              Well, you're in the right place. Hi. I'm Jade. I create things
              with code. Websites, web apps, software, mobile apps... I like
              doing it all.
            </p>
            <a href="#projects" className="cursor-pointer group no-underline">
              <div className="flex items-center mt-16 gap-2 text-[#a2a2a2] text-base group-hover:text-white ">
                View Projects
                <SlArrowDown
                  size="12px"
                  className="group-hover:text-white text-[#a2a2a2] mt-1"
                />
              </div>
            </a>
          </div>
          <div className="flex flex-1 grow mb-4 ml-5 mr-8 gap-2 items-end">
            <a
              href="https://github.com/Hisui45"
              className="cursor-pointer group"
            >
              <SiGithub
                size="28px"
                className="group-hover:text-white text-[#a2a2a2]"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/jadelocke/"
              className="cursor-pointer group"
            >
              <FaLinkedin
                size="28px"
                className="group-hover:text-white text-[#a2a2a2]"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-32 my-24 grid grid-cols-3">
        <div className="pb-12">
          <h2 className="anton-regular text-7xl uppercase">
            <span className="pb-2">Tech</span>
            <br></br>
            <span className="">nolo</span>
            <br></br>
            <span className="">gies</span>
          </h2>
        </div>
        <div>
          <h3 className="uppercase text-2xl text-[#a2a2a2] mb-4">MERN Stack</h3>
          <div className="flex flex-col gap-4 w-24 text-lg">
            <div className="grid grid-cols-2 ">
              <SiMongodb size="32px" color="#fff" />
              <p className="m-0">MongoDB</p>
            </div>
            <div className="grid grid-cols-2">
              <SiExpress size="32px" color="#fff" />
              <p className="m-0">Express</p>
            </div>
            <div className="grid grid-cols-2">
              <FaReact size="32px" color="#fff" />
              <p className="m-0">React</p>
            </div>
            <div className="grid grid-cols-2">
              <FaNodeJs size="32px" color="#fff" />
              <p className="m-0">NodeJS</p>
            </div>
          </div>

          <h4 className="text-2xl text-[#a2a2a2] mt-4 mb-4 uppercase">
            Languages
          </h4>
          <div className="flex flex-col gap-4 w-24 text-lg">
            <div className="grid grid-cols-2 ">
              <FaHtml5 size="32px" color="#fff" />
              <p className="m-0">HTML5</p>
            </div>
            <div className="grid grid-cols-2">
              <SiJavascript size="32px" color="#fff" />
              <p className="m-0">Javascript</p>
            </div>
            <div className="grid grid-cols-2">
              <SiCss3 size="32px" color="#fff" />
              <p className="m-0">CSS</p>
            </div>
            <div className="grid grid-cols-2">
              <SiPhp size="32px" color="#fff" />
              <p className="m-0">PHP</p>
            </div>
            <div className="grid grid-cols-2">
              <FaJava size="32px" color="#fff" />
              <p className="m-0">Java</p>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-2xl text-[#a2a2a2] mb-4 uppercase">Libraries</h4>
          <div className="flex flex-col gap-4 w-32 text-lg">
            <div className="grid grid-cols-2 ">
              <SiTailwindcss size="32px" color="#fff" />
              <p className="m-0">TailwindCSS</p>
            </div>
            <div className="grid grid-cols-2">
              <SiElectron size="32px" color="#fff" />
              <p className="m-0 text-nowrap">Electron</p>
            </div>
          </div>
          <h4 className="text-2xl text-[#a2a2a2] mt-4 mb-4 uppercase">
            Android
          </h4>
          <div className="flex flex-col gap-4 w-32 text-lg">
            <div className="grid grid-cols-2 ">
              <SiKotlin size="32px" color="#fff" />
              <p className="m-0">Kotlin</p>
            </div>
            <div className="grid grid-cols-2">
              <SiJetpackcompose size="32px" color="#fff" />
              <p className="m-0 text-nowrap">Jetpack Compose</p>
            </div>
            <div className="grid grid-cols-2">
              <SiSqlite size="32px" color="#fff" />
              <p className="m-0 text-nowrap">SQLite</p>
            </div>
          </div>
          <h4 className="text-2xl text-[#a2a2a2] mt-4 mb-4 uppercase">
            Backend
          </h4>
          <div className="flex flex-col gap-4 w-32 text-lg">
            <div className="grid grid-cols-2 ">
              <SiMysql size="32px" color="#fff" />
              <p className="m-0">SQL</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-32 my-24 grid grid-cols-3 gap-4">
        <div className="pb-12">
          <h2 className="anton-regular text-7xl uppercase" id="projects">
            <span className="pb-2">Pro</span>
            <br></br>
            <span className="">jects</span>
          </h2>
        </div>
        <div className="col-span-2">
          <div>
            <h4 className="text-2xl text-[#a2a2a2]  mt-4 mb-4 uppercase">
              GoldTune
            </h4>
            <img src={goldPreview} className="object-contain" />
            <div className="grid grid-cols-6">
              <div className="col-span-5">
                Complicated story this one here.
                <p className="mb-0 mt-2"></p>
                <ul className="flex flex-wrap list-disc list-inside gap-x-8 px-0 text-[#a2a2a2]">
                  <li>Electron</li>
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>JavaScript</li>
                  <li>CSS</li>
                  <li>HTML</li>
                </ul>
              </div>
              <div className="flex justify-end gap-3 py-3">
                <a
                  className="cursor-pointer group"
                  href="https://hisui45.github.io/tiny-tic-tac-toe/"
                  target="_blank"
                >
                  <MdOpenInNew
                    size="30px"
                    className="group-hover:text-white text-[#a2a2a2]"
                  />
                </a>
                <a
                  className="cursor-pointer group"
                  href="https://github.com/Hisui45/goldtune"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <SiGithub
                    size="28px"
                    className="group-hover:text-white text-[#a2a2a2]"
                  />
                </a>
              </div>
            </div>

            {/* <p>Check out the database documentation.</p> */}
          </div>
          <div>
            <h4 className="text-2xl text-[#a2a2a2]  mt-4 mb-4 uppercase">
              Shiny Tooth Dental
            </h4>
            <img src={shinyPreview} className="object-contain" />
            <div className="grid grid-cols-4">
              <div className="col-span-3">
                <p className="mb-0 mt-2">
                  A dashboard management systems to handle patients,
                  appointments, billing, and services for a dental office.
                </p>
                <ul className="flex flex-wrap list-disc list-inside gap-x-8 px-0 text-[#a2a2a2]">
                  <li>React</li>
                  <li>Express</li>
                  <li>NodeJS</li>
                  <li>MySQL</li>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>TailwindCSS</li>
                </ul>
              </div>
              <div className="flex justify-end gap-3 py-3">
                <a
                  className="cursor-pointer group"
                  href="https://shiny-tooth-dental.vercel.app/"
                  target="_blank"
                >
                  <MdOpenInNew
                    size="30px"
                    className="group-hover:text-white text-[#a2a2a2]"
                  />
                </a>
                <a
                  className="cursor-pointer group"
                  href="https://github.com/Hisui45/shiny-tooth-dental"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <SiGithub
                    size="28px"
                    className="group-hover:text-white text-[#a2a2a2]"
                  />
                </a>
              </div>
            </div>
            {/* <p>Check out the database documentation.</p> */}
          </div>
          <div>
            <h4 className="text-2xl text-[#a2a2a2]  mt-4 mb-4 uppercase">
              Digital Agency Website - cyber·space
            </h4>
            <img src={cyberPreview} className="object-contain" />
            <div className="grid grid-cols-4">
              <div className="col-span-3">
                <p className="mb-0 mt-2">
                  A sample business website for a digital agency.
                </p>
                <ul className="flex flex-wrap list-disc list-inside gap-x-8 px-0 text-[#a2a2a2]">
                  <li>JavaScript</li>
                  <li>HTML5</li>
                  <li>TailwindCSS</li>
                  <li>SCSS</li>
                </ul>
              </div>
              <div className="flex justify-end gap-3 py-3">
                <a
                  className="cursor-pointer group"
                  href="https://hisui45.github.io/cyber-space/"
                  target="_blank"
                >
                  <MdOpenInNew
                    size="30px"
                    className="group-hover:text-white text-[#a2a2a2]"
                  />
                </a>
                <a
                  className="cursor-pointer group"
                  href="https://github.com/Hisui45/cyber-space"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <SiGithub
                    size="28px"
                    className="group-hover:text-white text-[#a2a2a2]"
                  />
                </a>
              </div>
            </div>

            {/* <p>Check out the database documentation.</p> */}
          </div>
          <div>
            <h4 className="text-2xl text-[#a2a2a2]  mt-4 mb-4 uppercase">
              SCODD!
            </h4>
            <img src={scoddPreview} className="object-contain" />
            <div className="grid grid-cols-6">
              <div className="col-span-5">
                <p className="mb-0 mt-2">
                  A chore management mobile app designed to cater to the diverse
                  needs of individuals dealing with ADHD, depression, or those
                  leading busy and disorganized lives. The app simplifies the
                  chore management process, providing essential support for
                  users striving to maintain a clean and organized living
                  environment.
                </p>
                <ul className="flex flex-wrap list-disc list-inside gap-x-8 px-0 text-[#a2a2a2]">
                  <li>Kotlin</li>
                  <li>Jetpack Compose</li>
                  <li>SQLite</li>
                </ul>
              </div>
              <div className="flex justify-end gap-3 py-3">
                {/* <a
                className="cursor-pointer group"
                href="https://github.com/Hisui45/scodd_app"
                target="_blank"
              >
                <MdOpenInNew
                  size="30px"
                  className="group-hover:text-white text-[#a2a2a2]"
                />
              </a> */}
                <a
                  className="cursor-pointer group"
                  href="https://github.com/Hisui45/scodd_app"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <SiGithub
                    size="28px"
                    className="group-hover:text-white text-[#a2a2a2]"
                  />
                </a>
              </div>
            </div>

            {/* <p>Check out the database documentation.</p> */}
          </div>
          <div>
            <h4 className="text-2xl text-[#a2a2a2]  mt-4 mb-4 uppercase">
              Sudoku
            </h4>
            <img src={sudokuPreview} className="object-contain" />
            <div className="grid grid-cols-6">
              <div className="col-span-5">
                <p className="mb-0 mt-2">Pretty straightforward. Sudoku.</p>
                <ul className="flex flex-wrap list-disc list-inside gap-x-8 px-0 text-[#a2a2a2]">
                  <li>Java</li>
                  <li>JavaFX</li>
                </ul>
              </div>
              <div className="flex justify-end gap-3 py-3">
                <a
                  className="cursor-pointer group"
                  href="/assets/sudoku-project-main.zip"
                  download
                >
                  <MdOpenInNew
                    size="30px"
                    className="group-hover:text-white text-[#a2a2a2]"
                  />
                </a>
                <a
                  className="cursor-pointer group"
                  href="https://github.com/Hisui45/sudoku-project"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <SiGithub
                    size="28px"
                    className="group-hover:text-white text-[#a2a2a2]"
                  />
                </a>
              </div>
            </div>

            {/* <p>Check out the database documentation.</p> */}
          </div>
          <div>
            <h4 className="text-2xl text-[#a2a2a2]  mt-4 mb-4 uppercase">
              Tiny Tic-Tac-Toe
            </h4>
            <img src={tictactoePreview} className="object-contain" />
            <div className="grid grid-cols-6">
              <div className="col-span-5">
                It's tiny. Just wanted to show that off.
                <p className="mb-0 mt-2"></p>
                <ul className="flex flex-wrap list-disc list-inside gap-x-8 px-0 text-[#a2a2a2]">
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>
              <div className="flex justify-end gap-3 py-3">
                <a
                  className="cursor-pointer group"
                  href="https://hisui45.github.io/tiny-tic-tac-toe/"
                  target="_blank"
                >
                  <MdOpenInNew
                    size="30px"
                    className="group-hover:text-white text-[#a2a2a2]"
                  />
                </a>
                <a
                  className="cursor-pointer group"
                  href="https://github.com/Hisui45/sudoku-project"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <SiGithub
                    size="28px"
                    className="group-hover:text-white text-[#a2a2a2]"
                  />
                </a>
              </div>
            </div>

            {/* <p>Check out the database documentation.</p> */}
          </div>
          <div>
            <h4 className="text-2xl text-[#a2a2a2]  mt-4 mb-4 uppercase">
              Chirper - Twitter Clone
            </h4>
            <img src={clonePreview} className="object-contain" />
            <div className="grid grid-cols-6">
              <div className="col-span-5">
              A school project made me do it.
                <p className="mb-0 mt-2"></p>
                <ul className="flex flex-wrap list-disc list-inside gap-x-8 px-0 text-[#a2a2a2]">
                  <li>Java</li>
                  <li>HTML</li>
                </ul>
              </div>
              <div className="flex justify-end gap-3 py-3">
                {/* <a
                  className="cursor-pointer group"
                  href="https://hisui45.github.io/tiny-tic-tac-toe/"
                  target="_blank"
                >
                  <MdOpenInNew
                    size="30px"
                    className="group-hover:text-white text-[#a2a2a2]"
                  />
                </a> */}
                <a
                  className="cursor-pointer group"
                  href="https://github.com/Hisui45/chirper"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <SiGithub
                    size="28px"
                    className="group-hover:text-white text-[#a2a2a2]"
                  />
                </a>
              </div>
            </div>

            {/* <p>Check out the database documentation.</p> */}
          </div>
        </div>
      </div>
      <div className="mx-32 my-24 grid grid-cols-2 gap-4">
        <div className="pb-12">
          <h2 className="anton-regular text-7xl uppercase" id="contact">
            <span className="pb-2">Con</span>
            <br></br>
            <span className="">tact</span>
          </h2>
          {/* <p className="w-48">
            Ready to end your search and take the next step?
          </p> */}
        </div>
        <form
          action="#"
          method="post"
          className="space-y-2 w-96 justify-self-center"
        >
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
            className="bg-transparent border-2 rounded-sm w-96 p-2"
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            className="bg-transparent border-2 rounded-sm w-96 p-2"
          />
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            required
            className="bg-transparent border-2 rounded-sm w-96 h-48 resize-none p-2"
          ></textarea>
          <br></br>
          <input
            type="submit"
            value="Submit"
            className="transition-transform ease-in-out bg-transparent hover:border-white hover:border rounded-sm p-2"
          />
        </form>
      </div>
      <div className="flex flex-col items-center mb-4">
        <a href="#" className="group">
          <TfiArrowCircleUp
            size="36px"
            className="group-hover:animate-bounce text-white"
          />
        </a>
        <p className="mt-32 uppercase">Jade Locke &#169;2024</p>
      </div>
      
    </div>
  );
}

export default App;
