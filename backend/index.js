const  express  = require("express");
const dotenv=require('dotenv')
const cors = require ('cors')
dotenv.config(); 

const dbConnect=require('./config/db/dbconnection');
const pdfRoutes = require("./route/pdfRoute/pdfRoute");
const adminRoutes = require("./route/user/adminRoutes");
const UserRoutes = require("./route/user/UserRoutes");





 
const app=express();

dbConnect()

app.use(express.json());
app.use(cors());

app.use("/api/admin", adminRoutes);
app.use("/api/user", UserRoutes);
app.use("/api/pdf", pdfRoutes);



const PORT=process.env.PORT||5000;
app.listen(PORT,console.log(`server is running at ${PORT}`));  