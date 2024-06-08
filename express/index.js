const express = require("express")();
const port = 3000;

express.get("/", async (_, res) => {
    res.json({ message: "hello world" });
});

express.listen(port, () => {
    console.log(`express running on http://localhost:${port}`);
});
