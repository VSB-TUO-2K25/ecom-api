import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import postsRoutes from './routes/postsRoutes.js';


dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;
const uri = process.env.MONGO_ATLAS_URI;

app.use(cors());
app.use(express.json());


app.use("/api/posts", postsRoutes);

mongoose.connect(uri, {dbName: "TUO_Database"})
.then(()=> {
    console.log("MongoDB database connection established successfully");

    app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});


})



