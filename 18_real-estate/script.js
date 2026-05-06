const properties = [
    {
        image: "building.jpg",
        address: "Koregaon Park, Pune",
        price: "₹85,00,000"
    },
    {
        image: "https://source.unsplash.com/400x300/?villa",
        address: "Baner, Pune",
        price: "₹1,20,00,000"
    },
    {
        image: "https://source.unsplash.com/400x300/?apartment",
        address: "Hinjewadi, Pune",
        price: "₹65,00,000"
    },
    {
        image: "https://source.unsplash.com/400x300/?building",
        address: "Wakad, Pune",
        price: "₹75,00,000"
    }
];

const propertyList = document.getElementById("propertyList");

properties.forEach((property) => {
    const card = `
        <div class="col-md-4 mb-4">
            <div class="card shadow">
                <img src="${property.image}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${property.address}</h5>
                    <p class="price">${property.price}</p>
                    <button class="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#contactModal">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    `;
    propertyList.innerHTML += card;
});
