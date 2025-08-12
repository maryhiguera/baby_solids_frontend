import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FoodLogIndex } from "./FoodLogIndex";
import { FoodLogNew } from "./FoodLogNew";
import { FoodLogModal } from "./FoodLogModal";
import { FoodLogShow } from "./FoodLogShow";

export function FoodLogsPage() {
  const [foodLogs, setFoodLogs] = useState([]);
  const [isFoodLogShowVisible, setIsFoodLogShowVisible] = useState(false);
  const [currentFoodLog, setCurrentFoodLog] = useState({});

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("/food_logs.json").then((response) => {
      console.log(response.data);
      setFoodLogs(response.data);
    });
  }

  const handleCreate = (params, successCallback) => {
    console.log("handleCreate");
    console.log("Sending params:", params);
    axios.post("/food_logs.json", params).then((response) => {
      setFoodLogs([...foodLogs, response.data]);
      successCallback();
    }).catch((error) => {
      console.log("Error creating food log:", error.response?.data);
      alert("Error: " + (error.response?.data?.errors || error.message));
    });
  }

  const handleShow = (food_log) => {
    console.log("handleShow");
    setIsFoodLogShowVisible(true);
    setCurrentFoodLog(food_log);
  }
  const handleUpdate = (food_log, params, successCallback) => {
    console.log("handleUpdate");
    axios.patch(`/food_logs/${food_log.id}.json`, params).then((response) => {
      setFoodLogs(foodLogs.map((fl) => (fl.id === food_log.id ? response.data : fl)));
      successCallback();
      setIsFoodLogShowVisible(false);
    });
  }

  const handleDestroy = (food_log) => {
    console.log("handleDestroy");
    axios.delete(`/food_logs/${food_log.id}.json`).then((response) => {
      setFoodLogs(foodLogs.filter((fl) => fl.id !== food_log.id));
    });
  }

  useEffect(handleIndex, []);

  return (
    <main>
      <FoodLogNew onCreate={handleCreate} /><FoodLogIndex food_logs={foodLogs} onShow={handleShow} />
      <FoodLogModal show={isFoodLogShowVisible} onClose={() => setIsFoodLogShowVisible(false)}>
        <FoodLogShow food_log={currentFoodLog} onUpdate={handleUpdate} onDestroy={handleDestroy}/>
      </FoodLogModal>
    </main>
  )
}