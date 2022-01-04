import "babel-polyfill";
import Typist from "react-typist";
import Layout from "../components/layout";
import CurriculumVitae, { Job, WorkList } from "../components/cv";
import Tags from "../components/tags";
import * as Icon from "../components/icons";

const HomePage = () => (
  <Layout>
    <Typist
      cursor={{
        show: false,
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
      radial highways and big intersections need to handle daily traffic,
      quickly guiding each person to their destination. Today I choose to build
      digital junctions.
    </p>

    <h3>/cv</h3>
    <CurriculumVitae>
      <Job
        company="SinnerSchrader Deutschland GmbH / Accenture Interactive"
        title="Senior Product Engineer"
        time="since 01/2022"
      />
      <Job
        company="sipgate GmbH, Düsseldorf, Germany"
        title="Web Developer"
        time="04/2020 - 12/2021"
      />
      <Job
        company="SinnerSchrader Deutschland GmbH, Frankfurt, Germany"
        title="Senior Product Engineer"
        time="10/2019 - 03/2020"
      />
      <Job
        company="SinnerSchrader Deutschland GmbH, Frankfurt, Germany"
        title="Product Engineer"
        time="07/2018 - 09/2019"
      >
        <WorkList
          items={[
            "setup and maintenance of a pattern library used by a big automotive client",
            "soft-launch of a new frontend for an international multi-site CMS with over 1.600 sites",
            "agile development process (Scrum)",
          ]}
        />
        <Tags
          items={[
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "Design Systems",
            "Living Style Guides",
            "Pattern Libraries",
            "Responsive Webdesign",
            "Accessibility",
            "SEO",
          ]}
        />
      </Job>
      <Job
        company="Accenture Dienstleistungen GmbH, Kronberg, Germany"
        title="Digital Applications Expert"
        time="09/2016 – 06/2018"
      >
        <WorkList
          items={[
            "Product Owner for Accenture’s German Speaking Intranet Portal ASG",
            "Project management for web applications & infrastructure",
            "Digital marketing & analytics",
          ]}
        />
        <Tags
          items={[
            "Project Management",
            "UX Concepts",
            "Scrum",
            "Digital Marketing",
            "Analytics",
          ]}
        />
      </Job>
      <Job
        company="Accenture Dienstleistungen GmbH, Kronberg, Germany"
        title="Web Administrator"
        time="03/2015 – 08/2016"
      >
        <WorkList
          items={[
            "Technical Management of Accenture’s German Speaking Intranet Portal ASG",
            "Coordination of a fundamental relaunch including creation of prototypes, project management, coordination of internal technical organizations and external suppliers",
          ]}
        />

        <Tags
          items={[
            "Project Management",
            "Content Management",
            "ProcessWire",
            "Administration",
          ]}
        />
      </Job>
      <Job
        company="Quadratdesign Webseitengestaltung"
        title="Owner"
        time="2007 – 08/2016"
      >
        <WorkList
          items={[
            "agency manager",
            "conception, layout and development of websites",
            "Internet consulting",
          ]}
        />
        <Tags
          items={[
            "Typolight / Contao",
            "WordPress",
            "ProcessWire",
            "HTML 5",
            "CSS3",
            "JavaScript",
            "jQuery",
            "Responsive Webdesign",
          ]}
        />
      </Job>
      <Job
        company="Schmidt//Overländer kommunikation, Krefeld, Germany"
        title="Freelancer"
        time="2004 - 2016"
      >
        <WorkList
          items={[
            "Web development for small and medium-sized enterprises and cities",
            "IT consulting",
          ]}
        />
        <Tags items={["HTML 5", "CSS3", "JavaScript", "PHP", "MySQL"]} />
      </Job>
      <Job
        company="dr. dresing&amp;pehl GmbH, Marburg, Germany"
        title="Freelancer"
        time="2003 - 2011"
      >
        <WorkList
          items={[
            "Developing the e-learning platform „i-Study“ on behalf of the University of Marburg",
            "Developing eCommerce landing pages",
          ]}
        />
        <Tags items={["PHP", "MySQL", "phpBB", "HTML", "CSS"]} />
      </Job>
    </CurriculumVitae>

    <h3>/connect</h3>
    <ul>
      <li>
        <a href="https://twitter.com/wheelmaker24" target="_blank">
          <Icon.Twitter />
          @wheelmaker24
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/nikolaus-rademacher"
          target="_blank"
        >
          <Icon.LinkedIn />
          nikolaus-rademacher
        </a>
      </li>
      <li>
        <a
          href="https://www.xing.com/profile/Nikolaus_Rademacher"
          target="_blank"
        >
          <Icon.Xing />
          Nikolaus_Rademacher
        </a>
      </li>
      <li>
        <a href="https://github.com/wheelmaker24" target="_blank">
          <Icon.GitHub />
          wheelmaker24
        </a>
      </li>
    </ul>
  </Layout>
);

export default HomePage;
