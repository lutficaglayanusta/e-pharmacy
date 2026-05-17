import { startServer } from "./server.js";
import { connectMongoDB } from "./db/conntectMongoDB.js";


const bootstrap = async () => {
    await connectMongoDB()
    startServer()
}

bootstrap()