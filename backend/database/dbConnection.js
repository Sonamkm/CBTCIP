import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, { dbName: "MERN_STACK_EVENT_MESSAGE" })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};

//passwrd: aT21wff0Ry8o3JOQ
//username: sonam

//mongodb+srv://sonam:aT21wff0Ry8o3JOQ@cluster0.xed5eyb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0