import styles from './Input.module.scss';
import plus from '../../assets/images/plus.svg'

export function Input () {
  return (
    <div className={styles.input}>
      <input type="text" placeholder="Adicione uma nova tarefa"/>
      <button type="submit">
        Criar
        <img src={plus} />
      </button>
    </div>
  )
}