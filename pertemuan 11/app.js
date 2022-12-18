// Import express dan router
const express = require("express");
const router = require("./routes/api.js");

// Membuat object express
const app = express();

// Menggunalan middleware
app.use(express.json());
app.use(express.urlencoded());

// Menggunakan router
app.use(router);

// Mendefinisikan port
app.listen(3000);