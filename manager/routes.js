const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.send("hello from manager\n\r");
});

router.get("/add", (req, res, next) => {
    res.send("add manager\n\r");
});

router.use("/api", require("./manager"));

module.exports = router;