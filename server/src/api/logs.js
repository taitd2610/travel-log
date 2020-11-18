/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: "🌍",
  });
});

module.exports = router;
