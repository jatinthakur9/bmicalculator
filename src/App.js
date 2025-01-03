import "./App.css";

import { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(" ");
  const [message, setMessage] = useState(" ");

  function calculatebmi(e) {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please Enter Weight and Height");
    } else {
      let c = weight / (height * height);

      setBmi(c.toFixed(1));

      if (c < 18.5) {
        setMessage("You are UnderWeight");
      } else if (c > 18.5 && c < 25) {
        setMessage("You are Normal");
      } else if (c > 25 && c < 30) {
        setMessage("You are OverWeight");
      } else {
        setMessage("You are Obese");
      }
    }
  }

  function reload() {
    window.location.reload();
  }

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI CACULATOR</h2>
        <form onSubmit={calculatebmi}>
          <div>
            <label>Weight(kg)</label>
            <input
              type="text"
              placeholder="Enter Your Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height(m)</label>
            <input
              type="text"
              placeholder="Enter Your Height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div>
            <button className="btn">Submit</button>
            <button className="btn btn-outline" type="submit" onClick={reload}>
              Reload
            </button>
          </div>
          <div className="center">
            <h2>Your BMI :{bmi}</h2>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
