import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { mcpProjects } from "../content";

export default defineTool({
  name: "list_projects",
  title: "List projects",
  description:
    "List the portfolio's design projects and case studies with their role, year, industry, tags and live URLs. Optionally filter by a free-text query.",
  inputSchema: {
    query: z
      .string()
      .trim()
      .optional()
      .describe("Optional text filter matched against name, tagline, industry and tags."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const q = query?.toLowerCase();
    const items = mcpProjects
      .filter((p) =>
        !q
          ? true
          : [p.name, p.tagline, p.industry, p.role, ...(p.tags ?? [])]
              .join(" ")
              .toLowerCase()
              .includes(q),
      )
      .map((p) => ({
        id: p.id,
        name: p.name,
        tagline: p.tagline,
        role: p.role,
        year: p.year,
        industry: p.industry,
        status: p.status,
        tags: p.tags,
        liveUrl: p.liveUrl,
        caseStudyPath: p.caseStudyPath,
      }));

    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { count: items.length, projects: items },
    };
  },
});
