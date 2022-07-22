import { FormTodo } from "./components/FormTodo";
import { Logo } from "./components/Logo";

import styles from "./App.module.css";
import { useState } from "react";
import { CardTodo } from "./components/CardTodo";
import { ITarefa } from "./interfaces/ITarefa";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([
    { id: "1", descricao: "tarefa 1", concluido: false },
    { id: "2", descricao: "tarefa 2", concluido: false },
    { id: "3", descricao: "tarefa 3", concluido: true },
    { id: "4", descricao: "tarefa 4", concluido: false },
    { id: "5", descricao: "tarefa 5", concluido: true },
  ]);

  const handleCheckTask = (task: ITarefa) => {
    const newTasks: ITarefa[] = tarefas.map((t) => {
      if (t.id === task.id) {
        t.concluido = task.concluido;
      }

      return t;
    });

    setTarefas(newTasks);
  };

  const handleAddTask = (task: ITarefa) => {
    setTarefas((prevState) => [...prevState, task]);
  };

  const handleDeleteTask = (task: ITarefa) => {
    setTarefas((prevState) => {
      return prevState.filter((t) => t.id !== task.id);
    });
  };

  return (
    <div className={styles.container}>
      <header>
        <Logo />
      </header>
      <main>
        <FormTodo onCreateTask={handleAddTask} />

        {tarefas.map((t) => {
          return (
            <CardTodo
              tarefa={t}
              onCheck={handleCheckTask}
              onDelete={handleDeleteTask}
            />
          );
        })}
      </main>
    </div>
  );
}

export default App;
