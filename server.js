// server.js
import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import process from 'process';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
    origin: 'http://localhost:5173'&&'https://indexduo.me', // Allow requests from your React app
};

app.use(cors(corsOptions)); // Use CORS middleware with the specified options

app.use(express.json()); // For parsing application/json

// Define a route in your Express server
app.get('/api/status', async (req, res) => {
    const url = 'https://betteruptime.com/api/v2/status-pages';

    try {
        // Make an outgoing HTTP request from your server to the Better Uptime API
        const response = await axios.get(url, {
            headers: {
                "Content-Type": "application/json",
                // Use your actual API token from your .env file, do not hard-code it
                "Authorization": `Bearer ${process.env.BETTER_UPTIME_API_KEY}`
            }
        });

        // Process and send the response back to your front-end
        if (response.data && response.data.data && response.data.data.length > 0) {
            res.json({ statusPages: response.data.data });
        } else {
            res.status(404).json({ error: 'No status page data found' });
        }
    } catch (error) {
        console.error('Error fetching status from Better Uptime:', error);
        res.status(500).json({ error: 'Failed to fetch status page data' });
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});