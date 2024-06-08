const fastify = require("fastify")();
const port = 3000;

fastify.get("/", async (_, rep) => {
    rep.send({ message: "hello world" });
});

fastify.listen({ port }, () => {
    console.log(`fastify running on http://localhost:${port}`);
});
