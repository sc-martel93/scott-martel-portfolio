import {
  faCss3,
  faReact,
  faAws,
  faNpm,
  faGitAlt,
  faGoogle, 
} from "@fortawesome/free-brands-svg-icons";
import { faC, faLemon } from "@fortawesome/free-solid-svg-icons";

import eCommerceIMG from "../../assets/Ecommerce.PNG"
import CryptoTrackerIMG from '../../assets/CryptoTrackerIMG.PNG';
import PortfolioIMG from '../../assets/Portfolio.PNG';
import BandEQ from '../../assets/3BandEQ.png'

export const projects =[
  {
    name: "Three Band Equalizer",
    imageSrc: BandEQ,
    imgAlt: "3-Band-Equalizer",
    description: "Three Band Equalizer is a user-friendly, C++ and JUCE framework-based audio plugin with real-time feedback, suitable for professionals and beginners in various digital audio workstations.",
    techL: [
      {
        name: "C++" ,
        icon: faC
      },
      {
        name: "JUCE" ,
        icon: faLemon
      },
    ],
    techR: [
      {
        name: "Git" ,
        icon: faGitAlt
      },
    ],
    liveUrl: "https://drive.google.com/file/d/1SWQrIKPlvY_5l9XOh7b7zUtdjvC2RvU0/view?usp=sharing",
    codeUrl: "https://github.com/sc-martel93/Three-Band-EQ"
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
    liveUrl: "https://www.scottadev.com",
    codeUrl: "https://github.com/sc-martel93/scott-martel-portfolio"
  },
]