import axios from "axios";
import { useState, useEffect } from "react";
import { BabyIndex } from "./BabyIndex";
import { BabyShow } from "./BabyShow";
import { BabyModal } from "./BabyModal";

export function BabyPage() {
  const [babies, setBabies] = useState([]);
  const [isBabyShowVisible, setIsBabyShowVisible] = useState(false);
  const [currentBaby, setCurrentBaby] = useState({});

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("/babies.json").then((response) => {
      console.log(response.data);
      setBabies(response.data);
    });
  };

  const handleShow = (baby) => {
    console.log("handleShow");
    setIsBabyShowVisible(true);
    setCurrentBaby(baby);
  };

  const handleUpdate = (baby, params, successCallback) => {
    console.log("handleUpdate");
    axios.patch(`/babies/${baby.id}.json`, params).then((response) => {
      setBabies(babies.map((b) => (b.id === baby.id ? response.data : b)));
      successCallback();
      setIsBabyShowVisible(false);
    });
  }

  const handleDestroy = (baby) => {
    console.log("handleDestroy");
    axios.delete(`/babies/${baby.id}.json`).then((response) => {
      setBabies(babies.filter((b) => b.id !== baby.id));
    });
  }

  useEffect(handleIndex, []);

  return (
    <main>
      <BabyIndex babies={babies} onShow={handleShow} />
      <BabyModal show={isBabyShowVisible} onClose={() => setIsBabyShowVisible(false)}>
        <BabyShow baby={currentBaby} onUpdate={handleUpdate} onDestroy={handleDestroy}/>
      </BabyModal>
    </main>
  );
}
