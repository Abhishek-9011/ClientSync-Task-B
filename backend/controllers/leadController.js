const Lead = require("../models/Lead");

const createLead = async (req, res) => {
    try {
        const { name, email, budget, message } = req.body;

        if (!name || !email || !budget || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const lead = await Lead.create({
            name,
            email,
            budget,
            message
        });

        res.status(201).json({
            success: true,
            message: "Lead created successfully",
            data: lead
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getAllLeads = async (req, res) => {
    try {

        const leads = await Lead.find().sort({
            createdAt: -1
        });

        res.status(200).json({
            success: true,
            count: leads.length,
            data: leads
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

const getLeads = async (req, res) => {

    try {

        const search = req.query.search || "";

        const leads = await Lead.find({
            $or: [
                {
                    name: {
                        $regex: search,
                        $options: "i"
                    }
                },
                {
                    email: {
                        $regex: search,
                        $options: "i"
                    }
                }
            ]
        }).sort({
            createdAt: -1
        });

        res.status(200).json({
            success: true,
            count: leads.length,
            data: leads
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const updateLeadStatus = async (req, res) => {

    try {

        const { status } = req.body;

        const lead = await Lead.findById(req.params.id);

        if (!lead) {
            return res.status(404).json({
                success: false,
                message: "Lead not found"
            });
        }

        lead.status = status;

        await lead.save();

        res.status(200).json({
            success: true,
            message: "Status updated successfully",
            data: lead
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    createLead,
    getLeads,
    updateLeadStatus
};
