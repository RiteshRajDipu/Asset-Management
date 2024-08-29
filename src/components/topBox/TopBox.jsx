import "./topBox.scss";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";

function TopBox() {
  const searchQuery = useSelector((state) => state.products.searchQuery);
  const products = useSelector((state) => state.products.productItems);

  const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.producer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
  <div className="productList">
  <SearchBar />
  <h1>Latest Assets:</h1>
  <div className="productGrid">
    {filteredProducts.length > 0 ? (
      filteredProducts.map((product) => (
        <div key={product.id} className="productItem">
          <div className="productInfo">
            <div className="productTitle">{product.title}</div>
            <div className="productProducer">Brand: {product.producer}</div>
            <div className="productPrice">Price: {product.price}</div>
          </div>
        </div>
      ))
    ) : (
      <div className="noProducts">No products found</div>
    )}
  </div>
</div>
);
}

export default TopBox;