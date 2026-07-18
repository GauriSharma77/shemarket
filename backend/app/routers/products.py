from fastapi import APIRouter
from app.models.product import Product as ProductModel
from app.schemas.product import Product
from app.database import SessionLocal

router = APIRouter()


@router.get("/products", response_model=list[Product])
def get_products():
    db = SessionLocal()

    products = db.query(ProductModel).all()

    db.close()

    return products