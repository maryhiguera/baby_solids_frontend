import { useState, useEffect } from 'react'
import { FoodsIndex } from './FoodsIndex'
import axios from "axios";



export function PhotosPage() {
  const [foods, setFoods] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("/foods.json").then((response) => {
      console.log(response.data);
      setFoods(response.data);
    });
  }

  useEffect(handleIndex, []); 

  return (
    <main>
      <PhotosIndex foods={foods} />
    </main>
  )
}