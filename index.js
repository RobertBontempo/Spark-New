require("dotenv").config();
const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

app.post("/chat", async (req, res) => {
    const { message } = req.body;

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [{ role: "user", content: message }],
        });

        res.json({ reply: response.choices[0].message.content });
    } catch (error) {
        console.error("ERROR DETAILS:", error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));

npm install axios
// Import axios
const axios = require('axios');
require('dotenv').config(); // To load the .env file

// Your API key from .env
const apiKey = process.env.API_KEY;

// Example function to make an API request
async function getApiData() {
    try {
        const response = await axios.get('https://api.example.com/data', {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
            }
        });
        console.log(response.data); // Log the data you get back
    } catch (error) {
        console.error('Error making API request:', error);
    }
}

getApiData(); // Call the function


