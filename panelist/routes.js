const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.send("hello from panelist\n\r");
});

router.get("/add", (req, res, next) => {
    res.send("add panelist\n\r");
});

router.use("/api", require("./panelist"));

module.exports = router;