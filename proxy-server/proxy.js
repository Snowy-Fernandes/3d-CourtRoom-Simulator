const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const Groq = require("groq-sdk"); // Import Groq SDK

dotenv.config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY }); // Initialize Groq SDK with API key

const app = express();

app.use(cors());
app.use(express.json());

// API route to handle chat requests using Groq
app.post("/api/groq", async (req, res) => {
  try {
    console.log("Request Body:", req.body);

    const chatCompletion = await getGroqChatCompletion(req.body.message); // Call the function to get the chat completion

    res.json({ response: chatCompletion.choices[0]?.message?.content || "No response" });
  } catch (error) {
    console.error(
      "Error Details:",
      error.response ? error.response.data : error.message
    );
    res
      .status(error.response ? error.response.status : 500)
      .json({ error: "An error occurred" });
  }
});

// Function to get Groq chat completion
async function getGroqChatCompletion(message) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: message, // Use the message from the user input
      },
    ],
    model: "llama3-8b-8192", // Replace this with the desired model name
  });
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
