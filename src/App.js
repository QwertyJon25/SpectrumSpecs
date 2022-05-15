import React, { useState, useEffect } from "react"
// import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header"
import FaceContainer from "./FaceContainer"

function App() {
const [emotions, setEmotions] = useState([])

useEffect(() => {
  fetch("http://localhost:6001/emotions")
  .then((res) => res.json())
  .then((emoData) => setEmotions(emoData));
}, [])

// const cards = [
//   {
//     id: "1",
//     variant: "hover",
//     front: "Hover",
//     back: "Back"
//   },
//   {
//     id: "2",
//     variant: "click",
//     front: "Click",
//     back: "Back"
//   },
//   {
//     id: "3",
//     variant: "focus",
//     front: "Focus",
//     back: "Back"
//   }
// ];

  return (
    <div className="App">
      <Header />
      <FaceContainer emotions={emotions}/>
      {/* <div className="container">
      <div className="row h-100">
        <div class="col d-flex flex-column flex-md-row justify-content-around align-items-center">
          {cards.map((card) => (
            <FlipCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div> */}
    </div>
    
  );
}

export default App;
