import { mongoose } from "mongoose";
const url = "mongodb://localhost:27017";
const connectDB = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
  }
};
connectDB()
