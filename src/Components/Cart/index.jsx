import "../Styles/index.css";

const Cart = ({ currentSale, setCurrentSale }) => {
  function removeItem(productId) {
    setCurrentSale(
      currentSale.filter((item) => item.id !== parseInt(productId, 10))
    );
  }

  return (
    <ul className="cart-info">
      <div className="cart-bginfo">
        <p className="title-cart">Carrinho de compras</p>
      </div>
      {currentSale.map((item, index) => (
        <div className="cart-product">
          <img src={item.img} alt={item.name} />
          <li className="cart-list" key={index}>
            <div>
              <h3 className="cart-name">{item.name}</h3>
              <p className="cart-category">{item.category}</p>
            </div>
            <button
            className="btt-remove"
            id={item.id}
            onClick={(event) => removeItem(event.target.id)}>
            Remover
          </button>
          </li>

        </div>
      ))}

      <div className="cart-result">
        <h3>Total R$</h3>
        <h3>{currentSale.reduce((a, b) => a + b.price, 0).toFixed(2)}</h3>
      </div>
    </ul>
  );
};

export default Cart;
