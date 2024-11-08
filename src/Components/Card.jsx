import { useState,useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductsDetails from "./components/ProductsDetails";
import Dashboard from "./components/Dashboard";

function App() {
    // Step 1: Create a state to hold cart item count
    const [cartCount, setCartCount] = useState(0);

    // Function to update cart count
    const updateCartCount = () => {
        const cartItems = JSON.parse(localStorage.getItem('addCart')) || [];
        setCartCount(cartItems.length);
    };

    useEffect(() => {
        updateCartCount();
    }, []);

    return (
        <div>
            {/* Step 2: Pass the cart count and update function to the Navbar and ProductsDetails */}
            <Navbar cartCount={cartCount} />
            <ProductsDetails updateCartCount={updateCartCount} />
            <Dashboard />
        </div>
    );
}

export default App;
