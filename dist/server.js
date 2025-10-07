import express from "express";
import http from "http";
import { Server } from "socket.io";
import path from "path";
const app = express();
const server = http.createServer(app);
const io = new Server(server);
app.use(express.static(path.join("./public")));
app.get("/", (req, res) => {
    res.sendFile(path.join("../public/index.html"));
});
io.on("connection", (socket) => {
    console.log(" A user connected");
    socket.on("user-message", (data) => {
        console.log(` ${data.user}: ${data.text}`);
        io.emit("message", data);
    });
    socket.on("disconnect", () => {
        console.log(" User disconnected");
    });
});
const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
