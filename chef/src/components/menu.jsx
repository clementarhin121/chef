function Menu() {
  return (
    <>
      <div className="menuHome">
        <div className="logo">
          <a href="/">
            <h2>Chefs</h2>
          </a>
        </div>
        <div className="user">
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
        <div className="burger">
          <div className="lanes">
            <div className="lane1"></div>
            <div className="lane2"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Menu;
