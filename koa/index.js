const Koa = require("koa");
const app = new Koa();
const port = 3000;

app.use(async (ctx) => {
    ctx.body = { message: "hello world" };
    ctx.set("Content-Type", "application/json");
});

app.listen(port, () => {
    console.log(`Koa running on http://localhost:${port}`);
});
