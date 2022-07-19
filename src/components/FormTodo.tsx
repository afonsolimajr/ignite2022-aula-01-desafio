import styles from "./FormTodo.module.css";

export const FormTodo = () => {
  return (
    <form>
      <div className={styles.container}>
        <input required />
        <button type="submit">criar</button>
      </div>
    </form>
  );
};
