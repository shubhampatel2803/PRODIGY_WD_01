const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Root route
app.get("/", (req, res) => {
    res.send("Server is running successfully 🚀");
});

// route
const contactRoute = require("./routes/contact");
app.use("/api/contact", contactRoute);

// ✅ Render port fix
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});