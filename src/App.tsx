import Todo from './components/Todo'
import styles from './styles/Main.module.css'
import { type TaskType } from './types'

function App (): JSX.Element {
  const task1: TaskType = { id: '1', task: 'go to sleep', isCompleted: false }
  const task2: TaskType = { id: '2', task: 'go to drink', isCompleted: false }
  const listOfTasks: TaskType[] = [task1, task2]
  return (
  <main className={styles.main}>
    <div className={styles.div}>
    <h1 className={styles.h1}>Todo app</h1>
    </div>
    <div className={styles.todo_board}>
      <Todo list={listOfTasks}/>
    </div>
  </main>
  )
}

export default App
