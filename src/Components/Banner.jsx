import { useNavigate } from "react-router-dom";


const Banner = () => {

     
    const navigate = useNavigate();

    const handleShopNow = () => {
        navigate("/dashboard");
    }
    return (
        <div className="relative">
            {/* banner part */}
            <div className="text-center h-[10px] bg-[#9538E2] w-11/12 mx-auto pt-20 ">
                <div className="w-10/12 mx-auto space-y-7 ">
                <h1 className="text-4xl font-bold text-white">Gadget Heaven Accessories</h1>
                <p className="text-white">
                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <button onClick={handleShopNow} className="btn bg-white text-[#9538E2] font-bold">Shop Now</button>

                </div>
            </div>

            {/* bg img set */}

            <div className="mt-44 top-40 relative z-10">
                <div className="p-6 w-8/12 mx-auto bg-white/35 backdrop-blur-lg border border-white rounded-2xl ">
                    <div className="bg-banner rounded-lg h-[210px] md:h-[500px] bg-cover bg-center ">
                        
                    </div>
                </div>

            </div>

        </div>

    );
};

export default Banner;
