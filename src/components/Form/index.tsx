import React, { useState } from "react";
import { ITask } from "../../types/task";
import Button from "../Button";
import { v4 as uuidv4 } from "uuid";

import style from "./Form.module.scss";

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

function Form({ setTasks }: Props) {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("00:00");

  function saveTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTasks((oldTasks) => [
      ...oldTasks,
      { task, time, selected: false, completed: false, id: uuidv4() },
    ]);
    setTask("");
    setTime("00:00");
  }

  return (
    <form className={style.novaTarefa} onSubmit={saveTask}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Add a new study</label>
        <input
          id="tarefa"
          type="text"
          name="tarefa"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          placeholder="What do you want to study"
          required
        />
      </div>

      <div className={style.inputContainer}>
        <label htmlFor="tempo">Time</label>
        <input
          id="tempo"
          type="time"
          step="1"
          name="tempo"
          value={time}
          onChange={(event) => setTime(event.target.value)}
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button type="submit" text="Save" />
    </form>
  );
}

export default Form;
