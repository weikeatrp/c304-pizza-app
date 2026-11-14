
import React, { useState } from "react";
import pizzaData from "./data";
import "./index.css";

function Header() {
  return (
    <header className="header">
      <h1>ANDY'S PIZZA CO.</h1>
    </header>
  );
}

function Pizza(props) {
  return (
    <li className={props.pizza.soldOut ? "pizza sold-out" : "pizza"}>
      <img
        src={"/" + props.pizza.photoName}
        alt={props.pizza.name}
      />

      <div>
        <h3>{props.pizza.name}</h3>
        <p>{props.pizza.ingredients}</p>
        <span>
          {props.pizza.soldOut
            ? "SOLD OUT"
            : "$" + props.pizza.price}
        </span>
      </div>
    </li>
  );
}

function Menu() {
  const hour = new Date().getHours();
  const isOpen = hour >= 10 && hour < 22;

  const [search, setSearch] = useState("");

  const filteredPizzas = pizzaData.filter((pizza) =>
    pizza.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="menu">
      <h2>OUR MENU</h2>
      {isOpen && <p>Authentic Italian Cuisine, all from our stove oven</p>}

      <input
        type="text"
        placeholder="Search for a pizza..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />

      {filteredPizzas.length > 0 ? (
        <ul className="pizzas">
          {filteredPizzas.map((pizza) => (
            <Pizza pizza={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>No pizzas found.</p>
      )}
    </main>
  );
}

function Order() {
  return (
    <div className="order">
      <p>We're currently open</p>
      <button onClick={() => alert("Order button clicked!")}>
        Order Now
      </button>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const isOpen = hour >= 10 && hour < 22;

  return (
    <footer className="footer">
      {isOpen ? <Order /> : <p>Sorry, we're closed</p>}
    </footer>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
