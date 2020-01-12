import "babel-polyfill";
import Typist from "react-typist";
import Layout from "../components/layout";
import CurriculumVitae, { Job } from "../components/cv";
import Tags from "../components/tags";

const HomePage = () => (
  <Layout>
    <Typist
      cursor={{
        show: false
      }}
    >
      <h2>
        Hi, I'm a frontend
        <Typist.Backspace count={8} delay={200} />
        senior frontend web developer.
      </h2>
    </Typist>
    <p>
      As a child I was interested in complex traffic infrastructures. Airports,
      radial highways and big interjections need to handle daily traffic,
      quickly guiding each person to their destination. Today I like to build
      digital junctions.
    </p>

    <h3>/cv</h3>
    <CurriculumVitae>
      <Job
        company="SinnerSchrader Deutschland GmbH, Frankfurt, Germany"
        title="Senior Product Engineer"
        time="since 10/2019"
      />
      <Job
        company="SinnerSchrader Deutschland GmbH, Frankfurt, Germany"
        title="Product Engineer"
        time="07/2018 - 09/2019"
      >
        <ul>
          <li>
            setup and maintenance of a pattern library used by a big automotive
            client
          </li>
          <li>
            soft-launch of a new frontend for an international multi-site CMS
            with over 1.700 sites
          </li>
          <li>agile development process (Scrum)</li>
        </ul>
        <Tags items={["HTML", "CSS", "JavaScript", "TypeScript", "React", "Design Systems", "Living Style Guides", "Pattern Libraries", "Responsive Webdesign", "Accessibility", "SEO"]} />
      </Job>
      <Job
        company="Accenture Dienstleistungen GmbH, Kronberg, Germany"
        title="Digital Applications Expert"
        time="09/2016 – 06/2018"
      >
        <ul>
          <li>
            Product Owner for Accenture’s German Speaking Intranet Portal ASG
          </li>
          <li>Project management for web applications & infrastructure</li>
          <li>Digital marketing & analytics</li>
        </ul>
        <Tags
          items={[
            "Project Management",
            "UX Concepts",
            "Scrum",
            "Digital Marketing",
            "Analytics"
          ]}
        />
      </Job>
      <Job
        company="Accenture Dienstleistungen GmbH, Kronberg, Germany"
        title="Web Administrator"
        time="03/2015 – 08/2016"
      >
        <ul>
          <li>
            Technical Management of Accenture’s German Speaking Intranet Portal
            ASG
          </li>
          <li>
            Coordination of a fundamental relaunch including creation of
            prototypes, project management, coordination of internal technical
            organizations and external suppliers
          </li>
        </ul>
        <Tags
          items={[
            "Project Management",
            "Content Management",
            "ProcessWire",
            "Administration"
          ]}
        />
      </Job>
      <Job
        company="Quadratdesign Webseitengestaltung"
        title="Owner"
        time="2007 – 08/2016"
      >
        <ul>
          <li>agency manager</li>
          <li>conception, layout and development of websites</li>
          <li>Internet consulting</li>
        </ul>
        <Tags
          items={[
            "Typolight / Contao",
            "WordPress",
            "ProcessWire",
            "HTML 5",
            "CSS3",
            "JavaScript",
            "jQuery",
            "Responsive Webdesign"
          ]}
        />
      </Job>
      <Job
        company="Schmidt//Overländer kommunikation, Krefeld, Germany"
        title="Freelancer"
        time="2004 - 2016"
      >
        <ul>
          <li>
            Web development for small and medium-sized enterprises and cities
          </li>
          <li>IT consulting</li>
        </ul>
        <Tags items={["HTML 5", "CSS3", "JavaScript", "PHP", "MySQL"]} />
      </Job>
      <Job
        company="dr. dresing&amp;pehl GmbH, Marburg, Germany"
        title="Freelancer"
        time="2003 - 2011"
      >
        <ul>
          <li>
            Developing the e-learning platform „i-Study“ on behalf of the
            University of Marburg
          </li>
          <li>Developing eCommerce landing pages</li>
        </ul>
        <Tags items={["PHP", "MySQL", "phpBB", "HTML", "CSS"]} />
      </Job>
    </CurriculumVitae>

    <h3>/connect</h3>
    <ul>
      <li>
        <a href="https://twitter.com/wheelmaker24" target="_blank">
          <svg
            className="svg-inline"
            aria-hidden="true"
            data-prefix="fab"
            data-icon="twitter"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
            ></path>
          </svg>
          @wheelmaker24
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/nikolaus-rademacher"
          target="_blank"
        >
          <svg
            className="svg-inline"
            aria-hidden="true"
            data-prefix="fab"
            data-icon="linkedin-in"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z"
            ></path>
          </svg>
          nikolaus-rademacher
        </a>
      </li>
      <li>
        <a
          href="https://www.xing.com/profile/Nikolaus_Rademacher"
          target="_blank"
        >
          <svg
            className="svg-inline"
            aria-hidden="true"
            data-prefix="fab"
            data-icon="xing"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              fill="currentColor"
              d="M162.7 210c-1.8 3.3-25.2 44.4-70.1 123.5-4.9 8.3-10.8 12.5-17.7 12.5H9.8c-7.7 0-12.1-7.5-8.5-14.4l69-121.3c.2 0 .2-.1 0-.3l-43.9-75.6c-4.3-7.8.3-14.1 8.5-14.1H100c7.3 0 13.3 4.1 18 12.2l44.7 77.5zM382.6 46.1l-144 253v.3L330.2 466c3.9 7.1.2 14.1-8.5 14.1h-65.2c-7.6 0-13.6-4-18-12.2l-92.4-168.5c3.3-5.8 51.5-90.8 144.8-255.2 4.6-8.1 10.4-12.2 17.5-12.2h65.7c8 0 12.3 6.7 8.5 14.1z"
            ></path>
          </svg>
          Nikolaus_Rademacher
        </a>
      </li>
      <li>
        <a href="https://github.com/wheelmaker24" target="_blank">
          <svg
            className="svg-inline"
            aria-hidden="true"
            data-prefix="fab"
            data-icon="github"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
          >
            <path
              fill="currentColor"
              d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
            ></path>
          </svg>
          wheelmaker24
        </a>
      </li>
    </ul>
  </Layout>
);

export default HomePage;
