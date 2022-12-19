import {
  faCss3,
  faReact,
  faNodeJs,
  faAws,
  faNpm,
  faGitAlt,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons"

import ChatBoxIMG from "../../assets/ChatBoxIMG.PNG";
import eCommerceIMG from "../../assets/Ecommerce.PNG"
import CryptoTrackerIMG from '../../assets/CryptoTrackerIMG.PNG';
import PortfolioIMG from '../../assets/Portfolio.PNG';
import RecipeBookIMG from '../../assets/RecipeBookIMG.PNG';

export const projects =[
  {
    name: "Recipe Book",
    imageSrc: RecipeBookIMG,
    imgAlt: "Recipe book home page",
    description: "Recipe Book simplifies the storage and sharing of recipes between users allowing users to upload their own recipes and explore the recipes of others.",
    techL: [
      {
        name: "React" ,
        icon: faReact
      },
      {
        name: "Tailwind" ,
        icon: faCss3
      },
      {
        name: "Node JS" ,
        icon: faNodeJs
      }
    ],
    techR: [
      {
        name: "MySQL" ,
        icon: faDatabase
      },
      {
        name: "AWS",
        icon: faAws
      },
      {
        name: "Git" ,
        icon: faGitAlt
      },
    ],
    liveUrl: "https://main.d4u3ts97tb3ea.amplifyapp.com/",
    codeUrl: "https://github.com/sc-martel93/recipe-book"
  }, 
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
    description: "Fully functional eCommerce web app where users can buy cool vintage items. Created using Material UI, commerce js API and stripe api for payment processing.",
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
    description: "Crypto tracker is an app that tracks the current price of popular crypto currencies, created using React js and the coin gecko API.",
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
    name: "My Portfolio Page",
    imageSrc: PortfolioIMG,
    imgAlt: "Scott's portfolio home page",
    description: "A simple web page created to showcase my portfolio, thanks for visting!",
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