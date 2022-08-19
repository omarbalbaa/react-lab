import { Link } from "react-router-dom";
import "./style-home.css";

function Home() {
  return (
    <div className="container">
      <div className="home text-center my-2">
        <h1 className="mt-5">React JS labs</h1>
        <h3 className="my-3">
          Day 1: <Link to="/counter" className="homelinks">Counter</Link>
        </h3>
        <h3 className="my-3">
          Day 2: <Link to="/shop" className="homelinks">Online Store</Link>
        </h3>
      </div>
    </div>
  );
}

export default Home;
