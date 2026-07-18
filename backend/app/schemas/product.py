from pydantic import BaseModel, ConfigDict

class Product(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    name: str
    category: str
    description: str
    image: str
    seller: str
    location: str
    price: int
    rating: float
    stock: int