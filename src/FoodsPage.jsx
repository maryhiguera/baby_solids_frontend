import { useState, useEffect } from 'react'
import { FoodsIndex } from './FoodsIndex'
import axios from "axios";
import {FoodsShow} from "./FoodsShow";
import {FoodsNew} from "./FoodsNew";
import {Modal} from "./Modal";



export function FoodsPage() {
  const [foods, setFoods] = useState([]);
  const [isFoodsShowVisible, setIsFoodsShowVisible] = useState(false);
  const [currentFood, setCurrentFood] = useState({});


  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("/foods.json").then((response) => {
      console.log(response.data);
      setFoods(response.data);
    });
  }
  
  const handleCreate = (params, successCallback) => {
    console.log(handleCreate);
    axios.post("/foods.json", params).then((response) => {
      setFoods([...foods, response.data]);
      successCallback();
    });
  }

  const handleShow = (food) => {
    console.log("handleShow");
    setIsFoodsShowVisible(true);
    setCurrentFood(food);
  }

  useEffect(handleIndex, []); 

  return (
    <main>
      <FoodsNew onCreate={handleCreate} />
      <FoodsIndex foods={foods} onShow={handleShow}/>
      <Modal show={isFoodsShowVisible} onClose={() => setIsFoodsShowVisible(false)}>
        <FoodsShow food={currentFood} />
      </Modal>

    </main>
  )
}