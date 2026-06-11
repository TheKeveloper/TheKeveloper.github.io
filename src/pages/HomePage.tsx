import { Anchor } from "@mantine/core";
import { MantineLink } from "../components/MantineLink";
import { Section } from "../components/TextComponents";
import Utils from "../Utils";

export function HomePage() {
  Utils.logPageview("/");
  return (
    <div className="HomePage">
      <Section title="Hello!">
        <p>
          I'm Kevin. I grew up in Minnesota and now I live in Princeton, New
          Jersey.
        </p>
        <p>
          I'm currently the cofounder and CEO of{" "}
          <Anchor href="https://percy.tech/" target="_blank">
            Percy
          </Anchor>{" "}
          where I'm building tools to help researchers and data scientists work
          with data more effectively.
        </p>
        <p>
          I previously led engineering for the Simulation and Unmanned Systems
          team at Palantir, where I managed video live streaming, mission
          simulation, and autonomous control of unmanned aerial systems. See my{" "}
          <MantineLink to="/experience">experience page</MantineLink> for more
          details.
        </p>
        <p>
          I graduated <i>summa cum laude</i> from Harvard in 2021 with a B.A. in
          Applied Mathematics, focusing in Economics. I co-authored a{" "}
          <Anchor
            href="https://github.com/TheKeveloper/ECON-1011A-Textbook/blob/master/textbook.pdf"
            target="_blank"
          >
            microeconomic theory textbook
          </Anchor>{" "}
          that is still used in the course today. I also ran the Harvard Open
          Data Project, where I{" "}
          <Anchor href="https://www.hodp.org/people/kevin-bi/">
            published articles
          </Anchor>{" "}
          analyzing data about Harvard. See my{" "}
          <MantineLink to="/projects">projects page</MantineLink> for other
          projects I've worked on.
        </p>
      </Section>
    </div>
  );
}
