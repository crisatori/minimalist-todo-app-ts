import Todo from './components/Todo'
import styles from './styles/Main.module.css'
function App (): JSX.Element {
  return (
  <main className={styles.main}>
    <div className={styles.div}>
    <h1 className={styles.h1}>Todo app</h1>
    </div>
    <div className={styles.todo_board}>
      <Todo />
    </div>
  </main>
  )
}

export default App
