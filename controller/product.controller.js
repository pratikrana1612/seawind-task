const Product = require("../models/product.model");

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const getProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.productId || "" });
    if (!product) {
      res.status(404).json({ message: "product not found" });
      return;
    }
    // const user = await User.findById(req.params.userId);;
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new product
const createProduct = async (req, res) => {
  const { name, price, description } = req.body;
  console.log(req.body);
  // Basic validation
  // if (!name || !price) {
  //   return res.status(400).json({ message: "Please provide name and price" });
  // }
  try {
    const newProduct = await Product.create({
      name,
      price,
      description,
      image: req.file?.path || "",
    });
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a product
const updateProduct = async (req, res) => {
  // const { name, price, description } = req.body;
  // const updateFields = {};
  // if (req.body.name !== undefined) updateFields.name = req.body.name;
  // if (req.body.price !== undefined) updateFields.email = req.body.price;
  // if (req.body.description !== undefined)
  //   updateFields.description = req.body.description;
  // if (req.file !== undefined) updateFields.image = req.file?.path;
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.productId,
      req.body,
      { new: true }
    );
    if (!product) {
      res.status(404).json({ message: "product not found" });
      return;
    }
    res.status(200).json({ message: "product updated successfully", product });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.productId);
    if (!product) {
      res.status(404).json({ message: "product not found" });
      return;
    }
    res.status(200).json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  getProduct,
  deleteProduct,
};
