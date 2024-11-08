
import { useLoaderData } from "react-router-dom";
import Categories from "../Components/Categories";


const Home = () => {



    const allData = useLoaderData();
   
    return (
        <div>
          {/* <Banner></Banner> */}
          <Categories allData={allData}></Categories>

        </div>
    );
};

export default Home;
