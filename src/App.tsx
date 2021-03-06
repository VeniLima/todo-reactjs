import "./styles/global.css";
import styles from "./styles/App.module.css";
import { Header } from "./components/Header";
import { ClipboardText, PlusCircle, ThermometerSimple } from "phosphor-react";

import { useState } from "react";
import { Task } from "./components/Task";

function App() {
  const [newTask, setNewTask] = useState<string[]>([]);
  const [newCommentText, setNewCommentText] = useState<string>("");

  const [taskDoneCount, setTaskDoneCount] = useState(
    document.querySelectorAll('input[type="checkbox"]:checked').length
  );

  function handleNewTask(event: any) {
    event.preventDefault();

    setNewTask([...newTask, newCommentText]);

    setNewCommentText("");
  }

  function handleNewCommentChange(event: any) {
    setNewCommentText(event?.target.value);
  }

  function deleteTask(taskToDelete: string, value: number) {
    const tasksWithoutDeletedOne = newTask.filter((tasks) => {
      return tasks != taskToDelete;
    });

    setTaskDoneCount(value);

    setNewTask(tasksWithoutDeletedOne);
  }

  function onChangeBox() {
    let value = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    ).length;

    setTaskDoneCount(value);
  }

  if (newTask.length == 0) {
    return (
      <div>
        <Header />
        <div>
          <form onSubmit={handleNewTask} className={styles.form}>
            <input
              placeholder="Adicione uma nova tarefa"
              value={newCommentText}
              onChange={handleNewCommentChange}
            />
            <button type="submit" disabled={newCommentText.length == 0}>
              Criar <PlusCircle size={16} />
            </button>
          </form>
        </div>
        <main className={styles.container}>
          <div className={styles.text}>
            <span className={styles.createdTask}>
              Tarefas criadas{" "}
              <span className={styles.count}>{newTask.length}</span>
            </span>
            <span className={styles.concludedTask}>
              Concluídas
              <span className={styles.count}>{newTask.length}</span>
            </span>
          </div>

          <div className={styles.box}>
            <ClipboardText size={56} className={styles.img} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div>
        <form onSubmit={handleNewTask} className={styles.form}>
          <input
            placeholder="Adicione uma nova tarefa"
            value={newCommentText}
            onChange={handleNewCommentChange}
          />
          <button type="submit" disabled={newCommentText.length == 0}>
            Criar <PlusCircle />
          </button>
        </form>
      </div>
      <main className={styles.container}>
        <div className={styles.text}>
          <span className={styles.createdTask}>
            Tarefas criadas{" "}
            <span className={styles.count}>{newTask.length}</span>
          </span>
          <span className={styles.concludedTask}>
            Concluidas
            <span className={styles.count}>
              {taskDoneCount} de {newTask.length}
            </span>
          </span>
        </div>

        <div>
          {newTask.map((task) => {
            return (
              <Task
                key={task}
                content={task}
                onDeleteTask={deleteTask}
                onCheckboxChange={onChangeBox}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
