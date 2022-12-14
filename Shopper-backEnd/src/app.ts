import dotenv from "dotenv";
import express from "express"
import cors from "cors"
export const app = express()
import { AddressInfo } from "net"

dotenv.config();
app.use(express.json())
app.use(cors())


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});