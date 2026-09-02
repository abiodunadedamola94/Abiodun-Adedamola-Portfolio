import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { mcpProjects } from "../content";

export default defineTool({
  name: "get_project",
  title: "Get project case study",
  description:
    "Get the full public case-study summary for one portfolio project by its id (use list_projects to discover ids).",
  inputSchema: {
    id: z.string().trim().min(1).describe("Project id, e.g. 'leaptra' or 'hantarp'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ id }) => {
    const project = mcpProjects.find((p) => p.id === id.toLowerCase());
    if (!project) {
      throw new ToolError(
        `No project with id "${id}". Known ids: ${mcpProjects.map((p) => p.id).join(", ")}.`,
      );
    }
    return {
      content: [{ type: "text", text: JSON.stringify(project, null, 2) }],
      structuredContent: { project },
    };
  },
});
