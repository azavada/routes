const express = require("express");
const router = express.Router();
const path = require("path");

const fs = require("fs");
const swaggerTools = require("swagger-tools");

// swaggerRouter configuration
const options = {
    controllers: path.join(__dirname, "./controllers"),
    useStubs: true
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
const spec = fs.readFileSync(path.join(__dirname, "./api/swagger.json"), "utf8");

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(JSON.parse(spec), function (middleware) {
    // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
    router.use(middleware.swaggerMetadata());

    // Validate Swagger requests
    router.use(middleware.swaggerValidator());

    // Route validated requests to appropriate controller
    router.use(middleware.swaggerRouter(options));

    // Serve the Swagger documents and Swagger UI
    router.use(middleware.swaggerUi());
});

module.exports = router;