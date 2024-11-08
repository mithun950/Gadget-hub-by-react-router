import { useEffect, useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { FaSortAmountDown } from "react-icons/fa";



const Dashboard = () => {
    const [cartItems, setCartItems] = useState([]);
    const [showCart, setShowCart] = useState(true);
    const [showWishlist, setShowWishlist] = useState(false);
    const [totalCost, setTotalCost] = useState(0);
    const [showPopup,setShowPopup] = useState(false)


    // order tracking state
    const [orderHistory, setOrderHistory] = useState([]);
    const [showTracking, setShowTracking] = useState(false);

    useEffect(() => {

        document.title = showCart ? " Gadget Heaven | Dashboard - Cart" : "Gadget Heaven | Dashboard - Wishlist";
    }, [showCart, showWishlist]); 

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('addCart')) || [];
        setCartItems(storedItems);
        const initialCost = storedItems.reduce((sum,item) => sum + item.price,0);
        setTotalCost(initialCost);
     
    },[]);
      
    useEffect(()=> {
            const updateCost = cartItems.reduce((sum,item) => sum + item.price,0);
            setTotalCost(updateCost);
    },[cartItems])
    
     


    const toggleCart =() => {
        setShowCart(true);
        setShowWishlist(false);
    }


    const toggleWishList =() => {
        setShowCart(false);
        setShowWishlist(true);
    }

    const handleRemoveItem = (productId) => {
        const updateItems = cartItems.filter(item =>item. product_id !== productId);
        if (updateItems.length !== cartItems.length){
        setCartItems(updateItems);
        localStorage.setItem('addCart', JSON.stringify(updateItems));
        }
        else{
            console.error("Item not found in cart.");   
        }
    }

     const handleSortByPrice = () => {
        const sortItems = [...cartItems].sort((a,b) => b.price - a.price);

        setCartItems(sortItems)
     }
     


     const handlePurchase = () => {
        setShowPopup(true);
    }

    const confirmPurchase = () => {

    const newOrder = {
            orderId: Math.random().toString(36).substring(7),
            items: cartItems,
            totalCost: totalCost,
            date: new Date().toLocaleDateString(),

        }

        localStorage.setItem('orderHistory', JSON.stringify([...orderHistory, newOrder]));

        setCartItems([])
        localStorage.setItem('addCart', JSON.stringify([]));
        setShowPopup(false);

        // order set trakinf
        setShowTracking(true);
    }

    


    return (
        <div>
            
        <div className="pt-24">

            <div className="bg-[#9538E2] mt-4 p-7 text-white">
            <h2 className="text-center text-3xl p-4 font-bold ">Dashboard</h2>
            <p className="text-center">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, <br /> we have it all!</p>
             
             <div className=" mt-5 flex gap-4 justify-center">
             <button onClick={toggleCart} className={`btn btn-outline rounded-3xl font-bold border-white px-7 ${showCart ? "bg-white text-[#9538E2]" : "text-white"}`}>Cart</button>
             <button onClick={toggleWishList} className={`btn btn-outline font-bold border-white rounded-3xl  px-7 ${showWishlist ? "bg-white text-[#9538E2]" : "text-white"}`}>Wishlist</button>
             </div>


             </div>

           

    {showCart && (
                    <div className="mt-4">

                        <div className="w-11/12 mx-auto  sm: flex justify-between items-center ">
                        <h3 className="text-xl font-bold text-center">Cart Items</h3>
                         <div className="  sm:flex items-center gap-4">
                            <h4 className="text-xl font-bold">Total cost: <small className="font-semibold text-purple-700">${totalCost.toFixed(2)}</small> </h4>
                          
                            <button onClick={handleSortByPrice} className="btn btn-outline border-purple-500 text-purple-500 px-6 py-1 rounded-3xl mr-2">Sort by Price <FaSortAmountDown /></button>
                            <button onClick={handlePurchase} className="btn bg-purple-500 px-6 py-1 rounded-3xl text-white ">Purchase</button>
                         </div>
                        </div>
                        <ul className="mt-20">
                            {cartItems.length > 0 ? (
                                cartItems.map(item => (
                                    <li key={item.product_id} className=" w-11/12 mx-auto mt-7 shadow-xl p-6 rounded-2xl  sm:flex justify-between  border-b">
                                       
                                       <div className=" max-sm:text-center sm:flex items-center gap-4">
                                        <div className="">
                                        <img className=" mx-auto rounded-lg h-[300px] sm:h-[170px]" src={item.product_image} alt="" />
                                        </div>
                                        <div>
                                        <h3 className="text-xl mt-4 font-semibold ">{item.product_title}</h3>
                                        <small className="text-gray-500 mt-3">{item.Specification}</small>
                                        <p className="font-bold mt-3">${item.price}</p>
                                        </div>
                                        </div>
                                        <button onClick={() => handleRemoveItem(item.product_id)} className="text-red-500">
                                        <CiCircleRemove className="text-5xl" />
                                        </button>
                                    </li>
                                ))
                            ) : (
                                <li className="text-center">No items in cart.</li>
                            )}
                        </ul>
                    </div>
                )}

    {showWishlist && (
                    <div className="mt-4">
                        <h3 className="text-xl font-bold text-center">Wishlist</h3>
                        <p className="text-center">No content in wishlist.</p>
                    </div>
                )}

    </div>

    {/* Purchase confirmation popup */}
    {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h3 className="text-2xl font-bold mb-4">Purchase Confirmation</h3>
                        <div className="mx-auto">
                        <img className="mx-auto mt-10 mb-7" src="/assets/Group.png " alt="" />
                        </div>
                        <p>Your total cost is <span className="font-bold">${totalCost.toFixed(2)}</span>.</p>
                        <div className="mt-6 flex justify-center gap-4">
                            <button onClick={confirmPurchase} className="btn bg-[#9583E2] px-6 py-1 rounded-3xl text-white">Confirm</button>
                            <button onClick={() => setShowPopup(false)} className="btn bg-red-500 px-6 py-2 rounded-3xl text-white">Cancel</button>
                        </div>
                    </div>
                </div>
            )}

            
            </div>
        );
};

export default Dashboard;