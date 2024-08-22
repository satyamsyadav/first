import React, { useState } from "react";
import imgOff from "../Assets/Bulb_Off.jpeg";
import imgOn from "../Assets/Bulb_On.jpeg";

export default function Hello() {
  const [bulbImg, setBulbImg] = useState(imgOff);

  function bulbOn() {
    setBulbImg(imgOn)
  }
  function bulbOff() {
    setBulbImg(imgOff)
  }
  return (
    <div>
      <h1>Bulb Activity</h1>
      <button onClick={bulbOn}>On</button>
      <img src={bulbImg}></img>
      <button onClick={bulbOff}>Off</button>
    </div>
  )
}
