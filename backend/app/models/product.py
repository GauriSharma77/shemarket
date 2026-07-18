from sqlalchemy import Column, Integer, String, Float
from app.database import Base


class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)

    # Product Details
    name = Column(String)
    category = Column(String)
    description = Column(String)
    image = Column(String)

    # Seller Details
    seller = Column(String)
    location = Column(String)

    # Product Info
    price = Column(Integer)
    rating = Column(Float)
    stock = Column(Integer)