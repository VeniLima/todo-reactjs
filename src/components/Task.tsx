import { Trash } from "phosphor-react";
import { useState } from "react";
import styles from "../styles/Task.module.css";

import { useRef } from "react";

interface TaskProps {
  content: string;
  onDeleteTask: (task: string, value: number) => void;
  onCheckboxChange: Function;
}

export function Task(props: TaskProps) {
  const [checked, setChecked] = useState(false);

  const ref = useRef<any>(null);

  function handleDeleteTask(event: any) {
    let value = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    ).length;
    if (ref.current == null) {
      return;
    } else if (ref.current.checked) {
      //console.log("✅ Checkbox is checked");
      value -= 1;
      props.onDeleteTask(props.content, value);
    } else {
      //console.log("⛔️ Checkbox is NOT checked");
      props.onDeleteTask(props.content, value);
    }
  }

  function handleCheckboxChange(event: any) {
    setChecked(!checked);

    props.onCheckboxChange();
  }

  return (
    <div>
      <div className={styles.task}>
        <input
          ref={ref}
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
          value={props.content}
        />
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
