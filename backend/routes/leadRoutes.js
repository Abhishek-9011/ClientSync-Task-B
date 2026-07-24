const express = require("express");
const authenticate = require("../middlewares/authMiddleware");

const {
    createLead,
    getLeads,
    updateLeadStatus
} = require("../controllers/leadController");

const router = express.Router();


router.post("/", createLead);


router.get("/", authenticate, getLeads);


router.patch("/:id", authenticate, updateLeadStatus);

module.exports = router;