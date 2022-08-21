//import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import { decrementAction, incrementAction } from "../../redux/counterSlice";

function Counter() {
  //const [count, setCount] = useState(0);
  const count = useSelector((state) => state.counterReducer.counter);
  console.log(count);
  const dispatch = useDispatch();
  
  const countDown = () => {
    if (count > 0)
      dispatch(decrementAction(1));
    // if (count > 0) {
    //   setCount(count - 1);
    // }
  };
  const countUp = () => {
    dispatch(incrementAction(1));
    //setCount(count + 1);
  };

  return (
    <div className="text-center">
      <div className="card text-center">
        <div className="card-header fs-3">I am a Counter</div>
        <div className="card-body">
          <h1 className="card-title my-4">{count}</h1>
          <button className="btn btn-danger mx-3 px-5" onClick={countDown}>
            {" "}
            -{" "}
          </button>
          <button className="btn btn-success mx-3 px-5" onClick={countUp}>
            {" "}
            +{" "}
          </button>
        </div>
        <div className="card-footer text-muted"></div>
      </div>
      <div className="shop-global mt-5">
      <span className="fs-5"> Go to </span><Link to="/shop" className="homelinks fs-5 mx-2">Shop</Link>
      </div>
    </div>
  );
}
export default Counter;