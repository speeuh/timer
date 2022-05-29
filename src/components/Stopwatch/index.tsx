import Button from "../Button";
import Watch from "./Watch";

import style from "./Stopwatch.module.scss";
import { timeToSeconds } from "../../common/utils/date";
import { ITask } from "../../types/task";
import { useEffect, useState } from "react";

interface Props {
  selected: ITask | undefined;
  finishTask: () => void;
}

function Stopwatch({ selected, finishTask }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected?.time));
    }
  }, [selected]);

  function regressive(counter: number = 0) {
      setTimeout(() => {
        if(counter > 0) {
            setTime(counter -1);
            return regressive(counter -1);
        }
        finishTask();
      }, 1000)
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Choose a card and start the timer</p>
      <div className={style.relogioWrapper}>
        <Watch time={time}/>
      </div>
      <Button text="Start" onClick={() => regressive(time)}/>
    </div>
  );
}

export default Stopwatch;
