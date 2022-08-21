import "./style-navbar.css";
import {Link} from 'react-router-dom'

function Navbar (){
    return (
        <div className="navbar">
            <div className="container">
                <h3 className="logo mt-2">Balbaa</h3>
                <div className="fw-semibold">
                    <Link to="/" className="links fs-5 mx-2">Home</Link>
                    <Link to="/counter" className="links fs-5 mx-2">Counter</Link>
                    <Link to="/shop" className="links fs-5 mx-2">Shop</Link>
                    <Link to="/signup" className="links fs-5 mx-2">Sign Up</Link>
                </div>
            </div>
        </div>
    );
}
export default Navbar;
