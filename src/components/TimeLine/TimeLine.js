
import { useState } from 'react';
import { RiCalendar2Fill } from 'react-icons/ri';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="mt-3 flex gap-3 text-3xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      <RiCalendar2Fill/> {children}
    </h3>
  );
};

const Step = (props) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">
          {props.title}
        </p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{props.children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />

    <Year>2016</Year>
    <ul>
      <Step title="Got into College 🎓">
        One of my most cherished accomplishments. I worked my ass off to get into
        this degree programme.
      </Step>
      <Step title="Worked Full time at Indus Tech">
        I was offered and accepted a full-time offer with Indus Tech,i learnt various basic computer skills during my time here
        which help pave my way into the man i am now.
      </Step>

    </ul>
    <Divider />
    <Year>2014</Year>
    <ul>
      <Step title="Graduated HighSchool">
        After Years of being in High School, i finally graduated and my journey as an Adult finally began.
      </Step>
      <Step title="Formatted and Started Tweaking my first Windows OS">
        It was a fun experience for me when i finally got a damaged PC as a gift, and had to learn for weeks how to format and tweak a Windows OS
        inorder to get it to work, this experience gave me the great understanding i have of the Windows OS today
      </Step>
      <Step title="Created my first Custom ROM">
        I was using a slow Android Phone with low features and i needed more, that led me to become a Member of XDA Developers where i worked hand in hand
        with some Expers to create customized MUI Roms and TWRP Recoveries.
      </Step>
      <Step title="Became a Member of XDA Developer">
        One of the Happiest momments of my life as i was opportuned to meet very creative and talented minds across the world.
      </Step>

    </ul>
    <Divider />
     <Year>1998</Year>
    <ul>
      <Step title="Born 👶🏼🍼" />
    </ul>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <Section id="about">
      {/* <h3 className="font-bold text-2xl md:text-6xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3> */}
      <SectionTitle main>Timeline</SectionTitle>
      <Year>2022</Year>
      <ul>
        <Step title="Developed XMusic">
            After a long while i finally Finished my huge project X-Music which is a music player android application, 
            developed using Kotlin, Android, Firebase and Spotif.
        </Step>
        <Step title="Created X-Courses">
            Built and Developed a Free website that gives access to a large variety of Free Courses  from different Providers like
            Udemy, Lynda, PluralSight etc.
        </Step>

      </ul>
      <Divider />
      <Year>2021</Year>
      <ul>
        <Step title="Freelance Website Designer for T&G Exchange 👨‍👩">
          I'm extremely excited about this new role to help build and deploy a
          beautiful website for T&G Exchange.
        </Step>
        <Step title="Graduated from University ">
          After many years in the University, i finally graduated with Honours with the degree B.Sc Computer Science and Informatics.
        </Step>
        <Step title="Developed and Deployed XBlog ">
          Afer Months and Weeks of Learning React Js and Next Js, i finally developed my Personal Blog Site.
        </Step>
        <Step title="Developed CTRACK">
          Developed a Criminal Management System using Desktop Software using Sqllite and Javafx.
        </Step>
        <Step title="Developed FUOLIB">
          Developed a Library Management System for my final year project using Kotlin, Android and Firebase.
        </Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
        <Step title="Developed FaceJoe">
          Developed a Facial Expression and Face Detection Software using Kotlin and Android Studio with Google Vision.
        </Step>
        <Step title="Developed SChat ">
          Developed a Social Media Chatting Application using Java and Android Studio.
        </Step>
      
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Step title="IT Lead">
          During my 300L at University, we were sent on IT, where i became the lead IT Officer at my PPA (Great Minds Training Institute)
          where we built many demo projects and imporved our Skills.
        </Step>
    </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-2xl hover:text-pink-700 my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          See More
          <svg
            className="h-6 w-6 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </Section>
  );
}