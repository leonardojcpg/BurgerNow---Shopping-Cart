import "../Styles/index.css"

const Product = ({ product, handleClick }) => {
  return (
    <div>
      <ul className="showcase">
        <div className="bg-img">
          <li className="img-product">
            <img src={product.img} alt="" />
          </li>
        </div>
        <li className="name-product">{product.name}</li>
        <li className="category-product">{product.category}</li>
        <li className="price-product">R$ {product.price.toFixed(2)}</li>
        <button className="button-adc" onClick={() => handleClick(product.id)}>
          Adicionar
        </button>
      </ul>
    </div>
  );
};

export default Product;
