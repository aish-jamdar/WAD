const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Temporary storage (in-memory)
let bookings = [];

// POST API for booking tickets
app.post('/book', (req, res) => {
    const { name, movie, seats } = req.body;

    if (!name || !movie || !seats) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const booking = {
        id: bookings.length + 1,
        name,
        movie,
        seats
    };

    bookings.push(booking);

    res.json({ message: "Booking Successful!", booking });
});

// GET API to view bookings
app.get('/bookings', (req, res) => {
    res.json(bookings);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
