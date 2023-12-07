import styles from '../styles/Todo.module.css'





export default function Todo (): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.btn_container}>
        <button className={styles.add_btn}>Add task</button>
        <button className={styles.add_btn}>Test button</button>
      </div>

    </div>
  )
}
