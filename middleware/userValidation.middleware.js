const { check, validationResult } = require("express-validator");

const validateUser = [
  check("name")
    .exists({ checkFalsy: true })
    .withMessage("Name is required")
    .isLength({ min: 2 })
    .withMessage("Name must be greater than one character"),

  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email is not valid"),

  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateUser;
