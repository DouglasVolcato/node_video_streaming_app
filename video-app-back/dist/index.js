"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = 3001;
app.use((0, cors_1.default)());
// Serve the HLS video files (m3u8 and .ts segments)
app.use('/videos', express_1.default.static(path_1.default.join(__dirname, '../public/videos')));
app.get('/', (req, res) => {
    res.send('HLS Video server is running');
});
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
