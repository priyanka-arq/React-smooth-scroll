import Image1 from "../../images/1.jpeg";
import Image2 from "../../images/2.jpeg";
import Image3 from "../../images/3.jpeg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "KidsWorld",
  headline: "We are for kids, not for profit!",
  description:
    "At KidsWorld, we are all about laying the foundation for better lives through great early learning experience.",
  buttonLabel: "Get Started",
  imgStart: false,
  img: Image1,
  alt: "aboutImg",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Our Curriculum",
  headline: "Holistic approach toarning!",
  description:
    "At KidsWorld, curriculum is child centred and is underpinned by play-based learning. Our Curriculum has been devised in alignment with the National Quality Framework.",
  buttonLabel: "Discover more..",
  imgStart: true,
  img: Image2,
  alt: "discoverImg",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "services",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Early Learning and Childcare",
  headline: "Take a centre tour and meet our team",
  description:
    "A quality early learning centre and nurturing home environment is the perfect combinationfot your child to develop their full potential.",
  buttonLabel: "Take a Tour!",
  imgStart: false,
  img: Image3,
  alt: "servicesImg",
  dark: false,
  primary: false,
  darkText: true,
};
