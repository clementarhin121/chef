import { useEffect, useState } from "react";
import Menu from "../components/menu";

function Products() {
  const [prods, setProds] = useState([]);
  useEffect(() => {
    fetch("http://localhost:2000/db")
      .then((res) => res.json())
      .then((data) => setProds(data))
      .catch((err) => console.error("fetch error:", err));
  }, []);

  const list = prods.map((d) => (
    <ul>
      <li key={d.product_id}>
        <h1>{d.product_name}</h1>
        <img
          width="120%"
          height="200px"
          src={d.product_image}
          alt=""
        />
        <p>{d.product_description}</p>
        <p>${d.product_price}</p>
      </li>
    </ul>
  ));

  return (
    <>
      <div className="productpage">
        <div className="overlay">
          <Menu />
          <div className="listItems">
            <div className="listSlide">{list}</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Products;
