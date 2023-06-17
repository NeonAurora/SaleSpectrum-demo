import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./routes/DisplayRoutes/client.js";
import generalRoutes from "./routes/DisplayRoutes/general.js";
import managementRoutes from "./routes/DisplayRoutes/management.js";
import salesRoutes from "./routes/DisplayRoutes/sales.js";
import overallStatsRoutes from "./routes/OperateRoutes/overallStatsRoutes.js";
import transactionRoutes from "./routes/OperateRoutes/transactionRoutes.js";
import userRoutes from "./routes/OperateRoutes/userRoutes.js";
import productsRoutes from "./routes/OperateRoutes/productsRoutes.js";
import productStatsRoutes from "./routes/OperateRoutes/productStatsRoutes.js";
import customTradeRoutes from "./routes/OperateRoutes/customTradeRoutes.js";
import connectDB from "./config/database.js";
import authRoutes from "./routes/DisplayRoutes/auth.js";
import authMiddleware from "./middleware/authMiddleware.js";
import bcrypt from "bcryptjs";

// data imports
import User from "./models/User.js";
import Product from "./models/Product.js";
import ProductStat from "./models/ProductStat.js";
import Transaction from "./models/Transaction.js";
import OverallStat from "./models/OverallStat.js";
import AffiliateStat from "./models/AffiliateStat.js";
import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
  dataAffiliateStat,
} from "./data/index.js";

/* CONFIGURATION */
dotenv.config();

// const updatePasswords = async () => {
//   try {
//     // Fetch all users from the database
//     const users = await User.find({});

//     // Iterate over each user and update their password
//     for (let user of users) {
//       const hashedPassword = await bcrypt.hash(user.password, 12);
//       user.password = hashedPassword;
//       await user.save();
//     }

//     console.log("Passwords updated successfully");
//   } catch (error) {
//     console.error("Error updating passwords:", error);
//   }
// };

// updatePasswords();


const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/auth", authRoutes);
app.use("/client", clientRoutes); // add middleware 
// app.use("/client", clientRoutes);
app.use("/general", authMiddleware, generalRoutes);  
app.use("/management", authMiddleware, managementRoutes);
app.use("/sales", authMiddleware, salesRoutes);
app.use("/api/overallStats", overallStatsRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/productStats", productStatsRoutes);
app.use("/api/customTrades", customTradeRoutes);
app.use("/uploads", express.static("uploads")); // Add this line to serve audio files

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
connectDB();

// mongoose
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

//     /* ONLY ADD DATA ONE TIME */
//      // AffiliateStat.insertMany(dataAffiliateStat);
//      // OverallStat.insertMany(dataOverallStat);
//      // Product.insertMany(dataProduct);
//      // ProductStat.insertMany(dataProductStat);
//      // Transaction.insertMany(dataTransaction);
//      // User.insertMany(dataUser);
//   })
//   .catch((error) => console.log(`${error} did not connect`));
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
