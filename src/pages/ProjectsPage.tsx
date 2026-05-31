import { tags, projects } from "../config/projects";
import { ItemsDisplay } from "../components/ItemsDisplay";
import Utils from "../Utils";

export function ProjectsPage() {
  Utils.logPageview("/projects");
  return (
    <div className="ProjectsPage">
      <h3 style={{ textAlign: "center", marginTop: 20, marginBottom: 20 }}>
        Projects
      </h3>
      <ItemsDisplay tags={tags} items={projects} />
    </div>
  );
}
