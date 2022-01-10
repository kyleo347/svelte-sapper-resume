// import type { Project } from "../../models/projects";

export function preloadProjects(fetch: Function) {
    return fetch(`projects.json`)
      .then((r: { json: () => any }) => r.json())
      .then(
        (
          projects: any[]
        ) => {
          return { projects };
        }
      );
  }
