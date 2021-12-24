import { DiAndroid, DiJavascript, DiMongodb, DiNodejs, DiReact, DiTerminal } from "react-icons/di";
import { SiJava, SiFirebase, SiGit, SiCodeproject, SiAdobeaftereffects, SiAdobepremierepro, SiAdobephotoshop, SiAdobexd } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";

export const Skills = [
  {
    slug: "android",
    Component: DiAndroid,
    title: "Android",
    Description: () => <>I can develop Android Apps using Java & Kotlin.</>,
  },
  {
    slug: "react",
    Component: DiReact,
    title: "React",
    Description: () => <>I develop Full Stack Web Sites using React JS</>,
  },
  {
    slug: "nextjs",
    Component: DiJavascript,
    title: "NextJs",
    Description: () => <>I develop Static Websites using NextJs.</>,
  },
  {
    slug: "monogodb",
    Component: DiMongodb,
    title: "MongoDB",
    Description: () => <>Proficcient knowledge of Mondogb for storing and managing data.</>,
  },
  {
    slug: "flutter",
    Component: RiFlutterFill,
    title: "Flutter",
    Description: () => <>Currently working with Dart & Flutter for app development. </>,
  },
  {
    slug: "java",
    Component: SiJava,
    title: "Java",
    Description: () => <>I develop both Android and Desktop apps using Java & Javafx.</>,
  },
  {
    slug: "nodejs",
    Component: DiNodejs,
    title: "NodeJs",
    Description: () => <>I Build Fullstack Web Apps using Nodejs.</>,
  },

  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => <>I have used Firebase for auth, database & analytics in my apps.</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Git is a tool that I use every day. I use GitHub for pushing my code.</>,
  },
  {
    slug: "adobe",
    Component: SiAdobeaftereffects,
    title: "Adobe AE",
    Description: () => <>I do video effects and video editing for videos using Adobe After Effects.</>,
  },
  {
    slug: "adobe2",
    Component: SiAdobepremierepro,
    title: "Adobe PR",
    Description: () => <>I do can create movies and clips using Adobe Premier Pro.</>,
  },
  {
    slug: "adobe3",
    Component: SiAdobephotoshop,
    title: "Adobe PS",
    Description: () => <>I can perform photo manipulations and design icons and graphics using Adobe Photoshop.</>,
  },
  {
    slug: "adobe4",
    Component: SiAdobexd,
    title: "Adobe XD",
    Description: () => <>I design various material, seamless, UI/UX templates using Adobe XD</>,
  },
  {
    slug: "others",
    Component: SiCodeproject,
    title: "Others",
    Description: () => <>I also have Profficient knowledge on the following Frameworks. <ul> 
      <li> &gt;&gt; GraphQL      </li>
      <li> &gt;&gt; Styled Components      </li>
      <li> &gt;&gt; Tailwind Css      </li>
      <li> &gt;&gt; Material UI      </li>
      <li> &gt;&gt; Ant Design      </li>
      </ul></>,
  }
];
