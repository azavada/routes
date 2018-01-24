const express = require("express");
const app = express();

const route1 = require("./manager/routes");
const route2 = require("./panelist/routes");

const vhost = require("vhost");

app.use(vhost("potato.com", route1));
app.use(vhost("tomato.com", route2));

// app.use("/manager", route1);
// app.use("/panelist", route2);

app.listen(3000, () => console.log("Example app listening on port 3000!"));
// https://github.com/jantimon/html-webpack-plugin/issues/218