import "./styles/global.css";
import styles from "./styles/App.module.css";
import { Header } from "./components/Header";
import { PlusCircle } from "phosphor-react";
import { Main } from "./components/Main";
import { useState } from "react";

function App() {
  const [NewTask, setNewTask] = useState<string[]>([""]);

  function handleNewTask(event: any) {
    event.preventDefault();
    setNewTask([...NewTask, event.target.value]);
  }

  return (
    <div>
      <Header />
      <div>
        <form onSubmit={handleNewTask} className={styles.form}>
          <input placeholder="Adicione uma nova tarefa" />
          <button type="submit">
            Criar <PlusCircle />
          </button>
        </form>
      </div>
      <Main />
    </div>
  );
}

export default App;
