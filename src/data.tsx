// Images About Page
const reactjs = require("./assets/about/reactjs.png");
const nextjs = require("./assets/about/nextjs.png");
const tailwind = require("./assets/about/tailwind.png");
const nodejs = require("./assets/about/nodejs.png");
const git = require("./assets/about/git.png");
const mysql = require("./assets/about/mysql.png");
const gcp = require("./assets/about/gcp.png");
const firebase = require("./assets/about/firebase.png");
const js = require("./assets/about/js.png");
const ts = require("./assets/about/ts.png");
const reactnative = require("./assets/about/reactjs.png");

// Images Projects Page
const project1 = require("./assets/PortoReactNative1.jpg");
const project2 = require("./assets/KYC.jpg");
const project3 = require("./assets/kopikuy.png");

export const dataExperience = {
  datas: [
    {
      id: 0,
      company: "My Self",
      date: "January 2023 - January 2023",
      title: "Junior Frontend Engineer",
      desc: "Build Portofolio web app using React Native. i learn many things about react native and typescript in here",
    },
    {
      id: 1,
      company: "BangBeli",
      date: "Oktober 2022 - January 2023",
      title: "Front End Developer Intern",
      desc: "Develop KYC Blast using React Native and Type Script. I learn a lot about work together with team UI/UX, System Analyst and Product Manager.",
    },
    {
      id: 2,
      company: "Prakerja - Riki Course",
      date: " September 2023",
      title: "Frontend Web Developer ",
      desc: "Create web Kopi Kuy design on Figma and develop it with Bootstrap .There, I learn about agile Bootstrap.",
    },
    // {
    //   id: 3,
    //   company: "Bangkit Academy 2022",
    //   date: "February 2022 - July 2022",
    //   title: "Cloud Computing Learning Path",
    //   desc: "Learn Cloud Computing Fundamental using Google Cloud Platform, Softskills, and got friends from all over Indonesia",
    // },
  ],
};

export const dataSkills = {
  datas: [
    {
      id: 0,
      image_url: reactjs,
      title: "React.js",
    },
    {
      id: 1,
      image_url: reactjs,
      title: "React N",
    },
    {
      id: 2,
      image_url: nodejs,
      title: "Node.js",
    },
    {
      id: 3,
      image_url: js,
      title: "Javascript",
    },
    {
      id: 4,
      image_url: ts,
      title: "Typescript",
    },
    {
      id: 5,
      image_url: tailwind,
      title: "Tailwind",
    },
    {
      id: 6,
      image_url: git,
      title: "Git",
    },
    {
      id: 7,
      image_url: mysql,
      title: "MySQL",
    },
    // {
    //   id: 8,
    //   image_url: firebase,
    //   title: "Firebase",
    // },
    // {
    //   id: 9,
    //   image_url: gcp,
    //   title: "GCP",
    // },
  ],
};

export const projectCards = {
  datas: [
    {
      id: 0,
      image_url: project1,
      project_name: "My Porto",
      desc: "Develop a project Portofolio used React Native and Typescript",
    },
    {
      id: 1,
      image_url: project2,
      project_name: "Know Your Customer",
      desc: "Slicing Design from UI/UX in figma to React Native web app using TypeScript",
    },
    {
      id: 2,
      image_url: project3,
      project_name: "Kopi-Kuy",
      desc: "Create a Web Caoffeshop with Bootstrap 5. And then deploy it using Cloud",
    },
  ],
};
