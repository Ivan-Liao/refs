import { React, useState, useEffect } from "react";
import "./App.css";
import RippleAnime from "./components/RippleAnime";

const defaultRippleList = [
  "stressed",
  "lonely",
  "angry",
  "hopelessness",
  "scared",
  "empty",
  "overwhelmed",
  "disappointed",
  "numb",
  "ashamed",
  "uncomfortable",
  "lack of control",
  "desperate",
  "disgusted",
  "heartbroken",
  "grief",
  "physical pain",
  "annoyed",
  "bored",
  "lost",
];

function App() {
  const [rippleList, setRippleList] = useState(defaultRippleList);

  return <RippleAnime rippleList={rippleList} setRippleList={setRippleList} />;
}

export default App;
