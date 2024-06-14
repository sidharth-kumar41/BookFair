import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import bookRoute from '../Backend/Route/Book.route.js'
import userRoute from '../Backend/Route/User.route.js'
import cors from 'cors'

const app = express()
app.use(cors());
app.use(express.json());

dotenv.config();
const PORT=process.env.PORT || 4000
const URI=process.env.MongoDBURI

try{
  mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("connected to mongodb")
}catch (error){
  console.log("Error: ",error)
}

//defining routes

app.use("/book",bookRoute);
app.use("/user",userRoute);




app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});