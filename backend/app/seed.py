from app.database import SessionLocal
from app.models.product import Product

db = SessionLocal()

products = [
    {
        "name": "Lavender Handmade Soap",
        "category": "Soap",
        "description": "Natural lavender soap made with essential oils.",
        "seller": "Priya Sharma",
        "price": 249,
        "rating": 4.8,
        "stock": 25,
        "location": "Jaipur",
        "image": "https://images.unsplash.com/photo-1607006483225-5e4f9b6f0f0f?w=500"
    },
    {
        "name": "Neem Herbal Soap",
        "category": "Soap",
        "description": "Handmade neem soap for healthy skin.",
        "seller": "Asha Verma",
        "price": 199,
        "rating": 4.7,
        "stock": 18,
        "location": "Delhi",
        "image": "https://images.unsplash.com/photo-1584305574647-acf8069a3d15?w=500"
    },
    {
        "name": "Soy Vanilla Candle",
        "category": "Candle",
        "description": "Eco-friendly soy wax candle with vanilla fragrance.",
        "seller": "Neha Gupta",
        "price": 399,
        "rating": 4.9,
        "stock": 12,
        "location": "Chandigarh",
        "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500"
    },
    {
        "name": "Crochet Tote Bag",
        "category": "Crochet",
        "description": "Handcrafted cotton crochet tote bag.",
        "seller": "Kavya Singh",
        "price": 699,
        "rating": 4.8,
        "stock": 10,
        "location": "Udaipur",
        "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
    },
    {
        "name": "Terracotta Planter",
        "category": "Pottery",
        "description": "Beautiful handmade terracotta planter.",
        "seller": "Ritu Sharma",
        "price": 499,
        "rating": 4.6,
        "stock": 15,
        "location": "Lucknow",
        "image": "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500"
    },
    {
        "name": "Resin Earrings",
        "category": "Jewellery",
        "description": "Elegant handmade resin earrings.",
        "seller": "Sneha Kapoor",
        "price": 349,
        "rating": 4.9,
        "stock": 30,
        "location": "Mumbai",
        "image": "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500"
    },
    {
        "name": "Macrame Wall Hanging",
        "category": "Home Decor",
        "description": "Boho-style handmade macrame wall hanging.",
        "seller": "Meera Joshi",
        "price": 899,
        "rating": 4.8,
        "stock": 8,
        "location": "Pune",
        "image": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500"
    },
    {
        "name": "Hand-painted Mug",
        "category": "Pottery",
        "description": "Ceramic mug with hand-painted floral design.",
        "seller": "Anjali Mehta",
        "price": 299,
        "rating": 4.7,
        "stock": 22,
        "location": "Ahmedabad",
        "image": "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=500"
    },
    {
        "name": "Embroidered Cushion Cover",
        "category": "Home Decor",
        "description": "Traditional hand-embroidered cushion cover.",
        "seller": "Pooja Arora",
        "price": 449,
        "rating": 4.8,
        "stock": 14,
        "location": "Amritsar",
        "image": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500"
    },
    {
        "name": "Wooden Key Holder",
        "category": "Home Decor",
        "description": "Rustic handcrafted wooden key holder.",
        "seller": "Divya Bansal",
        "price": 399,
        "rating": 4.6,
        "stock": 20,
        "location": "Shimla",
        "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500"
    }
]

for item in products:
    db.add(Product(**item))

db.commit() #jab tak commit nhi krenge db mai kuch nahi jayega
db.close()

print("Products Added Successfully!")