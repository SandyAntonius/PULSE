const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());


app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required!' });
    }

  
    console.log('Received message:', { name, email, message });

    res.status(200).json({
        success: true,
        message: 'Message received successfully!'
    });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(` Server is running on http://localhost:${PORT}`);
});
