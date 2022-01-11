import type { Profile } from "../../models/profile";
import type { Project } from "../../models/projects";

export function preloadProjects(fetch: Function) {
    return fetch(`projects.json`)
      .then((r: { json: () => any }) => r.json())
      .then(
        (
          projects: Project[]
        ) => {
          return { projects };
        }
      );
  }

  
export function preloadProfile(fetch: Function) {
  return fetch(`profiles.json`)
    .then((r: { json: () => any }) => r.json())
    .then(
      (
        profiles: Profile[]
      ) => {
        return { profiles };
      }
    );
}
