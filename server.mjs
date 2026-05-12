// Node.js production server entry for Hostinger / generic Node hosts.
// The Vite build emits dist/server/server.js as a Web-standard fetch handler
// (default export with a `fetch` method). This file adapts it to a Node
// HTTP server using @hono/node-server.
import { serve } from "@hono/node-server";
import handler from "./dist/server/server.js";

const port = Number(process.env.PORT) || 3000;
const hostname = process.env.HOST || "0.0.0.0";

serve(
  {
    fetch: (req) => handler.fetch(req),
    port,
    hostname,
  },
  ({ address, port }) => {
    console.log(`Server listening on http://${address}:${port}`);
  },
);
