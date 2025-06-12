import styles from "./ButtonForm.module.scss";

const ButtonForm = props => {
  return (
    <button className={styles.btn} type="button" onClick={props.onClick}>{props.children}</button>
  );
}

export default ButtonForm;
