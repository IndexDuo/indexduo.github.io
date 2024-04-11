// server.js
import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import process from 'process';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // For parsing application/json

app.get('/api/status', async (req, res) => {
    const apiKey = import.meta.env.VITE_UPTIMEROBOT_API_KEY;
 // Use your actual UptimeRobot API key environment variable
    const url = 'https://api.uptimerobot.com/v2/getMonitors';

    try {
        const response = await axios.post(url, {
            "api_key": apiKey,
            "format": "json"
            // Additional parameters as required
        }, {
            headers: { "Content-Type": "application/json" }
        });

        // Process and return the status information
        res.json({ status: response.data.monitors[0].status });
    } catch (error) {
        console.error('Error fetching status from UptimeRobot:', error);
        res.status(500).json({ error: 'Failed to fetch status' });
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
