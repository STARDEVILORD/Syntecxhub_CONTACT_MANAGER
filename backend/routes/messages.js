const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

// POST
router.post("/", async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    const savedMessage = await newMessage.save();
    res.status(201).json({
      success: true,
      message: "Inquiry saved successfully!",
      data: savedMessage,
    });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({
      success: false,
      message: "Server error. Could not save message.",
    });
  }
});

//GET
router.get("/", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: "Server error retrieving messages" });
  }
});

module.exports = router;
