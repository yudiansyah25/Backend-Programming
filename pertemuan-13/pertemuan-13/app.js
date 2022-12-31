// Import express dan router
const express = require("express");
const router = require("./routes/api");

// Create object express
const app = express();

// Using middleware
app.use(express.json());
app.use(express.urlencoded());

// Using router
app.use(router);

// Running the server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
