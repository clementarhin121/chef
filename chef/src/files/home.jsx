import Menu from "../components/menu";

function Home() {
  return (
    <>
      <div className="homeBody">
        <div className="overlay">
          <Menu></Menu>
          <div className="bodyb">
            <h2>Where Cultures Meet Food!</h2>
          </div>
          <div className="openBooking">
            <h3>Open For Lunch, Dinner</h3>
            <button>PLACE &nbsp; ORDERS</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
