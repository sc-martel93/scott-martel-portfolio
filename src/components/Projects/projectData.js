import {
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faNodeJs,
  faAws,
  faNpm,
  faGitAlt,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";

import ChatBoxIMG from "../../assets/ChatBoxIMG.PNG";
import eCommerceIMG from "../../assets/Ecommerce.PNG"
import CryptoTrackerIMG from '../../assets/CryptoTrackerIMG.PNG';
import PortfolioIMG from '../../assets/Portfolio.PNG';
import DrumScriptIMG from '../../assets/DrumScript.PNG';

export const projects =[ 
  {
    name: "Chat Box",
    imageSrc: ChatBoxIMG,
    imgAlt: "chat box home page",
    description: "An online chat room application that includes user authentication through google and allows the users to communicate through text.",
    techL: [
      {
        name: "React JS" ,
        icon: faReact
      },
      {
        name: "CSS" ,
        icon: faCss3
      },
      {
        name: "npm" ,
        icon: faNpm
      },
    ],
    techR: [
      {
        name: "Firebase" ,
        icon: faGoogle
      },
      {
        name: "Git" ,
        icon: faGitAlt
      },
    ],
    liveUrl: "https://chat-app-cd6c7.web.app/",
    codeUrl: "https://github.com/sc-martel93/chat-app/"
  },
  {
    name: "Vintage eCommerce",
    imageSrc: eCommerceIMG,
    imgAlt: "Vintage ecommerce home page",
    description: "Fully functional eCommerce web app using Material UI, commerce js API and stripe api for payment processing",
    techL: [
      {
        name: "React JS" ,
        icon: faReact
      },
      {
        name: "CSS" ,
        icon: faCss3
      },
      {
        name: "npm" ,
        icon: faNpm
      },
    ],
    techR: [
      {
        name: "Firebase" ,
        icon: faGoogle
      },
      {
        name: "Git" ,
        icon: faGitAlt
      },
    ],
    liveUrl: "https://vintage-ecom.web.app/",
    codeUrl: "https://github.com/sc-martel93/ecommerce"
  },
  {
    name: "Crypto Tracker",
    imageSrc: CryptoTrackerIMG,
    imgAlt: "Crypto tracker home page",
    description: "Crypto tracker is an app created using React js and the coin gecko API that tracks the current price of popular crypto currencies.",
    techL: [
      {
        name: "React JS" ,
        icon: faReact
      },
      {
        name: "CSS" ,
        icon: faCss3
      },
    ],
    techR: [
      {
        name: "npm" ,
        icon: faNpm
      },
      {
        name: "Git" ,
        icon: faGitAlt
      },
    ],
    liveUrl: "https://sc-martel93.github.io/Crypto-Tracker/",
    codeUrl: "https://github.com/sc-martel93/Crypto-Tracker/tree/master"
  },
  {
    name: "Drum Script",
    imageSrc: DrumScriptIMG,
    imgAlt: "Drum Script home page",
    description: "Drum Script is a simple drum pad web application created using HTML, CSS and Javascript.",
    techL: [
      {
        name: "HTML" ,
        icon: faHtml5
      },
      {
        name: "CSS" ,
        icon: faCss3
      },
    ],
    techR: [
      {
        name: "Javascript" ,
        icon: faJsSquare
      },
      {
        name: "Git" ,
        icon: faGitAlt
      },
    ],
    liveUrl: "https://drum-script.web.app/",
    codeUrl: "https://github.com/sc-martel93/js-drumk-kit"
  },
  {
    name: "My Portfolio Page",
    imageSrc: PortfolioIMG,
    imgAlt: "Scott's portfolio home page",
    description: " I designed my portfolio web page using Figma and implemented the page using React JS and CSS. For the contact form I used EmailJS to handle sending the message to me via email.",
    techL: [
      {
        name: "React JS" ,
        icon: faReact
      },
      {
        name: "CSS" ,
        icon: faCss3
      },
      {
        name: "npm" ,
        icon: faNpm
      },
    ],
    techR: [
      {
        name: "AWS" ,
        icon: faAws
      },
      {
        name: "Git" ,
        icon: faGitAlt
      },
    ],
    liveUrl: "https://main.ddpf6bmb59zbu.amplifyapp.com/",
    codeUrl: "https://github.com/sc-martel93/scott-martel-portfolio"
  },
]