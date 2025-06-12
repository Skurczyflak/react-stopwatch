import styles from "./Time.module.scss";

const Time = props => {

function splitMilliseconds(milliseconds) {
  const hours = Math.floor(milliseconds / 3600000);
  const minutes = Math.floor((milliseconds % 3600000) / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);
  const remainingMilliseconds = milliseconds % 1000;

  return { hours, minutes, seconds, remainingMilliseconds };
}

  const { hours, minutes, seconds, remainingMilliseconds } = splitMilliseconds(props.time);
  const hoursString = hours.toString().padStart(2, "0");
  const minutesString = minutes.toString().padStart(2, "0");
  const secondsString = seconds.toString().padStart(2, "0");

  return (
    <h1 className={styles.time}>
      {hoursString}:{minutesString}:{secondsString}.{remainingMilliseconds}
    </h1>
  );
}

export default Time;
