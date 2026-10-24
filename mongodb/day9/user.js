import userModel from "./userModel.js";
const createuser = (req, res) => {
    try {
        let {name , age, gender} = req.body;    
        if (!name || !age || !gender) {
            return res.status(400).json({ message: "Name, age, and gender are required" });
        }
        success: true,
        res.status(200).json({ message: "User created successfully" });

    }
    catch (error) {
        res.status(500).json({ message: "Error creating user" });
    }
}