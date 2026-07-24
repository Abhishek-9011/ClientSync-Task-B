const express = require("express");

const {
    createLead,
    getLeads,
    updateLeadStatus
} = require("../controllers/leadController");

const router = express.Router();

router.route("/")
    .post(createLead)
    .get(getLeads);

router.patch("/:id", updateLeadStatus);

module.exports = router;