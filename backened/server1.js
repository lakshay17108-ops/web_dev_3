/*import express from 'express';
const app = express();
 app.get('/', (req, res) => {
     res.json({ message: 'Hello World!', success: true });
});
 app.get('/context', (req, res) => {
    res.json({ message: 'This is the context route', success: true });
});
let users = [{ name: 'John' }, { name: 'Mahi' }, { name: 'Sahu' }];
app.get('/users', (req, res) => {
    res.status(200).json({ message: 'Users retrieved successfully', success: true, users });
});
app.post('/create-user', (req, res) => {
    let name = req.body.name
    if (!name) {
        res.status(400).json({ message: 'Name is required', success: false });
    }
    users.push({ name });
    res.status(200).json({ message: 'User created successfully', success: true, user: { name } });
});
app.post('/update-user', (req, res) => {
    const { name, newName } = req.body;

    if (!name || !newName) {
        return res.status(400).json({
            message: 'Both name and newName are required',
            success: false
        });
    }

    const user = users.find(user => user.name === name);

    if (!user) {
        return res.status(404).json({
            message: 'User not found',
            success: false
        });
    }

    user.name = newName;

    res.json({
        message: 'User updated successfully',
        success: true,
        user
    });
});
app.delete('/delete-user',(req,res)=>{
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({
            message: 'Name is required',
            success: false
        })
        
        users.splice(userIndex, 1);
        res.status(200).json({
            message: 'User deleted successfully',
            success: true
        });
    }

    const userIndex = users.indexOf(users.find(user => user.name === name));

    if (userIndex === -1) {
        return res.status(404).json({
            message: 'User not found',
            success: false
        });
    }

    users.splice(userIndex, 1);

    res.json({
        message: 'User deleted successfully',
        success: true
    });
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});*/
