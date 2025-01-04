import React from "react";
import { Section } from "../components/TextComponents";
import Utils from "../Utils";

export class HomePage extends React.PureComponent {
  render() {
    Utils.logPageview("/");
    return (
      <div className="HomePage">
        <Section title="Hi">
          <p>
            I'm Kevin. I'm grew up in Minnesota but currently live in New
            Jersey.
          </p>

          <p>
            I currently work at Palantir as the backend tech lead for the
            Simulation and Unmanned Systems Team. Our team manages command and
            control, simulation, and live video playback for unmanned vehicles
            in the Palantir ecosystem.
          </p>

          <p>
            I also manage 4 direct reports who are all backend engineers on my
            team, and I conduct hiring manager interviews for early talent at
            Palantir.
          </p>

          <p>
            I graduated <i>summa cum laude</i> from Harvard in 2021, where I
            studied Applied Mathematics with a focus in Economics. I minored in
            Computer Science.
          </p>
        </Section>
      </div>
    );
  }
}
