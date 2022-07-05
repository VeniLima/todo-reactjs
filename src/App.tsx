import "./styles/global.css";
import styles from "./styles/App.module.css";
import { Header } from "./components/Header";
import { PlusCircle } from "phosphor-react";

function App() {
  return (
    <div>
      <Header />
      <div>
        <form className={styles.form}>
          <input placeholder="Adicione uma nova tarefa" />
          <button type="submit">
            Criar <PlusCircle />
          </button>
        </form>
      </div>
      <div>
        <span>Tarefas criadas</span> <span>0</span>
        <span>Concluídas</span> <span>0</span>
      </div>
    </div>
  );
}

export default App;
