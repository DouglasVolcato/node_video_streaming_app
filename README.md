# Node video streaming app

## Features

- **Node.js Backend (TypeScript)**: Serves `.m3u8` and `.ts` files for video playback.
- **React Frontend (TypeScript)**: Plays videos using the HLS protocol via the `hls.js` library.
- **Supports Adaptive Streaming**: Ensures smooth playback by adjusting video quality based on network conditions.

### Backend Setup

1. Navigate to the `video-app-back` directory:

    ```bash
    cd video-app-back
    ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Convert a video to HLS format using FFmpeg:

   ```bash
  ffmpeg -i sample-video.mp4 -codec: copy -start_number 0 -hls_time 10 -hls_list_size 0 -f hls stream.m3u8
   ```

4. Start the Node.js server:

   ```bash
   npx tsc
   node dist/index.js
   ```

   The server will start at `http://localhost:3001` and serve video files from the `public/videos` directory.

### Frontend Setup

1. Navigate to the `video-app-front` directory:

   ```bash
   cd video-app-front
   ```

2. Install frontend dependencies:

   ```bash
   npm install
   ```

3. Start the React app:

   ```bash
   npm run dev
   ```

   The React app will be available at `http://localhost:5173`.

### Video Playback

1. Open the React app in your browser at `http://localhost:5173`.
2. The app will automatically load and play the HLS video stream served by the backend.


## HLS Support

The app uses the `hls.js` library for adaptive streaming. The backend serves HLS files (`.m3u8` and `.ts` segments), and `hls.js` loads and plays the video in the React frontend.

### How to Convert Videos to HLS

You can convert any video file to the HLS format using FFmpeg:

```bash
ffmpeg -i sample-video.mp4 -codec: copy -start_number 0 -hls_time 10 -hls_list_size 0 -f hls public/videos/stream.m3u8
```

This command will generate the `.m3u8` manifest file and the `.ts` segments in the `public/videos` folder.
