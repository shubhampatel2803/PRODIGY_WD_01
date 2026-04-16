const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.post("/", (req, res) => {
    const { name, email, message } = req.body;

    const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";

    db.query(sql, [name, email, message], (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Error saving data" });
        }
        res.json({ message: "Message saved successfully!" });
    });
});

module.exports = router;