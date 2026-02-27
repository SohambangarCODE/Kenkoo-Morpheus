const express = require("express");
const router = express.Router();
const { getRecords, deleteRecord, viewFile } = require("../controllers/record.controller");
const { protect } = require("../middleware/auth.middleware");

router.get("/", protect, getRecords);
router.get("/:id/view", protect, viewFile);
router.delete("/:id", protect, deleteRecord);

module.exports = router;
