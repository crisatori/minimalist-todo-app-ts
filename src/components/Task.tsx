import { type TaskType } from '../types'
import styles from '../styles/Task.module.css'

export default function Task ({ id, task, isCompleted }: TaskType): JSX.Element {
  return (
    <div key={id} className={styles.task_container}>
      <input type="checkbox" name="" id="" checked={isCompleted} />
      <input className={styles.check_box} type="text" value={task} />
    </div>
  )
}
