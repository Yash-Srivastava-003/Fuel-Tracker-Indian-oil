// Petrol pump data
const petrolPumps = [
  {
    name: "Indian Oil - CP",
    location: "Connaught Place, Delhi",
    amenities: ["Free Air", "Restrooms", "24/7 Service"],
  },
  {
    name: "Indian Oil - Karol Bagh",
    location: "Karol Bagh, Delhi",
    amenities: ["Convenience Store", "Oil Change", "Fast Billing"],
  },
  {
    name: "Indian Oil - South Extension",
    location: "South Extension, Delhi",
    amenities: ["EV Charging", "24/7 Open", "Nitrogen Air"],
  },
  {
    name: "Indian Oil - Vasant Kunj",
    location: "Vasant Kunj, Delhi",
    amenities: ["Car Wash", "Restrooms", "Cafe"],
  },
  {
    name: "Indian Oil - Lajpat Nagar",
    location: "Lajpat Nagar, Delhi",
    amenities: ["Free Air", "ATM", "Card Payment Accepted"],
  },
  {
    name: "Indian Oil - Saket",
    location: "Saket, Delhi",
    amenities: ["Fast Fueling", "EV Charging", "Lounge"],
  },
  {
    name: "Indian Oil - Dwarka",
    location: "Dwarka Sector 10, Delhi",
    amenities: ["Free Air", "Nitrogen Air", "Diesel Filtration"],
  },
  {
    name: "Indian Oil - Mayur Vihar",
    location: "Mayur Vihar, Delhi",
    amenities: ["24/7 Service", "Oil Change", "ATM"],
  },
  {
    name: "Indian Oil - Rohini",
    location: "Rohini Sector 16, Delhi",
    amenities: ["Free Air", "Tyre Inflation", "Restrooms"],
  },
  {
    name: "Indian Oil - Pitampura",
    location: "Pitampura, Delhi",
    amenities: ["CNG Available", "Car Wash", "Mobile Payment"],
  },
  {
    name: "Indian Oil - Chanakyapuri",
    location: "Chanakyapuri, Delhi",
    amenities: ["EV Charging", "Convenience Store", "Nitrogen Air"],
  },
  {
    name: "Indian Oil - Rajouri Garden",
    location: "Rajouri Garden, Delhi",
    amenities: ["24/7 Open", "Diesel Filtration", "ATM"],
  },
  {
    name: "Indian Oil - Janakpuri",
    location: "Janakpuri, Delhi",
    amenities: ["Free Air", "Restrooms", "Oil Change"],
  },
  {
    name: "Indian Oil - Green Park",
    location: "Green Park, Delhi",
    amenities: ["Nitrogen Air", "Fast Billing", "Cafe"],
  },
  {
    name: "Indian Oil - Uttam Nagar",
    location: "Uttam Nagar, Delhi",
    amenities: ["Free Air", "Tyre Inflation", "24/7 Service"],
  },
  {
    name: "Indian Oil - Anand Vihar",
    location: "Anand Vihar, Delhi",
    amenities: ["EV Charging", "Diesel Filtration", "Nitrogen Air"],
  },
];

// Fuel prices
const fuelPrices = { petrol: "₹98.50 per Litre", diesel: "₹89.30 per Litre" };

// Populate dropdown
const petrolPumpSelect = document.getElementById("petrolPumpSelect");
petrolPumps.forEach((pump, index) => {
  const option = document.createElement("option");
  option.value = index;
  option.textContent = pump.name;
  petrolPumpSelect.appendChild(option);
});

// Fetch data
function fetchData() {
  const selectedIndex = petrolPumpSelect.value;
  const outputDiv = document.getElementById("output");
  const loader = document.getElementById("loader");

  if (selectedIndex === "") {
    outputDiv.classList.add("hidden");
    return;
  }

  outputDiv.classList.add("hidden");
  loader.classList.remove("hidden");

  setTimeout(() => {
    const pump = petrolPumps[selectedIndex];
    outputDiv.innerHTML = `
              <h2>${pump.name}</h2>
              <p><strong>Location:</strong> ${pump.location}</p>
              <p><strong>Petrol Price:</strong> ${fuelPrices.petrol}</p>
              <p><strong>Diesel Price:</strong> ${fuelPrices.diesel}</p>
              <p><strong>Amenities:</strong> ${pump.amenities.join(", ")}</p>
          `;
    loader.classList.add("hidden");
    outputDiv.classList.remove("hidden");
  }, 1500);
}
