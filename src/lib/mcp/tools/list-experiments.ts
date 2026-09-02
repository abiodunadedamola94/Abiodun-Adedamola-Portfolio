import { defineTool } from "@lovable.dev/mcp-js";
import { experiments } from "@/data/experiments";

export default defineTool({
  name: "list_experiments",
  title: "List playground experiments",
  description:
    "List the interactive playground experiments (title, description, status, stack and highlights) featured on the portfolio.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const items = experiments.map((e) => ({
      slug: e.slug,
      title: e.title,
      description: e.description,
      tag: e.tag,
      status: e.status,
      overview: e.overview,
      highlights: e.highlights,
      stack: e.stack,
      path: `/playground/${e.slug}`,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { count: items.length, experiments: items },
    };
  },
});
