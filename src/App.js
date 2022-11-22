import { useState } from "react";
import Button from "./Components/Button/index.jsx";
import MenuContainer from "./Components/MenuContainer/index.jsx";
import Cart from "./Components/Cart/index.jsx";


function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 24.0,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 26.0,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 28.0,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 9.0,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca",
      category: "Bebidas",
      price: 9.00,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "Milk Shake",
      category: "Bebidas",
      price: 14.99,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([...products]);
  const [currentSale, setCurrentSale] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleClick = (productId) => {
    const selectedProduct = products.find(
      (product) => product.id === productId
    );

    if (!currentSale.includes(selectedProduct)) {
      setCurrentSale([...currentSale, selectedProduct]);
    } else {
      window.alert("Você já adicionou esse produto ao carrinho");
    }
  };

  function showProducts(input, event) {
    console.log(input);
    event.preventDefault();
    setFilteredProducts(
      filteredProducts.filter(
        (item) =>
          item.category.toLowerCase() === input.toLowerCase() ||
          item.name.toLowerCase() === input.toLowerCase()
      )
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Burguer<span> Now</span>
        </h1>
        <form>
          <input
            type="text"
            placeholder="Digitar Pesquisa"
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
          />
          <Button onClick={(event) => showProducts(userInput, event)} />
        </form>
      </header>
      <section className="frontshow">
        <MenuContainer products={filteredProducts} handleClick={handleClick} />
        <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
      </section>
    </div>
  );
}

export default App;
