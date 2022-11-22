import "../Styles/index.css";

import Product from "../Product";

const MenuContainer = ({ products, handleClick }) => {
  return (
    <div className="list">
      {products.map((item, index) => (
        <Product key={index} product={item} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default MenuContainer;
