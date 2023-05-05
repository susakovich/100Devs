// Handles initial GET requests for the homepage
// Handles POST method request for adding a new task

const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");

// Add specific routes for specific tasks
router.get("/", homeController.getIndex);
router.post("/", homeController.createTask);

module.exports = router;
