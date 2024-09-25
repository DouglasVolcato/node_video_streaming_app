import express from 'express';
import path from 'path';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());

// Serve the HLS video files (m3u8 and .ts segments)
app.use('/videos', express.static(path.join(__dirname, '../public/videos')));

app.get('/', (req, res) => {
    res.send('HLS Video server is running');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
