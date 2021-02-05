import {React, useState, useEffect} from "react";
import "./App.css";
import RippleAnime from "./components/RippleAnime";

function App() {
  const [rippleList, setRippleList] = useState([]);

  return (
    <RippleAnime />
  )
}

export default App;
