import "./styles.css";
import React from "react";
import { useState, useEffect } from "react";
import { Popup } from "./components/Popup.jsx";
import { AlertMessage } from "./components/Alert.jsx";

export default function App() {
  const [isModal, setModal] = useState(false);
  const [timeCounter, setTimeCounter] = useState(5);
  const [isActive, setIsActive] = useState(false);

  const submit = () => {
    setIsActive(true);
    setModal(false);
  };

  const handleClick = () => {
    if (!isActive) {
      setModal(true);
    } else {
      submit();
    }
  };

  return (
    <div className="App">
      <button className="btn" onClick={handleClick}>
        выполнить действие
      </button>
      {isActive ? <AlertMessage /> : ""}
      <Popup
        isVisible={isModal}
        title="Согласие с правилами"
        content={
          <p>
            «Для данной функции применяются особые условия и правила
            пользования, их необходимо подтвердить, нажав на кнопку Подтвердить»
          </p>
        }
        footer={
          <div className="footer">
            <button onClick={() => setModal(false)} className="popup-btn">
              Отмена
            </button>
            <button onClick={submit} disabled={false} className="popup-btn">
              Подтвердить
            </button>
          </div>
        }
        onClose={() => setModal(false)}
      />
    </div>
  );
}
