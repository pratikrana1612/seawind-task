const { check, validationResult } = require("express-validator");

const validateProduct = [
  check("name")
    .exists({ checkFalsy: true })
    .withMessage("Name is required")
    .isLength({ min: 2 })
    .withMessage("Name must be greater than one character"),

  check("price")
    .exists({ checkFalsy: true })
    .withMessage("Price is required")
    .isFloat({ gt: 0 })
    .withMessage("Price must be a positive number"),

  check("description")
    .optional()
    .isString()
    .withMessage("Description must be a string"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateProduct;
