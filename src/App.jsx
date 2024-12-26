import { useDispatch, useSelector } from "react-redux";
import { decreamenr, increamenrByAmmoubt, increament, reset } from "./slice/counter/counterSlice";
import { useState } from "react";


const App = () =>{

  const count = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();
  const [increamentt, setIncreament] = useState("");

  return(
    <div>
      <h1>Value: {count}</h1>
      <button onClick={()=>dispatch(increament())}>Increament</button>
      <button onClick={()=>dispatch(decreamenr())}>decreament</button>
      <button onClick={()=>dispatch(reset())}>Reset</button>
      <button onClick={()=>dispatch(increamenrByAmmoubt(10))}>increamenrByAmmoubt</button>
      <input type="text"
      onChange={(e)=>setIncreament(Number(e.target.value))}
      />
      <button onClick={()=>dispatch(increamenrByAmmoubt(increamentt))}>Add</button>
    </div>
  )
};

export default App;