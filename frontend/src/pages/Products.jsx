import "../App.css";
import { useEffect, useState } from "react";

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("http://127.0.0.1:8000/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  // Filter products based on search
  console.log(products);
 const filteredProducts = products.filter((product) => {

  const searchText = search.trim().toLowerCase();

  const matchesSearch =
    product.name.toLowerCase().includes(searchText) ||
    product.category.toLowerCase().includes(searchText);

  const matchesCategory =
    selectedCategory === "All" ||   product.category === selectedCategory;

  return matchesSearch && matchesCategory;
});

  return (
    <div>
      {/* Hero Section */}
      <section className="products-hero">
        <h1>Explore Handmade Products</h1>

        <p>
          Discover unique handmade products created by talented women
          entrepreneurs across India.
        </p>
      </section>

      {/* Search Bar */}
      <div className="search-section">
        <input
          type="text"
          placeholder="🔍 Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="category-filter">

  <button onClick={() => setSelectedCategory("All")}>All</button>
<button
  onClick={() => {
    console.log("Soap Clicked");
    setSelectedCategory("Soap");
  }}
>
  Soap
</button>

  <button onClick={() => setSelectedCategory("Candle")}>Candle</button>

  <button onClick={() => setSelectedCategory("Crochet")}>Crochet</button>

  <button onClick={() => setSelectedCategory("Jewellery")}>Jewellery</button>

  <button onClick={() => setSelectedCategory("Pottery")}>Pottery</button>

  <button onClick={() => setSelectedCategory("Home Decor")}>Home Decor</button>

</div>

      {/* Product Cards */}
      <div className="products-container">

        {/* If no products found */}
        {filteredProducts.length === 0 ? (
          <h2 style={{ textAlign: "center", width: "100%", color: "#7b1fa2" }}>
            😔 No Products Found
          </h2>
        ) : (
          filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
              />

            <div className="category-badge">
  {product.category}
</div>

<h3>{product.name}</h3>

<p className="description">
  {product.description}
</p>

<p>⭐ {product.rating}</p>

<p>👩 Available from {product.seller_count} Women Sellers</p>

<p>📍 {product.location}</p>

<p>💰 ₹{product.price}</p>

<p>
  {product.stock > 0 ? "🟢 In Stock" : "🔴 Out of Stock"}
</p>

<button>View Details</button>
            </div>
          ))
        )}

      </div>
    </div>
  );
}

export default Products;