import express from "express";
const app = express();
app.get("/", (req, res) => {
 try {
    console.log(req.method, req.url);
    return res.status(200).json({
        message: "Request received successfully",
        success: true
    }); 
 }
 catch (error) {
    res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
        success: false
    });
 }
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});