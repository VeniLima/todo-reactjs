import { ArrowsInSimple, Trash } from "phosphor-react";
import { useState } from "react";
import styles from "../styles/Task.module.css";

interface TaskProps {
  content: string;
  onDeleteTask: (task: string) => void;
  onCheckboxChange: Function;
}

export function Task(props: TaskProps) {
  const [checked, setChecked] = useState(false);
  /*const [arr, setArr] = useState<string[]>([]);

 let situation = event.target.checked;
    let updatedList: string[] = [...arr];
    if (situation) {
      updatedList = [...updatedList, event.target.value];
    } else {
      updatedList.pop();
    }
    console.log(updatedList);
    setArr(updatedList);


  */
  function handleDeleteTask(event: any) {
    props.onDeleteTask(props.content);
  }

  function handleCheckboxChange(event: any) {
    setChecked(!checked);

    props.onCheckboxChange();
  }

  return (
    <div>
      <div className={styles.task}>
        <input
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
