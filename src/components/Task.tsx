import { Trash } from "phosphor-react";
import { useState } from "react";
import styles from "../styles/Task.module.css";

interface TaskProps {
  content: string;
  onDeleteTask: (task: string) => void;
  onCheckboxChange: Function;
}

export function Task(props: TaskProps) {
  const [checked, setChecked] = useState(false);

  function handleDeleteTask() {
    props.onDeleteTask(props.content);
  }

  function handleCheckboxChange() {
    setChecked(!checked);
    props.onCheckboxChange();
  }

  return (
    <div>
      <div className={styles.task}>
        <input type="checkbox" onChange={handleCheckboxChange} />
        <p className={checked ? styles.taskTextLined : styles.taskText}>
          {props.content}
        </p>
        <button onClick={handleDeleteTask}>
          <Trash size={24} />
        </button>
      </div>
    </div>
  );
}
