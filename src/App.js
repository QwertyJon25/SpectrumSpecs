import React, { useState, useEffect } from "react"
import Header from "./Header"
import FaceContainer from "./FaceContainer"

function App() {
const [emotions, setEmotions] = useState([])

useEffect(() => {
  fetch("http://localhost:6001/emotions")
  .then((res) => res.json())
  .then((emoData) => setEmotions(emoData));
}, [])

  return (
    <div className="App">
      <Header />
      <FaceContainer emotions={emotions}/>
    </div>
  );
}

export default App;
