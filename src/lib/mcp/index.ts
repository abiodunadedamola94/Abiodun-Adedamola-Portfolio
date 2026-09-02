import { defineMcp } from "@lovable.dev/mcp-js";
import listProjectsTool from "./tools/list-projects";
import getProjectTool from "./tools/get-project";
import listExperimentsTool from "./tools/list-experiments";
import getProfileTool from "./tools/get-profile";

export default defineMcp({
  name: "abiodun-adedamola-s-portfolio",
  title: "Abiodun Adedamola's Portfolio",
  version: "0.1.0",
  instructions:
    "Read-only access to Abiodun Adedamola's public design portfolio. Use `get_profile` for positioning, skills, links and tool stack; `list_projects` and `get_project` for projects and case studies; `list_experiments` for interactive playground experiments. No private or visitor data is exposed.",
  tools: [getProfileTool, listProjectsTool, getProjectTool, listExperimentsTool],
});
