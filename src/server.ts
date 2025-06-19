import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";
const PORT = 5000;

let server: Server;

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://thjbd19:U4J3ibDkKbLsOS8P@cluster0.3nmy0xp.mongodb.net/advanced-note-app?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("connected to Mongodb using mongoose");
    server = app.listen(PORT, () => {
      console.log(`app is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
