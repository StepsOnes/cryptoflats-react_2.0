import React, {useEffect} from "react";
import {useState} from "react";
import Home from "../../screens/Home";
import Preload from "../Preload/Preload";


function App() {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    })

  return (
    <>
        {
            isLoading ? <Preload /> : <Home />
        }
    </>
  );
}

export default App