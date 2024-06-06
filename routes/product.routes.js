const { Router } = require("express");
const { upload } = require("../middleware/multer.middleware");
const {
  getProducts,
  createProduct,
  updateProduct,
  getProduct,
  deleteProduct,
} = require("../controller/product.controller");
const validateProduct = require("../middleware/productValidation.middleware");

const router = Router();

router.get("/", getProducts);
router.post("/product", upload.single("image"), validateProduct, createProduct);

router
  .route("/product/:productId")
  .get(getProduct)
  .put(upload.single("image"), validateProduct, updateProduct)
  .delete(deleteProduct);

module.exports = router;
