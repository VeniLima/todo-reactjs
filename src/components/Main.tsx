import styles from "../styles/Main.module.css";
import { Task } from "./Task";

const tasks = [
  "Usar insulina",
  "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  "Fazer o site",
  "Sair de casa",
];

export function Main() {
  return (
    <main className={styles.container}>
      <div className={styles.text}>
        <span className={styles.createdTask}>
          Tarefas criadas <span className={styles.count}>{tasks.length}</span>
        </span>
        <span className={styles.concludedTask}>
          Concluidas<span className={styles.count}>0</span>
        </span>
      </div>

      <div className={styles.box}>
        {tasks.map((task) => {
          return <Task content={task} />;
        })}
      </div>
    </main>
  );
}
