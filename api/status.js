import axios from 'axios';

export default async (req, res) => {
    const url = 'https://betteruptime.com/api/v2/status-pages';
    
    try {
        const response = await axios.get(url, {
            headers: {
                'Authorization': 'Bearer BHVR9pHt8nLFCGmUVWXx8V1e',
                'Content-Type': 'application/json',
            },
        });
        
        res.status(200).json(response.data);
    } catch (error) {
        console.error('API call failed:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
};
