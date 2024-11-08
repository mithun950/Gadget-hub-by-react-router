import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Rating from "react-rating-stars-component";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { addToCard, getAllProduct } from "../Uitilitis";
import { Helmet } from 'react-helmet';

const ProductsDetails = ({ updateCartCount, onHeartUpdate }) => {
    const [rating, setRating] = useState(0);
    const { id } = useParams();
    const location = useLocation();
    const [product, setProduct] = useState(location.state?.product || null);
    const [isAddToCart, setIsAddToCart] = useState(false)
   

    useEffect(() => {
        if (!product) {
            fetch('/Data.json')
                .then(res => res.json())
                .then(data => {
                    const search = data.find(item => item.product_id === id);
                    setProduct(search);
                    if (search) setRating(search.rating || 0);
                });
        } else {
            setRating(product.rating || 0);
        }

    //   addto cart btn disabled 
    const cart = getAllProduct()
    const isExist = cart.find(item => item.product_id === product.product_id)
    
     if(isExist){
        setIsAddToCart(true)
     }


    }, [id, product]);

    const handleRatingChange = async (newRating) => {
        setRating(newRating);

        try {
            
            const response = await fetch('/api/update-rating', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    product_id: id,
                    rating: newRating
                })
            });

            if (response.ok) {
                console.log("Rating updated successfully!");
            } else {
                console.error("Failed to update rating.");
            }
        } catch (error) {
            console.error("Error updating rating:", error);
        }
    };




    

    // handle add to card 

    const handleAddToCard = (product) => {
          addToCard(product)
          setIsAddToCart(true)
          updateCartCount();
    }

    const handleAddToHeart = () => { 
        if (typeof updateCartCount === 'function') { 
            onHeartUpdate(); 
        } else {
            console.error("onHeartUpdate is not a function"); 
        }
    };

    return (

        
        <div className=" relative pt-24  mb-96">
            <Helmet>
                <title>Gadget Heaven | Product-Details</title>
                
            </Helmet>
           
           <div className="  h-[400px] bg-purple-600  flex items-center justify-center py-50 ">
         <h3 className="text-3xl text-center mb-40 text-white font-bold">Product Details</h3>
        
         </div>
       

         <div className="absolute md:flex  gap-5 items-center origin-bottom-left top-80  left-1/2 transform -translate-x-1/2  bg-white rounded-lg shadow-lg p-6 w-10/12 max-w-lg  ">
            {product && (
                <>
                <div>
                    <img className=" w-full h-[300px] object-fill rounded-xl" src={product.product_image} alt="" />
                    </div>

                    <div>
                    <h2 className="text-2xl font-bold mt-3">{product.product_title}</h2>
                    <p className="mt-1">Price: {product.price}K</p>
                    <button className="btn btn-xs mt-2 border-[#38e249] bg-green-200">
                        {product.availability ? 'In Stock' : 'Not Available'}
                    </button>
                    <h4 className="text-xl font-semibold mt-2">Specification:</h4> 
                    <ol>{product.Specification}</ol>
                    <p className="mt-1 font-medium">Category: {product.category}</p>
                    <p className="mt-1 font-medium">ProductID: {product.product_id}</p>
                    
                
                    <h4 className="mt-1 text-xl font-semibold flex">Rating:</h4>
                    <div className="flex gap-7">
                    <Rating
                        count={5}
                        value={rating}
                        onChange={handleRatingChange}
                        size={30}
                        activeColor="gold"
                        isHalf={true}
                    />
                    <button className="mt-2 px-3 font-medium bg-slate-300 rounded-lg "> {rating}</button>
                    </div>
                
                <div className="flex items-center gap-4">
                    <button
                    disabled= {isAddToCart} 
                    onClick={() =>handleAddToCard(product) } 
                    className=" btn bg-[#9538E2] text-white flex items-center gap-2 mt-3">Add to Card<IoCartOutline className="text-xl" /> </button>
                    
                    <button onClick={handleAddToHeart} className="flex items-center">
                            <FaRegHeart className="text-2xl mt-2 shadow-2xl" />
                        </button>
                    </div>
                    </div>
                </>
            )}
        </div>
        </div>
    );
};

export default ProductsDetails;

