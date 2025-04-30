const axios = require('axios');

const list = [
  {
    cover: "../images/list/p-1.png",
    name: "Red Carpet Real Estate",
    location: "12/4, Vijay Nagar, Near Meghdoot Garden",
    category: "For Rent",
    price: "₹3,700",
    type: "Apartment",
  },
  {
    cover: "../images/list/p-2.png",
    name: "Fairmount Properties",
    location: "B-203, Silver Heights Apartments, Palasia Square",
    category: "For Sale",
    price: "₹9,750",
    type: "Condos",
  },
  {
    cover: "../images/list/p-7.png",
    name: "The Real Estate Corner",
    location: "45, Scheme No. 78, Part 2, Opp. C21 Mall",
    category: "For Rent",
    price: "₹5,860",
    type: "Offices",
  },
  {
    cover: "../images/list/p-4.png",
    name: "Herringbone Realty",
    location: "118, Sudama Nagar, Sector D",
    category: "For Sale",
    price: "₹7,540",
    type: "Homes & Villas",
  },
  {
    cover: "../images/list/p-5.png",
    name: "Brick Lane Realty",
    location: "7-A, Bhawarkuan Road, Near GDC College",
    category: "For Rent",
    price: "₹4,850",
    type: "Commercial",
  },
  {
    cover: "../images/list/p-6.png",
    name: "Banyon Tree Realty",
    location: "33, Rajendra Nagar, Sector C, Behind SICA School",
    category: "For Sale",
    price: "₹2,742",
    type: "Apartment",
  },
];

async function seedData() {
  try {
    for (const item of list) {
      const res = await axios.post('http://localhost:5000/api/properties', item);
      console.log(`Seeded: ${res.data.name}`);
    }
    console.log("✅ All properties seeded successfully!");
  } catch (error) {
    console.error('❌ Error seeding data:', error.message);
  }
}

seedData();