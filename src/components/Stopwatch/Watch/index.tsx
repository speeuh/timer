import style from "./Watch.module.scss"

interface Props {
 time: number | undefined;
}

function Watch({ time = 0 }: Props ) {
  
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteTen, minuteOne] = String(minutes).padStart(2, '0');
  const [secondTen, secondOne] = String(seconds).padStart(2, '0');

  return (
    <>
      <span className={style.relogioNumero}>{minuteTen}</span>
      <span className={style.relogioNumero}>{minuteOne}</span>
      <span className={style.divisao}>:</span>
      <span className={style.relogioNumero}>{secondTen}</span>
      <span className={style.relogioNumero}>{secondOne}</span>
    </>
  );
}

export default Watch;
