import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';

const Categories = ({allData}) => {
    const navigate = useNavigate();

    const [products,setProducts] = useState(allData);
    
    const [activeButton,setActiveButton] = useState('AllProducts');
    
    
    const filterCategory = (category) => {
        setActiveButton(category);

        if(category === 'AllProducts'){
            setProducts(allData);
        }
        else{
            const filtered = allData.filter(gadget =>gadget.category === category );
            setProducts(filtered);
        };
    }

   const handleViewDetails = (product) => {
         navigate(`/productsDetails/ ${product.product_id}`, {state: {product}});
   };



    return (
        <div>
             <Helmet>
                <title>Gadget Heaven | Home</title>
                
            </Helmet>
           <div className="w-11/12 mx-auto my-10 mt-44 ">
            <p className="text-4xl font-bold text-center"> Exploring Cutting Gadgets</p>
            </div> 
            <div className="gap-5  md:flex w-11/12 mx-auto ">
            <div className="flex   h-[600px]  flex-col gap-5 shadow-2xl p-4 rounded">
                <button className={`btn ${activeButton === 'AllProducts' ? 'bg-[#9538E2] text-white' : ''}`} onClick={() => filterCategory('AllProducts')}> All Products</button>
                <button className={`btn ${activeButton === 'Smartphone' ? 'bg-[#9538E2] text-white' : ''}`} onClick={() => filterCategory('Smartphone')}>Smartphone</button>
                <button className={`btn ${activeButton === 'Laptop' ? 'bg-[#9538E2] text-white' : ''}`} onClick={() => filterCategory('Laptop')}> Laptop</button>
                <button className={`btn ${activeButton === 'Accessories' ? 'bg-[#9538E2] text-white' : ''}`} onClick={() => filterCategory('Accessories')}> Wearable</button>
                <button className={`btn ${activeButton === 'Camera' ? 'bg-[#9538E2] text-white' : ''}`} onClick={() => filterCategory('Camera')}> Camera</button>
                <button className={`btn ${activeButton === 'Tablet' ? 'bg-[#9538E2] text-white' : ''}`} onClick={() => filterCategory('Tablet')}> Tablet</button>
                <button className={`btn ${activeButton === 'Drone' ? 'bg-[#9538E2] text-white' : ''}`} onClick={() => filterCategory('Drone')}> Drone</button>
                <button className={`btn ${activeButton === 'Audio' ? 'bg-[#9538E2] text-white' : ''}`} onClick={() => filterCategory('Audio')}> Audio</button>
            </div>
            <div className=" mt-3 grid md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto gap-6">
            {
                products.map(gadget => (
                    <div className="border rounded-lg p-5 bg-gray-100 shadow-xl h-[500px]" key={gadget.product_id} >
                        <img className=" h-[300px] sm:h-[250px] rounded-lg" src={gadget.product_image} alt={gadget.product_image} />
                        <h2 className="text-2xl font-semibold  mt-2">{gadget.product_title}</h2>
                        <p className="mt-2">Price: {gadget.price}K</p>

                        <button onClick={() => handleViewDetails(gadget)} className="btn border-[#9538E2] text-[#9538E2] rounded-2xl mt-3">View Details</button>

                        


                    </div>
                ))
            }
            
            
            </div>

            </div>
        </div>
    );
};

export default Categories;
