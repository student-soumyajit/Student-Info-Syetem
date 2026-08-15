const orderModel = require("../models/orderModel");
const Order = require("../models/orderModel");
const productModel = require("../models/productModel");
const Product = require("../models/productModel");
const userModel = require("../models/userModel");
const User = require("../models/userModel");

const getAdminStats = async (req, res) => {
  try {
    const totalOrders = await orderModel.countDocuments({});
    const totalProducts = await productModel.countDocuments({});
    const totalUsers = await userModel.countDocuments({ role: "user" });

    const orders = await orderModel.find({});
    const totalRevenue = orders.reduce(
      (acc, item) => acc + item.totalAmount,
      0,
    );

    res.json({ totalOrders, totalProducts, totalUsers, totalRevenue });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAdminStats };
