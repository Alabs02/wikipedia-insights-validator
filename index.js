const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");
const OpenAI = require("openai");

dotenv.configDotenv();

const app = express();
const port = process.env.PORT || 8090;

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });


// MIDDLEWARE 
app.use(cors());


app.listen(port, () => console.log(`Server running on port: ${port}`));


