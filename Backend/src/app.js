const express = require("express")
const cors = require('cors')
const authRoute = require('./routes/authRoute')
const productRoutes = require('./routes/productRoutes')
const orderRoutes = require('./routes/orderRoutes')
const paymentRoutes = require("./routes/paymentRoutes")
const analyticsRoutes = require('./routes/analyticsRoutes')

const app = express()
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true,
}));
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use('/api/auth',authRoute)
app.use("/api/products",productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/payment",paymentRoutes);
app.use("/api/analytics", analyticsRoutes);

module.exports = app
