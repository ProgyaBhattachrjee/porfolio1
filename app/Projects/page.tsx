import React from 'react';
import Card from '../Components/Card'; // Assuming Card component is imported
import i1 from "../../public/images/home.png"
import i2 from "../../public/images/Screenshot 2024-06-08 134934.png"
import i3 from "../../public/images/mix.png"
import i4 from "../../public/images/daily.png"
import i5 from "../../public/images/tictac.png"
import i6 from "../../public/images/voice.png"
import i7 from "../../public/images/anim1.png"
import i8 from "../../public/images/anim2.png"
import Card1 from '../Components/Card1';
import p1 from "../../public/images/port.png"
import p2 from "../../public/images/sup.png"
import p3 from "../../public/images/Screenshot 2024-07-22 111244.png"
import p4 from "../../public/images/Screenshot 2024-07-22 111425.png"
import p5 from "../../public/images/Screenshot 2024-07-22 124319.png"

const projects = [
  {
    id: 1 ,
    imageUrl: i1,
    title: "HomeStore",
    description: "Home Store App That Simplifies And Streamlines Home Décor Shopping. I Noticed That Many People Find Traditional Shopping For Home Goods To Be Time-Consuming And Overwhelming. My Goal With This App Was To Create A Curated And User-Friendly Platform Where People Could Browse Beautiful Collections And Easily Purchase Items For Their Homes.",
    githubUrl: "https://github.com/ProgyaBhattachrjee",
    websiteUrl: "https://cerulean-rugelach-2a9670.netlify.app/"
  },
  {
    id: 2 ,
    imageUrl: i2,
    title: "GitUsers",
    description: "Gituser Is A Website Here We Can Seach Any Git User And See Their Info Alongside Top 5 Languages Used In A Pie Chart And Stars Recived In A Donut Chart. Here React.Js,Html And Css Used",
    githubUrl: "https://github.com/ProgyaBhattachrjee",
    websiteUrl: "https://6664130a254c8ba0eac042bf--precious-queijadas-699149.netlify.app/dashboard"
  },
  {
    id: 3 ,
    imageUrl: i3,
    title: "MixMaster",
    description: "My Project, Mixmaster, Is An Innovative App That Utilizes API To Show Recipies. It Caters To Users Interested In Recipes And Aims To Give Recipes Through A User-Friendly And Engaging Interface",
    githubUrl: "https://github.com/ProgyaBhattachrjee",
    websiteUrl: "https://666023fad3f1ddd849868707--ornate-lebkuchen-4aed60.netlify.app/"
  },
  {
    id: 4,
    imageUrl: i4,
    title: "Dailyo",
    description: "My Project, Dailyo, Is A User-Friendly Diary App Designed To Empower Individuals With A Convenient And Engaging Platform For Self-Reflection. It Caters To Users Interested In Personal Growth And Well-Being, Aiming To Provide A Space For Them To Capture Their Thoughts, Feelings, And Experiences In A Daily Journaling Habit.",
    githubUrl: "https://github.com/ProgyaBhattachrjee",
    websiteUrl: "https://66602342f1ccecd0c36723a8--gleaming-marzipan-e8cd31.netlify.app/"
  },
  {
    id: 5 ,
    imageUrl: i5,
    title: "Tic-Tac-Toe Game",
    description: "Basic Tic-Tac_toe Game 2 Players Can Play.Here Only HTML,CSS And JS Used",
    githubUrl: "https://github.com/ProgyaBhattachrjee",
    websiteUrl: "https://6660738b246f6f256b9b7a0c--thriving-treacle-ee7fe1.netlify.app/"
  },
  {
    id: 6 ,
    imageUrl: i6,
    title: "Text To Voice Convertor",
    description: "Changes Text To Voice.Here Only HTML,CSS And JS Used",
    githubUrl: "https://github.com/ProgyaBhattachrjee",
    websiteUrl: "https://666074ee843f6729fb61733e--earnest-salmiakki-c39c60.netlify.app/"
  },
  {
    id: 7 ,
    imageUrl: i7,
    title: "Parallax Website",
    description: "Animated Website.Here Only HTML,CSS And JS Used",
    githubUrl: "https://github.com/ProgyaBhattachrjee",
    websiteUrl: "https://6660773548b0f52900bfdf81--cozy-churros-67402e.netlify.app/"
  },
  {
    id: 8 ,
    imageUrl: i8,
    title: "Day-Night Convertor",
    description: "Animated Website. Day And Night Can Be Changed.Here Only HTML,CSS And JS Used",
    githubUrl: "https://github.com/ProgyaBhattachrjee",
    websiteUrl: "https://66607751843f672c606173be--harmonious-kataifi-cb5c0e.netlify.app/"
  },

];
const figma = [
  {
    id: 1 ,
    imageUrl: p1,
    title: "My portfolio",
    description: "Design of this website",
    websiteUrl: "https://www.figma.com/design/oOGhfTyehRGV6CrWbBVRw4/portfolio?node-id=0-1&t=6lq7OCbBqPz4TSr9-0"
  },
  {
    id: 2 ,
    imageUrl: p2,
    title: "Sign up page",
    description: "Sign up pages for a mobile app",
    websiteUrl: "https://www.figma.com/design/dReojrm29RxisPSoEq7Rj3/SignUp-page?t=6lq7OCbBqPz4TSr9-0"
  },
  {
    id: 3 ,
    imageUrl: p3,
    title: "Movie Ticket app",
    description: "An app for booking Movie ticket",
    websiteUrl: "https://www.figma.com/design/lDPseS03ERNuDnoBYFvVDh/Movie-Tickets?node-id=2-301&t=rk3CFzuuDqkEntR1-0"
  },
  {
    id: 4 ,
    imageUrl: p4,
    title: "Ecommerce Website",
    description: "Ecommerce website design",
    websiteUrl: "https://www.figma.com/design/jutw5lm0FS002zkjGaW7ER/Techy?node-id=0-1&t=rk3CFzuuDqkEntR1-0"
  },
  {
    id: 5,
    imageUrl: p5,
    title: "Whatsapp redesign",
    description: "Redesign",
    websiteUrl: "https://figma.com/design/eTkhNL1S8rkxA2KBtvwzhQ/whatsapp?node-id=0-1&t=rk3CFzuuDqkEntR1-0"
  },
];
const ProjectsPage = () => {
  return (
    <div className="projects-container">
      <p className="p2">Web Creations</p>
      <div className="projects">
        {projects.map((project) => (
          <Card key={project.id} {...project} /> // Spread all project properties
        ))}
      </div>
      <p className="p2">Figma Designs</p>
      <div className="projects">
        {figma.map((project) => (
          <Card1 key={project.id} {...project} /> // Spread all project properties
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
