// import express, { Request, Response } from "express";
// import http from "http";
// import { Server, Socket } from "socket.io";
// import path from "path";

// interface ChatMessage {
//   user: string;
//   text: string;
//   time: string;
// }

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server);

// app.use(express.static(path.join("./public")));

// app.get("/", (req: Request, res: Response) => {
//   res.sendFile(path.join( "../public/index.html"));
// });


// io.on("connection", (socket: Socket) => {
//   console.log(" A user connected");

//   socket.on("user-message", (data: ChatMessage) => {
//     console.log(` ${data.user}: ${data.text}`);
//     io.emit("message", data);
//   });

//   socket.on("disconnect", () => {
//     console.log(" User disconnected");
//   });
// });

// server.listen(5000, () => {
//   console.log(`Server running on 5000`);
// });

