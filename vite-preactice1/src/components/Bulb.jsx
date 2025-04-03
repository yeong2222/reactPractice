import { useState } from "react";



export const Bulb = () => {
  const [light, setlight] = useState("OFF");

  return (
    <div>
      {light === "ON" ? (
          <h1 style={{ backgroundColor: "orange" }}>ON</h1>
        ) : (<h1 style={{ backgroundColor: "gray" }}>OFF</h1>)
      }
      <button
          onClick={() => { setlight(light === "OFF" ? "ON" : "OFF") }}>
          {light === "ON" ? "불 끄기" : "불 켜기"}
        </button>
    </div>
  )
}