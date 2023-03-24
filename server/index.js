const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const http = require("http");
const server = http.createServer(app);
server.listen(5173, ()=>{
  console.log("Server is running");
})
    
