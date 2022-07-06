import { Trash } from "phosphor-react";
import styles from "../styles/Task.module.css";

interface TaskProps {
  content: string;
}

export function Task(props: TaskProps) {
  return (
    <div>
      <div className={styles.task}>
        <input className={styles.checkboxRound} type="checkbox" />
        <p className={styles.taskText}>{props.content}</p>
        <button>
          <Trash size={24} />
        </button>
      </div>
    </div>
  );
}
