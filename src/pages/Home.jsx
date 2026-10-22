import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";



const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchProductData() {
        setLoading(true);

        try{
            const res = await fetch(API_URL);
            const data = await res.json();

            setPosts(data);

        }
        catch(error) {
            console.log("Failed to fetch products:", error);
            setPosts([]);

        }finally {
            setLoading(false);
        }
        
    }

    useEffect( () => {
        fetchProductData();
    }, [])


return (
  <div className="max-w-7xl mx-auto p-6">
    {loading ? (
      <div className="flex justify-center items-center min-h-[80vh]">
        <Spinner />
      </div>
    ) : posts.length > 0 ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {posts.map((post) => (
          <Product key={post.id} post={post} />
        ))}
      </div>
    ) : (
      <div className="flex justify-center items-center min-h-[80vh]">
        <p className="text-2xl font-semibold text-gray-600">
          No Data Found
        </p>
      </div>
    )}
  </div>
);
};

export default Home