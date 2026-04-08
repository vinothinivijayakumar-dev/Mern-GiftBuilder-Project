import { useState, useContext } from "react";
import products from "../../utils/products";
import "./BuildGift.css";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { FaGift, FaSearch, FaTimes, FaHeart, FaRegHeart } from "react-icons/fa";
import { WishlistContext } from "../../context/WishlistContext";

function BuildGift() {

    const { addToCart } = useContext(CartContext);

    const [selectedItems, setSelectedItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const [category, setCategory] = useState("all");
    const { wishlist, toggleWishlist } = useContext(WishlistContext);

    const navigate = useNavigate();

    const toggleSelect = (product) => {
        const exists = selectedItems.find((item) => item.id === product.id);

        if (exists) {
            setSelectedItems(selectedItems.filter((item) => item.id !== product.id));
        } else {
            setSelectedItems([...selectedItems, { ...product, quantity: 1 }]);
        }
    };

    const filteredProducts = products.filter((item) => {
        const matchesSearch = item.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        const matchesCategory =
            category === "all" || item.category === category;

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="buildgift">

            <h2><FaGift className="hero-icon" /> Build Your Perfect Gift</h2>

            <p className="buildgift-subtitle">
                Choose your favorite items and create a beautiful surprise for your loved ones.
            </p>

            <div className="search-bar">

                <FaSearch className="search-icon" />

                <input
                    type="text"
                    placeholder="Find the perfect gift"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                {searchTerm && (
                    <FaTimes
                        className="clear-icon"
                        onClick={() => setSearchTerm("")}
                    />
                )}

            </div>

            <div className="category-filter">

                {["all", "premium", "flowers", "toys", "gifts", "sweets"].map((cat) => (
                    <button
                        key={cat}
                        className={category === cat ? "active" : ""}
                        onClick={() => setCategory(cat)}
                    >
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                ))}

            </div>

            {/* PRODUCTS GRID */}
            <div className="buildgift-container">

                {filteredProducts.length === 0 ? (

                    <p className="no-results">
                        No matches found <br />
                        Try a different keyword and discover amazing gifts
                    </p>

                ) : (

                    filteredProducts.map((item) => {

                        const isSelected = selectedItems.find((p) => p.id === item.id);

                        return (
                            <div
                                key={item.id}
                                className={`buildgift-card ${isSelected ? "selected" : ""}`}
                                onClick={() => toggleSelect(item)}
                            >
                                <div className="wishlist-icon"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleWishlist(item);
                                    }}
                                >
                                    {wishlist.find((p) => p.id === item.id) ? (
                                        <FaHeart />
                                    ) : (
                                        <FaRegHeart />
                                    )}
                                </div>
                                <div className="buildgift-img">
                                    <img src={item.image} alt={item.name} />
                                </div>

                                <h3>{item.name}</h3>
                                <p>₹{item.price}</p>

                                <div className="card-actions">

                                    <button
                                        className="select-btn"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleSelect(item);
                                        }}
                                    >
                                        {isSelected ? "Selected ✓" : "Select"}
                                    </button>

                                    <button
                                        className="view-btn"
                                        onClick={(e) => {
                                            e.stopPropagation();

                                            navigate("/selected", { state: { selectedItems } });
                                        }}
                                    >
                                        View Selected
                                    </button>

                                </div>

                            </div>
                        );
                    })

                )}

            </div>

        </div>
    );
}

export default BuildGift;