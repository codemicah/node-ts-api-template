import "dotenv/config";
import { createServer } from "node:http";
import app from "./app";
import { config } from "./config/env";

const { PORT } = config;

const server = createServer(app);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
