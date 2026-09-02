import { defineTool } from "@lovable.dev/mcp-js";
import { mcpProfile, mcpToolstack } from "../content";

export default defineTool({
  name: "get_profile",
  title: "Get designer profile",
  description:
    "Get the portfolio owner's public profile: positioning, focus areas, social links, site pages, and the tool stack used day to day.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = { ...mcpProfile, toolstack: mcpToolstack };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
