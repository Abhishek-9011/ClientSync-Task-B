const { z } = require("zod");
const Lead = require("../models/Lead");

const createLeadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters"),

  email: z
    .string()
    .trim()
    .email("Invalid email address"),

  budget: z
    .string()
    .trim()
    .min(1, "Budget is required"),

  message: z
    .string()
    .trim()
    .min(5, "Message must be at least 5 characters"),
});

const updateStatusSchema = z.object({
  status: z.enum(["New", "Contacted", "Qualified", "Lost"]),
});

const createLead = async (req, res) => {
  try {
    const validatedData = createLeadSchema.parse(req.body);

    const lead = await Lead.create(validatedData);

    return res.status(201).json({
      success: true,
      message: "Lead created successfully",
      data: lead,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        errors: error.errors,
      });
    }

    return res.status(500).json({
      success: false,
      message: error.message,
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
            $options: "i",
          },
        },
        {
          email: {
            $regex: search,
            $options: "i",
          },
        },
      ],
    }).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: leads.length,
      data: leads,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const updateLeadStatus = async (req, res) => {
  try {
    const { status } = updateStatusSchema.parse(req.body);

    const lead = await Lead.findById(req.params.id);

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found",
      });
    }

    lead.status = status;
    await lead.save();

    return res.status(200).json({
      success: true,
      message: "Status updated successfully",
      data: lead,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        errors: error.errors,
      });
    }

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createLead,
  getLeads,
  updateLeadStatus,
};