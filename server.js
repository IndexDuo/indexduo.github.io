// /api/status.js
import axios from 'axios';
import process from 'process';

export default async function(req, res) {
    const url = 'https://betteruptime.com/api/v2/status-pages';

    try {
        res.setHeader('Access-Control-Allow-Credentials', true);
res.setHeader('Access-Control-Allow-Origin', '*'); // Or a specific origin
res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

        const response = await axios.get(url, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.BETTER_UPTIME_API_KEY}`
            }
        });

        if (response.data && response.data.data && response.data.data.length > 0) {
            res.status(200).json({ statusPages: response.data.data });
        } else {
            res.status(404).json({ error: 'No status page data found' });
        }
    } catch (error) {
        console.error('Error fetching status from Better Uptime:', error);
        res.status(500).json({ error: 'Failed to fetch status page data' });
    }
}
