import React, { useEffect, useState } from "react";
import axios from "axios";
import { productTypeData } from "../features/slices/type";
import { useDispatch, useSelector } from "react-redux";
import CardList from "./cardList";
import { addProduct } from "../features/slices/products.slice";

function Home() {
  const dispatch = useDispatch();
  const productDataInRedux = useSelector(
    (state: any) => state.products.products
  );
  const [productData, setProductData] = React.useState<productTypeData[]>(
    productDataInRedux[0]
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      if (productDataInRedux.length > 0) {
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get("https://fakestoreapi.com/products");

        const flatProducts =
          Array.isArray(response.data) && Array.isArray(response.data[0])
            ? response.data.flat()
            : response.data;
        setProductData(response.data);
        if (loading) dispatch(addProduct(flatProducts));
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  if (loading) return <div>Loading...</div>;
  return (
    <div className="Home">
      <CardList product={productData} />
    </div>
  );
}

export default Home;
