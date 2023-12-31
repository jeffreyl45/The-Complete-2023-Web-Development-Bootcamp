import express from "express";
const app = express();


//port: location of server
app.listen(3000, () => {
    // callback function, triggered when server is set up
    console.log("Server running on port 3000.")
})