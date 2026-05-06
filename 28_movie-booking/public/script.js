let selectedSeats = [];
let selectedMovie = "";

// Create seats
const seatContainer = document.getElementById("seatContainer");

for (let i = 1; i <= 20; i++) {
    const seat = document.createElement("div");
    seat.classList.add("seat");
    seat.innerText = i;

    seat.addEventListener("click", () => {
        seat.classList.toggle("selected");

        if (selectedSeats.includes(i)) {
            selectedSeats = selectedSeats.filter(s => s !== i);
        } else {
            selectedSeats.push(i);
        }
    });

    seatContainer.appendChild(seat);
}

// Select movie
function selectMovie(movie) {
    selectedMovie = movie;
    document.getElementById("selectedMovie").value = movie;
}

// Submit booking
document.getElementById("bookingForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;

    if (!selectedMovie || selectedSeats.length === 0) {
        alert("Select movie and seats!");
        return;
    }

    const response = await fetch('/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name,
            movie: selectedMovie,
            seats: selectedSeats.join(", ")
        })
    });

    const data = await response.json();

    alert(data.message);

    selectedSeats = [];
    document.getElementById("bookingForm").reset();
    document.querySelectorAll(".seat").forEach(s => s.classList.remove("selected"));
});

// Load bookings
async function loadBookings() {
    const response = await fetch('/bookings');
    const bookings = await response.json();

    const list = document.getElementById('bookingList');
    list.innerHTML = '';

    bookings.forEach(b => {
        const div = document.createElement('div');
        div.classList.add('booking-item');
        div.innerText = `${b.name} booked seats ${b.seats} for ${b.movie}`;
        list.appendChild(div);
    });
}