import { useState, useEffect } from 'react'
import { FoodsIndex } from './FoodsIndex'
import axios from "axios";
import {FoodsShow} from "./FoodsShow";
import {FoodsNew} from "./FoodsNew";
import {Modal} from "./Modal";
import { useOutletContext } from "react-router-dom";


export function FoodsPage() {
  const [foods, setFoods] = useState([]);
  const [isFoodsShowVisible, setIsFoodsShowVisible] = useState(false);
  const [currentFood, setCurrentFood] = useState({});
  const { isAdmin } = useOutletContext();


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

  const handleUpdate = (id, params, successCallback) => {
    console.log("handleUpdate");
    axios.patch(`/foods/${id}.json`, params).then((response) => {
      setFoods(foods.map((f) => (f.id === id ? response.data : f)));
      successCallback();
      setIsFoodsShowVisible(false);
    });
  }

  const handleDestroy = (food) => {
    console.log("handleDestroy");
    axios.delete(`/foods/${food.id}.json`).then(() => {
      setFoods(foods.filter((f) => f.id !== food.id));
      setIsFoodsShowVisible(false);
    })
  }

  useEffect(handleIndex, []); 

  return (
    <main>
      {/* <FoodsNew onCreate={handleCreate} /> */}
      <FoodsIndex foods={foods} onShow={handleShow}/>
      <Modal show={isFoodsShowVisible} onClose={() => setIsFoodsShowVisible(false)}>
        <FoodsShow food={currentFood} onUpdate={handleUpdate} onDestroy={handleDestroy} isAdmin={isAdmin}/>
      </Modal>
      {isAdmin ? <FoodsNew isAdmin={isAdmin} onCreate={handleCreate} /> : null}
    </main>
  )
}