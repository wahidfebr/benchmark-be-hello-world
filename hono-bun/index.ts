import { Hono } from "hono";
const app = new Hono();

app.get("/", (c) => c.json({ message: "hello world" }));

console.log(`Server is running on port ${3000}`);
export default app;
