import { useState } from "react";
import "./App.css";
import saber1 from "./assets/saber1.png";

function App() {
  const [open, setOpen] = useState(false);
  const [height, setheight] = useState("0");
  const [text, setText] = useState("Unsheathe your saber");
  const [color, setColor] = useState("white");
  const [inColor, setInColor] = useState("white");
  const handleOpen = () => {
    if (open === false) {
      setOpen(true);
      setText("sheathe your saber");
      setheight("350px");
    } else {
      setOpen(false);
      setText("Unsheathe your saber");
      setheight("0");
    }
  };
  const handleClickWhite = () => {
    setColor("white");
    setInColor("white");
  };
  const handleClickRed = () => {
    setColor("red");
    setInColor("rgb(236, 172, 172)");
  };
  const handleClickBlue = () => {
    setColor("blue");
    setInColor("rgb(177, 177, 216)");
  };
  const handleClickYellow = () => {
    setColor("yellow");
    setInColor("rgb(231, 228, 144)");
  };
  const handleClickgreen = () => {
    setColor("green");
    setInColor("rgb(181, 231, 179)");
  };
  const handleClickViolet = () => {
    setColor("violet");
    setInColor("rgb(203, 188, 207)");
  };
  return (
    <div className="App">
      <p className="absolute text-white top-10">
        CHOOSE THE COLOR OF YOUR LIGHTSABER
      </p>
      <div
        style={{
          "box-shadow": `0 -10px 30px ${color}, 0 -10px 40px ${color}, 0 -10px 50px ${color}`,
          backgroundColor: `${inColor}`,
          height: `${height}`,
        }}
        className="light"
      ></div>
      <img className="saber" src={saber1} alt="" />
      <div className="colors absolute left-10 top-32 space-y-10">
        <div
          onClick={handleClickWhite}
          style={{ backgroundColor: `white` }}
          className="w-16 h-8 rounded-md"
        ></div>
        <div
          onClick={handleClickRed}
          style={{ backgroundColor: `red` }}
          className="w-16 h-8 rounded-md"
        ></div>
        <div
          onClick={handleClickBlue}
          style={{ backgroundColor: `blue` }}
          className="w-16 h-8 rounded-md"
        ></div>
        <div
          onClick={handleClickYellow}
          style={{ backgroundColor: `yellow` }}
          className="w-16 h-8 rounded-md"
        ></div>
        <div
          onClick={handleClickgreen}
          style={{ backgroundColor: `green` }}
          className="w-16 h-8 rounded-md"
        ></div>
        <div
          onClick={handleClickViolet}
          style={{ backgroundColor: `violet` }}
          className="w-16 h-8 rounded-md"
        ></div>
      </div>
      <button onClick={handleOpen}>{text}</button>
    </div>
  );
}

export default App;
