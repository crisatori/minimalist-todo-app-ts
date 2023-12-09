import { useState } from 'react'
import styles from '../styles/Todo.module.css'
import { type TaskType } from '../types'
import Task from './Task'
import TaskConstructor from '../utils/TaskConstructor'

export default function Todo ({ list }: { list: TaskType[] }): JSX.Element {
  const [tasks, setTasks] = useState(list)
  function addTask (tsk: string): void {
    const nTask = new TaskConstructor(tsk) as TaskType
    setTasks(tsks => [...tasks, nTask])
  }

  return (
    <div className={styles.container}>
      <div className={styles.btn_container}>
        <button className={styles.add_btn} onClick={() => { addTask('ir or die') }}>Add task</button>
        <input type="text" className={styles.text_input} />
      </div>
      {tasks.map(({ id, task, isCompleted }) => {
        return <Task key={id} id={id} task={task} isCompleted={isCompleted}/>
      })}
    </div>
  )
}
