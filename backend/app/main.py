from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import products
from app.database import Base, engine
from app.models import product

app = FastAPI()

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

app.include_router(products.router)

@app.get("/")
def home():
    return {
        "message": "Welcome to She Market Backend 💜"
    }