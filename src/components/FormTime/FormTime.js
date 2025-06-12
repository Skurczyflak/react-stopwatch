import ButtonForm from "../ButtonForm/ButtonForm";
import Time from "../Time/Time";
import styles from "./FormTime.module.scss";
import { useState, useEffect } from "react";
function FormTime() {
  let [time, setTime] = useState(0);
  let [timer, setTimer] = useState(0);

  const start = () => {
    setTimer(setInterval(() => {
      setTime(value => value + 1);
    }, 1))
  };

  useEffect(() => {
    return () => {
      clearInterval(timer);
    };
  }, []);

  const stop = () => {
    clearInterval(timer);
  }

  const reset = () => {
    stop();
    setTime(0);
  }

  return (
    <form className={styles.form}>
        <Time time={time}></Time>
        <div className={styles.btns}>
            <ButtonForm onClick={() => start()}>Start</ButtonForm>
            <ButtonForm onClick={() => stop()}>Stop</ButtonForm>
            <ButtonForm onClick={() => reset()}>Reset</ButtonForm>
        </div>
    </form>
  );
}

export default FormTime;
